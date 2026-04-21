import { useState, useEffect, useCallback } from 'react'

const normalNavItems = [
  { label: '概览', href: '#overview' },
  { label: '文化预习', href: '#culture-prep' },
  { label: '🇸🇬新加坡', href: '#sg-map' },
  { label: '🇹🇭普吉岛', href: '#day-4' },
  { label: '🇹🇭曼谷', href: '#day-7' },
  { label: '清单', href: '#packing' },
]

const funcNavItems = [
  { label: '概览', href: '#overview', icon: 'fa-route' },
  { label: '文化预习', href: '#culture-prep', icon: 'fa-graduation-cap' },
  { label: '清单', href: '#packing', icon: 'fa-suitcase-rolling' },
]

const dayGroups = [
  { flag: '🇸🇬', days: [1, 2, 3], mapHref: '#sg-map' },
  { flag: '🇹🇭', days: [4, 5, 6], mapHref: '#day-4' },
  { flag: '🇹🇭', days: [7, 8, 9], mapHref: '#day-7' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [inItinerary, setInItinerary] = useState(false)
  const [activeDay, setActiveDay] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const detectState = useCallback(() => {
    setScrolled(window.scrollY > 80)

    const itSection = document.getElementById('itinerary')
    if (!itSection) return

    const itRect = itSection.getBoundingClientRect()
    const isIn = itRect.top < 100 && itRect.bottom > 100
    setInItinerary(isIn)

    if (isIn) {
      let current = 0
      for (let d = 1; d <= 9; d++) {
        const el = document.getElementById(`day-${d}`)
        if (el) {
          const r = el.getBoundingClientRect()
          if (r.top < 150) current = d
        }
      }
      setActiveDay(current)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', detectState, { passive: true })
    detectState()
    return () => window.removeEventListener('scroll', detectState)
  }, [detectState])

  const scrollToDay = (day: number) => {
    const el = document.getElementById(`day-${day}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || inItinerary ? 'glass shadow-lg shadow-black/5' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className={`font-bold text-lg flex items-center gap-2 transition-colors flex-shrink-0 ${scrolled || inItinerary ? 'text-gray-800' : 'text-white'}`}>
          <i className="fa-solid fa-map-location-dot" />
          <span style={{ fontFamily: "'Noto Serif SC', serif" }}>五一攻略</span>
        </a>

        {inItinerary ? (
          <div className="hidden md:flex items-center gap-0 flex-1 min-w-0 ml-4">
            <div className="h-6 w-px bg-gray-300 mx-3 flex-shrink-0" />
            <div className="flex items-center gap-1 flex-shrink-0">
              {funcNavItems.map((item, i) => (
                <a key={i} href={item.href}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors whitespace-nowrap">
                  <i className={`fa-solid ${item.icon} text-xs text-gray-400`} />
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-0.5 flex-shrink-0">
              {dayGroups.map((group, gi) => (
                <div key={gi} className="flex items-center">
                  {gi > 0 && <div className="h-4 w-px bg-gray-200 mx-1.5" />}
                  <a href={group.mapHref} className="text-sm mr-1 hover:scale-125 transition-transform inline-block cursor-pointer">{group.flag}</a>
                  {group.days.map((day) => (
                    <button key={day} onClick={() => scrollToDay(day)}
                      className={`w-8 h-8 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeDay === day
                          ? 'bg-blue-500 text-white shadow-md shadow-blue-200'
                          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                      }`}>
                      {day}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-1">
            {normalNavItems.map((item, i) => (
              <a key={i} href={item.href}
                className={`nav-item px-3 py-1.5 rounded-lg text-sm transition-colors ${scrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
                {item.label}
              </a>
            ))}
          </div>
        )}

        <button onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${scrolled || inItinerary ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-gray-200/50 px-4 py-3 space-y-1">
          {funcNavItems.map((item, i) => (
            <a key={i} href={item.href} onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-gray-100 transition-colors">
              <i className={`fa-solid ${item.icon} w-4 text-center text-gray-400`} />
              {item.label}
            </a>
          ))}
          {inItinerary && (
            <>
              <div className="h-px bg-gray-200 my-2" />
              <div className="px-4 py-2 text-xs text-gray-400 font-medium">行程日期</div>
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {dayGroups.map((group) =>
                  group.days.map((day) => (
                    <button key={day} onClick={() => { scrollToDay(day); setMenuOpen(false) }}
                      className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                        activeDay === day
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}>
                      {day}
                    </button>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
