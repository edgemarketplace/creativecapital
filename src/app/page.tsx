import HeroSection from '@/components/blocks/HeroSection';
import TrustMetrics from '@/components/blocks/TrustMetrics';
import IntroSection from '@/components/blocks/IntroSection';
import ProblemCards from '@/components/blocks/ProblemCards';
import StrategyBenefits from '@/components/blocks/StrategyBenefits';
import ImageTextSection from '@/components/blocks/ImageTextSection';
import VideoFeature from '@/components/blocks/VideoFeature';
import ComparisonTable from '@/components/blocks/ComparisonTable';
import ProcessSteps from '@/components/blocks/ProcessSteps';
import AudienceCards from '@/components/blocks/AudienceCards';
import Testimonials from '@/components/blocks/Testimonials';
import ResourceGrid from '@/components/blocks/ResourceGrid';
import FaqSection from '@/components/blocks/FaqSection';
import AssessmentCta from '@/components/blocks/AssessmentCta';
import DisclosureBlock from '@/components/blocks/DisclosureBlock';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustMetrics />
      <IntroSection />
      <ProblemCards />
      <VideoFeature />
      <StrategyBenefits />
      <ImageTextSection />
      <ComparisonTable />
      <AudienceCards />
      <ProcessSteps />
      <Testimonials />
      <ResourceGrid />
      <FaqSection />
      <AssessmentCta />
      <DisclosureBlock />
    </>
  );
}
