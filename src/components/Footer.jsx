const footerLinks = [
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Contact'],
  },
  {
    title: 'Services',
    links: ['Cloud', 'Software', 'Security', 'Support'],
  },
  {
    title: 'Resources',
    links: ['Docs', 'Status', 'Case studies', 'Privacy'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2 font-bold text-slate-900">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 text-white">N</span>
              <span className="text-lg">Nexora</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-600">
              Modern IT solutions that help businesses move faster, stay secure, and scale with confidence.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-slate-900">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-600 transition hover:text-brand-600">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Nexora IT Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
