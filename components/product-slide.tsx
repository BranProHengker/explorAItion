import { CheckCircle2, AlertTriangle, Bell, Award, BarChart3, Activity, Shield } from "lucide-react"

export function ProductSlide() {
  return (
    <div className="h-screen w-full flex flex-col justify-center px-6 py-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 uppercase tracking-wide w-fit">
              Product
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight">
              Dashboard yang <br/> Sederhana & Efektif
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Didesain untuk ketenangan pikiran Anda. Pantau status keamanan toko semudah mengecek jam.
            </p>

            <div className="space-y-4">
               <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                     <Activity className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                     <h4 className="text-base font-bold text-slate-900">Real-time Monitoring</h4>
                     <p className="text-sm text-slate-600">Sistem kami mengecek anomali setiap detik.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                     <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                     <h4 className="text-base font-bold text-slate-900">Instant Protection</h4>
                     <p className="text-sm text-slate-600">Blokir serangan otomatis sebelum merugikan.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end h-full items-center">
            <div className="relative w-full max-w-[280px] max-h-[80vh]">
               <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-[3rem] blur-2xl -z-10" />
               <img 
                 src="/mockup.png" 
                 alt="Teman Pelindung App Mockup" 
                 className="w-full h-auto object-contain max-h-[60vh] rounded-[2.5rem] shadow-2xl shadow-slate-400/40 border-8 border-slate-900"
               />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
