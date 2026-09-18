# Kalycor — Next.js (App Router) + TypeScript + Tailwind

Three surfaces, one shared component library, **one stylesheet**.

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build
```

---

## Route mapping

| Original (in the ZIP)                  | Next.js route  | File                            |
| -------------------------------------- | -------------- | ------------------------------- |
| `src/app/(landing)/page.jsx`           | `/`            | `src/app/(landing)/page.tsx`    |
| `src/app/jobs/page.jsx`                | `/jobs`        | `src/app/jobs/page.tsx`         |
| `src/app/for-business/page.tsx`        | `/for-business`| `src/app/for-business/page.tsx` |

`(landing)` is a route group, so it does **not** appear in the URL — the
landing page is served at `/`.

> The brief sketched `/business`. The project actually ships `/for-business`,
> and every internal link already points there, so that path was preserved.
> To rename it: move the folder and change one line in `src/config/routes.ts`
> — every header, footer, hero and CTA follows automatically.

---

## Structure

```
src/
├── app/
│   ├── globals.css            ← the ONLY stylesheet in the project
│   ├── layout.tsx             ← fonts + tokens, shared by all routes
│   ├── (landing)/             ← layout.tsx + page.tsx
│   ├── jobs/                  ← layout.tsx + page.tsx
│   └── for-business/          ← layout.tsx + page.tsx
│
├── components/
│   ├── layout/                Container, Section, Brand
│   ├── ui/                    Button, Card, SectionTitle, LinkList
│   ├── landing/               Header, Hero, Services, Stats, Approach,
│   │                          Industries, Opportunities, Reviews, Footer…
│   ├── jobs/                  Header, Hero, JobBoard, JobCard, JobList,
│   │                          FilterSidebar, Pagination, Footer, icons
│   └── business/              sections/ + shared/
│
├── data/                      landing, jobs, jobsNav, filterOptions,
│                              trendingCategories, business
├── types/                     Job, Service, NavMenu, Stat, LinkItem…
├── config/                    routes.ts (every URL), site.ts (brand + CTAs)
└── lib/                       cn()
```

Shared components live in `components/layout` and `components/ui` and are used
by all three surfaces. Nothing is duplicated per route.

---

## Customising the whole site

The chain is:

```
GLOBAL VARIABLES  (src/app/globals.css)
        ↓
TAILWIND TOKENS   (tailwind.config.ts)
        ↓
COMPONENTS        (src/components)
        ↓
ROUTES            (src/app)
```

`src/app/globals.css` is organised into eight numbered sections:

| Section         | What it controls                                              |
| --------------- | ------------------------------------------------------------- |
| 1 PALETTE       | every brand colour (`--k-navy-900`, `--k-plum`, `--k-teal-600`…) |
| 2 TYPOGRAPHY    | font families and the whole type scale (`--text-h1`, `--text-body`, `--text-nav`, `--text-button`…) |
| 3 SPACING       | `--section-py`, `--content-gap`, `--card-padding`             |
| 4 LAYOUT        | `--container-max`, `--container-pad`, radii, border widths, shadows |
| 5 MOTION        | `--duration`, `--ease`                                        |
| 6 SEMANTIC      | `--bg`, `--heading`, `--body`, `--primary`, `--line`… + the three surface themes |
| 7 COMPONENTS    | `--btn-*`, `--card-*`, `--brand-*`                            |
| 8 BASE          | the few rules Tailwind utilities can't express                |

Some worked examples:

| To change…                       | Edit                                                    |
| -------------------------------- | ------------------------------------------------------- |
| the primary colour everywhere    | `--primary` (globally, or inside one `[data-surface]`)  |
| the heading font                 | `--font-heading`                                        |
| all heading sizes                | `--text-h1` … `--text-h4`                               |
| page background                  | `--bg`                                                  |
| every button's corner radius     | `--btn-radius`                                          |
| every container's width          | `--container-max`                                       |
| vertical rhythm of all sections  | `--section-py`                                          |

### How the three surfaces stay distinct

Each route layout sets `data-surface="landing" | "jobs" | "business"` on its
wrapper. `globals.css` re-declares only the variables that differ for that
surface — so `<Button>`, `<Container>` and `<Brand>` render navy-square on the
landing page, navy-rounded on the job board and plum on the business page
**without a single page-specific class**.

Colours are stored as HSL channel triplets (`214 68% 14%`) and consumed as
`hsl(var(--token) / <alpha>)`, which is why opacity modifiers work on every
token: `bg-primary/90`, `border-line/40`, `text-inverse-fg/60`.

### Tailwind token names

Semantic: `bg-background`, `bg-surface`, `text-heading`, `text-paragraph`,
`text-muted`, `border-line`, `bg-primary`, `text-primary-fg`, `bg-inverse`,
`text-accent`, `bg-secondary`, `text-success` / `warning` / `error`.

Type scale: `text-display`, `text-h1`…`text-h4`, `text-body-lg`, `text-body`,
`text-small`, `text-caption`, `text-nav`, `text-button`, `text-kicker`.

Layout: `max-w-container`, `px-container-pad`, `py-section`, `rounded-card`,
`rounded-button`, `rounded-pill`, `shadow-raised`, `shadow-float`.

Tailwind's own scales (numeric spacing, `rounded-md/lg`, `shadow-sm/lg`) are
left untouched, so standard utilities behave exactly as documented.

### Extra breakpoints

Alongside Tailwind's `sm/md/lg/xl`, the config adds the breakpoints the
original stylesheets used: `tp` 781px, `ts` 851px, `tl` 901px, `nav` 981px,
`dw` 1001px, `dl` 1101px.

---

## Notes on the migration

- **Styling** — the five original stylesheets (`tokens.css`, three
  `surfaces/*.css`, and five CSS Modules) are gone. Everything is Tailwind
  plus the single `globals.css`. No CSS Modules, no styled-components, no
  inline `style={{}}`.
- **TypeScript** — every component is `.tsx`, every data file `.ts`, no `any`.
- **Server vs client** — `'use client'` only where state, refs or observers
  are needed (menus, sliders, the job board, the animated business sections).
  Everything else is a Server Component.
- **Animations preserved** — drag-scroll services slider, `<details>`
  accordion with animated `grid-template-rows`, IntersectionObserver stats
  counter, reviews carousel, hover lifts and transitions, and all the
  Framer Motion entrance animations on the business page.
- **Dependencies trimmed** — the ZIP shipped 40+ unused shadcn/ui files that
  pulled in ~30 Radix packages plus recharts, embla, vaul, cmdk,
  react-hook-form, zod, date-fns, sonner and next-themes. None were imported
  by any rendered page, so they were removed. What remains: `next`, `react`,
  `react-dom`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- **Assets** — `public/images/` keeps the original filenames and files. The
  landing and business pages also load photos from Pexels by URL, which is why
  `next.config.ts` keeps `images.unoptimized` plus a `remotePatterns` entry.
- **Dead CSS dropped** — `landing.css` carried rules for Awards, Recognition,
  Narrative, Mission and a CTA band that no component renders; they exist only
  in `public/original-landing-page.html`. They were not invented into
  components.
- **Forms** — the only form is the job-board hero search. It filters the local
  `src/data/jobs.ts` list client-side, exactly as before. There was no backend
  and none was added.
