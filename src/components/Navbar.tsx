import { useState, useEffect } from 'react'

const navItems = [
  { label: '概览', href: '#overview', icon: 'fa-route' },
  { label: '文化预习', href: '#culture-prep', icon: 'fa-clapperboard' },
  { label: '🇸🇬新加坡', href: '#sg-map', icon: 'fa-1' },
  { label: '🇹🇭普吉岛', href: '#day-4', icon: 'fa-4' },
  { label: '🇹🇭曼谷', href: '#day-7', icon: 'fa-7' },
  { label: '清单', href: '#packing', icon: 'fa-suitcase' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg shadow-black/5' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className={`font-bold text-lg flex items-center gap-2 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
          <i className="fa-solid fa-map-location-dot" />
          <span style={{ fontFamily: "'Noto Serif SC', serif" }}>五一攻略</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <a key={i} href={item.href} className={`nav-item px-3 py-1.5 rounded-lg text-sm transition-colors ${scrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
              {item.label}
            </a>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden glass border-t border-gray-200/50 px-4 py-3 space-y-1">
          {navItems.map((item, i) => (
            <a key={i} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-gray-100 transition-colors">
              <i className={`fa-solid ${item.icon} w-4 text-center text-gray-400`} />
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
