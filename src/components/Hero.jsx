import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Grayscale overlays that don't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.75)_100%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200 backdrop-blur">
            Digital Assets Hedge Fund
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
            Systematic alpha across the crypto market cycle
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl">
            We combine quantitative research, risk systems, and multi-strategy execution to compound capital through changing regimes in digital assets.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-gray-800">
              Request the Deck
            </a>
            <a href="#performance" className="inline-flex items-center justify-center rounded-md bg-white/85 backdrop-blur px-5 py-3 text-sm font-medium ring-1 ring-gray-300 text-gray-900 hover:bg-white">
              View Performance
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
