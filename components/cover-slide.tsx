import { ShieldCheck, ChevronRight } from "lucide-react"

export function CoverSlide() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden bg-background">
      {/* Minimalist Modern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[60%] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[40%] rounded-full bg-gradient-to-tr from-slate-200/40 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-5xl flex flex-col items-center justify-center h-full">
        
        {/* Logo Badge */}
        <img src="/logo.png" alt="Teman Pelindung" className="h-50 w-auto mb-8 object-contain" />

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight text-slate-900 shrink-0">
          TEMAN <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">PELINDUNG</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light max-w-3xl mx-auto leading-normal shrink-0">
          “Teman Pelindung: Dari akun Shopee sampai website, kami jagain semua.”<span className="font-semibold text-slate-900">24 jam non-stop</span>.
        </p>

        {/* <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-10 relative shrink-0">
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-16 bg-primary rounded-r-full" />
          <p className="text-base md:text-lg leading-relaxed text-slate-700">
            "<span className="text-red-600 font-bold">87% seller pernah rugi</span> karena akun kena hack.
            Kami jamin tidak akan terjadi lagi — atau kami ganti rugi sampai 
            <span className="text-primary font-bold text-xl align-middle ml-2 underline decoration-primary/20 decoration-4 underline-offset-4">Uang kembali dan tambahan kerugihan</span>."
          </p>
        </div> */}

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
             <span className="h-px w-8 bg-slate-300"></span>
             <span className="text-xs font-mono uppercase tracking-widest">Surabaya</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden md:block" />
          <span className="text-xs font-mono uppercase tracking-widest">Desember 2025</span>
          <div className="flex items-center gap-2 md:hidden">
             <span className="h-px w-8 bg-slate-300"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
