import { NextResponse } from 'next/server';
import { buildProvisioningPlan } from '@/lib/edge-marketplace/provisioning';
import {
  createProvisioningAction,
  createProvisioningPlan,
  getProvisioningPlanBySubmission,
  getSubmission,
  updateSubmissionStatus,
} from '@/lib/edge-marketplace/storage';

export async function POST(request: Request) {
  const body = (await request.json()) as { submissionId?: string };

  if (!body.submissionId) {
    return NextResponse.json({ error: 'submissionId is required.' }, { status: 400 });
  }

  const submission = await getSubmission(body.submissionId);
  if (!submission) {
    return NextResponse.json({ error: 'Submission not found.' }, { status: 404 });
  }

  const existingPlan = await getProvisioningPlanBySubmission(submission.id);
  if (existingPlan) {
    return NextResponse.json({ plan: existingPlan });
  }

  await updateSubmissionStatus(submission.id, 'agent_planning');
  const plan = await createProvisioningPlan(buildProvisioningPlan(submission.id, submission.normalizedPayload));

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
  return NextResponse.json({ plan }, { status: 201 });
}

