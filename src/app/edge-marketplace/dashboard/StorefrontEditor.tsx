'use client';

import { Save } from 'lucide-react';
import { useState } from 'react';
import type { StorefrontDraft } from '@/lib/edge-marketplace/types';

const inputClass =
  'mt-2 w-full rounded-md border border-[#D8D3C8] bg-white px-3 py-2 text-sm text-[#172033] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/15';

export default function StorefrontEditor({ draft }: { draft: StorefrontDraft }) {
  const [form, setForm] = useState({
    heroHeadline: draft.heroHeadline,
    heroSubheading: draft.heroSubheading,
    announcementText: draft.announcementText,
    primaryCtaLabel: draft.primaryCtaLabel,
    secondaryCtaLabel: draft.secondaryCtaLabel,
    featuredCategories: draft.featuredCategories.join(', '),
    typographyPreset: draft.brandKit.typographyPreset,
    buttonPreset: draft.brandKit.buttonPreset,
    cornerPreset: draft.brandKit.cornerPreset,
  });
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function saveDraft() {
    setStatus('saving');

    try {
      const response = await fetch(`/api/edge-marketplace/storefront/${draft.submissionId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Save failed.');
      setStatus('saved');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="rounded-lg border border-[#D9D4C7] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#172033]">Storefront Edit</h2>
          <p className="mt-1 text-sm leading-6 text-[#667085]">
            Edit the Sanity-backed storefront draft the client will see in their marketplace.
          </p>
        </div>
        <button
          type="button"
          onClick={saveDraft}
          disabled={status === 'saving'}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-[#172033] px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Save className="h-4 w-4" aria-hidden="true" />
          {status === 'saving' ? 'Saving...' : 'Save draft'}
        </button>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <label className="text-sm font-medium text-[#263244]">
          Typography preset
          <select
            value={form.typographyPreset}
            onChange={(event) => updateField('typographyPreset', event.target.value)}
            className={inputClass}
          >
            <option value="modern">Modern</option>
            <option value="editorial">Editorial</option>
            <option value="utilitarian">Utilitarian</option>
            <option value="premium">Premium</option>
          </select>
        </label>
        <label className="text-sm font-medium text-[#263244]">
          Button preset
          <select
            value={form.buttonPreset}
            onChange={(event) => updateField('buttonPreset', event.target.value)}
            className={inputClass}
          >
            <option value="solid">Solid</option>
            <option value="outline">Outline</option>
            <option value="soft">Soft</option>
          </select>
        </label>
        <label className="text-sm font-medium text-[#263244]">
          Corner style
          <select
            value={form.cornerPreset}
            onChange={(event) => updateField('cornerPreset', event.target.value)}
            className={inputClass}
          >
            <option value="crisp">Crisp</option>
            <option value="soft">Soft</option>
            <option value="rounded">Rounded</option>
          </select>
        </label>
        <label className="text-sm font-medium text-[#263244]">
          Hero headline
          <input
            value={form.heroHeadline}
            onChange={(event) => updateField('heroHeadline', event.target.value)}
            className={inputClass}
          />
        </label>
        <label className="text-sm font-medium text-[#263244]">
          Announcement bar
          <input
            value={form.announcementText}
            onChange={(event) => updateField('announcementText', event.target.value)}
            className={inputClass}
          />
        </label>
        <label className="text-sm font-medium text-[#263244] lg:col-span-2">
          Hero subheading
          <textarea
            value={form.heroSubheading}
            onChange={(event) => updateField('heroSubheading', event.target.value)}
            rows={4}
            className={inputClass}
          />
        </label>
        <label className="text-sm font-medium text-[#263244]">
          Primary CTA
          <input
            value={form.primaryCtaLabel}
            onChange={(event) => updateField('primaryCtaLabel', event.target.value)}
            className={inputClass}
          />
        </label>
        <label className="text-sm font-medium text-[#263244]">
          Secondary CTA
          <input
            value={form.secondaryCtaLabel}
            onChange={(event) => updateField('secondaryCtaLabel', event.target.value)}
            className={inputClass}
          />
        </label>
        <label className="text-sm font-medium text-[#263244] lg:col-span-2">
          Featured categories
          <input
            value={form.featuredCategories}
            onChange={(event) => updateField('featuredCategories', event.target.value)}
            className={inputClass}
          />
        </label>
      </div>

      {status === 'saved' && <p className="mt-4 text-sm font-medium text-[#0F766E]">Storefront draft saved.</p>}
      {status === 'error' && <p className="mt-4 text-sm font-medium text-[#8A1F1F]">Could not save storefront draft.</p>}
    </section>
  );
}
