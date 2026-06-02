import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const metrics = [
  {
    value: 'Education First',
    label: 'Our Process',
    description: 'Every engagement begins with education, not a product pitch.',
  },
  {
    value: 'Personalized',
    label: 'Our Approach',
    description: 'Strategies are tailored to your specific financial situation and goals.',
  },
  {
    value: 'Confidential',
    label: 'Our Commitment',
    description: 'Your financial information is handled with the utmost privacy.',
  },
  {
    value: 'Transparent',
    label: 'Our Standard',
    description: 'Clear explanations of concepts, costs, and expected outcomes.',
  },
];

export default function TrustMetrics() {
  return (
    <section className="py-20 bg-[var(--color-slate-100)]">
      <Container>
        <SectionHeading
          eyebrow="Our Commitment"
          title="How We Work With You"
          description="Creative Capital Strategies is built on a foundation of education, transparency, and client-first service."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-white p-6 rounded-lg shadow-sm border border-[var(--color-slate-200)] text-center"
            >
              <div className="text-2xl font-bold text-[var(--color-navy-950)] mb-1">
                {m.value}
              </div>
              <div className="text-sm font-semibold text-[var(--color-blue-600)] uppercase tracking-wider mb-2">
                {m.label}
              </div>
              <p className="text-sm text-[var(--color-slate-700)]">{m.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[var(--color-slate-500)]">
          [PLACEHOLDER: Add verified metrics and specific value propositions as they are confirmed.]
        </p>
      </Container>
    </section>
  );
}
