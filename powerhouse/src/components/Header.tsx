export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-slate-900 flex items-center justify-center text-white font-serif text-xl border border-slate-800">
            P
          </div>
          <span className="font-serif font-bold text-2xl tracking-tight text-slate-900">Powerhome</span>
        </div>
        <nav className="hidden md:flex gap-10 text-xs font-semibold text-slate-600 tracking-[0.1em] uppercase">
          <a href="#" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="bg-transparent text-slate-900 px-6 py-2.5 rounded-none text-xs font-semibold hover:bg-slate-900 hover:text-white transition-colors shadow-none border border-slate-900 tracking-widest uppercase">
            Get Quote
          </button>
        </div>
      </div>
    </header>
  )
}
