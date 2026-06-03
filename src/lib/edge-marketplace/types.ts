export type SubmissionStatus =
  | 'received'
  | 'validating'
  | 'needs_info'
  | 'agent_planning'
  | 'operator_review'
  | 'provisioning'
  | 'ready_for_demo'
  | 'approved_for_launch'
  | 'launched';

export type PlanStatus = 'draft' | 'needs_review' | 'approved' | 'running' | 'complete' | 'blocked';

export type WebhookDeliveryStatus = 'pending' | 'sent' | 'failed' | 'retrying' | 'skipped';

export interface IntakePayload {
  client: {
    legalName: string;
    brandName: string;
    website?: string;
    primaryContact: {
      name: string;
      email: string;
      phone?: string;
    };
    address?: string;
    timezone: string;
  };
  marketplace: {
    model: 'single-seller' | 'multi-seller' | 'curated-vendors' | 'catalog-only';
    audience: 'B2C' | 'B2B' | 'hybrid';
    productTypes: string[];
    estimatedProductCount: number;
    estimatedSellerCount: number;
    categories: string[];
  };
  brand: {
    colors: string[];
    logoAssetId?: string;
    typographyPreference?: string;
    voice?: string;
    references: string[];
    heroImageAssetId?: string;
    marketingAssetIds: string[];
  };
  catalog: {
    sourceType: 'spreadsheet' | 'manual' | 'ecommerce-export' | 'api' | 'none-yet';
    sourceAssetIds: string[];
    imageSource?: string;
    hasVariants: boolean;
    inventoryTracking: boolean;
    skuNotes?: string;
  };
  operations: {
    paymentProvider?: string;
    shippingApproach?: string;
    taxNotes?: string;
    fulfillmentOwner?: string;
    returnsPolicy?: string;
    notificationEmails: string[];
  };
  content: {
    homepageGoals: string[];
    aboutCopy?: string;
    faqItems: Array<{ question: string; answer: string }>;
    supportDetails?: string;
    seoKeywords: string[];
  };
  launch: {
    targetDate?: string;
    domain?: string;
    approvalContacts: string[];
    demoRequired: boolean;
    requiredIntegrations: string[];
  };
}

export interface IntakeSubmission {
  id: string;
  status: SubmissionStatus;
  clientBrandName: string;
  clientLegalName: string;
  primaryContactEmail: string;
  rawPayload: Record<string, unknown>;
  normalizedPayload: IntakePayload;
  createdAt: string;
  updatedAt: string;
}

export interface WebhookDelivery {
  id: string;
  submissionId: string;
  eventName: string;
  destination: string;
  status: WebhookDeliveryStatus;
  attemptCount: number;
  lastError?: string;
  sentAt?: string;
  createdAt: string;
}

export interface ProvisioningPlan {
  id: string;
  submissionId: string;
  tenantKey: string;
  status: PlanStatus;
  summary: string;
  missingInfo: string[];
  inferredDefaults: string[];
  vendureActions: string[];
  sanityActions: string[];
  catalogPlan: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProvisioningAction {
  id: string;
  planId: string;
  actorType: 'agent' | 'operator' | 'system';
  actionType: string;
  status: 'planned' | 'approved' | 'running' | 'complete' | 'failed' | 'skipped';
  input: Record<string, unknown>;
  output?: Record<string, unknown>;
  confidence?: number;
  requiresApproval: boolean;
  createdAt: string;
  completedAt?: string;
}

export interface StorefrontDraft {
  submissionId: string;
  tenantKey: string;
  brandName: string;
  heroHeadline: string;
  heroSubheading: string;
  announcementText: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  featuredCategories: string[];
  brandKit: {
    typographyPreset: 'modern' | 'editorial' | 'utilitarian' | 'premium';
    buttonPreset: 'solid' | 'outline' | 'soft';
    cornerPreset: 'crisp' | 'soft' | 'rounded';
  };
  homepageSections: Array<{
    id: string;
    label: string;
    enabled: boolean;
    layoutPreset: string;
    stylePreset: string;
    status: 'draft' | 'ready' | 'needs_review';
  }>;
  updatedAt: string;
}

export interface DashboardProduct {
  id: string;
  sku: string;
  name: string;
  collection: string;
  price: number;
  stock: number;
  status: 'draft' | 'active' | 'needs_data';
  variants: number;
}
