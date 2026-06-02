import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const rows = [
  { feature: 'Access to Capital', traditional: 'Bank-dependent, credit checks required', ccs: 'Private, instant access without lender approval' },
  { feature: 'Tax Treatment', traditional: 'Taxable growth, taxable withdrawals', ccs: 'Tax-deferred growth, tax-free access strategies' },
  { feature: 'Control', traditional: 'Limited by account rules and penalties', ccs: 'Maintained through private contract ownership' },
  { feature: 'Flexibility', traditional: 'Restricted by plan rules and contribution limits', ccs: 'Flexible contributions and withdrawals' },
  { feature: 'Legacy Transfer', traditional: 'Taxable to heirs', ccs: 'Income tax-free transfer to beneficiaries' },
  { feature: 'Market Correlation', traditional: 'Directly tied to market performance', ccs: 'Non-correlated, guaranteed growth floor' },
];

export default function ComparisonTable() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Comparison"
          title="Traditional vs. Creative Capital Strategies"
          description="This comparison outlines general educational concepts. Individual results vary. No claims of specific outcomes are made or guaranteed."
        />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="bg-[var(--color-navy-950)]">
                <th className="text-left text-white font-semibold text-sm p-4 rounded-tl-lg">Feature</th>
                <th className="text-left text-white font-semibold text-sm p-4">Traditional Approach</th>
                <th className="text-left text-[var(--color-gold-400)] font-semibold text-sm p-4 rounded-tr-lg">Creative Capital Way</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-slate-100)]'}
                >
                  <td className="p-4 font-medium text-sm text-[var(--color-navy-950)] border-b border-[var(--color-slate-200)]">
                    {row.feature}
                  </td>
                  <td className="p-4 text-sm text-[var(--color-slate-700)] border-b border-[var(--color-slate-200)]">
                    {row.traditional}
                  </td>
                  <td className="p-4 text-sm text-[var(--color-navy-900)] border-b border-[var(--color-slate-200)] font-medium">
                    {row.ccs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-xs text-[var(--color-slate-500)] text-center">
          Disclaimer: This table is for educational comparison purposes only. It does not constitute financial advice.
          Actual results vary based on individual circumstances. Consult a qualified financial professional.
        </p>
      </Container>
    </section>
  );
}
