import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    quote:
      '[PLACEHOLDER: Add approved testimonial here. Must be from a real client who has consented to public use. No fabricated endorsements.]',
    name: '[NAME PLACEHOLDER]',
    role: '[ROLE PLACEHOLDER]',
  },
  {
    quote:
      '[PLACEHOLDER: Add approved testimonial here. Testimonials must be verified and compliant with applicable regulations.]',
    name: '[NAME PLACEHOLDER]',
    role: '[ROLE PLACEHOLDER]',
  },
  {
    quote:
      '[PLACEHOLDER: Add approved testimonial here. Ensure all testimonials include appropriate disclosures per FINRA/SEC guidelines.]',
    name: '[NAME PLACEHOLDER]',
    role: '[ROLE PLACEHOLDER]',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[var(--color-slate-100)]">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Client testimonials are shared with permission. Individual results vary. Past performance does not guarantee future results."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm border border-[var(--color-slate-200)] flex flex-col"
            >
              <svg className="w-8 h-8 text-[var(--color-gold-500)] mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-[var(--color-slate-700)] italic flex-1 mb-4">
                {t.quote}
              </p>
              <div className="border-t border-[var(--color-slate-200)] pt-4">
                <p className="font-semibold text-[var(--color-navy-950)] text-sm">{t.name}</p>
                <p className="text-xs text-[var(--color-slate-500)]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[var(--color-slate-500)]">
          [PLACEHOLDER: All testimonials must be approved for public use. Remove placeholder content before launch.]
        </p>
      </Container>
    </section>
  );
}
