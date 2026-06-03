import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getProvisioningPlanBySubmission,
  getSubmission,
  listProvisioningActions,
  listWebhookDeliveries,
} from '@/lib/edge-marketplace/storage';
import PlanStatusControls from './PlanStatusControls';

export const dynamic = 'force-dynamic';

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-[#D9D4C7] bg-white p-5">
      <h2 className="text-lg font-semibold text-[#172033]">{title}</h2>
      {items.length ? (
        <ul className="mt-4 space-y-2 text-sm leading-6 text-[#475467]">
          {items.map((item) => (
            <li key={item} className="rounded-md bg-[#F7F5EF] px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-[#667085]">None recorded.</p>
      )}
    </section>
  );
}

export default async function OperatorDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const submission = await getSubmission(id);
  if (!submission) notFound();

  const [plan, deliveries] = await Promise.all([
    getProvisioningPlanBySubmission(submission.id),
    listWebhookDeliveries(submission.id),
  ]);
  const actions = plan ? await listProvisioningActions(plan.id) : [];

  return (
    <section className="min-h-screen bg-[#F7F5EF] py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link href="/edge-marketplace/operator" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E]">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to submissions
        </Link>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8A6F1F]">Provisioning Review</p>
            <h1 className="mt-3 text-3xl font-semibold text-[#172033]">{submission.clientBrandName}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5D6675]">{plan?.summary ?? 'No plan has been generated yet.'}</p>
          </div>

          <div className="rounded-lg border border-[#D9D4C7] bg-white p-5">
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-[#172033]">Submission</dt>
                <dd className="mt-1 text-[#667085]">{submission.status}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#172033]">Plan</dt>
                <dd className="mt-1 text-[#667085]">{plan?.status ?? 'pending'}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#172033]">Tenant key</dt>
                <dd className="mt-1 text-[#667085]">{plan?.tenantKey ?? 'pending'}</dd>
              </div>
            </dl>
            {plan && <PlanStatusControls planId={plan.id} />}
          </div>
        </div>

        {plan && (
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <ListBlock title="Missing Information" items={plan.missingInfo} />
            <ListBlock title="Inferred Defaults" items={plan.inferredDefaults} />
            <ListBlock title="Vendure Actions" items={plan.vendureActions} />
            <ListBlock title="Sanity Actions" items={plan.sanityActions} />
            <ListBlock title="Catalog Plan" items={plan.catalogPlan} />

            <section className="rounded-lg border border-[#D9D4C7] bg-white p-5">
              <h2 className="text-lg font-semibold text-[#172033]">Webhook Deliveries</h2>
              <div className="mt-4 space-y-2 text-sm text-[#475467]">
                {deliveries.length ? (
                  deliveries.map((delivery) => (
                    <div key={delivery.id} className="rounded-md bg-[#F7F5EF] px-3 py-2">
                      <div className="font-semibold text-[#172033]">{delivery.status}</div>
                      <div className="mt-1 text-xs">{delivery.destination}</div>
                      {delivery.lastError && <div className="mt-1 text-xs text-[#8A1F1F]">{delivery.lastError}</div>}
                    </div>
                  ))
                ) : (
                  <p className="text-[#667085]">No deliveries recorded.</p>
                )}
              </div>
            </section>
          </div>
        )}

        <section className="mt-5 rounded-lg border border-[#D9D4C7] bg-white p-5">
          <h2 className="text-lg font-semibold text-[#172033]">Audit Trail</h2>
          <div className="mt-4 space-y-2 text-sm text-[#475467]">
            {actions.length ? (
              actions.map((action) => (
                <div key={action.id} className="rounded-md bg-[#F7F5EF] px-3 py-2">
                  <span className="font-semibold text-[#172033]">{action.actorType}</span> {action.actionType} · {action.status}
                </div>
              ))
            ) : (
              <p className="text-[#667085]">No actions recorded.</p>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
