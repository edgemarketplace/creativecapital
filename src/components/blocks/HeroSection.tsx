import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative bg-[var(--color-navy-950)] overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy-950)] via-[var(--color-navy-900)] to-[var(--color-navy-800)] opacity-95" />
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold-500)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-blue-600)] rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold-400)] mb-4 block">
            Creative Capital Strategies
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Build a Financial Strategy with More{' '}
            <span className="text-[var(--color-gold-400)]">Control</span>,{' '}
            <span className="text-[var(--color-blue-500)]">Flexibility</span>, and{' '}
            <span className="text-[var(--color-gold-400)]">Confidence</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
            Discover a more intentional approach to managing your financial life. Our
            education-first process helps families, professionals, first responders, and
            business owners explore strategies designed around access, predictability,
            protection, and long-term financial control.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/assessment" size="lg">
              Complete Your Financial Assessment
            </Button>
            <Button href="/videos" variant="ghost" size="lg">
              Watch the Introduction
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
