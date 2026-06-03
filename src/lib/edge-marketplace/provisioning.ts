import type { IntakePayload } from './types';

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 48);
}

export function buildProvisioningPlan(submissionId: string, payload: IntakePayload) {
  const missingInfo: string[] = [];
  const inferredDefaults: string[] = [];

  if (!payload.brand.logoAssetId) missingInfo.push('Logo asset is not uploaded yet.');
  if (!payload.brand.colors.length) inferredDefaults.push('Use neutral marketplace theme until brand colors are provided.');
  if (!payload.operations.paymentProvider) missingInfo.push('Payment provider preference needs confirmation.');
  if (!payload.operations.shippingApproach) missingInfo.push('Shipping approach needs confirmation.');
  if (!payload.operations.taxNotes) missingInfo.push('Tax requirements need operator review.');
  if (!payload.launch.domain) inferredDefaults.push('Use a demo subdomain until production domain is confirmed.');
  if (payload.catalog.sourceType === 'none-yet') {
    inferredDefaults.push('Create a small starter catalog for demo review.');
  }
  if (
    ['spreadsheet', 'ecommerce-export'].includes(payload.catalog.sourceType) &&
    !payload.catalog.sourceAssetIds.length
  ) {
    missingInfo.push('Catalog source was selected, but no catalog asset ID is attached.');
  }

  const tenantKey = slugify(payload.client.brandName || payload.client.legalName || submissionId);

  return {
    submissionId,
    tenantKey,
    status: 'needs_review' as const,
    summary: `Prepare a ${payload.marketplace.model} ${payload.marketplace.audience} marketplace for ${payload.client.brandName}.`,
    missingInfo,
    inferredDefaults,
    vendureActions: [
      `Create Vendure channel with token "${tenantKey}".`,
      `Create collections for: ${payload.marketplace.categories.join(', ')}.`,
      payload.marketplace.estimatedProductCount > 0
        ? `Prepare catalog import path for roughly ${payload.marketplace.estimatedProductCount} products.`
        : 'Create starter products for the demo marketplace.',
      payload.catalog.inventoryTracking
        ? 'Enable inventory-aware product setup.'
        : 'Keep inventory tracking disabled for the initial demo.',
      'Add payment, shipping, and tax setup items to operator checklist.',
    ],
    sanityActions: [
      `Create tenant-scoped site settings document for ${payload.client.brandName}.`,
      'Seed homepage with hero, category, featured product, about, and FAQ sections.',
      payload.brand.logoAssetId ? 'Attach uploaded logo asset to site settings.' : 'Use text brand mark until logo is uploaded.',
      payload.content.aboutCopy ? 'Use supplied about copy as content source.' : 'Draft about content from intake details.',
      'Create draft SEO metadata from homepage goals and keywords.',
    ],
    catalogPlan: [
      `Catalog source: ${payload.catalog.sourceType}.`,
      payload.catalog.hasVariants ? 'Map product variants during import.' : 'Use simple product variants by default.',
      payload.catalog.imageSource ? `Image source: ${payload.catalog.imageSource}.` : 'Confirm product image source.',
      payload.catalog.skuNotes ? `SKU notes: ${payload.catalog.skuNotes}.` : 'Generate SKU mapping notes during catalog review.',
    ],
  };
}

