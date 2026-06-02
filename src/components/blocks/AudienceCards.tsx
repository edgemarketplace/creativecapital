import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';

const audiences = [
  {
    title: 'First Responders',
    slug: '/first-responders',
    description:
      'Early retirement planning, pension optimization, and financial education tailored to the unique needs of police, fire, EMS, and military personnel.',
    icon: 'Shield',
  },
  {
    title: 'Business Owners',
    slug: '/business-owners',
    description:
      'Capital management, tax-efficient strategies, and growth planning for entrepreneurs and business owners.',
    icon: 'Briefcase',
  },
  {
    title: 'Families',
    slug: '/resources',
    description:
      'Wealth building, tax awareness, and legacy strategies for families planning across generations.',
    icon: 'Users',
  },
  {
    title: 'Approaching Retirement',
    slug: '/resources',
    description:
      'Retirement income planning, tax strategies, and financial education for those nearing retirement.',
    icon: 'GradCap',
  },
];

export default function AudienceCards() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Who We Help"
          title="Financial Education for Every Stage"
          description="Creative Capital Strategies provides financial education and strategy guidance for individuals and families at every stage of their financial journey."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((a) => (
            <Link
              key={a.title}
              href={a.slug}
              className="group bg-white p-8 rounded-xl shadow-md border border-[var(--color-slate-200)] hover:shadow-lg hover:border-[var(--color-blue-600)]/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-navy-950)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-blue-600)] transition-colors">
                  <span className="text-[var(--color-gold-400)] text-sm font-bold">{a.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-navy-950)] group-hover:text-[var(--color-blue-600)] transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-slate-700)]">{a.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
