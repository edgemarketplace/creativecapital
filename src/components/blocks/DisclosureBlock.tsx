import Container from '@/components/ui/Container';

export default function DisclosureBlock() {
  return (
    <section className="py-16 bg-[var(--color-slate-100)]">
      <Container size="narrow">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-slate-500)] mb-4">
          Important Disclosures
        </h3>
        <div className="text-xs text-[var(--color-slate-500)] leading-relaxed space-y-3">
          <p>
            Creative Capital Strategies provides financial education and consulting services.
            We are not a bank, brokerage, or cryptocurrency platform. The information provided
            on this website and in our educational materials is for general educational purposes
            only and does not constitute individualized financial, tax, legal, or investment advice.
          </p>
          <p>
            All investments carry risk, including the potential loss of principal. Past performance
            does not guarantee future results. Any strategies discussed may not be suitable for
            every individual. Please consult with qualified financial, tax, and legal professionals
            before making any financial decisions.
          </p>
          <p>
            [PLACEHOLDER: Add specific regulatory disclosures, firm registration details, and any
            required compliance language as confirmed by legal counsel.]
          </p>
          <p>
            [PLACEHOLDER: Include FINRA, SEC, or state-specific disclosures as applicable.]
          </p>
        </div>
        <p className="mt-4 text-xs text-[var(--color-slate-500)]">
          Copyright {new Date().getFullYear()} Creative Capital Strategies. All rights reserved.
        </p>
      </Container>
    </section>
  );
}
