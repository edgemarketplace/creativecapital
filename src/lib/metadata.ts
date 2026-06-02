import type { Metadata } from 'next';

interface BuildMetadataArgs {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title = 'Creative Capital Strategies',
  description = 'Creative Capital Strategies helps families, professionals, first responders, and business owners explore financial strategies designed around access, predictability, protection, and long-term control.',
  path = '',
  image,
  noIndex = false,
}: BuildMetadataArgs = {}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const fullUrl = `${siteUrl}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Creative Capital Strategies',
      type: 'website',
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
    alternates: { canonical: fullUrl },
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
  };
}
