import { cn } from '@/lib/cn';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  external = false,
  onClick,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none cursor-pointer';

  const variants = {
    primary:
      'bg-[var(--color-gold-500)] text-[var(--color-navy-950)] hover:bg-[var(--color-gold-400)] focus:ring-[var(--color-gold-500)]',
    secondary:
      'bg-[var(--color-navy-800)] text-white hover:bg-[var(--color-navy-900)] focus:ring-[var(--color-navy-800)] border border-[var(--color-navy-700)]',
    ghost:
      'bg-transparent text-white border border-white/30 hover:bg-white/10 focus:ring-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs rounded',
    md: 'px-6 py-3 text-sm rounded-md',
    lg: 'px-8 py-4 text-base rounded-lg',
  };

  const combined = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={combined} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type as any} className={combined} onClick={onClick}>
      {children}
    </button>
  );
}
