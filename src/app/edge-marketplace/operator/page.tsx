import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { listProvisioningPlans, listSubmissions, listWebhookDeliveries } from '@/lib/edge-marketplace/storage';

export const dynamic = 'force-dynamic';

export default async function OperatorPage() {
  const [submissions, plans, deliveries] = await Promise.all([
    listSubmissions(),
    listProvisioningPlans(),
    listWebhookDeliveries(),
  ]);

  return (
    <section className="min-h-screen bg-[#F7F5EF] py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link href="/edge-marketplace" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E]">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to hub
        </Link>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8A6F1F]">Operator Review</p>
            <h1 className="mt-3 text-3xl font-semibold text-[#172033]">Marketplace submissions</h1>
          </div>
          <Link
            href="/edge-marketplace/intake"
            className="inline-flex items-center justify-center rounded-md bg-[#172033] px-4 py-2 text-sm font-semibold text-white"
          >
            New intake
          </Link>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-[#D9D4C7] bg-white">
          <div className="grid grid-cols-12 border-b border-[#E8E2D8] bg-[#FBFAF7] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#667085]">
            <div className="col-span-4">Client</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Plan</div>
            <div className="col-span-2">Webhook</div>
            <div className="col-span-2 text-right">Review</div>
          </div>
          {submissions.length === 0 ? (
            <div className="px-4 py-8 text-sm text-[#667085]">No submissions yet.</div>
          ) : (
            submissions.map((submission) => {
              const plan = plans.find((item) => item.submissionId === submission.id);
              const delivery = deliveries.find((item) => item.submissionId === submission.id);
              return (
                <div key={submission.id} className="grid grid-cols-12 items-center border-b border-[#EFEAE2] px-4 py-4 text-sm last:border-b-0">
                  <div className="col-span-4">
                    <div className="font-semibold text-[#172033]">{submission.clientBrandName}</div>
                    <div className="mt-1 text-xs text-[#667085]">{submission.primaryContactEmail}</div>
                  </div>
                  <div className="col-span-2 text-[#475467]">{submission.status}</div>
                  <div className="col-span-2 text-[#475467]">{plan?.status ?? 'pending'}</div>
                  <div className="col-span-2 text-[#475467]">{delivery?.status ?? 'pending'}</div>
                  <div className="col-span-2 text-right">
                    <Link
                      href={`/edge-marketplace/operator/${submission.id}`}
                      className="inline-flex items-center gap-2 font-semibold text-[#0F766E]"
                    >
                      Open
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

