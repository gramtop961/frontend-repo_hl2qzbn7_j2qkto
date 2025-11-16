import { ShieldCheck, LineChart, Cpu, Layers3, Gauge, Zap } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Institutional Risk',
    desc: 'Portfolio construction, limits and drawdown controls built to institutional standards.'
  },
  {
    icon: LineChart,
    title: 'Multi-Strategy',
    desc: 'Market neutral, momentum, and basis carry strategies across spot and derivatives.'
  },
  {
    icon: Cpu,
    title: 'Quant Research',
    desc: 'Signal engineering from market microstructure, on-chain flows, and macro regime data.'
  },
  {
    icon: Layers3,
    title: 'Execution Stack',
    desc: 'Low-latency, exchange-native routing with smart order execution and slippage controls.'
  },
  {
    icon: Gauge,
    title: 'Risk Engine',
    desc: 'Real-time exposure, scenario analysis, and stress testing to manage tail risk.'
  },
  {
    icon: Zap,
    title: '24/7 Ops',
    desc: 'Automated monitoring, alerting, and disaster recovery for around-the-clock markets.'
  }
]

export default function Features() {
  return (
    <section id="edge" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Our Edge</h2>
          <p className="mt-3 text-gray-700">A technology-first platform designed for resilient returns in digital assets.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-blue-600 text-white flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
