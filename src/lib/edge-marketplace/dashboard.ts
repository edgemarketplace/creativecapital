import type { DashboardProduct, IntakeSubmission, ProvisioningPlan, StorefrontDraft } from './types';

function moneySeed(value: string) {
  return value.split('').reduce((total, character) => total + character.charCodeAt(0), 0);
}

export function buildDefaultStorefrontDraft(
  submission: IntakeSubmission,
  plan: ProvisioningPlan | null
): StorefrontDraft {
  const payload = submission.normalizedPayload;
  const brandName = payload.client.brandName;
  const categories = payload.marketplace.categories.length ? payload.marketplace.categories : ['Featured'];

  return {
    submissionId: submission.id,
    tenantKey: plan?.tenantKey ?? brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    brandName,
    heroHeadline: `${brandName} Marketplace`,
    heroSubheading:
      payload.content.aboutCopy ||
      `A curated marketplace experience for ${categories.slice(0, 3).join(', ')} products and services.`,
    announcementText: 'Demo marketplace setup is in progress.',
    primaryCtaLabel: 'Shop featured products',
    secondaryCtaLabel: payload.marketplace.model === 'single-seller' ? 'Learn about us' : 'Become a vendor',
    featuredCategories: categories.slice(0, 6),
    brandKit: {
      typographyPreset:
        (payload.brand.typographyPreference as 'modern' | 'editorial' | 'utilitarian' | 'premium') || 'modern',
      buttonPreset: 'solid',
      cornerPreset: 'soft',
    },
    homepageSections: [
      {
        id: 'hero',
        label: 'Hero',
        enabled: true,
        layoutPreset: 'Product-forward',
        stylePreset: 'Brand color',
        status: 'ready',
      },
      {
        id: 'featured-categories',
        label: 'Featured categories',
        enabled: true,
        layoutPreset: 'Compact grid',
        stylePreset: 'Clean',
        status: 'ready',
      },
      {
        id: 'featured-products',
        label: 'Featured products',
        enabled: true,
        layoutPreset: 'Product grid',
        stylePreset: 'Catalog',
        status: 'draft',
      },
      {
        id: 'about',
        label: 'About marketplace',
        enabled: true,
        layoutPreset: 'Text with image',
        stylePreset: 'Editorial',
        status: payload.content.aboutCopy ? 'ready' : 'needs_review',
      },
      {
        id: 'faq',
        label: 'FAQ',
        enabled: true,
        layoutPreset: 'Accordion',
        stylePreset: 'Support',
        status: payload.content.faqItems.length ? 'ready' : 'needs_review',
      },
    ],
    updatedAt: new Date().toISOString(),
  };
}

export function withStorefrontDraftDefaults(draft: StorefrontDraft): StorefrontDraft {
  return {
    ...draft,
    brandKit: {
      typographyPreset: draft.brandKit?.typographyPreset ?? 'modern',
      buttonPreset: draft.brandKit?.buttonPreset ?? 'solid',
      cornerPreset: draft.brandKit?.cornerPreset ?? 'soft',
    },
    homepageSections: draft.homepageSections.map((section) => ({
      ...section,
      enabled: section.enabled ?? true,
      layoutPreset: section.layoutPreset ?? 'Standard',
      stylePreset: section.stylePreset ?? 'Clean',
    })),
  };
}

export function buildDashboardProducts(submission: IntakeSubmission): DashboardProduct[] {
  const payload = submission.normalizedPayload;
  const categories = payload.marketplace.categories.length ? payload.marketplace.categories : ['General'];
  const count = Math.min(Math.max(payload.marketplace.estimatedProductCount || 6, 6), 12);

  return Array.from({ length: count }, (_, index) => {
    const collection = categories[index % categories.length];
    const base = moneySeed(`${payload.client.brandName}-${collection}-${index}`);

    return {
      id: `prod_${index + 1}`,
      sku: `${payload.client.brandName.slice(0, 3).toUpperCase().replace(/[^A-Z0-9]/g, 'EDG')}-${String(index + 1).padStart(4, '0')}`,
      name: `${collection.charAt(0).toUpperCase()}${collection.slice(1)} Item ${index + 1}`,
      collection,
      price: 25 + (base % 175),
      stock: payload.catalog.inventoryTracking ? base % 48 : 0,
      status: index < 3 ? 'active' : index < 8 ? 'draft' : 'needs_data',
      variants: payload.catalog.hasVariants ? 3 + (index % 4) : 1,
    };
  });
}

export function getCommerceSummary(products: DashboardProduct[]) {
  return {
    totalProducts: products.length,
    activeProducts: products.filter((product) => product.status === 'active').length,
    draftProducts: products.filter((product) => product.status === 'draft').length,
    needsData: products.filter((product) => product.status === 'needs_data').length,
    totalStock: products.reduce((total, product) => total + product.stock, 0),
  };
}
