import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--color-navy-950)] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold-400)] mb-3 block">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Have questions or ready to start your financial assessment?
              Reach out to the Creative Capital Strategies team.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container size="narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="font-semibold text-[var(--color-navy-950)] mb-2">Phone</h3>
              <p className="text-[var(--color-slate-700)]">[PHONE PLACEHOLDER]</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-[var(--color-navy-950)] mb-2">Email</h3>
              <p className="text-[var(--color-slate-700)]">[EMAIL PLACEHOLDER]</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-[var(--color-navy-950)] mb-2">Address</h3>
              <p className="text-[var(--color-slate-700)]">[ADDRESS PLACEHOLDER]</p>
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
