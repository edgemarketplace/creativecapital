import { cn } from '@/lib/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md border border-[var(--color-slate-200)]',
        hover && 'transition-shadow duration-300 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
}
