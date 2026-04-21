import { useState, useRef, useEffect } from 'react'
import { Gd, Xd, Qt, qu, Zd, type CultureItem, type CultureType } from '../data/culture'

const audioRef: { current: HTMLAudioElement | null; playingUrl: string | null } = { current: null, playingUrl: null }

function CultureCard({ item, index, playingUrl, onPlay }: { item: CultureItem; index: number; playingUrl: string | null; onPlay: (url: string | null) => void }) {
  const config = qu[item.type]
  const isMusic = item.type === 'music' && item.previewUrl
  const isPlaying = isMusic && playingUrl === item.previewUrl

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!item.previewUrl) return

    if (isPlaying) {
      audioRef.current?.pause()
      onPlay(null)
      return
    }

    if (audioRef.current) {
      audioRef.current.pause()
    }
    const audio = new Audio(item.previewUrl)
    audioRef.current = audio
    audioRef.playingUrl = item.previewUrl
    audio.play()
    onPlay(item.previewUrl)
    audio.onended = () => {
      onPlay(null)
      audioRef.playingUrl = null
    }
  }

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
        {isMusic && (
          <button onClick={handlePlay}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'bg-black/30' : 'bg-transparent hover:bg-black/20'}`}>
            <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isPlaying ? 'bg-white/95 scale-100' : 'bg-white/80 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100'}`}>
              <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-lg ${isPlaying ? 'text-emerald-500' : 'text-gray-700 ml-1'}`} />
            </div>
            {isPlaying && (
              <div className="absolute bottom-12 left-3 right-3 flex items-center gap-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="flex-1 bg-emerald-400 rounded-full animate-pulse" style={{ height: `${8 + Math.random() * 16}px`, animationDelay: `${i * 0.1}s`, animationDuration: `${0.4 + Math.random() * 0.4}s` }} />
                ))}
              </div>
            )}
          </button>
        )}
        <div className="absolute bottom-3 left-3 right-3">
          <h4 className="text-white font-bold text-base">{item.title}</h4>
          <p className="text-white/70 text-xs mt-0.5 truncate">{item.subtitle}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{item.desc}</p>
        {isMusic && (
          <button onClick={handlePlay}
            className={`mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${isPlaying ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-gray-50 text-gray-500 border border-gray-100 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200'}`}>
            <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-[10px]`} />
            {isPlaying ? '暂停试听' : '▶ 点击试听 30s'}
          </button>
        )}
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

function HorizontalList({ items, title, playingUrl, onPlay }: { items: CultureItem[]; title: string; playingUrl: string | null; onPlay: (url: string | null) => void }) {
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
          <CultureCard key={`${item.title}-${i}`} item={item} index={i} playingUrl={playingUrl} onPlay={onPlay} />
        ))}
      </div>
    </div>
  )
}

export default function CulturePrep() {
  const [activeTab, setActiveTab] = useState<CultureType>('movie')
  const [activeCountry, setActiveCountry] = useState<'all' | 'sg' | 'th'>('all')
  const [playingUrl, setPlayingUrl] = useState<string | null>(null)

  const allItems = [...Gd, ...Xd]
  const filtered = allItems.filter(item => {
    if (item.type !== activeTab) return false
    if (activeCountry !== 'all' && item.country !== activeCountry) return false
    return true
  })

  return (
    <section id="culture-prep" className="py-16 px-4 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-4">
            <i className="fa-solid fa-graduation-cap mr-2" />旅行前的文化预习
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Noto Serif SC', serif" }}>先懂再看，沉浸式旅行</h2>
          <p className="text-gray-500 max-w-lg mx-auto">出发前看看这些影视、书籍和音乐，让旅途记忆更深刻</p>
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

        <HorizontalList items={filtered} title={`${qu[activeTab].label}推荐 · ${activeCountry === 'all' ? '全部' : activeCountry === 'sg' ? '新加坡' : '泰国'}`} playingUrl={playingUrl} onPlay={setPlayingUrl} />
      </div>
    </section>
  )
}
