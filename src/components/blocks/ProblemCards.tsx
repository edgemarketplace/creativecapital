import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const problems = [
  {
    title: 'Tax Burden in Retirement',
    description:
      'Many people assume their tax burden will decrease in retirement. Without proper planning, taxes can consume a significant portion of retirement income.',
  },
  {
    title: 'Market Volatility',
    description:
      'Traditional portfolios are subject to market swings that can derail retirement plans, especially when retirees are drawing down assets.',
  },
  {
    title: 'Limited Access to Capital',
    description:
      'Money tied up in IRAs, 401(k)s, and qualified accounts often comes with penalties, taxes, or restrictions when you need it most.',
  },
  {
    title: 'Lost Opportunity Cost',
    description:
      'Every dollar that could be working harder is a dollar lost to inflation, taxes, and missed growth opportunities.',
  },
  {
    title: 'Dependence on Outside Lenders',
    description:
      'Traditional financing requires credit checks, bank approval, and often comes with less favorable terms than private capital strategies.',
  },
];

export default function ProblemCards() {
  return (
    <section className="py-20 bg-[var(--color-navy-950)]">
      <Container>
        <SectionHeading
          eyebrow="Financial Headwinds"
          title="Common Challenges in Financial Planning"
          description="These are some of the challenges many families and professionals face. Understanding them is the first step toward building a more intentional strategy."
          variant="light"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="bg-[var(--color-navy-800)] border border-slate-700 rounded-lg p-6"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--color-blue-600)] flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-slate-400">
          [PLACEHOLDER: Content above is educational. Add client-specific scenarios as they are approved.]
        </p>
      </Container>
    </section>
  );
}
