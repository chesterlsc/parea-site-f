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
