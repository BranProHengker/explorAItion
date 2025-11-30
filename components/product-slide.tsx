import { CheckCircle2, AlertTriangle, Bell, Award, BarChart3, Activity, Shield } from "lucide-react"

export function ProductSlide() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12 bg-background">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
              Product
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Dashboard yang <br/> Sederhana & Efektif
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Didesain untuk ketenangan pikiran Anda. Pantau status keamanan toko semudah mengecek jam.
            </p>

            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                     <Activity className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-slate-900">Real-time Monitoring</h4>
                     <p className="text-slate-600">Sistem kami mengecek anomali setiap detik.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                     <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-slate-900">Instant Protection</h4>
                     <p className="text-slate-600">Blokir serangan otomatis sebelum merugikan.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px]">
               <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-[3rem] blur-2xl -z-10" />
               <img 
                 src="/mockup.png" 
                 alt="Teman Pelindung App Mockup" 
                 className="w-full h-auto rounded-[2.5rem] shadow-2xl shadow-slate-400/40 border-8 border-slate-900"
               />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
