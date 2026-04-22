import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import CulturePrep from './components/CulturePrep'
import SgMap from './components/SgMap'
import PhuketMap from './components/PhuketMap'
import DayCard from './components/DayCard'
import PackingList from './components/PackingList'
import Footer from './components/Footer'
import { itineraryData } from './data/itinerary'

const cityTabs = [
  { label: '🇸🇬 新加坡', days: [1, 2, 3], color: '#667eea' },
  { label: '🇹🇭 普吉岛', days: [4, 5, 6], color: '#43e97b' },
  { label: '🇹🇭 曼谷', days: [7, 8, 9], color: '#ff6b6b' },
]

function ScrollToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const handler = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  if (!show) return null
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:shadow-xl transition-all hover:-translate-y-1">
      <i className="fa-solid fa-arrow-up" />
    </button>
  )
}

function ItinerarySection() {
  const [activeCity, setActiveCity] = useState(0)

  useEffect(() => {
    const handler = (e: Event) => {
      const idx = (e as CustomEvent).detail as number
      setActiveCity(idx)
      window.dispatchEvent(new CustomEvent('city-tab-changed', { detail: idx }))
    }
    window.addEventListener('switch-city-tab', handler)
    return () => window.removeEventListener('switch-city-tab', handler)
  }, [])

  const handleTabClick = (idx: number) => {
    setActiveCity(idx)
    window.dispatchEvent(new CustomEvent('city-tab-changed', { detail: idx }))
    const el = document.getElementById('itinerary')
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top < 0 || rect.top > 200) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const currentDays = itineraryData.filter(d => cityTabs[activeCity].days.includes(d.day))

  return (
    <section id="itinerary" className="py-10 px-4 max-w-5xl mx-auto scroll-mt-20">
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-4">
          <i className="fa-solid fa-calendar-days mr-2" />每日行程
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>详细行程安排</h2>
        <p className="text-gray-500 max-w-lg mx-auto">每一天都精心规划，让旅途既充实又从容</p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 gap-1">
          {cityTabs.map((tab, i) => (
            <button key={i} onClick={() => handleTabClick(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCity === i
                  ? 'bg-white shadow-md text-gray-800'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
              }`}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeCity === 0 && <SgMap />}
      {activeCity === 1 && <PhuketMap />}

      <div className="my-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <span className="text-sm font-semibold text-gray-400 flex items-center gap-2 whitespace-nowrap">
            <i className="fa-solid fa-route text-xs" />每日详细行程
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
        <div className="flex items-stretch gap-0 justify-center">
          {currentDays.map((day, i) => (
            <div key={day.day} className="flex items-center">
              <a href={`#day-${day.day}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white hover:shadow-sm transition-all group">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: day.color }}>{day.day}</span>
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{day.title.split('·').pop()?.trim()}</div>
                  <div className="text-[11px] text-gray-400">{day.date.split('·')[0].trim()} · {day.spots.length}个景点</div>
                </div>
              </a>
              {i < currentDays.length - 1 && (
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-300 mx-1" />
              )}
            </div>
          ))}
        </div>
      </div>

      {currentDays.map((day) => (
        <DayCard key={day.day} day={day} />
      ))}
    </section>
  )
}

const travelTips = [
  { icon: 'fa-passport', color: '#667eea', title: '签证与证件', desc: '新加坡和泰国对中国护照有不同签证政策，提前办理好签证，护照有效期需6个月以上。' },
  { icon: 'fa-sun', color: '#ffd93d', title: '防晒防暑', desc: '东南亚紫外线强烈，SPF50+防晒霜必备，随身携带水杯，注意防暑降温。' },
  { icon: 'fa-money-bill-wave', color: '#43e97b', title: '货币兑换', desc: '新加坡用新币，泰国用泰铢。建议提前换好少量现金，大部分地方支持刷卡。' },
  { icon: 'fa-shirt', color: '#f5576c', title: '寺庙着装', desc: '参观大皇宫等寺庙需穿长裤长袖，不可穿拖鞋和背心，建议随身备一套。' },
  { icon: 'fa-mobile-screen', color: '#4facfe', title: '网络通讯', desc: '建议购买东南亚多国通用流量卡，新加坡+泰国通用，方便导航和联系。' },
  { icon: 'fa-kit-medical', color: '#fa709a', title: '常备药品', desc: '带好肠胃药、晕船药和驱蚊液，东南亚饮食偏辣偏酸，注意饮食卫生。' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Overview />
      <CulturePrep />

      <ItinerarySection />

      <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-medium mb-4">
              <i className="fa-solid fa-lightbulb mr-2" />贴心提示
            </span>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>旅行小贴士</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {travelTips.map((tip, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: tip.color + '15' }}>
                  <i className={`fa-solid ${tip.icon} text-lg`} style={{ color: tip.color }} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{tip.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PackingList />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
