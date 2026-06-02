import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AssessmentCta from '@/components/blocks/AssessmentCta';

const challenges = [
  'Early retirement planning and pension optimization',
  'Managing tax-advantaged accounts specific to first responders',
  'Protecting income and assets during high-risk careers',
  'Planning for career transitions and post-service financial stability',
  'Family protection and legacy strategies',
  'Understanding unique state and federal benefits',
];

export default function FirstRespondersPage() {
  return (
    <>
      <section className="bg-[var(--color-navy-950)] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold-400)] mb-3 block">
              First Responders
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Financial Education for First Responders
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              First responders face unique financial challenges. Early retirement windows,
              pension decisions, and the physical demands of the job create a need for
              proactive financial education and strategy planning.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Unique Financial Considerations for First Responders"
            description="We help first responders and their families understand and navigate the financial decisions specific to their careers."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {challenges.map((challenge) => (
              <div key={challenge} className="flex items-start gap-3 p-4 bg-[var(--color-slate-100)] rounded-lg">
                <div className="w-2 h-2 rounded-full bg-[var(--color-blue-600)] mt-2 shrink-0" />
                <p className="text-[var(--color-slate-700)]">{challenge}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-[var(--color-slate-100)]">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[var(--color-navy-950)] mb-4">
              Start Your Financial Assessment
            </h2>
            <p className="text-[var(--color-slate-700)] mb-8">
              Complete our financial assessment to explore how Creative Capital Strategies
              can help you build a more intentional financial plan.
            </p>
            <a
              href="/assessment"
              className="inline-block px-8 py-4 text-sm font-semibold uppercase tracking-wide bg-[var(--color-gold-500)] text-[var(--color-navy-950)] rounded-md hover:bg-[var(--color-gold-400)] transition-colors"
            >
              Complete Your Assessment
            </a>
          </div>
        </Container>
      </section>

      <AssessmentCta />
    </>
  );
}
