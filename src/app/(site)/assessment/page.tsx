import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function AssessmentPage() {
  return (
    <>
      <section className="bg-[var(--color-navy-950)] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl text-center mx-auto">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold-400)] mb-3 block">
              Financial Assessment
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Complete Your Financial Assessment
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Our confidential financial assessment is the first step toward understanding
              your current financial position and exploring strategies tailored to your goals.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container size="narrow">
          <div className="bg-[var(--color-slate-100)] rounded-xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-[var(--color-navy-950)] mb-4 text-center">
              Financial Assessment Form
            </h2>
            <p className="text-[var(--color-slate-700)] mb-8 text-center">
              Complete the assessment below to get started. Your information is confidential
              and will only be used to prepare relevant educational guidance.
            </p>

            <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-[var(--color-slate-500)] rounded-lg">
              <p className="text-[var(--color-slate-500)] mb-4 text-center">
                [Financial Assessment Form Placeholder]
              </p>
              <p className="text-sm text-[var(--color-slate-500)] mb-6 text-center max-w-md">
                The actual form will be embedded here or linked to an external assessment tool.
                Configure the assessment URL in the Site Settings content panel.
              </p>
              <p className="text-xs text-[var(--color-slate-500)]">
                Common form fields: Annual income, assets, debts, retirement timeline,
                financial goals, risk tolerance, and current concerns.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[var(--color-slate-100)]">
        <Container size="narrow" className="text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy-950)] mb-4">
            Have questions first?
          </h2>
          <p className="text-[var(--color-slate-700)] mb-6">
            Schedule a confidential conversation with our team.
          </p>
          <Button href="/contact" variant="secondary">
            Contact Our Team
          </Button>
        </Container>
      </section>
    </>
  );
}
