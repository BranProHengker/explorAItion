import { ShieldCheck, Heart } from "lucide-react"

export function ClosingSlide() {
  return (
    <div className="h-screen w-full flex flex-col justify-center relative overflow-hidden bg-background p-6 md:p-8">
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full h-full flex flex-col justify-center items-center text-center">
        
        <div className="mb-12">
           <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-8 shadow-sm animate-pulse">
              <ShieldCheck className="w-12 h-12" />
           </div>
           <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
             Terima Kasih
           </h2>
        </div>

        <div className="bg-white/50 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 md:p-12 shadow-xl max-w-3xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-50" />
           
           <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed mb-8">
             &quot;Apresiasi mendalam kami haturkan kepada <span className="font-bold text-slate-900">Garuda Spark</span> dan <span className="font-bold text-slate-900">Jagoan Hosting</span> yang telah mewujudkan seminar ini.
           </p>
           <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
             Terima kasih juga kepada seluruh <span className="font-medium text-primary">Partner</span> yang telah menyediakan ruang bagi kami untuk terus belajar, bertumbuh, dan berinovasi.&quot;
           </p>

           <div className="mt-8 flex justify-center">
              <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-bounce" />
           </div>
        </div>

        <div className="mt-16">
           <p className="text-slate-400 text-sm font-medium tracking-widest uppercase">
              © 2025 Teman Pelindung
           </p>
        </div>

      </div>
    </div>
  )
}
