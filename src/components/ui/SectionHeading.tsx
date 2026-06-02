import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  variant = 'dark',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <span
          className={cn(
            'block text-sm font-semibold uppercase tracking-widest mb-3',
            variant === 'light' ? 'text-[var(--color-gold-400)]' : 'text-[var(--color-blue-600)]'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight',
          variant === 'light' ? 'text-white' : 'text-[var(--color-navy-950)]'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg max-w-2xl',
            align === 'center' && 'mx-auto',
            variant === 'light' ? 'text-slate-300' : 'text-[var(--color-slate-700)]'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
