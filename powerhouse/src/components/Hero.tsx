export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/IMG_1860.jpeg"
          alt="Home Renovation"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border border-white/30 bg-white/10 text-white text-xs font-medium tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
          Premium Home Renovations
        </div>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 text-balance font-serif">
          Expert Craftsmanship for <br className="hidden md:block" /> Your Dream Home
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto text-balance font-light leading-relaxed">
          From stunning kitchen remodels to complete structural makeovers, we bring precision, elegance, and quality to every corner of your house.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-none text-xs uppercase tracking-widest font-semibold hover:bg-slate-100 transition-colors shadow-lg">
            Get a Free Estimate
          </button>
        </div>
      </div>
    </section>
  )
}
