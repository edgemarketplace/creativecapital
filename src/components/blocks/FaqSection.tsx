import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const faqs = [
  {
    q: 'What is the financial assessment?',
    a: 'Our financial assessment is a confidential questionnaire that helps us understand your current financial situation, goals, and challenges. It is the first step in our education-first process.',
  },
  {
    q: 'How is Creative Capital Strategies different from other financial advisors?',
    a: 'We lead with education, not product sales. Our goal is to help you understand financial concepts and strategies so you can make informed decisions that align with your specific goals.',
  },
  {
    q: 'Who should complete the financial assessment?',
    a: 'Anyone who wants to explore more intentional financial strategies. Our assessment is designed for families, professionals, first responders, business owners, and individuals approaching retirement.',
  },
  {
    q: 'Is there any obligation after completing the assessment?',
    a: 'No. Completing the financial assessment does not obligate you to any further engagement. It simply gives us the information needed to provide relevant educational guidance.',
  },
  {
    q: 'What topics do you cover in your educational sessions?',
    a: 'We cover a wide range of financial education topics including tax planning, retirement income strategies, capital management, wealth transfer, and risk management strategies.',
  },
];

export default function FaqSection() {
  return (
    <section className="py-20 bg-[var(--color-slate-100)]">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          description="Answers to frequently asked questions about Creative Capital Strategies and our process."
        />
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-[var(--color-slate-200)] rounded-lg"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer text-[var(--color-navy-950)] font-semibold select-none">
                {faq.q}
                <svg
                  className="w-5 h-5 text-[var(--color-blue-600)] group-open:rotate-45 transition-transform shrink-0 ml-4"
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
        <div className="mt-8 text-center">
          <Button href="/faq">View All FAQs</Button>
        </div>
      </Container>
    </section>
  );
}
