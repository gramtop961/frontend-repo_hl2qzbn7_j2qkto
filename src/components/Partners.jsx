export default function Partners() {
  const logos = [
    'Coinbase',
    'Binance',
    'Kraken',
    'OKX',
    'Deribit',
    'CME',
    'Fireblocks',
    'Copper',
    'Anchorage',
    'Bitstamp'
  ]

  return (
    <section className="relative py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Trusted infrastructure & venues</p>
        </div>
      </div>
      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] border-y border-gray-200">
        <div className="marquee flex items-center gap-12 py-6">
          {[...logos, ...logos].map((name, idx) => (
            <div key={idx} className="shrink-0 flex items-center">
              <div className="px-4 py-2 rounded-md border border-gray-200 bg-white">
                <span className="text-sm font-semibold tracking-wide text-gray-800">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
