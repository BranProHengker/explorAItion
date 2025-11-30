import { ShieldCheck, ChevronRight } from "lucide-react"

export function CoverSlide() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden bg-background">
      {/* Minimalist Modern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[60%] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[40%] rounded-full bg-gradient-to-tr from-slate-200/40 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        
        {/* Logo Badge */}
        <div className="inline-flex items-center justify-center gap-2 mb-10 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
           <ShieldCheck className="w-5 h-5 text-primary" />
           <span className="text-sm font-bold tracking-widest uppercase text-slate-600">Official Pitch Deck</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-tight text-slate-900">
          TEMAN <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">PELINDUNG</span>
        </h1>

        <p className="text-2xl md:text-3xl text-slate-600 mb-12 font-light max-w-3xl mx-auto leading-normal">
          Teman yang jaga akun Shopee & Tokopedia kamu <span className="font-semibold text-slate-900">24 jam non-stop</span>.
        </p>

        <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto mb-16 relative">
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-20 bg-primary rounded-r-full" />
          <p className="text-lg md:text-xl leading-relaxed text-slate-700">
            "<span className="text-red-600 font-bold">87% seller pernah rugi</span> karena akun kena hack.
            Kami jamin tidak akan terjadi lagi — atau kami ganti rugi sampai 
            <span className="text-primary font-bold text-2xl align-middle ml-2 underline decoration-primary/20 decoration-4 underline-offset-4">Rp 500 juta</span>."
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-500">
          <div className="flex items-center gap-2">
             <span className="h-px w-8 bg-slate-300"></span>
             <span className="text-sm font-mono uppercase tracking-widest">Surabaya</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden md:block" />
          <span className="text-sm font-mono uppercase tracking-widest">Desember 2025</span>
          <div className="flex items-center gap-2 md:hidden">
             <span className="h-px w-8 bg-slate-300"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
