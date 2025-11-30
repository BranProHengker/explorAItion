import { TrendingUp, Sprout, AlertCircle, ShieldAlert, ArrowUpRight } from "lucide-react"

export function TargetMarketSlide() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12 bg-background">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
            Market & Data
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">Siapa yang Kami Lindungi?</h2>
          <p className="text-xl text-muted-foreground font-light">Fokus pada Seller yang aset digitalnya berharga.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Target Market Segments */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground border-b border-border pb-4">Target Kami</h3>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex gap-6 items-start group">
              <div className="p-4 bg-blue-50 rounded-lg shrink-0 group-hover:bg-blue-100 transition-colors">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Rising Star Sellers</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Seller yang omzetnya mulai naik (Rp 50jt - 500jt/bulan). 
                  Mereka sudah punya "aset reputasi" yang mahal.
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>Butuh jaminan operasional stabil</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex gap-6 items-start group">
              <div className="p-4 bg-green-50 rounded-lg shrink-0 group-hover:bg-green-100 transition-colors">
                <Sprout className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Smart Starters</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Seller merintis yang sadar risiko. Membangun toko dari nol 
                  harus pondasinya kuat, bukan "gampang roboh" karena hack.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>Investasi keamanan jangka panjang</span>
                </div>
              </div>
            </div>
          </div>

          {/* Data / Statistics */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 relative overflow-hidden shadow-inner">
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
                <ShieldAlert className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-slate-800">Ancaman Nyata Global</h3>
              </div>

              <div className="space-y-8">
                {/* Stat 1 */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-slate-600 font-medium">Kenaikan Kasus Account Takeover (2024)</span>
                    <span className="text-4xl font-black text-red-600">+307%</span>
                  </div>
                  <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 w-[85%] rounded-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_2s_infinite]" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 text-right font-mono uppercase tracking-wide">Sumber: Laporan Cybersecurity E-commerce Global</p>
                </div>

                {/* Stat 2 - Donut Chart Representation using text/css */}
                <div className="flex gap-6 items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="shrink-0 relative w-24 h-24 flex items-center justify-center">
                     {/* Simple CSS Circle Chart */}
                     <svg className="w-full h-full transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="37.68" className="text-red-600" />
                     </svg>
                     <span className="absolute text-xl font-bold text-slate-900">85%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-lg">Seller Tidak Bisa Pulih</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      85% seller yang kena hack tanpa bantuan profesional <span className="text-red-600 font-bold underline decoration-red-200 decoration-2 underline-offset-2">kehilangan akun selamanya</span>.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-100 p-5 rounded-xl flex gap-3 items-start">
                   <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                   <p className="text-sm text-red-800 font-medium italic leading-relaxed">
                     "Marketplace tidak bertanggung jawab atas kelalaian keamanan pengguna."
                   </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
