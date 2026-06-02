import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const faqs = [
  {
    q: 'What is Creative Capital Strategies?',
    a: 'Creative Capital Strategies is a financial education and consulting organization. We help individuals and families explore financial strategies focused on control, access, predictability, and protection. We lead with education, not product sales.',
  },
  {
    q: 'What types of financial strategies do you discuss?',
    a: 'We discuss a range of financial education topics, including tax planning, retirement income strategies, wealth transfer concepts, and risk management. All content is educational in nature and should not be construed as individualized financial advice.',
  },
  {
    q: 'Who can benefit from working with Creative Capital Strategies?',
    a: 'Our educational content is designed for families, professionals, first responders, business owners, and individuals approaching retirement who want to explore more intentional financial strategies.',
  },
  {
    q: 'What is the financial assessment?',
    a: 'The financial assessment is our starting point. It helps us understand your current financial situation, goals, and questions so we can provide relevant educational guidance. Completing the assessment does not obligate you to any further engagement.',
  },
  {
    q: 'Are your services available in all states?',
    a: 'Availability may vary by state and jurisdiction. Please contact us directly to discuss your specific situation and what services may be available in your area.',
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-[var(--color-navy-950)] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold-400)] mb-3 block">
              FAQ
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Common questions about Creative Capital Strategies and our approach to financial education.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container size="narrow">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-[var(--color-slate-200)] rounded-lg bg-white"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer text-[var(--color-navy-950)] font-semibold select-none">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-[var(--color-blue-600)] group-open:rotate-45 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-[var(--color-slate-700)] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
