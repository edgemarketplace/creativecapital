import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AssessmentCta from '@/components/blocks/AssessmentCta';
import PortableText from '@/components/ui/PortableText';

export default function StrategiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy-950)] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold-400)] mb-3 block">
              Our Strategy
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Our Approach to Financial Education
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Creative Capital Strategies focuses on education-first financial guidance.
              We help you explore strategies built around control, access, predictability,
              and long-term protection.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container size="narrow">
          <PortableText
            value={[
              {
                _type: 'block',
                children: [
                  {
                    _type: 'span',
                    text: 'Our approach centers on helping you ask better questions about your financial life. Rather than leading with product recommendations, we begin with education - exploring the principles behind wealth building, tax awareness, and risk management.',
                  },
                ],
              },
              {
                _type: 'block',
                children: [
                  {
                    _type: 'span',
                    text: 'Through this process, you will learn to identify financial headwinds - excessive taxation, loss of capital control, restricted liquidity, and lost opportunity cost - and explore strategies designed to address them.',
                  },
                ],
              },
            ]}
          />
        </Container>
      </section>

      {/* Key Pillars */}
      <section className="py-20 bg-[var(--color-slate-100)]">
        <Container>
          <SectionHeading
            title="Core Pillars of Our Education"
            description="These foundational concepts guide every conversation and strategy we explore."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Control', desc: 'Understanding how to maintain decision-making power over your capital and strategy choices.' },
              { title: 'Liquidity', desc: 'Exploring how accessible your money is when you need it most, without unnecessary penalties or delays.' },
              { title: 'Predictability', desc: 'Building financial plans that reduce surprises and increase confidence in outcomes.' },
              { title: 'Tax Awareness', desc: 'Evaluating how taxes impact different financial strategies and how to plan accordingly.' },
              { title: 'Legacy & Protection', desc: 'Educating families on strategies for efficient wealth transfer and asset protection.' },
              { title: 'Adaptability', desc: 'Creating strategies flexible enough to evolve as your life and goals change.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-md border border-[var(--color-slate-200)]">
                <h3 className="text-lg font-semibold text-[var(--color-navy-950)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-slate-700)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <AssessmentCta />
    </>
  );
}
