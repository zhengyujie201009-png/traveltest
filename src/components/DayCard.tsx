import { useState } from 'react'
import type { DayItinerary } from '../data/itinerary'

export default function DayCard({ day }: { day: DayItinerary }) {
  const [expandedMeal, setExpandedMeal] = useState<number | null>(null)
  const [expandedPhoto, setExpandedPhoto] = useState<number | null>(null)

  return (
    <div id={`day-${day.day}`} className="scroll-mt-20 mb-20">
      <div className="relative rounded-3xl overflow-hidden mb-8 shadow-lg card-hover">
        <div className="h-64 md:h-80 relative">
          <img src={day.headerImg} alt={day.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex items-center gap-3 mb-3">
              <span className={`day-badge-${day.day} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>DAY {day.day}</span>
              <span className="text-white/70 text-sm">{day.date}</span>
              <span className="ml-auto flex items-center gap-1.5 text-white/80 text-sm">
                <i className={`fa-solid ${day.weatherIcon} weather-icon`} /> {day.weather}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>{day.title}</h3>
            <p className="text-white/60 text-sm">{day.theme}</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {day.spots.map((spot, si) => (
          <div key={si} className="flex gap-4 md:gap-6 items-start">
            <div className="flex flex-col items-center flex-shrink-0 w-16">
              <div className="text-xs font-medium text-gray-400 mb-2 whitespace-nowrap">{spot.time.split('-')[0]}</div>
              <div className="w-3 h-3 rounded-full border-2 flex-shrink-0" style={{ borderColor: day.color, background: si === 0 ? day.color : 'white' }} />
              {si < day.spots.length - 1 && <div className="w-0.5 flex-1 min-h-[60px] bg-gray-200 mt-1" />}
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover group">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 h-40 md:h-auto img-zoom flex-shrink-0">
                  <img src={spot.img} alt={spot.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: day.color + '15' }}>
                      <i className={`fa-solid ${spot.icon} text-sm`} style={{ color: day.color }} />
                    </div>
                    <h4 className="font-semibold text-gray-800">{spot.name}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mb-2 leading-relaxed">{spot.desc}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span><i className="fa-regular fa-clock mr-1" />{spot.time}</span>
                  </div>
                  {spot.tips && (
                    <div className="mt-3 flex items-start gap-2 bg-amber-50 text-amber-700 text-xs px-3 py-2 rounded-lg">
                      <i className="fa-solid fa-lightbulb mt-0.5" /><span>{spot.tips}</span>
                    </div>
                  )}
                  {spot.photo && (
                    <button onClick={() => setExpandedPhoto(expandedPhoto === si ? null : si)}
                      className="mt-3 flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 hover:shadow-sm"
                      style={{ color: day.color, background: day.color + '10', border: `1px solid ${day.color}30` }}>
                      <i className="fa-solid fa-camera" />📸 拍照攻略
                      <i className={`fa-solid fa-chevron-down text-[10px] ml-1 transition-transform duration-300 ${expandedPhoto === si ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                  {spot.easterEggs && spot.easterEggs.map((egg, ei) => (
                    <div key={ei} className="mt-2 flex items-start gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs px-3 py-2 rounded-lg border border-emerald-100">
                      <i className={`fa-solid ${egg.icon} mt-0.5 text-emerald-500`} />
                      <div>
                        <span className="font-medium">🥚 彩蛋 · {egg.name}</span>
                        <p className="text-emerald-600/80 mt-0.5">{egg.desc}</p>
                        {egg.address && <p className="text-emerald-500/60 mt-0.5"><i className="fa-solid fa-location-dot mr-1" />{egg.address}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {spot.photo && expandedPhoto === si && (
                <div className="border-t border-gray-100 bg-gradient-to-br from-pink-50/50 via-white to-purple-50/50 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: day.color }}>
                      <i className="fa-solid fa-camera text-white text-[10px]" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">📸 拍照打卡攻略</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      {[
                        { icon: 'fa-location-crosshairs', label: '最佳机位', text: spot.photo.position },
                        { icon: 'fa-person-rays', label: '推荐姿势 & 构图', text: spot.photo.pose },
                        { icon: 'fa-clock', label: '最佳时间', text: spot.photo.bestTime },
                      ].map((info, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: day.color + '15' }}>
                            <i className={`fa-solid ${info.icon} text-xs`} style={{ color: day.color }} />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-gray-600 mb-0.5">{info.label}</div>
                            <p className="text-xs text-gray-500 leading-relaxed">{info.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 relative group/ref">
                      <img src={spot.photo.refImg} alt="参考图" className="w-full h-48 object-cover group-hover/ref:scale-105 transition-transform duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                        <span className="text-white text-[10px] font-medium flex items-center gap-1"><i className="fa-solid fa-image" /> 参考构图</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2 text-sm">
            <i className="fa-solid fa-utensils" style={{ color: day.color }} /> 美食推荐
            <span className="ml-auto text-xs text-gray-400 font-normal">点击展开详情</span>
          </h4>
          <div className="space-y-3">
            {day.meals.map((meal, mi) => (
              <div key={mi} className="rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50/80 transition-colors" onClick={() => setExpandedMeal(expandedMeal === mi ? null : mi)}>
                  {meal.img ? (
                    <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0"><img src={meal.img} alt={meal.name} className="w-full h-full object-cover" /></div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0"><i className={`fa-solid ${meal.icon} text-orange-400 text-lg`} /></div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-700 truncate">{meal.name}</div>
                    <div className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">{meal.type}</span>
                      {meal.price && <span>{meal.price}</span>}
                    </div>
                  </div>
                  {meal.options && meal.options.length > 0 && (
                    <i className={`fa-solid fa-chevron-down text-gray-300 text-xs transition-transform duration-300 ${expandedMeal === mi ? 'rotate-180' : ''}`} />
                  )}
                </div>
                {meal.options && expandedMeal === mi && (
                  <div className="border-t border-gray-100 bg-gradient-to-b from-gray-50/50 to-white p-3 space-y-2.5">
                    <div className="text-xs text-gray-400 font-medium flex items-center gap-1.5 mb-1">
                      <i className="fa-solid fa-star text-amber-400" />推荐菜品
                    </div>
                    {meal.options.map((opt, oi) => (
                      <div key={oi} className="flex items-center gap-3 p-2 rounded-xl bg-white border border-gray-50 hover:border-gray-200 hover:shadow-sm transition-all duration-200 group/opt">
                        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-gray-100">
                          <img src={opt.img} alt={opt.name} className="w-full h-full object-cover group-hover/opt:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-sm font-medium text-gray-700">{opt.name}</span>
                            {opt.tag && <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium text-white" style={{ background: day.color }}>{opt.tag}</span>}
                          </div>
                          <p className="text-xs text-gray-400 leading-relaxed truncate">{opt.desc}</p>
                        </div>
                        <span className="text-xs font-medium whitespace-nowrap" style={{ color: day.color }}>{opt.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2 text-sm">
            <i className="fa-solid fa-route" style={{ color: day.color }} /> 交通 & 预算
          </h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-2 rounded-xl bg-blue-50/50">
              <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center"><i className="fa-solid fa-bus text-blue-500 text-sm" /></div>
              <div><div className="text-sm font-medium text-gray-700">{day.transport}</div><div className="text-xs text-gray-400">出行方式</div></div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-xl bg-green-50/50">
              <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center"><i className="fa-solid fa-coins text-green-500 text-sm" /></div>
              <div><div className="text-sm font-medium text-gray-700">¥{day.budget}</div><div className="text-xs text-gray-400">当日预算</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
