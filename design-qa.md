**Source Visual Truth**
- Reference workflow direction: `C:\Users\Chester\AppData\Local\Temp\codex-clipboard-c6586955-6113-42c4-a4f9-9ebb3d6fd02f.png`
- Issue screenshot: `C:\Users\Chester\AppData\Local\Temp\codex-clipboard-73dd4e2d-e678-4373-ba94-396eeea072d5.png`

**Implementation Evidence**
- Desktop hero screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-hero-geometry-desktop.png`
- Wide hero screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-hero-geometry-wide.png`
- Side-by-side comparison: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-hero-geometry-comparison.png`

**Viewport**
- Desktop evidence: 1280 x 720, initial hero state.
- Wide evidence: 1920 x 900, initial hero state.

**Full-View Comparison Evidence**
- The comparison image shows the reference workflow direction beside the fixed hero. The fixed version preserves the existing colors, typography, card styling, section spacing, and overall hero structure while increasing the left/right gutter and making path geometry measured.

**Focused Region Comparison Evidence**
- Focused region: hero workflow diagram and headline/workflow boundary.
- Wide DOM measurement:
  - Headline-to-workflow gutter: 96px.
  - Hero height: 900px.
  - Ecosystem top: 900px.
  - Horizontal overflow: false.
  - Rhythm center gaps: 94px and 94px.
  - Input main path endpoint to core frame left center: 0px delta.
  - Output top/mid/bottom endpoints to card left centers: 0px delta each.
  - Aegis, NAMI, PCAA, and Acquisitions endpoints to core anchors: 0px delta each.

**Findings**
- No actionable P0/P1/P2 findings remain for the hero geometry scope.

**Required Fidelity Surfaces**
- Fonts and typography: unchanged; headline remains the same type treatment and visual hierarchy.
- Spacing and layout rhythm: only the hero column gutter was adjusted to prevent collision; section rhythm remains unchanged.
- Colors and visual tokens: unchanged.
- Image quality and asset fidelity: unchanged; icons remain from the existing Lucide icon system.
- Copy and content: unchanged.

**Patches Made Since Previous QA Pass**
- Added cache-busted CSS and JS asset references.
- Increased desktop hero gutter without changing visual style.
- Replaced hard-coded workflow SVG coordinates with runtime geometry based on actual DOM element centers.
- Snapped input bracket, output bracket, company-to-core paths, and the operating loop to measured anchors.
- Centered company icons inside their unit markers.
- Rebuilt Measure / Learn / Improve as an equal-width rhythm grid.

**Follow-Up Polish**
- None for the requested hero-only alignment scope.

**Merged Section QA**
- Outcomes + Ideas screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-merged-outcomes-build.png`
- Outcomes + Ideas tight desktop screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-merged-outcomes-build-1280.png`
- Philosophy + Acquisitions screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-merged-philosophy-acquisitions.png`
- Final CTA/footer-scale screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-final-cta-footer-scale.png`
- Mobile outcomes sanity screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-merged-mobile-outcomes.png`

**Merged Section Measurements**
- 1440 x 900: Outcomes + Ideas section height is 900px with no internal overflow.
- 1440 x 900: Philosophy + Acquisitions section height is 900px with no internal overflow.
- 1440 x 900: Final CTA band height is 189px; footer height is 235px; combined contact area is 424px, not full-screen.
- 1280 x 720: Outcomes + Ideas section height is 720px with no internal overflow after tightening the Ideas editorial rhythm.
- 390 x 844: No horizontal overflow; merged sections expand vertically for mobile readability.

**Merged Section Patches**
- Combined Outcomes That Compound and Ideas Become Systems into one full-viewport desktop section.
- Combined Philosophy and Acquisitions Approach into one full-viewport desktop section.
- Kept `#build-method` and `#acquisitions` anchors available inside their merged parent sections.
- Resized the final CTA into a compact footer-scale band instead of a full-screen section.

**Ecosystem + Operating Merge QA**
- Desktop screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-ecosystem-operating-merged.png`
- Tight desktop screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-ecosystem-operating-merged-1280.png`
- 1440 x 900: combined Ecosystem + Operating section height is 900px; no horizontal overflow.
- 1280 x 720: combined Ecosystem + Operating section height is 720px; no horizontal overflow.
- Ecosystem connector rebuilt as a compact centered P network with short vertical drops to the four card centers.
- Operating system is now the lower 25% panel inside the same full-screen section.

final result: passed

**Spacing, Operating Timeline, and Dashboard Graph QA**
- Desktop ecosystem/operating screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-spacing-arrows-ecosystem-desktop.png`
- Tablet ecosystem/operating screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-spacing-arrows-ecosystem-tablet.png`
- Mobile operating screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-spacing-arrows-operating-mobile.png`
- Dashboard graph screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-dashboard-graph-desktop.png`
- 1440 x 900: visual gap between Ecosystem and Operating panels is 27px.
- 900 x 800: visual gap between Ecosystem and Operating panels is 24px.
- 390 x 844: visual gap between Ecosystem and Operating panels is 25px.
- Operating System process arrows are hidden across desktop, tablet, and mobile; numbered circles remain centered over their columns.
- Operating Dashboard line chart was replaced with a clean SVG graph using grid lines, primary trend, secondary comparison line, and one highlighted endpoint.
- No horizontal overflow was detected in the checked desktop, tablet, or mobile viewports.

