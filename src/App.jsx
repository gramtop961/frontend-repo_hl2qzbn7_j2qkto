import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Strategy from './components/Strategy'
import Partners from './components/Partners'
import Features from './components/Features'
import Performance from './components/Performance'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Strategy />
        <Features />
        <Performance />
        <Testimonials />
        <CTA />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} 0xCapital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
