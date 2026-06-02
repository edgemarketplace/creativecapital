# Vendure Future Integration

## Overview

Vendure will power commerce features for Creative Capital Strategies.
No public marketing pages depend on Vendure yet.

## Planned Features

- Paid courses and educational products
- Webinar registrations and digital downloads
- Educational bundles
- Customer accounts and order history
- Gated video/resources behind purchases
- Order-based access control

## Integration Boundary

All commerce logic lives in `src/lib/vendure/`:
- `client.ts` - typed API client (placeholder)
- `types.ts` - TypeScript interfaces (placeholder)
- `README.md` - this document

## Environment Variables

\`\`\`env
NEXT_PUBLIC_VENDURE_SHOP_API_URL=https://your-vendure-instance.com/shop-api
NEXT_PUBLIC_VENDURE_CHANNEL_TOKEN=your-channel-token
\`\`\`

## Implementation Notes

- Use Shop API for public-facing queries (products, orders, customer)
- Use Admin API for server-side mutations (inventory, fulfillment)
- Keep all commerce routes under `src/app/(site)/account/` and `src/app/(site)/shop/`
- Maintain clear separation between marketing pages and commerce features
- No hard dependency on Vendure for the initial public site build
