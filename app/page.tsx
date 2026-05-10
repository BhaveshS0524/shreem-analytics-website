export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold leading-tight">
            AI-Powered Business Clarity for Gujarat SMEs
          </h1>

          <p className="mt-8 text-xl text-slate-600">
            Shreem Analytics helps Manufacturing, FMCG, Pharma,
            Retail, Textile and Logistics businesses transform
            raw Excel data into actionable business intelligence.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white">
              Book Free Demo
            </button>

            <button className="rounded-xl border border-slate-300 px-8 py-4">
              View Demo Dashboard
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}