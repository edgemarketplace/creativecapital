import type { IntakePayload } from './types';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function asNumber(value: unknown): number {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? Math.round(number) : 0;
}

function asBoolean(value: unknown): boolean {
  return value === true || value === 'true' || value === 'on' || value === 'yes';
}

function asList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(asString).filter(Boolean);
  }

  return asString(value)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function asHexColors(value: unknown): string[] {
  return asList(value)
    .map((color) => color.replace(/^#?/, '#').toUpperCase())
    .filter((color) => /^#[0-9A-F]{6}$/.test(color));
}

function asUrl(value: unknown): string | undefined {
  const text = asString(value);
  if (!text) return undefined;
  if (/^https?:\/\//i.test(text)) return text;
  return `https://${text}`;
}

function asFaqItems(value: unknown): Array<{ question: string; answer: string }> {
  const text = asString(value);
  if (!text) return [];

  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [question, ...answerParts] = line.split('|');
      return {
        question: question?.trim() ?? '',
        answer: answerParts.join('|').trim(),
      };
    })
    .filter((item) => item.question && item.answer);
}

export function normalizeIntakePayload(raw: Record<string, unknown>): {
  payload: IntakePayload;
  errors: string[];
} {
  const payload: IntakePayload = {
    client: {
      legalName: asString(raw.legalName),
      brandName: asString(raw.brandName),
      website: asUrl(raw.website),
      primaryContact: {
        name: asString(raw.contactName),
        email: asString(raw.contactEmail).toLowerCase(),
        phone: asString(raw.contactPhone),
      },
      address: asString(raw.address),
      timezone: asString(raw.timezone),
    },
    marketplace: {
      model: (asString(raw.marketplaceModel) || 'single-seller') as IntakePayload['marketplace']['model'],
      audience: (asString(raw.audience) || 'B2C') as IntakePayload['marketplace']['audience'],
      productTypes: asList(raw.productTypes),
      estimatedProductCount: asNumber(raw.estimatedProductCount),
      estimatedSellerCount: asNumber(raw.estimatedSellerCount),
      categories: asList(raw.categories),
    },
    brand: {
      colors: asHexColors(raw.brandColors),
      logoAssetId: asString(raw.logoAssetId),
      typographyPreference: asString(raw.typographyPreference),
      voice: asString(raw.brandVoice),
      references: asList(raw.referenceWebsites).map((url) => asUrl(url)).filter(Boolean) as string[],
      heroImageAssetId: asString(raw.heroImageAssetId),
      marketingAssetIds: asList(raw.marketingAssetIds),
    },
    catalog: {
      sourceType: (asString(raw.catalogSourceType) || 'none-yet') as IntakePayload['catalog']['sourceType'],
      sourceAssetIds: asList(raw.catalogAssetIds),
      imageSource: asString(raw.imageSource),
      hasVariants: asBoolean(raw.hasVariants),
      inventoryTracking: asBoolean(raw.inventoryTracking),
      skuNotes: asString(raw.skuNotes),
    },
    operations: {
      paymentProvider: asString(raw.paymentProvider),
      shippingApproach: asString(raw.shippingApproach),
      taxNotes: asString(raw.taxNotes),
      fulfillmentOwner: asString(raw.fulfillmentOwner),
      returnsPolicy: asString(raw.returnsPolicy),
      notificationEmails: asList(raw.notificationEmails).map((email) => email.toLowerCase()),
    },
    content: {
      homepageGoals: asList(raw.homepageGoals),
      aboutCopy: asString(raw.aboutCopy),
      faqItems: asFaqItems(raw.faqItems),
      supportDetails: asString(raw.supportDetails),
      seoKeywords: asList(raw.seoKeywords),
    },
    launch: {
      targetDate: asString(raw.targetDate),
      domain: asString(raw.domain),
      approvalContacts: asList(raw.approvalContacts).map((email) => email.toLowerCase()),
      demoRequired: asBoolean(raw.demoRequired),
      requiredIntegrations: asList(raw.requiredIntegrations),
    },
  };

  const errors: string[] = [];
  if (!payload.client.legalName) errors.push('Legal company name is required.');
  if (!payload.client.brandName) errors.push('Public brand name is required.');
  if (!payload.client.primaryContact.name) errors.push('Primary contact name is required.');
  if (!emailPattern.test(payload.client.primaryContact.email)) errors.push('A valid primary contact email is required.');
  if (!payload.client.timezone) errors.push('Time zone is required.');
  if (!payload.marketplace.productTypes.length) errors.push('At least one product type is required.');
  if (!payload.marketplace.categories.length) errors.push('At least one product category is required.');
  if (!payload.content.homepageGoals.length) errors.push('At least one homepage goal is required.');
  if (!payload.launch.approvalContacts.length) errors.push('At least one approval contact is required.');
  if (payload.launch.approvalContacts.some((email) => !emailPattern.test(email))) {
    errors.push('Approval contacts must be valid email addresses.');
  }
  if (
    ['multi-seller', 'curated-vendors'].includes(payload.marketplace.model) &&
    payload.marketplace.estimatedSellerCount < 1
  ) {
    errors.push('Seller count is required for multi-seller or curated vendor marketplaces.');
  }

  return { payload, errors };
}

