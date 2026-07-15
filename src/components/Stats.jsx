const stats = [
  { value: '200+', label: 'Companies served' },
  { value: '99.98%', label: 'Platform uptime' },
  { value: '1.2M', label: 'Threats blocked' },
  { value: '35%', label: 'Avg. cost reduction' },
]

export default function Stats() {
  return (
    <section id="results" className="scroll-mt-20 bg-brand-600 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-white sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
