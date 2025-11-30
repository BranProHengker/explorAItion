import { Shield, Zap, Banknote, Moon, ArrowRight } from "lucide-react"

export function SolutionSlide() {
  const features = [
    { 
      icon: Shield, 
      title: "Satpam Digital 24/7", 
      description: "Monitoring non-stop dengan AI canggih dan tim manusia di Surabaya." 
    },
    { 
      icon: Zap, 
      title: "Reaksi Kilat < 60 Detik", 
      description: "Serangan terdeteksi? Kami langsung blokir dan pulihkan akses." 
    },
    { 
      icon: Banknote, 
      title: "Garansi Uang Kembali", 
      description: "Berani ganti rugi finansial jika sistem kami gagal melindungi Anda." 
    },
  ]

  return (
    <div className="h-screen w-full flex flex-col justify-center px-6 py-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
        <div className="text-center mb-8 shrink-0">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            The Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight">
            <span className="text-primary block mb-2">Teman Pelindung</span>
            Asuransi Digital + Benteng 24 Jam
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Lebih dari sekadar software antivirus. Kami adalah partner keamanan bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8 shrink-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 group-hover:scale-110 transition-transform" />
              
              <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors relative z-10">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900 relative z-10">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed relative z-10">{feature.description}</p>
            </div>
          ))}
        </div>
{/* 
        <div className="bg-slate-900 rounded-2xl p-8 text-center relative overflow-hidden shrink-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <Moon className="w-12 h-12 mx-auto mb-4 text-primary/80 relative z-10" />
          <p className="text-xl md:text-3xl font-bold leading-tight text-white relative z-10 font-serif italic">
            &quot;Tidur nyenyak. Besok bangun, tokomu masih ada.&quot;
          </p>
        </div> */}
      </div>
    </div>
  )
}
