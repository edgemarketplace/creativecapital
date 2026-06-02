import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import AnnouncementBar from '@/components/layout/AnnouncementBar';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
