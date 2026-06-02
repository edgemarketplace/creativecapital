'use client';

import Link from 'next/link';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: { label: string; href: string }[];
}

export default function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-[var(--color-navy-950)]">Menu</span>
          <button
            onClick={onClose}
            className="p-2 text-[var(--color-slate-700)]"
            aria-label="Close menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="py-3 px-2 text-[var(--color-navy-950)] font-medium hover:bg-[var(--color-slate-100)] rounded-md transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/assessment"
            onClick={onClose}
            className="mt-4 px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide bg-[var(--color-gold-500)] text-[var(--color-navy-950)] rounded-md"
          >
            Complete Your Assessment
          </Link>
        </nav>
      </div>
    </div>
  );
}
