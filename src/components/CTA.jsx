export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Request our investor deck</h3>
              <p className="mt-3 text-gray-700">Share your email and we’ll send materials, strategy notes, and access details.</p>
              <form className="mt-6 flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="you@firm.com" className="flex-1 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                <button type="button" className="rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800">Submit</button>
              </form>
              <p className="mt-2 text-xs text-gray-500">By submitting you agree to receive communications from HoloCube Capital.</p>
            </div>
            <div className="h-52 md:h-full rounded-2xl bg-gradient-to-tr from-fuchsia-500/20 via-cyan-400/20 to-blue-600/20 border border-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
