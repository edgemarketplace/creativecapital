# Vendure Integration (Future)

Vendure will power commerce features including:

- Paid courses
- Paid webinars and digital downloads
- Educational bundles
- Customer accounts and order history
- Gated video/resources behind purchases

`client.ts` is a typed placeholder. No public marketing pages depend on it yet.
When integrating, use the Shop API for public-facing queries and the Admin API for
server-side mutations. Keep all commerce logic in `src/lib/vendure/` and
`src/app/(site)/account/` to maintain a clear integration boundary.
