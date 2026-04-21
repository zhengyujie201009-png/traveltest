import { useState } from 'react'
import { packingList } from '../data/itinerary'

export default function PackingList() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const toggle = (key: string) => setChecked(prev => ({ ...prev, [key]: !prev[key] }))

  const total = packingList.reduce((a, c) => a + c.items.length, 0)
  const done = Object.values(checked).filter(Boolean).length
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  return (
    <section id="packing" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-4">
          <i className="fa-solid fa-suitcase-rolling mr-2" />行前准备
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>出行清单</h2>
        <p className="text-gray-500 max-w-lg mx-auto">勾选已准备好的物品，确保万无一失</p>
      </div>

      <div className="max-w-md mx-auto mb-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500">准备进度</span>
          <span className="text-sm font-bold text-emerald-600">{done}/{total} 已完成</span>
        </div>
        <div className="budget-bar">
          <div className="budget-bar-fill transition-all duration-500" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #43e97b, #38f9d7)' }} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {packingList.map((cat, ci) => (
          <div key={ci} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 card-hover">
            <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                <i className={`fa-solid ${cat.icon} text-emerald-500 text-sm`} />
              </div>
              {cat.category}
            </h4>
            <div className="space-y-2">
              {cat.items.map((item, ii) => {
                const key = `${ci}-${ii}`
                const isChecked = checked[key] || false
                return (
                  <label key={ii} className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${isChecked ? 'opacity-50' : ''}`} onClick={() => toggle(key)}>
                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${isChecked ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'}`}>
                      {isChecked && <i className="fa-solid fa-check text-white text-xs" />}
                    </div>
                    <span className={`text-sm ${isChecked ? 'line-through text-gray-400' : 'text-gray-600'}`}>{item}</span>
                  </label>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
