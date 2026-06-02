import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { buildMetadata } from '@/lib/metadata';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import AnnouncementBar from '@/components/layout/AnnouncementBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AnnouncementBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
