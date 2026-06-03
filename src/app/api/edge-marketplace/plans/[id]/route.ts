import { NextResponse } from 'next/server';
import {
  createProvisioningAction,
  getProvisioningPlan,
  getSubmission,
  updateProvisioningPlanStatus,
  updateSubmissionStatus,
} from '@/lib/edge-marketplace/storage';
import type { PlanStatus } from '@/lib/edge-marketplace/types';

const allowedStatuses: PlanStatus[] = ['needs_review', 'approved', 'blocked', 'running', 'complete'];

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = (await request.json()) as { status?: PlanStatus };

  if (!body.status || !allowedStatuses.includes(body.status)) {
    return NextResponse.json({ error: 'A valid status is required.' }, { status: 400 });
  }

  const plan = await getProvisioningPlan(id);
  if (!plan) {
    return NextResponse.json({ error: 'Plan not found.' }, { status: 404 });
  }

  const updated = await updateProvisioningPlanStatus(id, body.status);
  const submission = await getSubmission(plan.submissionId);

  if (submission) {
    const nextSubmissionStatus =
      body.status === 'approved' ? 'provisioning' : body.status === 'blocked' ? 'needs_info' : submission.status;
    await updateSubmissionStatus(submission.id, nextSubmissionStatus);
  }

  await createProvisioningAction({
    planId: id,
    actorType: 'operator',
    actionType: `set_plan_status_${body.status}`,
    status: 'complete',
    input: { status: body.status },
    requiresApproval: false,
    completedAt: new Date().toISOString(),
  });

  return NextResponse.json({ plan: updated });
}

