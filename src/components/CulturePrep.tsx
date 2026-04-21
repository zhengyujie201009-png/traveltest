import { useState, useRef, useEffect } from 'react'
import { Gd, Xd, Qt, qu, Zd, type CultureItem, type CultureType } from '../data/culture'

function CultureCard({ item, index }: { item: CultureItem; index: number }) {
  const config = qu[item.type]
  return (
    <div className="min-w-[280px] max-w-[280px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover group flex-shrink-0 snap-start"
      style={{ animationDelay: `${index * 0.05}s` }}>
      <div className="relative h-40 overflow-hidden">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className={`text-white text-[10px] font-bold px-2 py-1 rounded-full bg-gradient-to-r ${config.gradient}`}>
            <i className={`fa-solid ${config.icon} mr-1`} />{config.label}
          </span>
          {item.tag && (
            <span className="text-white text-[10px] font-bold px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm">
              {item.tag}
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${item.country === 'sg' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}>
            {item.country === 'sg' ? '🇸🇬' : '🇹🇭'}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h4 className="text-white font-bold text-base">{item.title}</h4>
          <p className="text-white/70 text-xs mt-0.5 truncate">{item.subtitle}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{item.desc}</p>
      </div>
    </div>
  )
}

function FeaturedCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const featured = Qt.slice(0, 8)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % featured.length)
    }, 4000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [featured.length])

  const item = featured[current]
  const config = qu[item.type]

  return (
    <div className="relative rounded-3xl overflow-hidden mb-12 shadow-xl group cursor-pointer h-72 md:h-80"
      onClick={() => setCurrent((current + 1) % featured.length)}>
      <img src={item.img} alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className={`text-white text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${config.gradient}`}>
          <i className={`fa-solid ${config.icon} mr-1.5`} />{config.label}
        </span>
        {item.tag && (
          <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
            ⭐ {item.tag}
          </span>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white/60 text-xs">{item.country === 'sg' ? '🇸🇬 新加坡' : '🇹🇭 泰国'}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>{item.title}</h3>
        <p className="text-white/70 text-sm mb-3">{item.subtitle}</p>
        <p className="text-white/60 text-sm max-w-lg leading-relaxed line-clamp-2">{item.desc}</p>
      </div>
      <div className="absolute bottom-4 right-6 flex gap-1.5">
        {featured.map((_, i) => (
          <button key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'}`} />
        ))}
      </div>
    </div>
  )
}

function HorizontalList({ items, title }: { items: CultureItem[]; title: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => { checkScroll() }, [items])

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' })
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-700">{title}</h4>
        <div className="flex gap-2">
          <button onClick={() => scroll('left')} disabled={!canScrollLeft}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${canScrollLeft ? 'border-gray-300 text-gray-500 hover:bg-gray-100' : 'border-gray-100 text-gray-200 cursor-not-allowed'}`}>
            <i className="fa-solid fa-chevron-left text-xs" />
          </button>
          <button onClick={() => scroll('right')} disabled={!canScrollRight}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${canScrollRight ? 'border-gray-300 text-gray-500 hover:bg-gray-100' : 'border-gray-100 text-gray-200 cursor-not-allowed'}`}>
            <i className="fa-solid fa-chevron-right text-xs" />
          </button>
        </div>
      </div>
      <div ref={scrollRef} onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {items.map((item, i) => (
          <CultureCard key={`${item.title}-${i}`} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}

export default function CulturePrep() {
  const [activeTab, setActiveTab] = useState<CultureType>('movie')
  const [activeCountry, setActiveCountry] = useState<'all' | 'sg' | 'th'>('all')

  const allItems = [...Gd, ...Xd]
  const filtered = allItems.filter(item => {
    if (item.type !== activeTab) return false
    if (activeCountry !== 'all' && item.country !== activeCountry) return false
    return true
  })

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-4">
            <i className="fa-solid fa-graduation-cap mr-2" />行前功课
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>文化预习</h2>
          <p className="text-gray-500 max-w-lg mx-auto">出发前看看这些影视、书籍和音乐，让旅途更有深度</p>
        </div>

        <FeaturedCarousel />

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex bg-gray-100 rounded-xl p-1">
            {Zd.map(tab => (
              <button key={tab.type} onClick={() => setActiveTab(tab.type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === tab.type ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}>
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex bg-gray-100 rounded-xl p-1 ml-auto">
            {([['all', '全部'], ['sg', '🇸🇬 新加坡'], ['th', '🇹🇭 泰国']] as const).map(([key, label]) => (
              <button key={key} onClick={() => setActiveCountry(key)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${activeCountry === key ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <HorizontalList items={filtered} title={`${qu[activeTab].label}推荐 · ${activeCountry === 'all' ? '全部' : activeCountry === 'sg' ? '新加坡' : '泰国'}`} />

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: 'fa-film', label: '影视', count: allItems.filter(i => i.type === 'movie').length, color: '#f5576c', gradient: 'from-rose-500 to-pink-600' },
            { icon: 'fa-book', label: '书籍', count: allItems.filter(i => i.type === 'book').length, color: '#667eea', gradient: 'from-indigo-500 to-purple-600' },
            { icon: 'fa-music', label: '音乐', count: allItems.filter(i => i.type === 'music').length, color: '#43e97b', gradient: 'from-emerald-400 to-teal-500' },
            { icon: 'fa-star', label: '精选推荐', count: Qt.length, color: '#ffd93d', gradient: 'from-amber-400 to-orange-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center card-hover">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center mx-auto mb-2`}>
                <i className={`fa-solid ${stat.icon} text-white text-sm`} />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.count}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
