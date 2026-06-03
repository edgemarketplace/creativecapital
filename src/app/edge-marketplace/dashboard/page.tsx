import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeft,
  BarChart3,
  Boxes,
  CreditCard,
  LayoutPanelTop,
  Package,
  ReceiptText,
  Settings,
  Store,
  Tags,
  Truck,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import {
  buildDashboardProducts,
  buildDefaultStorefrontDraft,
  getCommerceSummary,
  withStorefrontDraftDefaults,
} from '@/lib/edge-marketplace/dashboard';
import {
  getProvisioningPlanBySubmission,
  getStorefrontDraft,
  listSubmissions,
} from '@/lib/edge-marketplace/storage';
import StorefrontEditor from './StorefrontEditor';

export const dynamic = 'force-dynamic';

type Workspace = 'overview' | 'orders' | 'products' | 'customers' | 'promotions' | 'shipping' | 'storefront' | 'settings';

const commerceNav: Array<{ id: Workspace; label: string; icon: LucideIcon }> = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'orders', label: 'Orders', icon: ReceiptText },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'promotions', label: 'Promotions', icon: Tags },
  { id: 'shipping', label: 'Shipping', icon: Truck },
];

const platformNav: Array<{ id: Workspace; label: string; icon: LucideIcon }> = [
  { id: 'storefront', label: 'Storefront Studio', icon: LayoutPanelTop },
  { id: 'settings', label: 'Settings', icon: Settings },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

function StatusPill({ label }: { label: string }) {
  const colors =
    label === 'active' || label === 'paid' || label === 'ready'
      ? 'bg-[#ECF8F5] text-[#115E59]'
      : label === 'draft' || label === 'processing'
        ? 'bg-[#FFF8E5] text-[#8A6F1F]'
        : 'bg-[#FFF1F1] text-[#8A1F1F]';

  return <span className={`rounded-full px-2 py-1 text-xs font-semibold ${colors}`}>{label}</span>;
}

export default async function ClientDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ workspace?: Workspace }>;
}) {
  const { workspace } = await searchParams;
  const activeWorkspace: Workspace = workspace && [...commerceNav, ...platformNav].some((item) => item.id === workspace)
    ? workspace
    : 'overview';

  const submissions = await listSubmissions();
  const submission = submissions[0] ?? null;

  if (!submission) {
    return (
      <section className="min-h-screen bg-[#F4F5F7] py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link href="/edge-marketplace" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E]">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to hub
          </Link>
          <div className="mt-8 rounded-lg border border-[#D7DBE3] bg-white p-8">
            <h1 className="text-2xl font-semibold text-[#172033]">Client dashboard</h1>
            <p className="mt-3 text-sm leading-6 text-[#667085]">
              Submit a client intake first so the dashboard has a tenant, storefront draft, and product dataset to display.
            </p>
            <Link
              href="/edge-marketplace/intake"
              className="mt-5 inline-flex rounded-md bg-[#172033] px-4 py-2 text-sm font-semibold text-white"
            >
              Start intake
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const plan = await getProvisioningPlanBySubmission(submission.id);
  const draft = withStorefrontDraftDefaults(
    (await getStorefrontDraft(submission.id)) ?? buildDefaultStorefrontDraft(submission, plan)
  );
  const products = buildDashboardProducts(submission);
  const summary = getCommerceSummary(products);
  const tenantKey = plan?.tenantKey ?? draft.tenantKey;

  return (
    <section className="min-h-screen bg-[#F4F5F7] text-[#172033]">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-r border-[#D7DBE3] bg-[#111827] px-4 py-5 text-white">
          <Link href="/edge-marketplace" className="inline-flex items-center gap-2 text-xs font-semibold text-[#9CA3AF]">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Edge Hub
          </Link>

          <div className="mt-6 rounded-lg bg-white/8 p-3">
            <div className="text-sm font-semibold">{submission.clientBrandName}</div>
            <div className="mt-1 text-xs text-[#B8C0CC]">Channel: {tenantKey}</div>
          </div>

          <nav className="mt-6 space-y-6">
            <NavSection title="Commerce" items={commerceNav} activeWorkspace={activeWorkspace} />
            <NavSection title="Content" items={platformNav} activeWorkspace={activeWorkspace} />
          </nav>
        </aside>

        <main className="min-w-0">
          <header className="border-b border-[#D7DBE3] bg-white px-5 py-4 lg:px-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">Client Backend</p>
                <h1 className="mt-1 text-2xl font-semibold text-[#111827]">{getWorkspaceTitle(activeWorkspace)}</h1>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/studio"
                  className="rounded-md border border-[#D7DBE3] bg-white px-3 py-2 text-sm font-semibold text-[#172033]"
                >
                  Open full Sanity Studio
                </Link>
                <span className="rounded-md bg-[#ECF8F5] px-3 py-2 text-sm font-semibold text-[#115E59]">
                  Demo tenant active
                </span>
              </div>
            </div>
          </header>

          <div className="p-5 lg:p-8">
            {activeWorkspace === 'overview' && (
              <OverviewWorkspace products={products} summary={summary} tenantKey={tenantKey} />
            )}
            {activeWorkspace === 'products' && <ProductsWorkspace products={products} />}
            {activeWorkspace === 'orders' && <OrdersWorkspace />}
            {activeWorkspace === 'customers' && <CustomersWorkspace />}
            {activeWorkspace === 'promotions' && <PromotionsWorkspace />}
            {activeWorkspace === 'shipping' && <ShippingWorkspace />}
            {activeWorkspace === 'storefront' && (
              <StorefrontWorkspace draft={draft} submission={submission} summary={summary} tenantKey={tenantKey} />
            )}
            {activeWorkspace === 'settings' && (
              <SettingsWorkspace submission={submission} tenantKey={tenantKey} />
            )}
          </div>
        </main>
      </div>
    </section>
  );
}

function NavSection({
  title,
  items,
  activeWorkspace,
}: {
  title: string;
  items: Array<{ id: Workspace; label: string; icon: LucideIcon }>;
  activeWorkspace: Workspace;
}) {
  return (
    <div>
      <div className="px-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8E99AA]">{title}</div>
      <div className="mt-2 space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = activeWorkspace === item.id;
          return (
            <Link
              key={item.id}
              href={`/edge-marketplace/dashboard?workspace=${item.id}`}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold transition ${
                active ? 'bg-white text-[#111827]' : 'text-[#D1D5DB] hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function getWorkspaceTitle(workspace: Workspace) {
  const item = [...commerceNav, ...platformNav].find((navItem) => navItem.id === workspace);
  return item?.label ?? 'Overview';
}

function OverviewWorkspace({
  products,
  summary,
  tenantKey,
}: {
  products: ReturnType<typeof buildDashboardProducts>;
  summary: ReturnType<typeof getCommerceSummary>;
  tenantKey: string;
}) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <SummaryCard icon={Store} label="Channel" value={tenantKey} />
        <SummaryCard icon={Boxes} label="Products" value={String(summary.totalProducts)} />
        <SummaryCard icon={ReceiptText} label="Open Orders" value="18" />
        <SummaryCard icon={CreditCard} label="Revenue" value="$12.8k" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <section className="rounded-lg border border-[#D7DBE3] bg-white p-5">
          <h2 className="text-lg font-semibold">Commerce Activity</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <Metric label="Orders today" value="7" />
            <Metric label="Items sold" value="34" />
            <Metric label="Needs fulfillment" value="5" />
          </div>
          <div className="mt-5">
            <ProductsTable products={products.slice(0, 5)} compact />
          </div>
        </section>

        <section className="rounded-lg border border-[#D7DBE3] bg-white p-5">
          <h2 className="text-lg font-semibold">Operations Queue</h2>
          <div className="mt-4 space-y-3 text-sm">
            <QueueItem title="Confirm shipping method" detail="Flat rate or carrier rates still need approval." />
            <QueueItem title="Review catalog gaps" detail="Four products need images or descriptions." />
            <QueueItem title="Storefront Studio" detail="Homepage draft is ready for client content review." />
          </div>
        </section>
      </div>
    </div>
  );
}

function StorefrontWorkspace({
  draft,
  submission,
  summary,
  tenantKey,
}: {
  draft: Parameters<typeof StorefrontEditor>[0]['draft'];
  submission: Awaited<ReturnType<typeof listSubmissions>>[number];
  summary: ReturnType<typeof getCommerceSummary>;
  tenantKey: string;
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_420px]">
      <div className="space-y-6">
        <section className="rounded-lg border border-[#D7DBE3] bg-white p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Storefront Studio</h2>
              <p className="mt-1 text-sm leading-6 text-[#667085]">
                Sanity-powered editing lives here as a controlled section editor. Commerce stays in the other dashboard tabs.
              </p>
            </div>
            <Link
              href="/studio"
              className="inline-flex items-center justify-center rounded-md bg-[#111827] px-4 py-2 text-sm font-semibold text-white"
            >
              Open Sanity Studio
            </Link>
          </div>
        </section>

        <StorefrontEditor draft={draft} />
      </div>

      <aside className="space-y-6">
        <section className="rounded-lg border border-[#D7DBE3] bg-white p-5">
          <h2 className="text-lg font-semibold">Editable Blocks</h2>
          <p className="mt-1 text-sm leading-6 text-[#667085]">
            Clients customize section presets and content, not raw layout code.
          </p>
          <div className="mt-4 space-y-2">
            {draft.homepageSections.map((section) => (
              <div key={section.id} className="rounded-md bg-[#F4F5F7] px-3 py-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium">{section.label}</span>
                  <StatusPill label={section.status} />
                </div>
                <div className="mt-2 grid gap-1 text-xs text-[#667085]">
                  <div>Layout: <span className="font-semibold text-[#172033]">{section.layoutPreset}</span></div>
                  <div>Style: <span className="font-semibold text-[#172033]">{section.stylePreset}</span></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-[#D7DBE3] bg-white p-5">
          <h2 className="text-lg font-semibold">Sanity Snapshot</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <SummaryRow label="Tenant document" value={tenantKey} />
            <SummaryRow label="Homepage" value="Editable draft" />
            <SummaryRow label="Products available" value={String(summary.totalProducts)} />
            <SummaryRow label="Brand colors" value={submission.normalizedPayload.brand.colors.join(', ') || 'Needs input'} />
            <SummaryRow label="SEO keywords" value={submission.normalizedPayload.content.seoKeywords.join(', ') || 'Needs input'} />
          </dl>
        </section>

        <section className="rounded-lg border border-[#D7DBE3] bg-white p-5">
          <h2 className="text-lg font-semibold">Customization Guardrails</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-[#475467]">
            <Guardrail label="Client can edit" value="Copy, media, video blocks, visibility, category bindings, presets" />
            <Guardrail label="Operator can edit" value="Available sections, locked sections, tenant theme rules" />
            <Guardrail label="System owns" value="Checkout layout, responsive rules, accessibility, data schema" />
          </div>
        </section>
      </aside>
    </div>
  );
}

function ProductsWorkspace({ products }: { products: ReturnType<typeof buildDashboardProducts> }) {
  return (
    <section className="rounded-lg border border-[#D7DBE3] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold">Products</h2>
          <p className="mt-1 text-sm leading-6 text-[#667085]">
            Vendure-style product operations: SKUs, collections, prices, stock, variants, and publishing status.
          </p>
        </div>
        <button className="rounded-md bg-[#111827] px-4 py-2 text-sm font-semibold text-white">Add product</button>
      </div>
      <div className="mt-5">
        <ProductsTable products={products} />
      </div>
    </section>
  );
}

function OrdersWorkspace() {
  const orders = [
    ['#EMH-1048', 'Processing', '$418.00', '5 items'],
    ['#EMH-1047', 'Paid', '$96.00', '1 item'],
    ['#EMH-1046', 'Processing', '$238.00', '3 items'],
    ['#EMH-1045', 'Paid', '$152.00', '2 items'],
  ];

  return (
    <section className="rounded-lg border border-[#D7DBE3] bg-white p-5">
      <h2 className="text-lg font-semibold">Orders</h2>
      <div className="mt-5 overflow-hidden rounded-lg border border-[#E5E7EB]">
        {orders.map(([code, status, total, items]) => (
          <div key={code} className="grid grid-cols-4 border-t border-[#E5E7EB] px-4 py-3 text-sm first:border-t-0">
            <div className="font-semibold">{code}</div>
            <div><StatusPill label={status.toLowerCase()} /></div>
            <div>{total}</div>
            <div className="text-right text-[#667085]">{items}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CustomersWorkspace() {
  return <PlaceholderWorkspace title="Customers" body="Customer profiles, order history, segments, and account status will appear here from Vendure." />;
}

function PromotionsWorkspace() {
  return <PlaceholderWorkspace title="Promotions" body="Coupons, discounts, eligibility rules, and campaign windows will live here." />;
}

function ShippingWorkspace() {
  return <PlaceholderWorkspace title="Shipping" body="Shipping methods, fulfillment queues, zones, and rate rules will live here." />;
}

function SettingsWorkspace({ submission, tenantKey }: { submission: Awaited<ReturnType<typeof listSubmissions>>[number]; tenantKey: string }) {
  return (
    <section className="rounded-lg border border-[#D7DBE3] bg-white p-5">
      <h2 className="text-lg font-semibold">Settings</h2>
      <dl className="mt-5 grid gap-4 text-sm md:grid-cols-2">
        <SummaryRow label="Brand" value={submission.clientBrandName} />
        <SummaryRow label="Tenant/channel" value={tenantKey} />
        <SummaryRow label="Contact" value={submission.primaryContactEmail} />
        <SummaryRow label="Marketplace model" value={submission.normalizedPayload.marketplace.model} />
      </dl>
    </section>
  );
}

function ProductsTable({ products, compact = false }: { products: ReturnType<typeof buildDashboardProducts>; compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#E5E7EB]">
      <div className="grid grid-cols-12 bg-[#F9FAFB] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#667085]">
        <div className="col-span-4">Product</div>
        <div className="col-span-2">Collection</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-1">Stock</div>
        {!compact && <div className="col-span-1">Variants</div>}
        <div className={`${compact ? 'col-span-3' : 'col-span-2'} text-right`}>Status</div>
      </div>
      {products.map((product) => (
        <div key={product.id} className="grid grid-cols-12 items-center border-t border-[#E5E7EB] px-4 py-3 text-sm">
          <div className="col-span-4">
            <div className="font-semibold">{product.name}</div>
            <div className="mt-1 text-xs text-[#667085]">{product.sku}</div>
          </div>
          <div className="col-span-2 text-[#475467]">{product.collection}</div>
          <div className="col-span-2 text-[#475467]">{formatCurrency(product.price)}</div>
          <div className="col-span-1 text-[#475467]">{product.stock}</div>
          {!compact && <div className="col-span-1 text-[#475467]">{product.variants}</div>}
          <div className={`${compact ? 'col-span-3' : 'col-span-2'} text-right`}>
            <StatusPill label={product.status} />
          </div>
        </div>
      ))}
    </div>
  );
}

function SummaryCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#D7DBE3] bg-white p-4">
      <Icon className="h-5 w-5 text-[#0F766E]" aria-hidden="true" />
      <div className="mt-4 truncate text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#667085]">{label}</div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-[#F4F5F7] px-4 py-3">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#667085]">{label}</div>
    </div>
  );
}

function QueueItem({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-md bg-[#F4F5F7] px-3 py-3">
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-[#667085]">{detail}</div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-[#667085]">{label}</dt>
      <dd className="text-right font-semibold text-[#172033]">{value}</dd>
    </div>
  );
}

function Guardrail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-[#F4F5F7] px-3 py-2">
      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6F1F]">{label}</div>
      <div className="mt-1 text-[#172033]">{value}</div>
    </div>
  );
}

function PlaceholderWorkspace({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-lg border border-[#D7DBE3] bg-white p-5">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[#667085]">{body}</p>
    </section>
  );
}
