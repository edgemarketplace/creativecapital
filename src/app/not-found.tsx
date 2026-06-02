import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Container className="text-center py-20">
        <h1 className="text-6xl font-bold text-[var(--color-navy-950)] mb-4">404</h1>
        <p className="text-lg text-[var(--color-slate-700)] mb-8">
          The page you are looking for does not exist.
        </p>
        <Button href="/">Return Home</Button>
      </Container>
    </div>
  );
}
