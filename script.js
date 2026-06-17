const header = document.querySelector("[data-header]");
const nav = document.querySelector("#site-nav");
const navToggle = document.querySelector(".nav-toggle");

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

window.addEventListener("DOMContentLoaded", () => {
  refreshIcons();

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