final result: passed

**Operating Framework Reference Match QA**
- Source current issue screenshot: `C:\Users\Chester\Downloads\c6643e33-4a9d-4919-893d-edb6c9d573ce.png`
- Source target screenshot: `C:\Users\Chester\Downloads\7361a0db-bbff-4dab-996a-de41a3747e64.png`
- Desktop implementation screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-operating-framework-desktop-final.png`
- Desktop operating element screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-operating-framework-element-desktop-v3.png`
- Mobile operating screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-operating-framework-mobile-final.png`
- Mobile ecosystem 2-row screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-ecosystem-mobile-2rows-final.png`
- Side-by-side comparison evidence: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-operating-framework-comparison.png`
- 1440 x 900: left operating copy column is 340px, 25.7% of the operating layout; framework is 933px, 70.4% of the operating layout.
- 1440 x 900: workflow container height is 252px, step columns are equal, numbered circles align to column centers within 0-1px.
- 1280 x 720: no horizontal overflow; timeline remains a five-step framework.
- 900 x 800 tablet: no horizontal overflow; the two-column operating layout is preserved and the framework remains a five-step timeline.
- 390 x 844 mobile: no horizontal overflow; operating content stacks above a two-column workflow with step 05 spanning the full row.
- 390 x 844 mobile: ecosystem cards render as a two-by-two grid.
- Copy, colors, serif headline, sans-serif body, thin borders, and warm off-white background were preserved.

final result: passed

**Hero Reference Visual Swap QA**
- Source image: `C:\Users\Chester\Downloads\a612687a-ed5f-4871-9cf1-c5e108bd6b27.png`
- Generated transparent hero asset: `C:\Users\Chester\Documents\Parea Renovation 1.0\assets\hero-system-map-cutout.png`
- Desktop screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-hero-reference-swap-desktop-v3.png`
- Tight desktop screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-hero-reference-swap-1280-v3.png`
- Mobile screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-hero-reference-swap-mobile-v2.png`
- 1440 x 900: hero visual renders at 864px wide from a 1672px asset, scale 0.517, with no horizontal overflow.
- 1280 x 720: hero visual renders at 768px wide from the same asset, scale 0.459, with no horizontal overflow.
- 390 x 844: hero visual renders at 374px wide with 8px side padding and no horizontal overflow.
- The rectangular photo background was removed from the visual asset; CSS opacity is 1 and no drop-shadow fade is applied.

final result: passed

**Ecosystem + Operating Reference Refinement QA**
- Desktop screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-ecosystem-refined-desktop-v2.png`
- Tight desktop screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-ecosystem-refined-1280-v2.png`
- Mobile section screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-ecosystem-refined-mobile-v2.png`
- Mobile process screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-operating-process-mobile-2col.png`
- 1440 x 900: merged Ecosystem + Operating section remains one full viewport; Operating panel is 230px inside a 781px layout, or 29.4% of the section content.
- 1280 x 720: Operating panel is 179px inside a 611px layout, or 29.3% of the section content.
- Ecosystem cards were tightened into shorter rectangular cards and the connector path was rebuilt as a compact centered network with short drops to the card row.
- Operating process strip was tightened; numbered circles now sit as top markers on the process line with arrows aligned across the strip.
- Mobile 390 x 844: no horizontal overflow; section headlines align center; Operating process uses a two-column grid with step 05 spanning the full final row.

final result: passed

**Refinement Pass QA**
- Hero desktop screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-refinement-hero-desktop.png`
- Hero tight desktop screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-refinement-hero-1280.png`
- Hero mobile containment screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-refinement-hero-mobile-contained.png`
- Outcomes + Ideas mobile stacked screenshot: `C:\Users\Chester\Documents\Parea Renovation 1.0\qa-refinement-outcomes-mobile-stacked.png`
- Desktop 1440 x 900: hero image renders at 800px wide from a 1672px asset, so it is not upscaled; hero height is 900px and the next section starts at 900px.
- Tight desktop 1280 x 720: hero image renders at 711px wide from the same 1672px asset; no horizontal overflow.
- Mobile 390 x 844: hero image renders from x=12 to x=378, giving 12px side breathing room; no horizontal overflow.
- Header nav now uses `Our System`; no visible `Operating House` copy remains.
- Footer nav heading now uses `Our System`; copyright renders without mojibake.
- Outcomes metric cards stack to one 350px column on mobile.
- White card treatments for Ideas Become Systems and Acquisitions Approach remain the same 8px light card direction over the dark background.

final result: passed
