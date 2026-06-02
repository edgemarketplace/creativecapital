import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AssessmentCta from '@/components/blocks/AssessmentCta';

const benefits = [
  { title: 'Access to Capital', desc: 'Explore strategies for accessing business capital efficiently, including private banking approaches.' },
  { title: 'Tax-Efficient Compensation', desc: 'Understand how to structure compensation and distributions to reduce tax impact.' },
  { title: 'Employee Benefits Strategy', desc: 'Design benefit plans that attract and retain talent while maximizing owner flexibility.' },
  { title: 'Business Succession Planning', desc: 'Plan for business continuity, transfer, or exit with structured strategies.' },
  { title: 'Cash Flow Optimization', desc: 'Manage fluctuating cash flow with smarter treasury and reserve strategies.' },
  { title: 'Legacy & Family Wealth', desc: 'Build strategies that protect and transfer wealth across generations.' },
];

export default function BusinessOwnersPage() {
  return (
    <>
      <section className="bg-[var(--color-navy-950)] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold-400)] mb-3 block">
              Business Owners
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Financial Strategies for Business Owners
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Business owners have unique opportunities and challenges when it comes
              to managing personal and business finances. We help you explore integrated
              strategies that work across both.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Business Owner Financial Strategies"
            description="Business owners face a unique set of financial decisions that require specialized education and planning."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-lg shadow-md border border-[var(--color-slate-200)] bg-white">
                <h3 className="text-lg font-semibold text-[var(--color-navy-950)] mb-2">{b.title}</h3>
                <p className="text-sm text-[var(--color-slate-700)]">{b.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <AssessmentCta />
    </>
  );
}
