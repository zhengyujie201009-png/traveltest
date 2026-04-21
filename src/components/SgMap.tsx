import { useState } from 'react'
import { Rl } from '../data/culture'

export default function SgMap() {
  const [activeDay, setActiveDay] = useState(0)
  const current = Rl[activeDay]

  return (
    <div id="sg-map" className="mb-10 scroll-mt-20">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <span className="text-sm font-semibold text-gray-400 flex items-center gap-2 whitespace-nowrap">
          <i className="fa-solid fa-map-location-dot text-xs" />路线总览
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <div className="flex flex-wrap gap-2 mb-6 justify-center">
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
  )
}
