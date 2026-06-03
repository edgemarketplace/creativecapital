'use client';

import { ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';
import type { FormEvent, ReactNode } from 'react';
import { useState } from 'react';

const textInput =
  'mt-2 w-full rounded-md border border-[#D8D3C8] bg-white px-3 py-2 text-sm text-[#172033] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/15';
const label = 'text-sm font-medium text-[#263244]';

function Field({
  name,
  labelText,
  type = 'text',
  required = false,
  placeholder,
}: {
  name: string;
  labelText: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className={label}>
      {labelText}
      <input name={name} type={type} required={required} placeholder={placeholder} className={textInput} />
    </label>
  );
}

function TextArea({ name, labelText, required = false, placeholder }: { name: string; labelText: string; required?: boolean; placeholder?: string }) {
  return (
    <label className={label}>
      {labelText}
      <textarea name={name} required={required} placeholder={placeholder} rows={4} className={textInput} />
    </label>
  );
}

function Select({
  name,
  labelText,
  required = false,
  children,
}: {
  name: string;
  labelText: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className={label}>
      {labelText}
      <select name={name} required={required} className={textInput}>
        {children}
      </select>
    </label>
  );
}

export default function IntakePage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [operatorPath, setOperatorPath] = useState('/edge-marketplace/operator');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/edge-marketplace/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.errors?.join(' ') ?? 'Submission failed.');
      }

      setOperatorPath(`/edge-marketplace/operator/${data.submission.id}`);
      setStatus('success');
      setMessage('Submission received. A provisioning plan is ready for operator review.');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Submission failed.');
    }
  }

  return (
    <section className="bg-[#F7F5EF] py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link href="/edge-marketplace" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E]">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to hub
        </Link>

        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8A6F1F]">Client Intake</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#172033]">New marketplace setup</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5D6675]">
            Capture enough information to create a branded demo marketplace and draft the Vendure/Sanity setup plan.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <section className="rounded-lg border border-[#D9D4C7] bg-white p-5">
            <h2 className="text-lg font-semibold text-[#172033]">Company Profile</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Field name="legalName" labelText="Legal company name" required />
              <Field name="brandName" labelText="Public brand name" required />
              <Field name="website" labelText="Website" type="url" placeholder="https://example.com" />
              <Field name="timezone" labelText="Time zone" required placeholder="America/Los_Angeles" />
              <Field name="contactName" labelText="Primary contact name" required />
              <Field name="contactEmail" labelText="Primary contact email" type="email" required />
              <Field name="contactPhone" labelText="Primary contact phone" />
              <Field name="approvalContacts" labelText="Approval contact emails" required placeholder="name@example.com, ops@example.com" />
            </div>
            <div className="mt-4">
              <TextArea name="address" labelText="Business address" />
            </div>
          </section>

          <section className="rounded-lg border border-[#D9D4C7] bg-white p-5">
            <h2 className="text-lg font-semibold text-[#172033]">Marketplace Model</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Select name="marketplaceModel" labelText="Marketplace type" required>
                <option value="single-seller">Single seller</option>
                <option value="multi-seller">Multi-seller</option>
                <option value="curated-vendors">Curated vendors</option>
                <option value="catalog-only">Catalog only</option>
              </Select>
              <Select name="audience" labelText="Audience" required>
                <option value="B2C">B2C</option>
                <option value="B2B">B2B</option>
                <option value="hybrid">Hybrid</option>
              </Select>
              <Field name="productTypes" labelText="Product types" required placeholder="physical, digital" />
              <Field name="categories" labelText="Product categories" required placeholder="apparel, accessories, services" />
              <Field name="estimatedProductCount" labelText="Estimated product count" type="number" required />
              <Field name="estimatedSellerCount" labelText="Estimated seller count" type="number" />
            </div>
          </section>

          <section className="rounded-lg border border-[#D9D4C7] bg-white p-5">
            <h2 className="text-lg font-semibold text-[#172033]">Brand And Catalog</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Field name="brandColors" labelText="Brand colors" placeholder="#0F766E, #C8A84E" />
              <Field name="logoAssetId" labelText="Logo asset ID" placeholder="asset_logo_123" />
              <Select name="typographyPreference" labelText="Typography preference">
                <option value="">No preference</option>
                <option value="modern">Modern</option>
                <option value="editorial">Editorial</option>
                <option value="utilitarian">Utilitarian</option>
                <option value="premium">Premium</option>
              </Select>
              <Field name="referenceWebsites" labelText="Reference websites" placeholder="site.com, another.com" />
              <Select name="catalogSourceType" labelText="Product data source" required>
                <option value="none-yet">None yet</option>
                <option value="spreadsheet">Spreadsheet</option>
                <option value="manual">Manual entry</option>
                <option value="ecommerce-export">Ecommerce export</option>
                <option value="api">API</option>
              </Select>
              <Field name="catalogAssetIds" labelText="Catalog asset IDs" placeholder="asset_catalog_123" />
              <Select name="imageSource" labelText="Product image source">
                <option value="">Unknown</option>
                <option value="included">Included in catalog</option>
                <option value="external-links">External links</option>
                <option value="need-help">Need help</option>
                <option value="none-yet">None yet</option>
              </Select>
              <Field name="skuNotes" labelText="SKU notes" />
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <label className="flex items-center gap-3 text-sm font-medium text-[#263244]">
                <input name="hasVariants" type="checkbox" className="h-4 w-4 accent-[#0F766E]" />
                Products have variants
              </label>
              <label className="flex items-center gap-3 text-sm font-medium text-[#263244]">
                <input name="inventoryTracking" type="checkbox" className="h-4 w-4 accent-[#0F766E]" />
                Track inventory
              </label>
            </div>
            <div className="mt-4">
              <TextArea name="brandVoice" labelText="Brand voice" placeholder="Clear, practical, premium, friendly..." />
            </div>
          </section>

          <section className="rounded-lg border border-[#D9D4C7] bg-white p-5">
            <h2 className="text-lg font-semibold text-[#172033]">Operations, Content, Launch</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Field name="paymentProvider" labelText="Payment provider preference" placeholder="Stripe, PayPal, unknown" />
              <Select name="shippingApproach" labelText="Shipping approach">
                <option value="">Unknown</option>
                <option value="flat-rate">Flat rate</option>
                <option value="carrier-rates">Carrier rates</option>
                <option value="pickup">Pickup</option>
                <option value="digital-only">Digital only</option>
              </Select>
              <Field name="fulfillmentOwner" labelText="Fulfillment owner" placeholder="client, vendors, third-party" />
              <Field name="notificationEmails" labelText="Notification emails" placeholder="orders@example.com" />
              <Field name="homepageGoals" labelText="Homepage goals" required placeholder="sell products, recruit vendors" />
              <Field name="seoKeywords" labelText="SEO keywords" placeholder="local marketplace, handmade goods" />
              <Field name="targetDate" labelText="Desired launch date" type="date" />
              <Field name="domain" labelText="Production domain" placeholder="market.example.com" />
              <Field name="requiredIntegrations" labelText="Required integrations" placeholder="CRM, analytics, email" />
            </div>
            <div className="mt-4 space-y-4">
              <TextArea name="aboutCopy" labelText="About copy" />
              <TextArea name="faqItems" labelText="FAQ items" placeholder="Question | Answer, one pair per line" />
              <TextArea name="supportDetails" labelText="Support details" />
              <TextArea name="taxNotes" labelText="Tax notes" />
              <TextArea name="returnsPolicy" labelText="Return/refund policy" />
              <label className="flex items-center gap-3 text-sm font-medium text-[#263244]">
                <input name="demoRequired" type="checkbox" defaultChecked className="h-4 w-4 accent-[#0F766E]" />
                Demo environment requested
              </label>
            </div>
          </section>

          {message && (
            <div
              className={`rounded-lg border p-4 text-sm ${
                status === 'success'
                  ? 'border-[#B7DED6] bg-[#ECF8F5] text-[#115E59]'
                  : 'border-[#F0C2C2] bg-[#FFF1F1] text-[#8A1F1F]'
              }`}
            >
              {message}
              {status === 'success' && (
                <Link href={operatorPath} className="ml-2 font-semibold underline">
                  Review plan
                </Link>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center gap-2 rounded-md bg-[#172033] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#263244] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            {status === 'submitting' ? 'Submitting...' : 'Submit intake'}
          </button>
        </form>
      </div>
    </section>
  );
}
