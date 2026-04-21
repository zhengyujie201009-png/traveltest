import { useState } from 'react'
import { Rl } from '../data/culture'

export default function SgMap() {
  const [activeDay, setActiveDay] = useState(0)
  const current = Rl[activeDay]

  return (
    <section id="sg-map" className="py-16 px-4 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            <i className="fa-solid fa-map-location-dot mr-2" />新加坡地图
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>新加坡3天路线总览</h2>
          <p className="text-gray-500 max-w-lg mx-auto">点击切换每一天，看看我们解锁了哪些地方</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {Rl.map((item, i) => (
            <button key={i} onClick={() => setActiveDay(i)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${activeDay === i
                ? 'text-white shadow-lg scale-105 border-transparent'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-sm'}`}
              style={activeDay === i ? { background: item.color, borderColor: item.color } : undefined}>
              <i className={`fa-solid ${item.day === 0 ? 'fa-trophy' : 'fa-location-dot'} mr-1.5`} />
              {item.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="relative">
            <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
              <img src={current.img} alt={current.title} className="w-full object-contain transition-opacity duration-500" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white shadow-md" style={{ background: current.color }}>
                  {current.day > 0 ? `DAY ${current.day}` : '🏆 全景'}
                </span>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/90 shadow-md backdrop-blur-sm" style={{ color: current.color }}>
                  {current.spots} 个景点
                </span>
              </div>
            </div>
            <div className="p-5 border-t border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>{current.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{current.desc}</p>
              <div className="mt-3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${((activeDay + 1) / Rl.length) * 100}%`, background: current.color }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
