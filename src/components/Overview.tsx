import { itineraryData, budgetCategories, totalBudget } from '../data/itinerary'

export default function Overview() {
  return (
    <section id="overview" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
          <i className="fa-solid fa-route mr-2" />行程概览
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>9天8晚 · 闺蜜东南亚之旅</h2>
        <p className="text-gray-500 max-w-lg mx-auto">新加坡3天 + 普吉岛3天 + 曼谷3天，精心规划每一天</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { icon: 'fa-calendar-days', value: '9天8晚', label: '行程天数', color: 'from-indigo-500 to-purple-500' },
          { icon: 'fa-location-dot', value: `${itineraryData.reduce((a, d) => a + d.spots.length, 0)}个`, label: '打卡景点', color: 'from-pink-500 to-rose-500' },
          { icon: 'fa-utensils', value: `${itineraryData.reduce((a, d) => a + d.meals.length, 0)}餐`, label: '美食推荐', color: 'from-blue-500 to-cyan-500' },
          { icon: 'fa-coins', value: `¥${totalBudget}`, label: '预计预算', color: 'from-green-500 to-emerald-500' },
        ].map((item, i) => (
          <div key={i} className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center group cursor-default">
            <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <i className={`fa-solid ${item.icon} text-white text-xl`} />
            </div>
            <div className="text-2xl font-bold text-gray-800">{item.value}</div>
            <div className="text-sm text-gray-400 mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <h3 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <i className="fa-solid fa-timeline text-indigo-500" /> 每日速览
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {itineraryData.map(day => (
            <a key={day.day} href={`#day-${day.day}`} onClick={(e) => {
              e.preventDefault()
              const cityIdx = day.day <= 3 ? 0 : day.day <= 6 ? 1 : 2
              window.dispatchEvent(new CustomEvent('switch-city-tab', { detail: cityIdx }))
              setTimeout(() => {
                const el = document.getElementById(`day-${day.day}`)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }, 150)
            }} className="card-hover group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-28 overflow-hidden">
                <img src={day.headerImg} alt={day.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-3 right-3">
                  <div className="text-white text-xs opacity-80">{day.date}</div>
                  <div className="text-white text-sm font-semibold">{day.title}</div>
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: day.color }}>D{day.day}</div>
              </div>
              <div className="p-3">
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <i className={`fa-solid ${day.weatherIcon}`} /> {day.weather}
                  <span className="mx-1">·</span>
                  <i className="fa-solid fa-location-dot" /> {day.spots.length}个景点
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <i className="fa-solid fa-wallet text-indigo-500" /> 预算概览
          <span className="ml-auto text-2xl font-bold text-gray-800">¥{totalBudget.toLocaleString()}</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {budgetCategories.map((cat, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: cat.color + '18' }}>
                <i className={`fa-solid ${cat.icon}`} style={{ color: cat.color }} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{cat.label}</span>
                  <span className="text-sm font-semibold text-gray-800">¥{cat.amount}</span>
                </div>
                <div className="budget-bar mt-1.5">
                  <div className="budget-bar-fill" style={{ width: `${(cat.amount / totalBudget) * 100}%`, background: cat.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
