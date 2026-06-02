import Container from '@/components/ui/Container';

export default function ArticlePage({ params }: any) {
  return (
    <>
      <section className="bg-[var(--color-navy-950)] py-20">
        <Container size="narrow">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold-400)] mb-3 block">
            Resource
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            [Article Title Placeholder]
          </h1>
          <p className="mt-4 text-slate-300 text-sm">
            [Published Date Placeholder] | By [Author Placeholder]
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container size="narrow">
          <p className="text-[var(--color-slate-700)]">
            [Article content will be loaded from Sanity CMS. This is a placeholder for the article detail view.]
          </p>
        </Container>
      </section>
    </>
  );
}
