import { TrendingUp, Sprout, AlertCircle, ShieldAlert, ArrowUpRight } from "lucide-react"

export function TargetMarketSlide() {
  return (
    <div className="h-screen w-full flex flex-col justify-center px-6 py-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
        <div className="text-center mb-8 shrink-0">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            Market & Data
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-foreground tracking-tight">Siapa yang Kami Lindungi?</h2>
          <p className="text-lg text-muted-foreground font-light">Fokus pada Seller yang aset digitalnya berharga.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch h-fit shrink-0">
          
          {/* Target Market Segments */}
          <div className="space-y-4 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-foreground border-b border-border pb-2">Target Kami</h3>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4 items-start group">
              <div className="p-3 bg-blue-50 rounded-lg shrink-0 group-hover:bg-blue-100 transition-colors">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Rising Star Sellers</h4>
                <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                  Seller yang omzetnya mulai naik (Rp 50jt - 500jt/bulan). 
                  Mereka sudah punya "aset reputasi" yang mahal.
                </p>
                <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>Butuh jaminan operasional stabil</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4 items-start group">
              <div className="p-3 bg-green-50 rounded-lg shrink-0 group-hover:bg-green-100 transition-colors">
                <Sprout className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Smart Starters</h4>
                <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                  Seller merintis yang sadar risiko. Membangun toko dari nol 
                  harus pondasinya kuat, bukan "gampang roboh" karena hack.
                </p>
                <div className="flex items-center gap-2 text-xs text-green-600 font-semibold">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>Investasi keamanan jangka panjang</span>
                </div>
              </div>
            </div>
          </div>

          {/* Data / Statistics */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative overflow-hidden shadow-inner flex flex-col justify-center">
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3">
                <ShieldAlert className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-slate-800">Fakta Kebocoran Data Indonesia</h3>
              </div>

              <div className="space-y-6">
                {/* Stat 1 */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-slate-600 font-medium text-sm">Kasus Kebocoran Data Tokopedia (2020)</span>
                    <span className="text-3xl font-black text-red-600">91 Juta</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 w-[91%] rounded-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_2s_infinite]" />
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1 text-right font-mono uppercase tracking-wide">Sumber: Cyble & Hackread Report</p>
                </div>

                {/* Stat 2 - Donut Chart Representation using text/css */}
                <div className="flex gap-4 items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="shrink-0 relative w-16 h-16 flex items-center justify-center">
                     {/* Simple CSS Circle Chart */}
                     <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-100" />
                        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="175.84" strokeDashoffset="17.58" className="text-red-600" />
                     </svg>
                     <span className="absolute text-sm font-bold text-slate-900">100%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-0.5 text-base">Resiko Kehilangan Aset</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Data email, password hash, dan nama lengkap <span className="text-red-600 font-bold">dijual bebas di Dark Web</span> seharga $5,000.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex gap-3 items-start">
                   <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                   <p className="text-xs text-red-800 font-medium italic leading-relaxed">
                     "Tokopedia mengakui adanya upaya pencurian data, namun password diklaim aman (hash). Kenyataannya, hacker tetap bisa melakukan brute-force."
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
