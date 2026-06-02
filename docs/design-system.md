# Design System

## Color Palette

All colors are defined as CSS custom properties in `src/app/globals.css`:

| Token | Hex | Usage |
|---|---|---|
| `--color-navy-950` | `#0a1628` | Hero backgrounds, footer, darkest overlays |
| `--color-navy-900` | `#0f1d32` | Secondary dark backgrounds |
| `--color-navy-800` | `#162540` | Card backgrounds on dark sections |
| `--color-blue-700` | `#1e4d8c` | Accent elements |
| `--color-blue-600` | `#2563eb` | Primary accent, links, CTAs |
| `--color-blue-500` | `#3b82f6` | Light accent |
| `--color-gold-500` | `#c8a84e` | Primary gold, main CTAs |
| `--color-gold-400` | `#d4b95e` | Gold hover states |
| `--color-slate-900` | `#0f172a` | Darkest text |
| `--color-slate-700` | `#334155` | Body text |
| `--color-slate-500` | `#64748b` | Muted text, placeholders |
| `--color-slate-200` | `#e2e8f0` | Borders, dividers |
| `--color-slate-100` | `#f1f5f9` | Light backgrounds, alternating sections |
| `--color-white` | `#ffffff` | Cards, content areas |

## Typography

- Font family: Inter (via `next/font/google`, latin subset)
- Headings: `font-bold`, sizes from `text-3xl` to `text-6xl`
- Body: `text-base`, `text-lg` for lead paragraphs
- Tracking: `uppercase` `tracking-widest` for eyebrow labels

## Spacing

- Section padding: `py-20` (mobile) to `py-32` (large screens)
- Container: `max-w-7xl` (default), `max-w-4xl` (narrow), `max-w-screen-2xl` (wide)
- Card padding: `p-6` to `p-8`
- Gap between grid items: `gap-6`

## Components

- Buttons: 3 variants (primary/gold, secondary/navy, ghost/transparent), 3 sizes
- Cards: white background, rounded-lg, shadow-md, border
- Section eyebrow: uppercase, tracking-widest, blue or gold text
- Gold is used sparingly - only for CTAs, accents, and emphasis

## Responsive Breakpoints

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

Navigation collapses to mobile menu below lg breakpoint.
