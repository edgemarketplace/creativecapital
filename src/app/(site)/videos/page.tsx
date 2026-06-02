import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export default function VideosPage() {
  return (
    <>
      <section className="bg-[var(--color-navy-950)] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold-400)] mb-3 block">
              Videos
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Educational Videos
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Watch our educational video series covering financial strategies,
              tax planning, and wealth-building concepts.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Video Library"
            description="Our video content is created to support your financial education journey."
          />
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video bg-[var(--color-navy-950)] rounded-lg flex items-center justify-center">
              <p className="text-slate-400 text-sm">
                [Featured video placeholder - videos are managed through Sanity CMS]
              </p>
            </div>
            <p className="mt-6 text-center text-[var(--color-slate-500)] text-sm">
              Video content will be loaded from YouTube links configured in the content management system.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
