export default function Performance() {
  const stats = [
    { label: 'CAGR (since inception)', value: '28.4%' },
    { label: 'Volatility', value: '12.1%' },
    { label: 'Sharpe Ratio', value: '2.05' },
    { label: 'Max Drawdown', value: '-6.8%' },
  ]

  return (
    <section id="performance" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Performance</h2>
          <p className="mt-3 text-gray-700">Risk-adjusted returns through multiple market regimes.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
              <div className="text-2xl font-semibold text-gray-900">{s.value}</div>
              <div className="mt-1 text-xs text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
          <div className="h-64 w-full rounded-lg bg-[linear-gradient(180deg,#f3f4f6,transparent),repeating-linear-gradient(90deg,transparent,transparent_39px,#e5e7eb_40px),repeating-linear-gradient(0deg,transparent,transparent_39px,#e5e7eb_40px)]"></div>
          <p className="mt-3 text-xs text-gray-500">Illustrative chart. For full audited performance, request the deck.</p>
        </div>
      </div>
    </section>
  )
}
