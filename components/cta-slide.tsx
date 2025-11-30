import { ShieldCheck, ArrowRight, QrCode, Smartphone } from "lucide-react"

export function CTASlide() {
  return (
    <div className="h-screen w-full flex flex-col justify-center relative overflow-hidden bg-background p-6 md:p-8">
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        
        {/* Massive Typographic Header */}
        <div className="mb-8 md:mb-10 text-center md:text-left relative shrink-0">
          <div className="absolute -top-12 left-0 text-[8rem] md:text-[10rem] font-black text-slate-100 select-none pointer-events-none leading-none overflow-hidden truncate w-full z-0">
            TEMAN
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 relative z-10 leading-none">
            KAMI MULAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">SENIN DEPAN</span>
          </h2>
          <div className="flex items-center gap-4 mt-4 md:ml-2 relative z-10">
             <div className="h-1 w-16 bg-primary rounded-full" />
             <p className="text-sm md:text-lg text-slate-500 font-mono uppercase tracking-widest font-bold">
               10 SLOT TEMAN PERTAMA HABIS DALAM 7 HARI
             </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 md:gap-8 items-stretch shrink-0 h-fit">
          
          {/* LEFT COLUMN: The Offers */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* Customer Card - Clean White Style */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 p-6 md:p-8 hover:shadow-2xl transition-all duration-500 flex flex-col justify-center h-full">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700 pointer-events-none">
                <ShieldCheck className="w-48 h-48 text-primary" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                    Special Offer
                  </div>
                  <span className="text-xs text-slate-400 font-mono font-bold">SLOTS: 10/10 AVAILABLE</span>
                </div>
                
                <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">Perlindungan Seumur Hidup</h3>
                <p className="text-sm md:text-base text-slate-600 mb-6 max-w-lg leading-relaxed">
                  Mau jadi salah satu dari 10 orang pertama yang akunnya kami lindungi seumur hidup?
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 border-t border-slate-100 pt-6">
                  <div className="space-y-0.5">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Harga Spesial</p>
                    <p className="text-2xl font-bold text-slate-900">Rp 6,8jt<span className="text-xs text-slate-500 font-normal">/bln</span></p>
                    <p className="text-[8px] text-slate-400 uppercase tracking-wider font-medium">*Bayar Tahunan</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Ganti Rugi</p>
                    <p className="text-2xl font-bold text-slate-900">Rp 500jt</p>
                  </div>
                   <div className="space-y-0.5">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Validity</p>
                    <p className="text-2xl font-bold text-slate-900">Lifetime</p>
                  </div>
                </div>

                <button className="group/btn flex items-center gap-2 text-base font-bold text-white bg-primary hover:bg-primary/90 px-6 py-3 rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 w-fit">
                  Amankan Slot Teman <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact - Minimalist */}
          <div className="lg:col-span-4 h-full">
            <div className="h-full bg-slate-900 text-white rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden group justify-center">
              {/* Decorative blobs */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20 group-hover:scale-125 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent z-10" />
              
              <div className="relative z-20 flex-1 flex flex-col justify-between">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-white text-slate-900 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-3xl font-black leading-tight mb-2">WA<br />Sekarang.</h3>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">
                    Mari kita jadi TEMAN PELINDUNG seller Indonesia.
                  </p>
                </div>

                <div className="mt-4">
                  <div className="bg-white p-3 rounded-xl mb-4 aspect-square flex items-center justify-center w-32 shadow-xl mx-auto lg:mx-0">
                     <QrCode className="w-full h-full text-slate-900" />
                  </div>
                  
                  <div className="space-y-1 text-center lg:text-left">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">WhatsApp Direct</p>
                    <p className="text-xl font-black tracking-tight text-white">0812-XXX-XXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
