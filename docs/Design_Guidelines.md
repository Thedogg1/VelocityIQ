# VelocityIQ Website Design System & Implementation Guide

**For AI Website Designer & Next.js Developer (Cursor AI)**

VelocityIQ’s website should be driven by a **formal design system** that visually enforces:

**Risk Mitigation First → Compliance Second → Innovation Third**

The aesthetic should be **fintech-native, serious, and regulator-credible**, implemented via **tokenised design primitives in Next.js**.  
This document merges updated research findings with a **practical design-token sheet** for joint designer/developer execution.

---

## 1. Image Table

| Image description                                                                                                                      | Where to use on the website                                                                         | Link to image source                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Professional advisor with client reviewing a structured digital report with checklists and charts, conveying control and documentation | **Home hero** (“When Regulators Ask ‘Why This Recommendation?’”) – primary liability-defense visual | https://www.vecteezy.com/free-vector/audit-trail (select audit/report screens with checkmarks and logs) |
| Close-up of digital compliance dashboard or warnings report with highlighted rows, timestamps, and warning icons                       | **“The Liability Question” split-screen**: handwritten notes vs structured warnings report          | https://www.freepik.com/vectors/fintech-illustrations (adapt with timestamps and flags)                 |
| Shield-with-checklist illustration representing systematic risk identification                                                         | **Risk Mitigation: The Primary Value – Pillar 1** and throughout Risk Defense pages                 | https://www.shutterstock.com/search/financial-audit-icon?image_type=illustration                        |
| Document with timestamp / delivery seal emphasising proof of disclosure                                                                | **Pillar 2 (“Documented Disclosure”)** and “Exam-Ready Documentation”                               | https://www.vecteezy.com/free-vector/audit-trail                                                        |
| Three-step / three-layer pipeline diagram with checkpoints and warning flags                                                           | **Pillar 3 (“Triple-Layer Validation”)** on Home and Platform pages                                 | https://www.freepik.com/free-photos-vectors/data-visualisation                                          |
| Opaque black box vs transparent layered box showing internals                                                                          | **Glass-Box vs Black-Box Architecture** comparison                                                  | https://www.dreamstime.com/illustration/box-magnifying-glass.html                                       |
| Fintech dashboard with layered panels, filters, charts, and logs                                                                       | **Exam-Ready Documentation** and **Complete Audit Trail**                                           | https://www.freepik.com/free-photos-vectors/data-visualisation                                          |
| Market segmentation / pyramid infographic with highlighted segment                                                                     | **HNWI Market Research** section                                                                    | https://www.freepik.com/free-photos-vectors/data-visualisation                                          |
| Stopwatch + report or time-focused analytics illustration                                                                              | **“40-Second Scenario Analysis”** sections                                                          | https://www.figma.com/community/file/1454608138986425302/illustration                                   |
| Interconnected nodes/network symbolising layered intelligence                                                                          | **Granular Personalization / Multi-Layer Intelligence**                                             | https://www.freepik.com/vectors/fintech-illustrations                                                   |
| Grid of niche icons (tech, medical, business, real estate, etc.)                                                                       | **Niche-Specific Depth / Niche Packs**                                                              | https://www.figma.com/community/file/1454608138986425302/illustration                                   |
| Calendar graphic with highlighted month and “limited spots” badge                                                                      | **January 2026 Pilot Program**                                                                      | https://www.freepik.com/free-photos-vectors/calendar-illustration                                       |
| Professional RIA / fintech meeting scene with dashboards                                                                               | **Why RIAs Choose VelocityIQ / Pilot Recruitment**                                                  | https://www.freepik.com/free-photos-vectors/fintech-illustrations                                       |

> **Licensing note:** Freepik, Vecteezy, and Figma Community provide free tiers; confirm commercial-use and attribution per asset.

---

## 2. JavaScript / Next.js Libraries Table

| Description                              | Where to use                                 | Documentation                                                                        | Setup / usage notes                                                                            |
| ---------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| **Next.js 16 (App Router)**              | Entire marketing site and future app shell   | https://nextjs.org/docs                                                              | Scaffold with `npx create-next-app@latest`; use `app/` directory, layouts, streaming, metadata |
| **Next.js `<Image>` & `<Link>`**         | All imagery and internal CTAs                | https://nextjs.org/docs/app/building-your-application/optimizing/images              | Prevent CLS with width/height; use `priority` for LCP; lazy-load non-critical images           |
| **Next.js accessibility best practices** | Navigation, comparisons, forms               | https://bejamas.com/hub/guides/next-js-and-accessibility                             | Semantic HTML, correct ARIA, focus management                                                  |
| **Compliance-focused UX patterns**       | Risk Defense, validation, audit storytelling | https://www.zazzy.studio/jots/compliant-fintech-ux-design                            | Transparency cues, AI-usage indicators, explainability panels                                  |
| **Fintech compliance UI/UX**             | Validation diagrams and supervision flows    | https://thehigherpitch.com/power-of-ui-ux-in-fintech-compliance-and-risk-management/ | Structured dashboards and status indicators                                                    |
| **Fintech design systems**               | Platform and demo visuals                    | https://www.eleken.co/blog-posts/modern-fintech-design-guide                         | Card-based layouts, strong hierarchy                                                           |
| **Design tokens & scaling**              | Entire system                                | https://procreator.design/blog/why-fintech-product-needs-a-design-system/            | Tokenised colour, type, spacing for trust and speed                                            |

