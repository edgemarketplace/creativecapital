'use client';

import { FormEvent } from 'react';

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="space-y-6 max-w-xl mx-auto" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-slate-700)] mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 border border-[var(--color-slate-200)] rounded-md focus:ring-2 focus:ring-[var(--color-blue-600)] focus:border-transparent outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-slate-700)] mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 border border-[var(--color-slate-200)] rounded-md focus:ring-2 focus:ring-[var(--color-blue-600)] focus:border-transparent outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-slate-700)] mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 border border-[var(--color-slate-200)] rounded-md focus:ring-2 focus:ring-[var(--color-blue-600)] focus:border-transparent outline-none resize-y"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-[var(--color-gold-500)] text-[var(--color-navy-950)] font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-[var(--color-gold-400)] transition-colors"
      >
        Send Message
      </button>
      <p className="text-xs text-[var(--color-slate-500)]">
        This form is a placeholder. In production, connect to a form handling service or API.
      </p>
    </form>
  );
}
