import { createHmac } from 'node:crypto';
import type { IntakeSubmission } from './types';
import { createWebhookDelivery } from './storage';

const eventName = 'edge_marketplace.intake.submitted';

function signPayload(body: string, secret: string) {
  return createHmac('sha256', secret).update(body).digest('hex');
}

export async function deliverIntakeWebhook(submission: IntakeSubmission) {
  const destination = process.env.EDGE_MARKETPLACE_WEBHOOK_URL;
  const payload = {
    event: eventName,
    submissionId: submission.id,
    submittedAt: submission.createdAt,
    ...submission.normalizedPayload,
  };

  if (!destination) {
    return createWebhookDelivery({
      submissionId: submission.id,
      eventName,
      destination: 'local-provisioning-stub',
      status: 'skipped',
      attemptCount: 0,
      lastError: 'EDGE_MARKETPLACE_WEBHOOK_URL is not configured; local plan stub will be used.',
    });
  }

  const body = JSON.stringify(payload);
  const secret = process.env.EDGE_MARKETPLACE_WEBHOOK_SECRET ?? '';

  try {
    const response = await fetch(destination, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(secret ? { 'x-edge-marketplace-signature': signPayload(body, secret) } : {}),
      },
      body,
    });

    if (!response.ok) {
      throw new Error(`Webhook failed with ${response.status}`);
    }

    return createWebhookDelivery({
      submissionId: submission.id,
      eventName,
      destination,
      status: 'sent',
      attemptCount: 1,
      sentAt: new Date().toISOString(),
    });
  } catch (error) {
    return createWebhookDelivery({
      submissionId: submission.id,
      eventName,
      destination,
      status: 'failed',
      attemptCount: 1,
      lastError: error instanceof Error ? error.message : 'Unknown webhook delivery error.',
    });
  }
}

