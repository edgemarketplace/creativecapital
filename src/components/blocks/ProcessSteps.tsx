import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    step: '01',
    title: 'Complete the Financial Assessment',
    description:
      'Start by filling out our confidential financial assessment. This helps us understand your current situation, goals, and questions.',
  },
  {
    step: '02',
    title: 'Meet with the CCS Team',
    description:
      'Schedule a conversation with our team to discuss your assessment and explore educational strategies relevant to your situation.',
  },
  {
    step: '03',
    title: 'Review Your Personalized Strategy',
    description:
      'We will walk you through educational concepts and strategies tailored to your financial goals, risk tolerance, and time horizon.',
  },
  {
    step: '04',
    title: 'Implement with Ongoing Guidance',
    description:
      'If you choose to move forward, we provide ongoing education and support as you implement and manage your financial strategy.',
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-[var(--color-slate-100)]">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="How We Work Together"
          description="Our structured, four-step process ensures you receive personalized financial education and clear guidance."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <div className="text-5xl font-bold text-[var(--color-blue-600)]/20 absolute -top-2 -left-1">
                {s.step}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[var(--color-slate-200)] relative z-10">
                <h3 className="text-lg font-semibold text-[var(--color-navy-950)] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--color-slate-700)]">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
