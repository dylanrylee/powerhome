export default function BasementShowcase() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-900 mb-4 tracking-tight">
            General Home Renovations
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            See the dramatic difference a professional renovation makes.
            From outdated rooms to fully functional and elegant living spaces across your entire home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto items-start">
          {/* Before Video */}
          <div className="relative shadow-xl bg-slate-900 border border-slate-200 flex items-center justify-center p-2">
            <div className="absolute top-4 left-4 z-10 bg-slate-800 text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold rounded-sm">
              Before
            </div>
            <video
              className="w-full h-auto rounded-sm"
              src="/images/IMG_7347.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* After Video */}
          <div className="relative shadow-xl bg-slate-900 border border-slate-200 flex items-center justify-center p-2">
            <div className="absolute top-4 left-4 z-10 bg-amber-600 text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold rounded-sm shadow-md">
              After
            </div>
            <video
              className="w-full h-auto rounded-sm"
              src="/images/IMG_7571.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Before Image */}
          <div className="relative shadow-xl bg-slate-900 border border-slate-200 flex items-center justify-center p-2">
            <div className="absolute top-4 left-4 z-10 bg-slate-800 text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold rounded-sm">
              Before
            </div>
            <img
              className="w-full h-auto rounded-sm"
              src="/images/before_basement.jpeg"
              alt="Before Basement"
            />
          </div>

          {/* After Image */}
          <div className="relative shadow-xl bg-slate-900 border border-slate-200 flex items-center justify-center p-2">
            <div className="absolute top-4 left-4 z-10 bg-amber-600 text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold rounded-sm shadow-md">
              After
            </div>
            <img
              className="w-full h-auto rounded-sm"
              src="/images/after_basement.jpeg"
              alt="After Basement"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
