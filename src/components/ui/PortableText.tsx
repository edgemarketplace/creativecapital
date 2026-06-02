import { PortableText as BasePortableText, type PortableTextComponents } from '@portabletext/react';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-[var(--color-slate-700)] leading-relaxed">{children}</p>,
    h2: ({ children }) => <h2 className="text-2xl font-bold text-[var(--color-navy-950)] mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold text-[var(--color-navy-900)] mt-6 mb-3">{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 space-y-2 text-[var(--color-slate-700)]">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 space-y-2 text-[var(--color-slate-700)]">{children}</ol>,
  },
};

interface PortableTextProps {
  value: any;
}

export default function PortableText({ value }: PortableTextProps) {
  if (!value) return null;
  return (
    <div className="prose-custom space-y-4">
      <BasePortableText value={value} components={components} />
    </div>
  );
}
