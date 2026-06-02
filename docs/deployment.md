# Deployment

## Build Verification

\`\`\`bash
npx next build
\`\`\`

Expected: All pages compiled and exported without errors.

## Environment Variables

Copy `.env.example` to `.env.local` for development, and set these in production:

### Required
| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Base URL (e.g. https://creativecapitalstrategies.com) |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (production) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version |

### Optional (for preview/draft mode)
| Variable | Description |
|---|---|
| `SANITY_API_READ_TOKEN` | Sanity read token for draft content |
| `SANITY_STUDIO_PREVIEW_SECRET` | Secret for draft mode activation |

### Future (Vendure integration)
| Variable | Description |
|---|---|
| `NEXT_PUBLIC_VENDURE_SHOP_API_URL` | Vendure Shop API endpoint |
| `NEXT_PUBLIC_VENDURE_CHANNEL_TOKEN` | Vendure channel token |

## Vercel Deployment (Recommended)

1. Import the GitHub repository into Vercel
2. Set environment variables in Vercel dashboard
3. Framework preset: Next.js
4. Build command: `npx next build`
5. Output directory: `.next`

## Other Platforms

Any Node.js-compatible host (Netlify, Railway, self-hosted) works.
Ensure Node.js 18+ is available and all env vars are set.

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test mobile navigation menu
- [ ] Verify Sanity Studio is accessible at /studio
- [ ] Test draft mode with preview secret
- [ ] Submit sitemap to Google Search Console
- [ ] Verify SSL certificate
- [ ] Set up monitoring/analytics
