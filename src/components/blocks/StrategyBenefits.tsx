import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const benefits = [
  {
    title: 'Control',
    description: 'Maintain decision-making authority over your financial strategy and capital allocation.',
  },
  {
    title: 'Liquidity',
    description: 'Access your money when you need it, without unnecessary penalties, delays, or loan approvals.',
  },
  {
    title: 'Predictability',
    description: 'Build strategies that reduce financial surprises and increase confidence in your plan.',
  },
  {
    title: 'Flexible Access',
    description: 'Use your capital for any purpose - investments, emergencies, opportunities - without lender restrictions.',
  },
  {
    title: 'Tax-Aware Planning',
    description: 'Understand and plan for the tax implications of different financial strategies.',
  },
  {
    title: 'Family Legacy',
    description: 'Explore strategies designed to protect and efficiently transfer wealth across generations.',
  },
];

export default function StrategyBenefits() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Strategy Benefits"
          title="What a Thoughtful Financial Strategy Can Provide"
          description="These are some of the key benefits that a well-designed financial strategy may offer."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white p-6 rounded-lg shadow-md border border-[var(--color-slate-200)] hover:shadow-lg transition-shadow"
            >
              <div className="w-3 h-3 rounded-full bg-[var(--color-gold-500)] mb-4" />
              <h3 className="text-lg font-semibold text-[var(--color-navy-950)] mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-[var(--color-slate-700)]">{b.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
