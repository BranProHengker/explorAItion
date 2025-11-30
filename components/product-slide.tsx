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
            <div className="bg-slate-900 border-[8px] border-slate-900 rounded-[3rem] p-2 w-full max-w-[320px] shadow-2xl shadow-slate-400/40 relative">
               {/* Side Buttons */}
               <div className="absolute -left-3 top-24 w-1 h-10 bg-slate-800 rounded-l-lg" />
               <div className="absolute -left-3 top-36 w-1 h-16 bg-slate-800 rounded-l-lg" />
               <div className="absolute -right-3 top-24 w-1 h-16 bg-slate-800 rounded-r-lg" />

              <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden h-[650px] flex flex-col">
                {/* Status Bar */}
                <div className="bg-white px-6 py-3 flex justify-between items-center border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900">9:41</span>
                  <div className="flex gap-1.5">
                     <div className="w-4 h-4 bg-slate-900 rounded-full opacity-20" />
                     <div className="w-4 h-4 bg-slate-900 rounded-full opacity-20" />
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6 space-y-6 flex-1 overflow-y-auto no-scrollbar">
                  
                  <div className="flex items-center justify-between">
                     <div>
                        <p className="text-sm text-slate-500">Selamat Malam,</p>
                        <h3 className="text-xl font-bold text-slate-900">Juragan Sepatu</h3>
                     </div>
                     <div className="w-10 h-10 bg-slate-200 rounded-full" />
                  </div>

                  {/* Status Card */}
                  <div className="bg-white shadow-lg shadow-green-900/5 rounded-3xl p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                       <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <p className="text-2xl font-black text-slate-900 tracking-tight">AKUN AMAN</p>
                    <p className="text-xs text-slate-400 mt-2 font-medium">Terakhir dicek: Baru saja</p>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-colors border border-red-100">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="text-sm">Laporkan Masalah</span>
                  </button>

                  {/* Notification */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
                    <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                       <Bell className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-800 mb-0.5">Laporan Mingguan</p>
                       <p className="text-xs text-slate-500 leading-relaxed">Minggu ini kami memblokir <span className="text-red-500 font-bold">27 serangan</span> percobaan login.</p>
                    </div>
                  </div>

                  {/* Footer Badge */}
                  <div className="flex items-center justify-center gap-2 py-4 opacity-50">
                    <Award className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Protected by Teman Pelindung</span>
                  </div>

                </div>
                
                {/* Bottom Nav Mock */}
                <div className="bg-white border-t border-slate-100 p-4 flex justify-around">
                   <div className="w-8 h-8 bg-primary/10 rounded-lg" />
                   <div className="w-8 h-8 bg-slate-100 rounded-lg" />
                   <div className="w-8 h-8 bg-slate-100 rounded-lg" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
