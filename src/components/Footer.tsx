export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>✈️ 新加坡+泰国闺蜜游 · 2026</h3>
          <p className="text-gray-400 text-sm">3位女生的9天8晚东南亚之旅</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-center">
          {[
            { icon: 'fa-shield-heart', label: '旅行保险', desc: '出行无忧' },
            { icon: 'fa-cloud-sun', label: '天气预报', desc: '实时关注' },
            { icon: 'fa-phone', label: '紧急联系', desc: '安全第一' },
            { icon: 'fa-hospital', label: '就近医院', desc: '健康保障' },
          ].map((item, i) => (
            <div key={i} className="group cursor-default">
              <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <i className={`fa-solid ${item.icon} text-white/70`} />
              </div>
              <div className="text-sm font-medium">{item.label}</div>
              <div className="text-xs text-gray-500">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">© 2026 五一旅游攻略 · 用心规划每一段旅程</p>
          <div className="flex items-center gap-4 text-gray-500">
            <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-weixin" /></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-weibo" /></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fa-solid fa-share-nodes" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
