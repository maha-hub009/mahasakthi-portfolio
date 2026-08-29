# Mahasakthi B — Portfolio

A dark-mode, motion-driven personal portfolio built with **React 18**, **Tailwind CSS**, and **Framer Motion**.

## Stack & structure

```
src/
  components/
    ParticleField.jsx    canvas node-mesh background, parallaxes toward the cursor
    MagneticButton.jsx   cursor-pull button with liquid hover fill + tap scale
    TiltCard.jsx         3D tilt + cursor-tracked glow border (glass surface)
    SplitText.jsx        letter-by-letter staggered reveal for headings
    TypingText.jsx       continuous typing/deleting effect for role subtitles
    DockNav.jsx          floating dock nav, layoutId morphing active pill
    PageTransition.jsx   gradient curtain wipe + scale/slide content swap
  sections/               Hero, About, Skills, Experience, Projects, Contact
  data/portfolio.js       all resume content lives here — edit this to update copy
  App.jsx                 view state + AnimatePresence routing between sections
```

## Design tokens

- Background: obsidian `#0B0F19`
- Accent gradient: violet `#7C3AED` → cyan `#22D3EE` (magenta `#EC4899` as a third accent)
- Display type: Space Grotesk · Body: Inter · Utility/mono: JetBrains Mono
- Glass surfaces: `backdrop-filter: blur(18px)` with a 1px translucent border

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build locally
```

## Customizing

- **Content**: everything text-based (name, roles, projects, skills, experience, contact links) lives in `src/data/portfolio.js`.
- **Sections/nav order**: edit the `nav` array in `portfolio.js` and the `sections` map in `App.jsx`.
- **Colors**: edit the `theme.extend.colors` / `backgroundImage` block in `tailwind.config.js`.
- **Reduced motion**: the particle field and global CSS both respect `prefers-reduced-motion`.

## Performance notes

- The particle field runs on a single canvas + single `requestAnimationFrame` loop, capped node count, and DPR-clamped resolution to stay smooth at 60fps.
- Tilt/glow effects mutate CSS custom properties directly (no per-frame React re-renders).
- `AnimatePresence mode="wait"` ensures only one page transition animates at a time, avoiding layout thrash.
