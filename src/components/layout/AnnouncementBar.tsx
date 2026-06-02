import Container from '@/components/ui/Container';

export default function AnnouncementBar() {
  return (
    <div className="bg-[var(--color-navy-950)] text-white text-sm py-2 hidden md:block">
      <Container>
        <div className="flex items-center justify-between">
          <span className="text-[var(--color-slate-200)]">
            Building Financial Strategies with More Control and Confidence
          </span>
          <div className="flex items-center gap-4">
            <span className="text-[var(--color-slate-200)]">[PHONE PLACEHOLDER]</span>
            <span className="text-[var(--color-slate-200)]">|</span>
            <span className="text-[var(--color-slate-200)]">[EMAIL PLACEHOLDER]</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
