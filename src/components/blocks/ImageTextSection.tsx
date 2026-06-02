import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface ImageTextSectionProps {
  eyebrow?: string;
  heading: string;
  body: string;
  imagePosition?: 'left' | 'right';
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ImageTextSection({
  eyebrow = 'Our Approach',
  heading,
  body,
  imagePosition = 'right',
  ctaLabel,
  ctaHref,
}: ImageTextSectionProps) {
  const content = (
    <div className="space-y-6">
      <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-blue-600)] block">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy-950)] leading-tight">
        {heading}
      </h2>
      <p className="text-[var(--color-slate-700)] leading-relaxed">{body}</p>
      {ctaLabel && ctaHref && (
        <Button href={ctaHref}>{ctaLabel}</Button>
      )}
    </div>
  );

  const imagePlaceholder = (
    <div className="aspect-[4/3] bg-[var(--color-navy-900)] rounded-xl flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-gold-500)]/20 flex items-center justify-center mb-3">
          <span className="text-2xl text-[var(--color-gold-400)]">IMG</span>
        </div>
        <p className="text-xs text-slate-400">[Image placeholder]</p>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-[var(--color-slate-100)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {imagePosition === 'left' ? (
            <>
              {imagePlaceholder}
              {content}
            </>
          ) : (
            <>
              {content}
              {imagePlaceholder}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
