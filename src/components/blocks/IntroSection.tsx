import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export default function IntroSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Our Mission"
              title="Helping You Ask Better Financial Questions"
              align="left"
            />
            <div className="space-y-4 text-[var(--color-slate-700)]">
              <p>
                Most people are never taught to question their financial assumptions.
                They follow conventional advice without understanding the trade-offs.
                At Creative Capital Strategies, we believe the right questions lead
                to better decisions.
              </p>
              <p>
                What if your money could work harder for you? What if there were
                strategies designed to give you more control over your financial
                future? What if you could access your capital without unnecessary
                restrictions?
              </p>
              <p>
                These are the questions we explore together through our
                education-first consulting process.
              </p>
            </div>
          </div>
          <div className="bg-[var(--color-navy-900)] rounded-xl p-8 lg:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-gold-500)] flex items-center justify-center">
              <span className="text-3xl text-[var(--color-navy-950)] font-bold">?</span>
            </div>
            <p className="text-slate-300 italic text-lg">
              The goal is not to follow the crowd. It is to understand why the
              crowd follows certain paths - and to decide intentionally which path
              is right for your financial life.
            </p>
            <p className="mt-4 text-[var(--color-gold-400)] font-semibold text-sm">
              [PLACEHOLDER: Replace with verified team quote if available.]
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
