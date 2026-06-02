import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function AssessmentCta() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-950)] to-[var(--color-navy-800)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold-500)] rounded-full blur-3xl opacity-10" />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Ready to Take the Next Step?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Complete your confidential financial assessment to begin exploring more
            intentional strategies for your financial future.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/assessment" size="lg">
              Complete Your Assessment
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Schedule a Conversation
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Fast Start: Complete your{' '}
            <a href="/assessment" className="text-[var(--color-gold-400)] underline">
              Financial Assessment Form
            </a>{' '}
            or{' '}
            <a href="/contact" className="text-[var(--color-gold-400)] underline">
              Book Your Discovery Call
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
