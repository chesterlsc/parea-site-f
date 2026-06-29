const header = document.querySelector("[data-header]");
const nav = document.querySelector("#site-nav");
const navToggle = document.querySelector(".nav-toggle");

const emptyFieldMessage = "Please answer this before continuing.";
const invalidEmailMessage = "Please enter a valid email.";
const emptyChoiceMessage = "Please choose one option before continuing.";

const refreshIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        "aria-hidden": "true",
        focusable: "false"
      }
    });
  }
};

const formatStep = (step) => String(step).padStart(2, "0");

const buildMailBody = (formData) => {
  const labels = {
    brand: "Brand",
    form_type: "Form Type",
    source_page: "Source Page",
    name: "Name",
    email: "Email",
    business_name: "Business Name",
    reach_out_reason: "What made you reach out?",
    looking_for: "Looking for",
    stuck_or_unsure: "Where stuck or unsure",
    desired_next_step: "Desired next step",
    change_timing: "Change timing"
  };

  return Array.from(formData.entries())
    .filter(([key, value]) => key !== "_gotcha" && String(value).trim())
    .map(([key, value]) => `${labels[key] || key}: ${value}`)
    .join("\n\n");
};

const initContactWizard = () => {
  const form = document.querySelector("#parea-contact-form");
  if (!form) return;

  const wizard = form.querySelector(".contact-wizard");
  const steps = Array.from(form.querySelectorAll(".contact-step"));
  const progressCurrent = form.querySelector("[data-progress-current]");
  const progressTotal = form.querySelector("[data-progress-total]");
  const progressBar = form.querySelector("[data-progress-bar]");
  const backButton = form.querySelector("[data-back]");
  const nextButton = form.querySelector("[data-next]");
  const submitButton = form.querySelector("[data-submit]");
  const status = form.querySelector("[data-form-status]");
  const totalSteps = steps.length;
  const defaultSubmitHtml = submitButton?.innerHTML || "";
  let currentStep = 0;

  if (!wizard || !totalSteps || !backButton || !nextButton || !submitButton) return;

  const setStatus = (message = "", type = "") => {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("is-success", type === "success");
    status.classList.toggle("is-error", type === "error");
  };

  const clearStepError = (step) => {
    const error = step.querySelector(".contact-step-error");
    step.classList.remove("has-error");
    if (error) error.textContent = "";
    step.querySelectorAll("[aria-invalid='true']").forEach((field) => {
      field.removeAttribute("aria-invalid");
    });
  };

  const showStepError = (step, message, field) => {
    const error = step.querySelector(".contact-step-error");
    step.classList.add("has-error");
    if (error) error.textContent = message;
    if (field) field.setAttribute("aria-invalid", "true");
    field?.focus({ preventScroll: true });
  };

  const getRequiredRadio = (step) => step.querySelector("input[type='radio'][required]");

  const validateStep = (step, shouldFocus = true) => {
    clearStepError(step);

    const requiredRadio = getRequiredRadio(step);
    if (requiredRadio) {
      const checkedRadio = form.querySelector(`input[type="radio"][name="${requiredRadio.name}"]:checked`);
      if (!checkedRadio) {
        showStepError(step, emptyChoiceMessage, shouldFocus ? requiredRadio : null);
        return false;
      }
      return true;
    }

    const requiredField = step.querySelector("input[required]:not([type='radio']), textarea[required]");
    if (!requiredField) return true;

    const value = requiredField.value.trim();
    if (!value) {
      showStepError(step, emptyFieldMessage, shouldFocus ? requiredField : null);
      return false;
    }

    if (requiredField.type === "email" && !requiredField.validity.valid) {
      showStepError(step, invalidEmailMessage, shouldFocus ? requiredField : null);
      return false;
    }

    return true;
  };

  const focusStep = (step) => {
    const focusTarget = step.querySelector("input:not([type='hidden']), textarea");
    focusTarget?.focus({ preventScroll: true });
  };

  const updateStep = (nextStep, shouldFocus = true) => {
    currentStep = Math.max(0, Math.min(nextStep, totalSteps - 1));

    steps.forEach((step, index) => {
      const isActive = index === currentStep;
      step.hidden = !isActive;
      step.classList.toggle("is-active", isActive);
      if (!isActive) clearStepError(step);
    });

    wizard.dataset.currentStep = String(currentStep + 1);
    progressCurrent.textContent = formatStep(currentStep + 1);
    progressTotal.textContent = formatStep(totalSteps);
    progressBar.style.width = `${((currentStep + 1) / totalSteps) * 100}%`;
    backButton.hidden = currentStep === 0;
    nextButton.hidden = currentStep === totalSteps - 1;
    submitButton.hidden = currentStep !== totalSteps - 1;
    setStatus();

    if (shouldFocus) {
      window.requestAnimationFrame(() => focusStep(steps[currentStep]));
    }
  };

  const sendForm = async () => {
    const formData = new FormData(form);
    if (String(formData.get("_gotcha") || "").trim()) return;

    const action = form.getAttribute("action") || "";
    const method = form.getAttribute("method") || "POST";

    if (action.startsWith("mailto:")) {
      const recipient = action.replace("mailto:", "").split("?")[0];
      const subject = encodeURIComponent("Parea Collective contact form");
      const body = encodeURIComponent(buildMailBody(formData));
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
      const mailLink = document.createElement("a");
      mailLink.href = mailtoUrl;
      mailLink.target = "_blank";
      mailLink.rel = "noopener";
      document.body.append(mailLink);
      mailLink.click();
      mailLink.remove();
      await new Promise((resolve) => window.setTimeout(resolve, 500));
      return;
    }

    const response = await fetch(action, {
      method,
      headers: { Accept: "application/json" },
      body: formData
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }
  };

  steps.forEach((step) => {
    step.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("input", () => clearStepError(step));
      field.addEventListener("change", () => clearStepError(step));
    });
  });

  nextButton.addEventListener("click", () => {
    if (!validateStep(steps[currentStep])) return;
    updateStep(currentStep + 1);
  });

  backButton.addEventListener("click", () => {
    updateStep(currentStep - 1);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!validateStep(steps[currentStep])) return;

    for (const [index, step] of steps.entries()) {
      if (!validateStep(step, false)) {
        updateStep(index);
        validateStep(steps[index]);
        return;
      }
    }

    submitButton.disabled = true;
    backButton.disabled = true;
    submitButton.textContent = "Sending...";
    setStatus();

    try {
      await sendForm();
      setStatus(
        "Message received. Thank you. We'll review it carefully and follow up if there's a clear fit.",
        "success"
      );
      submitButton.textContent = "Sent";
    } catch (error) {
      setStatus("Something went wrong. Please try again.", "error");
      submitButton.disabled = false;
      backButton.disabled = false;
      submitButton.innerHTML = defaultSubmitHtml;
      refreshIcons();
    }
  });

  updateStep(0, false);
};

window.addEventListener("DOMContentLoaded", () => {
  refreshIcons();
  initContactWizard();

  navToggle?.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    nav?.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle?.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12
    }
  );

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
});

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
}, { passive: true });
