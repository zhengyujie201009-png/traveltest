import { useState } from 'react'
import { Rl } from '../data/culture'

export default function SgMap() {
  const [activeDay, setActiveDay] = useState(0)
  const current = Rl[activeDay]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            <i className="fa-solid fa-map-location-dot mr-2" />新加坡地图
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>路线总览</h2>
          <p className="text-gray-500 max-w-lg mx-auto">3天19个景点，每天的行走路线一目了然</p>
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
            <div className="h-64 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px', color: current.color }} />
              <div className="text-center z-10 px-4">
                <div className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${current.color}, ${current.color}dd)` }}>
                  <i className={`fa-solid ${current.day === 0 ? 'fa-trophy' : 'fa-map'} text-white text-3xl`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>{current.title}</h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: current.color }}>
                    {current.spots} 个景点
                  </span>
                  {current.day > 0 && (
                    <span className="text-xs text-gray-400">DAY {current.day}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">{current.desc}</p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-100">
              <div className="h-full rounded-r-full transition-all duration-500"
                style={{ width: `${((activeDay + 1) / Rl.length) * 100}%`, background: current.color }} />
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Rl.map((item, i) => (
                <div key={i} onClick={() => setActiveDay(i)}
                  className={`rounded-xl p-3 cursor-pointer transition-all duration-300 border ${activeDay === i
                    ? 'border-2 shadow-md scale-[1.02]'
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-sm'}`}
                  style={activeDay === i ? { borderColor: item.color, background: item.color + '08' } : undefined}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                      style={{ background: item.color }}>
                      {item.day === 0 ? '★' : item.day}
                    </div>
                    <span className="text-xs font-medium text-gray-600 truncate">{item.title}</span>
                  </div>
                  <div className="text-[10px] text-gray-400 truncate">{item.spots}个景点</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#667eea]" /> DAY 1
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#f5576c]" /> DAY 2
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#4facfe]" /> DAY 3
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#10b981]" /> 全景
          </span>
        </div>
      </div>
    </section>
  )
}
