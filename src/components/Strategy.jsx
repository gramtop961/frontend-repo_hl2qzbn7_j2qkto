import { ArrowRight, CandlestickChart, LineChart, Link2 } from 'lucide-react'

const strategies = [
  {
    icon: CandlestickChart,
    title: 'Market Neutral',
    desc: 'Delta-neutral, factor and statistical arbitrage targeting consistent absolute returns with tight drawdown controls.',
    bullets: ['Exchange and funding basis', 'Liquidity and microstructure edges', 'Tight risk limits']
  },
  {
    icon: LineChart,
    title: 'Momentum',
    desc: 'Systematic trend models across timeframes with dynamic volatility targeting and regime filters.',
    bullets: ['Cross-asset signals', 'Adaptive position sizing', 'Regime-aware filters']
  },
  {
    icon: Link2,
    title: 'Basis Carry',
    desc: 'Directional-neutral yield strategies extracting term, funding and structural basis across venues.',
    bullets: ['Multi-venue routing', 'Smart hedging layer', 'Funding optimization']
  }
]

export default function Strategy() {
  return (
    <section id="strategy" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Strategy</h2>
          <p className="mt-3 text-gray-700">Multi-strategy platform engineered to perform across market cycles.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategies.map(({ icon: Icon, title, desc, bullets }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gray-400"></span>{b}</li>
                ))}
              </ul>
              <div className="mt-6 inline-flex items-center text-sm font-medium text-gray-900">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
