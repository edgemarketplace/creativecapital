# Creative Capital Strategies

A modern, professional financial education and consulting website built with
Next.js App Router, TypeScript, Tailwind CSS, and Sanity CMS.

## Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom CSS variables
- **CMS**: Sanity (embedded studio at `/studio`)
- **Fonts**: Inter (Google Fonts, via `next/font`)
- **Icons**: Lucide-react (optional)
- **Package Manager**: npm

## Local Setup

\`\`\`bash
# Clone the repository
git clone https://github.com/edgemarketplace/creativecapital.git
cd creativecapital

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Run the development server
npm run dev
\`\`\`

Visit:
- Website: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Base URL for the site |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (default: production) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version |
| `SANITY_API_READ_TOKEN` | Sanity read token for preview |
| `NEXT_PUBLIC_VENDURE_SHOP_API_URL` | Vendure Shop API (future) |
| `NEXT_PUBLIC_VENDURE_CHANNEL_TOKEN` | Vendure channel token (future) |

## How to Run

\`\`\`bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm run start

# Lint
npm run lint
\`\`\`

## Sanity Configuration

The embedded Sanity Studio is configured in `sanity.config.ts` and served at `/studio`.
Sanity schemas are in `src/sanity/schemaObjects/` (documents, objects, blocks).

To manage content:
1. Visit `/studio` in the browser
2. Create/edit site settings, pages, articles, videos, team members, etc.
3. Use the Presentation tool for visual editing with click-to-edit overlays

## Preview Mode

\`\`\`bash
# Draft content is enabled via /api/draft-mode/enable
# Requires SANITY_API_READ_TOKEN
\`\`\`

## Structure

- `src/app/` — Next.js App Router pages and layouts
- `src/components/layout/` — Site header, footer, mobile menu
- `src/components/blocks/` — Reusable content blocks (hero, testimonials, etc.)
- `src/components/ui/` — Button, Container, SectionHeading, Card
- `src/sanity/` — Sanity configuration, clients, queries, schemas
- `src/lib/` — Utility functions (cn, metadata, vendure placeholder)
- `docs/` — Project documentation

## Vendure Integration (Future)

Vendure integration is planned for:
- Paid courses and educational products
- Webinar registrations
- Digital downloads
- Customer accounts and order history
- Gated video portals

See `src/lib/vendure/README.md` for details.

## Deployment

Build with `npm run build` and deploy to Vercel, Netlify, or any Node.js host.
Ensure all environment variables are set in the deployment environment.

## License

Private — Creative Capital Strategies.
