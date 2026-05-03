# Everything All At Once — 2026 Web Directory

> A curated, single-file web directory of **52 essential websites** across 5 categories, styled with the *Fictional Whimsical Sticker Bomb* design system.

---


## What is this?

**Everything All At Once** is a hand-picked internet directory built as a single self-contained `index.html` file — no frameworks, no build step, no backend. Open it in a browser and it works. It is aimed at students, makers, and curious people who want a well-organised launchpad to the best corners of the web.

---

## Categories

| Emoji | Category | Sites |
|-------|----------|-------|
| 🎓 | Career & Education | 12 |
| 🎨 | Content Design | 15 |
| ⚡ | Productivity | 8 |
| 🛠️ | Utilities | 12 |
| 🎮 | Fun | 5 |

---

## Features

- **Live search** — filters by name, URL, tag, or use-case description as you type, with a 200ms debounce for smooth performance
- **Category pills** — one-click filter pills with live counts; clicking a hero category card jumps you straight to the filtered grid
- **Sort** — order the grid alphabetically (A→Z or Z→A) or grouped by category
- **Reset** — single button clears all active filters and search
- **Keyboard shortcuts** — press `/` anywhere on the page to focus the search box; `Escape` to blur it
- **Accessible** — semantic HTML, ARIA live regions on the grid and results count, `aria-pressed` states on filter pills, and focus-visible outlines throughout
- **Responsive** — adapts from a single-column mobile layout to a 4-column desktop grid using CSS `auto-fill` and `minmax`
- **Zero dependencies** — one external font from Google Fonts; all logic is vanilla JavaScript (~100 lines)

---

## Design System — Fictional Whimsical Sticker Bomb

The visual identity is built on the **Fictional** design system: a playful, sticker-bomb aesthetic inspired by children's books and indie game studios.

### Colour palette

| Name | Hex | Used for |
|------|-----|----------|
| Canvas Almond | `#ffe9ce` | Page background |
| Paper White | `#ffffff` | Card surfaces, inputs |
| Type Black | `#000000` | All text, borders, shadows |
| Grape Punch | `#8a53ff` | Education category, active accents |
| Bubblegum Red | `#fd4b38` | Design category, CTA tags |
| Sunshine Yellow | `#ffd80c` | Productivity, hover states, ticker strip |
| Leafy Green | `#3ccb09` | Utilities category |
| Ash Gray | `#666666` | Secondary text |

### Typography

**Fredoka** (Google Fonts) is used as the primary typeface — the closest web-safe substitute for the proprietary *Fictional* font. It carries the same rounded, expressive personality across all sizes from 11px tags to the 115px hero headline.

### Key design rules applied

- **Hard drop shadows** everywhere — `4px 4px 0 #000` on cards, `3px 3px 0 #000` on buttons and stickers — no soft gaussian blurs
- **3px solid black borders** on every interactive and decorative element
- **Speech bubble** hero callout with a 144px border-radius and a pure-CSS arrow tail
- **Sticker cluster** in the hero composed of circles, pills, and tags that rotate on hover
- **Scrolling ticker strip** in Sunshine Yellow between the nav and hero
- **Category tab** on each card — a colour-coded badge that drops from the top edge of the card
- Hover states lift cards with `translate(-2px, -4px)` and deepen the shadow, giving a physical button feel

---

## File structure

Everything lives in one file:

```
index.html
├── <head>          Google Fonts import, all CSS custom properties and component styles
├── <nav>           Sticky top navigation with brand mark and edition badge
├── Ticker strip    Scrolling marquee in Sunshine Yellow
├── <header>        Hero: headline, speech bubble, stat bubbles, sticker cluster
├── Category cards  5 clickable jump cards (gradient fills per category)
├── Controls        Sticky search + sort bar with filter pills
├── <main>          Dynamically rendered card grid (vanilla JS)
├── About section   Curator profile card on Grape Punch background
├── <footer>        Brand mark and directory tagline
└── <script>        52-item SITES array + render / filter / search / sort logic
```

---

## How to use

### Just open it

```bash
# No install needed — just double-click the file, or:
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Host it

Drop `index.html` into any static host:

- **GitHub Pages** — push to a repo, enable Pages, done
- **Netlify / Vercel** — drag and drop the file
- **Cloudflare Pages** — connect repo or upload directly

---

## Adding or editing sites

All site data lives in the `SITES` array near the bottom of `index.html`. Each entry follows this shape:

```js
{
  name:     "Site Name",
  url:      "example.com",            // no https:// prefix
  category: "Productivity",           // must match an existing category string exactly
  tags:     ["Tag One", "Tag Two"],   // short labels shown on the card
  useCase:  "One sentence description of what the site does.",
  emoji:    "⚡"                       // shown as fallback if favicon fails to load
}
```

Valid category values: `Career & Education`, `Content Design`, `Productivity`, `Utilities`, `Fun`.

After adding entries, update the hardcoded counts in the category pills (`id="count-edu"` etc.) and in the hero stat bubbles to reflect the new totals.

---

## Browser support

Works in all modern browsers. No polyfills required.

| Browser | Version |
|---------|---------|
| Chrome / Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Mobile Safari / Chrome | Current |

---

## Credits

- **Curator** — Pulkit Bansal
- **Design system** — Fictional / Whimsical Sticker Bomb
- **Font** — [Fredoka](https://fonts.google.com/specimen/Fredoka) via Google Fonts
- **Favicons** — Google Favicon Service (`google.com/s2/favicons`)

---

## Licence

No licence. Use it, remix it, share it. Credit is nice but not required. ✦
