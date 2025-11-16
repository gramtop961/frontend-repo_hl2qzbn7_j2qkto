export default function Testimonials() {
  const quotes = [
    {
      quote: '0xCapital operates with the rigor and transparency we expect from institutional managers.',
      author: 'Institutional LP',
      role: 'Family Office CIO'
    },
    {
      quote: 'Infrastructure-first approach and disciplined risk culture make them stand out.',
      author: 'Exchange Partner',
      role: 'Head of Institutional'
    },
    {
      quote: 'Thoughtful strategy design and real-time risk give us confidence across regimes.',
      author: 'Advisory Board Member',
      role: 'Former PM, Global Macro Fund'
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">What partners say</h2>
          <p className="mt-3 text-gray-700">Select quotes from investors and infrastructure partners.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.author} className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-gray-900">“{q.quote}”</p>
              <div className="mt-4 text-sm text-gray-600">{q.author}</div>
              <div className="text-xs text-gray-500">{q.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
