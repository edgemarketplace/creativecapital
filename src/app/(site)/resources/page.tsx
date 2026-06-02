import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const categories = [
  {
    title: 'Tax-Efficient Strategies',
    description: 'Articles and guides on understanding and planning for tax impacts in your financial life.',
  },
  {
    title: 'Wealth Building',
    description: 'Educational content on building and preserving wealth across market cycles.',
  },
  {
    title: 'Retirement Planning',
    description: 'Guides and resources for retirement income planning and pension optimization.',
  },
  {
    title: 'Business Finance',
    description: 'Resources for business owners on capital management and business growth strategies.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-[var(--color-navy-950)] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold-400)] mb-3 block">
              Resources
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Educational Resources
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Explore our library of educational resources designed to help you make
              more informed financial decisions.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Resource Categories"
            description="Browse our educational content organized by topic."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="p-6 rounded-lg border border-[var(--color-slate-200)] bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-[var(--color-navy-950)] mb-2">{cat.title}</h3>
                <p className="text-sm text-[var(--color-slate-700)] mb-4">{cat.description}</p>
                <p className="text-xs text-[var(--color-slate-500)]">
                  [Articles will be managed through Sanity CMS once a project is configured.]
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[var(--color-slate-100)]">
        <Container size="narrow" className="text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy-950)] mb-4">
            Want to learn more?
          </h2>
          <p className="text-[var(--color-slate-700)] mb-6">
            Complete your financial assessment to get personalized educational guidance.
          </p>
          <Button href="/assessment">Start Your Assessment</Button>
        </Container>
      </section>
    </>
  );
}
