import { IconCloud, IconShield, IconCode, IconChart, IconSupport, IconCpu, IconArrow } from './Icons.jsx'

const services = [
  {
    icon: IconCloud,
    title: 'Cloud & DevOps',
    desc: 'Migrate, scale, and automate on AWS, Azure, and GCP with CI/CD pipelines built for speed.',
  },
  {
    icon: IconCode,
    title: 'Custom Software',
    desc: 'Web, mobile, and API solutions tailored to your workflows and your users.',
  },
  {
    icon: IconShield,
    title: 'Cybersecurity',
    desc: 'Penetration testing, zero-trust architecture, and 24/7 threat monitoring.',
  },
  {
    icon: IconChart,
    title: 'Data & AI',
    desc: 'Turn raw data into decisions with analytics, dashboards, and machine learning.',
  },
  {
    icon: IconCpu,
    title: 'IT Infrastructure',
    desc: 'Modern, reliable networks and systems managed by certified engineers.',
  },
  {
    icon: IconSupport,
    title: 'Managed Support',
    desc: 'A dedicated help desk and proactive maintenance so you can focus on growth.',
  },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything your IT team needs
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            One partner for strategy, build, and operations — so technology becomes your advantage.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                Learn more <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
