import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export default function VideoFeature() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Introduction"
          title="Understanding Creative Capital Strategies"
          description="Watch our introduction to learn more about our approach to financial education and the strategies we explore with our clients."
        />
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-[var(--color-navy-950)] rounded-xl flex items-center justify-center relative overflow-hidden">
            {/* Play button placeholder */}
            <div className="w-20 h-20 rounded-full bg-[var(--color-gold-500)] flex items-center justify-center cursor-pointer hover:bg-[var(--color-gold-400)] transition-colors z-10">
              <svg
                className="w-8 h-8 text-[var(--color-navy-950)] ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="absolute bottom-4 right-4 text-xs text-slate-400 z-10">
              [Video player placeholder - YouTube embed configured via Sanity CMS]
            </p>
          </div>
          <p className="mt-4 text-center text-sm text-[var(--color-slate-500)]">
            [PLACEHOLDER: Connect to YouTube URL configured in CMS. Video title and description will be pulled dynamically.]
          </p>
        </div>
      </Container>
    </section>
  );
}
