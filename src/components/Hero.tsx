import { useState, useEffect } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const target = new Date('2026-05-02T00:00:00')
    const interval = setInterval(() => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) { setCountdown({ days: 0, hours: 0, mins: 0, secs: 0 }); return }
      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToOverview = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=80)', transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.3}px)` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div className="absolute top-20 left-10 text-white/20 text-6xl animate-float" style={{ animationDelay: '0s' }}><i className="fa-solid fa-plane" /></div>
      <div className="absolute top-40 right-20 text-white/15 text-5xl animate-float" style={{ animationDelay: '1s' }}><i className="fa-solid fa-map-location-dot" /></div>
      <div className="absolute bottom-40 left-20 text-white/10 text-7xl animate-float" style={{ animationDelay: '0.5s' }}><i className="fa-solid fa-compass" /></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-px w-12 bg-white/40" />
            <span className="text-sm tracking-[0.3em] uppercase text-white/70 font-light">Singapore · Phuket · Bangkok</span>
            <div className="h-px w-12 bg-white/40" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-center animate-fade-in-up" style={{ fontFamily: "'Noto Serif SC', serif", animationDelay: '0.4s', opacity: 0 }}>
          新加坡+泰国闺蜜游
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 text-center max-w-xl animate-fade-in-up font-light tracking-wide" style={{ animationDelay: '0.6s', opacity: 0 }}>
          9天8晚 · 4位女生的东南亚之旅
        </p>
        <div className="flex gap-4 md:gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
          {[{ val: countdown.days, label: '天' }, { val: countdown.hours, label: '时' }, { val: countdown.mins, label: '分' }, { val: countdown.secs, label: '秒' }].map((item, i) => (
            <div key={i} className="glass-dark rounded-2xl px-4 py-3 md:px-6 md:py-4 text-center min-w-[70px]">
              <div className="text-2xl md:text-4xl font-bold tabular-nums">{String(item.val).padStart(2, '0')}</div>
              <div className="text-xs text-white/60 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
        <button onClick={scrollToOverview} className="animate-fade-in-up group flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 rounded-full px-8 py-3 transition-all duration-300 hover:scale-105" style={{ animationDelay: '1s', opacity: 0 }}>
          <span className="text-sm tracking-wider">查看行程安排</span>
          <i className="fa-solid fa-arrow-down text-sm group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
