import Link from 'next/link';
import Container from '@/components/ui/Container';

const columns = [
  {
    title: 'Our Approach',
    links: [
      { label: 'Our Process', href: '/strategies' },
      { label: 'Become Your Own Banker', href: '/strategies#own-banker' },
      { label: 'Ideal Investment', href: '/strategies#ideal-investment' },
    ],
  },
  {
    title: 'Who We Help',
    links: [
      { label: 'First Responders', href: '/first-responders' },
      { label: 'Business Owners', href: '/business-owners' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Articles', href: '/resources' },
      { label: 'Videos', href: '/videos' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[var(--color-navy-950)] text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="text-lg font-bold">
              Creative Capital <span className="text-[var(--color-blue-500)]">Strategies</span>
            </span>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Creative Capital Strategies helps families, professionals, first responders, and business owners explore financial strategies designed around access, predictability, protection, and long-term control.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold-400)] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            Copyright {new Date().getFullYear()} Creative Capital Strategies. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 max-w-2xl text-center md:text-right">
            [DISCLOSURE PLACEHOLDER - Content is for educational purposes only and should not be considered individualized financial advice. All investments carry risk. Consult a qualified professional before making financial decisions.]
          </p>
        </div>
      </Container>
    </footer>
  );
}
