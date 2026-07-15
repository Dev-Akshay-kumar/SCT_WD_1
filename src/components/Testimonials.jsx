const testimonials = [
  {
    quote:
      'Nexora migrated our entire stack to the cloud with zero downtime. Our release speed doubled in three months.',
    name: 'Sarah Lin',
    role: 'CTO, Brightwave',
  },
  {
    quote:
      'Their security team caught vulnerabilities our previous vendor missed. We finally sleep at night.',
    name: 'Marcus Reyes',
    role: 'Head of IT, FinEdge',
  },
  {
    quote:
      'The custom dashboard they built became the single source of truth for our whole company.',
    name: 'Aisha Khan',
    role: 'VP Operations, LogiCore',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Loved by teams that ship
          </h2>
          <p className="mt-4 text-lg text-slate-600">Real results from companies we partner with.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-3xl text-brand-300">"</div>
              <blockquote className="mt-2 flex-1 text-slate-700">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 font-semibold text-brand-700">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900">{t.name}</span>
                  <span className="block text-xs text-slate-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
