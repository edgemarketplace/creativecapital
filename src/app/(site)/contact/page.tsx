import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

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

          <form className="space-y-6 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--color-slate-700)] mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-[var(--color-slate-200)] rounded-md focus:ring-2 focus:ring-[var(--color-blue-600)] focus:border-transparent outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-slate-700)] mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-[var(--color-slate-200)] rounded-md focus:ring-2 focus:ring-[var(--color-blue-600)] focus:border-transparent outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--color-slate-700)] mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-[var(--color-slate-200)] rounded-md focus:ring-2 focus:ring-[var(--color-blue-600)] focus:border-transparent outline-none resize-y"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--color-gold-500)] text-[var(--color-navy-950)] font-semibold uppercase tracking-wide text-sm rounded-md hover:bg-[var(--color-gold-400)] transition-colors"
            >
              Send Message
            </button>
            <p className="text-xs text-[var(--color-slate-500)]">
              This form is a placeholder. In production, connect to a form handling service or API.
            </p>
          </form>
        </Container>
      </section>
    </>
  );
}
