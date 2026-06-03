import { NextResponse } from 'next/server';
import { normalizeIntakePayload } from '@/lib/edge-marketplace/normalize';
import { buildProvisioningPlan } from '@/lib/edge-marketplace/provisioning';
import {
  createProvisioningAction,
  createProvisioningPlan,
  createSubmission,
  listSubmissions,
  updateSubmissionStatus,
} from '@/lib/edge-marketplace/storage';
import { deliverIntakeWebhook } from '@/lib/edge-marketplace/webhook';

export async function GET() {
  const submissions = await listSubmissions();
  return NextResponse.json({ submissions });
}

export async function POST(request: Request) {
  const rawPayload = (await request.json()) as Record<string, unknown>;
  const { payload, errors } = normalizeIntakePayload(rawPayload);

  if (errors.length) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const submission = await createSubmission({
    status: 'received',
    clientBrandName: payload.client.brandName,
    clientLegalName: payload.client.legalName,
    primaryContactEmail: payload.client.primaryContact.email,
    rawPayload,
    normalizedPayload: payload,
  });

  await updateSubmissionStatus(submission.id, 'agent_planning');
  const webhookDelivery = await deliverIntakeWebhook(submission);
  const plan = await createProvisioningPlan(buildProvisioningPlan(submission.id, payload));

  await createProvisioningAction({
    planId: plan.id,
    actorType: 'agent',
    actionType: 'draft_setup_plan',
    status: 'planned',
    input: { submissionId: submission.id },
    output: { missingInfoCount: plan.missingInfo.length, inferredDefaultCount: plan.inferredDefaults.length },
    confidence: 0.72,
    requiresApproval: true,
  });

  await updateSubmissionStatus(submission.id, 'operator_review');

  return NextResponse.json({ submission: { ...submission, status: 'operator_review' }, webhookDelivery, plan }, { status: 201 });
}

