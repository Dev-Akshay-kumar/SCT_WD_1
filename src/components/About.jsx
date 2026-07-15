import { IconCheck } from './Icons.jsx'

const checklist = [
  'Certified engineers & architects',
  'Fixed monthly plans or project-based',
  'Clear SLAs with measurable outcomes',
  'Onboarding in as little as 2 weeks',
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-100">Why Nexora</p>
            <p className="mt-3 text-2xl font-bold leading-snug">
              We don't just deliver technology — we deliver outcomes your business can measure.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ['10+ yrs', 'Average team experience'],
                ['200+', 'Projects delivered'],
                ['35%', 'Avg. cost saved'],
                ['4.9/5', 'Client satisfaction'],
              ].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-xl font-bold">{v}</p>
                  <p className="mt-1 text-xs text-brand-100">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A partner, not just a vendor
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We embed with your team, learn your goals, and build solutions that last — no lock-in,
            no jargon, no surprises.
          </p>

          <ul className="mt-8 space-y-3">
            {checklist.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                  <IconCheck className="h-4 w-4" />
                </span>
                <span className="text-slate-700">{c}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Book a free consultation
          </a>
        </div>
      </div>
    </section>
  )
}
