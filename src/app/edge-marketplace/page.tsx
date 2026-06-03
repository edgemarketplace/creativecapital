import { ClipboardList, LayoutDashboard, MonitorCog } from 'lucide-react';
import Link from 'next/link';

const links = [
  {
    href: '/edge-marketplace/intake',
    title: 'Client Intake',
    description: 'Submit a structured marketplace onboarding form and generate the first setup plan.',
    icon: ClipboardList,
  },
  {
    href: '/edge-marketplace/operator',
    title: 'Operator Review',
    description: 'Review submissions, webhook delivery status, missing information, and agent-drafted plans.',
    icon: LayoutDashboard,
  },
  {
    href: '/edge-marketplace/dashboard',
    title: 'Client Backend',
    description: 'Unified client dashboard for storefront editing and product/Vendure data.',
    icon: MonitorCog,
  },
];

export default function EdgeMarketplaceHome() {
  return (
    <section className="min-h-screen bg-[#F7F5EF] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8A6F1F]">Edge Marketplace Hub</p>
          <h1 className="mt-4 text-4xl font-semibold text-[#172033] sm:text-5xl">Intake to marketplace setup</h1>
          <p className="mt-5 text-lg leading-8 text-[#4B5565]">
            This first build slice turns a client form submission into a stored record, webhook delivery log, and
            agent-ready provisioning plan for Vendure and Sanity setup.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#D9D4C7] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Icon className="h-6 w-6 text-[#0F766E]" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-semibold text-[#172033]">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#5D6675]">{item.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
