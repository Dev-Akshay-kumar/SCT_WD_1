import { IconArrow, IconCheck } from './Icons.jsx'

const points = [
  'Cloud-native infrastructure',
  '24/7 monitoring & support',
  'Enterprise-grade security',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-28 pb-20 sm:pt-32 lg:pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold text-brand-700">
            <span className="h-2 w-2 rounded-full bg-brand-500" /> Trusted by 200+ companies
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            IT solutions that <span className="text-brand-600">scale</span> with your business
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            From cloud migration to custom software and cyber defense, Nexora helps you move faster,
            stay secure, and cut costs — all under one roof.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              Start your project <IconArrow className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
            >
              Explore services
            </a>
          </div>

          <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                <IconCheck className="h-5 w-5 text-brand-600" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-brand-100/50">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">System status</span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">Healthy</span>
            </div>
            <div className="mt-5 space-y-4">
              {[
                { label: 'Uptime', value: '99.98%' },
                { label: 'Avg. response', value: '42ms' },
                { label: 'Threats blocked', value: '1.2M' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">{s.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 -z-10 hidden h-40 w-40 rounded-full bg-brand-200/40 blur-2xl lg:block" />
        </div>
      </div>
    </section>
  )
}
