import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const resources = [
  {
    title: 'Understanding Financial Headwinds',
    category: 'Education',
    description: 'Learn about the five most common financial challenges and how to address them.',
  },
  {
    title: 'Tax-Efficient Retirement Strategies',
    category: 'Retirement',
    description: 'Explore how to plan for retirement taxes and maximize your income in retirement.',
  },
  {
    title: 'Business Capital Management',
    category: 'Business',
    description: 'Strategies for managing business capital more efficiently and building long-term wealth.',
  },
  {
    title: 'Legacy and Wealth Transfer',
    category: 'Legacy',
    description: 'Educational guide on strategies for efficient wealth transfer to the next generation.',
  },
  {
    title: 'First Responder Financial Planning',
    category: 'First Responders',
    description: 'A comprehensive guide to financial planning for first responders and their families.',
  },
  {
    title: 'The Cost of Lost Opportunity',
    category: 'Education',
    description: 'Understand how inaction and missed opportunities can impact your financial future.',
  },
];

export default function ResourceGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Educational Resources"
          title="Explore Our Resource Library"
          description="Our educational resources are designed to help you make more informed financial decisions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r) => (
            <div
              key={r.title}
              className="bg-white p-6 rounded-lg shadow-sm border border-[var(--color-slate-200)] hover:shadow-md transition-shadow"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-blue-600)]">
                {r.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-[var(--color-navy-950)] mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-[var(--color-slate-700)]">{r.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/resources">View All Resources</Button>
        </div>
      </Container>
    </section>
  );
}
