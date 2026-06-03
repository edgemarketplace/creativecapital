import { NextResponse } from 'next/server';
import { buildDefaultStorefrontDraft, withStorefrontDraftDefaults } from '@/lib/edge-marketplace/dashboard';
import {
  getProvisioningPlanBySubmission,
  getStorefrontDraft,
  getSubmission,
  upsertStorefrontDraft,
} from '@/lib/edge-marketplace/storage';

function asStringList(value: unknown) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  return String(value ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function GET(_request: Request, { params }: { params: Promise<{ submissionId: string }> }) {
  const { submissionId } = await params;
  const submission = await getSubmission(submissionId);
  if (!submission) {
    return NextResponse.json({ error: 'Submission not found.' }, { status: 404 });
  }

  const plan = await getProvisioningPlanBySubmission(submissionId);
  const draft = withStorefrontDraftDefaults(
    (await getStorefrontDraft(submissionId)) ?? buildDefaultStorefrontDraft(submission, plan)
  );
  return NextResponse.json({ draft });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ submissionId: string }> }) {
  const { submissionId } = await params;
  const body = (await request.json()) as Record<string, unknown>;
  const submission = await getSubmission(submissionId);

  if (!submission) {
    return NextResponse.json({ error: 'Submission not found.' }, { status: 404 });
  }

  const plan = await getProvisioningPlanBySubmission(submissionId);
  const current = withStorefrontDraftDefaults(
    (await getStorefrontDraft(submissionId)) ?? buildDefaultStorefrontDraft(submission, plan)
  );

  const draft = await upsertStorefrontDraft({
    ...current,
    heroHeadline: String(body.heroHeadline ?? current.heroHeadline).trim(),
    heroSubheading: String(body.heroSubheading ?? current.heroSubheading).trim(),
    announcementText: String(body.announcementText ?? current.announcementText).trim(),
    primaryCtaLabel: String(body.primaryCtaLabel ?? current.primaryCtaLabel).trim(),
    secondaryCtaLabel: String(body.secondaryCtaLabel ?? current.secondaryCtaLabel).trim(),
    featuredCategories: asStringList(body.featuredCategories),
    brandKit: {
      typographyPreset: String(body.typographyPreset ?? current.brandKit.typographyPreset) as typeof current.brandKit.typographyPreset,
      buttonPreset: String(body.buttonPreset ?? current.brandKit.buttonPreset) as typeof current.brandKit.buttonPreset,
      cornerPreset: String(body.cornerPreset ?? current.brandKit.cornerPreset) as typeof current.brandKit.cornerPreset,
    },
  });

  return NextResponse.json({ draft });
}
