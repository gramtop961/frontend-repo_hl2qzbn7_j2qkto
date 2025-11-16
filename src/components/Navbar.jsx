import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Strategy', href: '#strategy' },
    { label: 'Edge', href: '#edge' },
    { label: 'Performance', href: '#performance' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-blue-600 shadow-inner"></div>
            <span className="font-semibold tracking-tight text-gray-900">0xCapital</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-sm">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
              Get in touch
            </a>
          </nav>

          <button onClick={() => setOpen(true)} className="md:hidden inline-flex p-2 rounded-md bg-white/70 border border-gray-200">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-blue-600"></div>
                <span className="font-semibold tracking-tight text-gray-900">0xCapital</span>
              </a>
              <button onClick={() => setOpen(false)} className="inline-flex p-2 rounded-md border border-gray-200 bg-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-lg text-gray-800">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