> No mature open-source RegTech-specific UI libraries identified; recommended approach is **custom components on top of Next.js and a formal design system**.

---

## 3. Design Recommendations for AI-Driven FinTech / RegTech

### Risk-First Fintech Branding

Use a limited palette: deep blues/blue-greens for trust, neutrals for structure, and restrained teal/green for success states. Apply consistently to reinforce _liability first_ positioning.

### Typography for Legal & Technical Density

Adopt a **two-tier system**:

- Sans-serif for narrative and headings
- Monospace for audit lines, timestamps, formulas, and rule IDs

### Visual Hierarchy: Risk → Compliance → Innovation

Risk mitigation receives the greatest visual weight, compliance secondary, innovation tertiary. Use a **pyramid metaphor** in layout and emphasis.

### Glass-Box vs Black-Box Transparency

Explicitly show internals: **Sources, Calculations, Validation Rules, Approvals**. Lighter surfaces for glass-box; darker, opaque visuals for black-box.

### Integrated Compliance UX

Inline validation, real-time warnings, and drill-downs to audit trails. Avoid disruptive modals.

### Documentation-Centric Imagery

Prefer reports, dashboards, logs, timestamps, and validation diagrams. Avoid generic “AI brain” visuals.

### Design-System-Driven Layout

Use shared tokens for spacing, typography, colour, and components. Card-based layouts with consistent grids.

### Accessibility as Non-Negotiable

WCAG AA contrast, visible focus states, keyboard navigation, and semantic structure for diagrams and flows.

---

## 4. Next.js Version Recommendation

Use **Next.js 16.x (latest stable patch)**.  
Avoid canary builds; leverage App Router, built-in image optimisation, and streaming for performance and longevity.

---

## 5. Design Specification Changes (Design Only)

### Colour System

- Tokenised palette: primary, secondary, accent, and semantic risk colours
- Red/amber strictly for risk and validation states

### Typography

- Defined scale (H1–H3, body, caption)
- Monospace for audit evidence

### Visual Hierarchy

- Risk > Compliance > Innovation in card size, placement, and contrast

### Glass-Box vs Black-Box

- Distinct backgrounds and labelled internals

### Validation Language

- Standardised icons and colours across all pages

### Documentation Visuals

- Layered audit-trail visuals with “regulator exhibit” clarity

### Layout & Spacing

- Shared spacing tokens and responsive rules

### Accessibility

- Formal AA contrast requirement
- Shared focus-ring token

### Imagery Constraints

- Documentation and dashboard-centric visuals only

### States & Micro-Interactions

- Clear neutral → warning → critical → resolved transitions

---

## 6. VelocityIQ Design-Token Sheet

### 6.1 Core Color Tokens

**Brand & surfaces**

- `color-bg`
- `color-surface`
- `color-primary`
- `color-primary-soft`

**Text**

- `color-text-primary`
- `color-text-secondary`
- `color-text-inverse`

**CTAs**

- `color-cta-primary`
- `color-on-cta`
- `color-cta-hover`

**Risk & validation**

- `color-critical`
- `color-warning`
- `color-success`
- `color-info`

**Borders**

- `color-border-subtle`
- `color-border-strong`

All colour usage must meet **WCAG AA contrast**.

---

### 6.2 Typography Tokens

**Families**

- `font-family-base`
- `font-family-mono`

**Sizes**

- `font-size-h1`
- `font-size-h2`
- `font-size-h3`
- `font-size-body`
- `font-size-caption`

**Weights & line heights**

- `font-weight-heading` (600–700)
- `font-weight-body` (400–500)
- `line-height-heading` (1.2–1.3)
- `line-height-body` (1.5–1.6)

---

### 6.3 Spacing, Radius, Elevation

**Spacing**

- `space-2`, `space-4`, `space-8`, `space-12`, `space-16`, `space-24+`

**Radius**

- `radius-none`
- `radius-sm`
- `radius-lg`

**Elevation**

- `shadow-none`
- `shadow-card`
- `shadow-overlay`

---

### 6.4 Component & State Tokens

**Primary button**

- `btn-primary-bg-default`
- `btn-primary-bg-hover`
- `btn-primary-bg-disabled`
- `btn-primary-text`
- `btn-primary-radius`
- `btn-primary-padding-x`
- `btn-primary-padding-y`
- `btn-primary-focus-ring`

**Secondary button**

- `btn-secondary-border`
- `btn-secondary-text`
- `btn-secondary-bg-hover`

**Badges**

- `badge-critical-*`
- `badge-warning-*`
- `badge-success-*`

**Focus & hover**

- `focus-ring-color`
- `hover-bg-subtle`

---

### 6.5 Pattern-Level Application

- Use **critical/warning badges** wherever legal exposure is discussed
- Use **monospace captions** for timestamps and rule references
- Black-box: dark surfaces, minimal detail
- Glass-box: light surfaces, labelled layers
- Pyramid levels mapped to decreasing visual weight
- All components must inherit shared focus-ring and contrast guarantees

---

**End of document**
