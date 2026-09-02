# Kgomotso Mashigo Portfolio — Build Plan

## Goal
Build a polished, responsive personal portfolio website for Kgomotso Mashigo, an Aspiring Educator, replacing the placeholder `/` page.

## Visual Direction (user-confirmed)
- **Palette:** Terracotta & Sage (`#c4654a`, `#e8a87c`, `#87a878`, `#4a6741`) — warm, earthy, child-centered, professional.
- **Typography:** Lora (headings) + Nunito Sans (body) — friendly, readable, credible.
- **Layout:** Hero + card grid — bold hero intro followed by neat card grids for qualifications and services.

## Sections to Build
1. **Hero** — Name, title (Aspiring Educator), warm tagline, primary CTA to contact/about, subtle decorative shapes/illustration.
2. **About** — Short bio highlighting passion for early childhood education and child-centered learning.
3. **Qualifications** — Card grid showcasing:
   - Early Childhood Development Certified NQF 4 (ETDP SETA)
   - Play-based learning qualified (birth to Grade 3)
   - TEFL 120-hour Certified
   - Google AI Essentials Certified
4. **Teaching Philosophy** — Play-based, learning-through-play, nurturing curiosity, ages 0–6 focus.
5. **Strengths / Services** — Card grid: early years development, play-based curriculum, English language support, inclusive/individualized approach.
6. **Contact** — Professional CTA with placeholder email, phone, and LinkedIn links.

## Technical Tasks
- Add Lora and Nunito Sans font links to `src/routes/__root.tsx`.
- Extend `src/styles.css` with semantic tokens for terracotta/sage palette while keeping oklch format.
- Rewrite `src/routes/index.tsx` with full portfolio, proper semantic HTML, and unique SEO `head()` metadata.
- Ensure responsive design (mobile-first), accessible contrast, and clear visual hierarchy.
- Verify build passes and preview renders correctly.
