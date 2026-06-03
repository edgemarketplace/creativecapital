import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import type {
  IntakeSubmission,
  PlanStatus,
  ProvisioningAction,
  ProvisioningPlan,
  StorefrontDraft,
  WebhookDelivery,
} from './types';

const dataDir = path.join(process.cwd(), '.edge-marketplace-data');

interface DataStore {
  submissions: IntakeSubmission[];
  webhookDeliveries: WebhookDelivery[];
  provisioningPlans: ProvisioningPlan[];
  provisioningActions: ProvisioningAction[];
  storefrontDrafts: StorefrontDraft[];
}

const emptyStore: DataStore = {
  submissions: [],
  webhookDeliveries: [],
  provisioningPlans: [],
  provisioningActions: [],
  storefrontDrafts: [],
};

async function readStore(): Promise<DataStore> {
  await mkdir(dataDir, { recursive: true });

  try {
    const text = await readFile(path.join(dataDir, 'store.json'), 'utf8');
    return { ...emptyStore, ...JSON.parse(text) };
  } catch {
    return emptyStore;
  }
}

async function writeStore(store: DataStore) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(path.join(dataDir, 'store.json'), JSON.stringify(store, null, 2));
}

export async function createSubmission(
  submission: Omit<IntakeSubmission, 'id' | 'createdAt' | 'updatedAt'>
): Promise<IntakeSubmission> {
  const store = await readStore();
  const now = new Date().toISOString();
  const record: IntakeSubmission = {
    ...submission,
    id: `sub_${randomUUID()}`,
    createdAt: now,
    updatedAt: now,
  };

  store.submissions.unshift(record);
  await writeStore(store);
  return record;
}

export async function listSubmissions() {
  const store = await readStore();
  return store.submissions;
}

export async function getSubmission(id: string) {
  const store = await readStore();
  return store.submissions.find((submission) => submission.id === id) ?? null;
}

export async function updateSubmissionStatus(id: string, status: IntakeSubmission['status']) {
  const store = await readStore();
  const submission = store.submissions.find((item) => item.id === id);
  if (!submission) return null;

  submission.status = status;
  submission.updatedAt = new Date().toISOString();
  await writeStore(store);
  return submission;
}

export async function createWebhookDelivery(
  delivery: Omit<WebhookDelivery, 'id' | 'createdAt'>
): Promise<WebhookDelivery> {
  const store = await readStore();
  const record: WebhookDelivery = {
    ...delivery,
    id: `wh_${randomUUID()}`,
    createdAt: new Date().toISOString(),
  };

  store.webhookDeliveries.unshift(record);
  await writeStore(store);
  return record;
}

export async function listWebhookDeliveries(submissionId?: string) {
  const store = await readStore();
  return submissionId
    ? store.webhookDeliveries.filter((delivery) => delivery.submissionId === submissionId)
    : store.webhookDeliveries;
}

export async function createProvisioningPlan(
  plan: Omit<ProvisioningPlan, 'id' | 'createdAt' | 'updatedAt'>
): Promise<ProvisioningPlan> {
  const store = await readStore();
  const now = new Date().toISOString();
  const record: ProvisioningPlan = {
    ...plan,
    id: `plan_${randomUUID()}`,
    createdAt: now,
    updatedAt: now,
  };

  store.provisioningPlans.unshift(record);
  await writeStore(store);
  return record;
}

export async function listProvisioningPlans() {
  const store = await readStore();
  return store.provisioningPlans;
}

export async function getProvisioningPlanBySubmission(submissionId: string) {
  const store = await readStore();
  return store.provisioningPlans.find((plan) => plan.submissionId === submissionId) ?? null;
}

export async function getProvisioningPlan(id: string) {
  const store = await readStore();
  return store.provisioningPlans.find((plan) => plan.id === id) ?? null;
}

export async function updateProvisioningPlanStatus(id: string, status: PlanStatus) {
  const store = await readStore();
  const plan = store.provisioningPlans.find((item) => item.id === id);
  if (!plan) return null;

  plan.status = status;
  plan.updatedAt = new Date().toISOString();
  await writeStore(store);
  return plan;
}

export async function createProvisioningAction(
  action: Omit<ProvisioningAction, 'id' | 'createdAt'>
): Promise<ProvisioningAction> {
  const store = await readStore();
  const record: ProvisioningAction = {
    ...action,
    id: `act_${randomUUID()}`,
    createdAt: new Date().toISOString(),
  };

  store.provisioningActions.unshift(record);
  await writeStore(store);
  return record;
}

export async function listProvisioningActions(planId?: string) {
  const store = await readStore();
  return planId ? store.provisioningActions.filter((action) => action.planId === planId) : store.provisioningActions;
}

export async function getStorefrontDraft(submissionId: string) {
  const store = await readStore();
  return store.storefrontDrafts.find((draft) => draft.submissionId === submissionId) ?? null;
}

export async function upsertStorefrontDraft(draft: StorefrontDraft) {
  const store = await readStore();
  const existingIndex = store.storefrontDrafts.findIndex((item) => item.submissionId === draft.submissionId);
  const record = {
    ...draft,
    updatedAt: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    store.storefrontDrafts[existingIndex] = record;
  } else {
    store.storefrontDrafts.unshift(record);
  }

  await writeStore(store);
  return record;
}
