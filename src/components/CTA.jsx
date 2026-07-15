import { IconArrow } from './Icons.jsx'

export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-brand-700 to-brand-500 px-6 py-12 text-center shadow-xl sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to level up your IT?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
          Tell us about your project and get a free, no-obligation quote within 24 hours.
        </p>

        <form
          className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            required
            placeholder="Your name"
            className="rounded-lg border-0 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            required
            placeholder="Work email"
            className="rounded-lg border-0 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            required
            placeholder="How can we help?"
            rows={3}
            className="rounded-lg border-0 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white sm:col-span-2"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-1 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50 sm:col-span-2"
          >
            Get my free quote <IconArrow className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}
