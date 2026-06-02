import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PortableText from '@/components/ui/PortableText';
import AssessmentCta from '@/components/blocks/AssessmentCta';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy-950)] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold-400)] mb-3 block">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              About Creative Capital Strategies
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              We are a financial education and strategy team focused on helping families,
              professionals, first responders, and business owners explore more intentional
              approaches to managing their financial lives.
            </p>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-20">
        <Container size="narrow">
          <PortableText
            value={[
              {
                _type: 'block',
                children: [
                  {
                    _type: 'span',
                    text: 'At Creative Capital Strategies, we believe financial education is the foundation of sound decision-making. Our team works with individuals and families who want to go beyond surface-level advice and explore strategies designed around long-term control, access, flexibility, and predictability.',
                  },
                ],
              },
              {
                _type: 'block',
                children: [
                  {
                    _type: 'span',
                    text: 'Our process begins with education - not product sales. We want every client to understand the reasoning behind a strategy before making any decisions. This respectful, transparent approach sets us apart in an industry that often puts products before people.',
                  },
                ],
              },
              {
                _type: 'block',
                children: [
                  {
                    _type: 'span',
                    text: 'Whether you are a first responder planning for an early retirement, a business owner managing fluctuating cash flow, or a family seeking to protect and grow your wealth across generations, we are here to help you explore the options available to you.',
                  },
                ],
              },
              {
                _type: 'block',
                children: [
                  {
                    _type: 'span',
                    text: '[PLACEHOLDER: Add team background, mission statement, and any verifiable credentials as they are approved for publication.]',
                  },
                ],
              },
            ]}
          />
        </Container>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-20 bg-[var(--color-slate-100)]">
        <Container>
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the CCS Team"
            description="Our team includes financial strategists, educators, and support staff committed to helping you make informed decisions."
          />
          <p className="text-center text-[var(--color-slate-700)]">
            [Team member profiles will be added here through Sanity CMS once configured and approved.]
          </p>
        </Container>
      </section>

      <AssessmentCta />
    </>
  );
}
