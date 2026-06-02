'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import MobileMenu from './MobileMenu';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Approach', href: '/strategies' },
  { label: 'Who We Help', href: '/first-responders' },
  { label: 'Resources', href: '/resources' },
  { label: 'Videos', href: '/videos' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[var(--color-slate-200)]">
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[var(--color-navy-950)]">
              Creative Capital{' '}
              <span className="text-[var(--color-blue-600)]">Strategies</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-slate-700)] hover:text-[var(--color-navy-950)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/assessment"
              className="ml-4 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide bg-[var(--color-gold-500)] text-[var(--color-navy-950)] rounded-md hover:bg-[var(--color-gold-400)] transition-colors"
            >
              Complete Your Assessment
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-[var(--color-navy-950)]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </Container>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} items={navItems} />
    </header>
  );
}
