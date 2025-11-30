import { Link, Eye, Zap, ArrowRight, MessageCircle } from "lucide-react"

export function HowItWorksSlide() {
  const steps = [
    {
      number: "01",
      icon: Link,
      title: "Hubungkan Akun",
      description: "Kamu hubungkan akun Shopee/Tokopedia (API resmi, 30 detik)",
    },
    { 
      number: "02", 
      icon: Eye, 
      title: "Kami Pantau 24/7", 
      description: "AI + tim manusia monitoring non-stop" 
    },
    {
      number: "03",
      icon: Zap,
      title: "Auto Response",
      description: "Ada serangan → auto-block + tim telepon kamu + pulihkan akun",
    },
    {
      number: "04",
      icon: MessageCircle,
      title: "Laporan WhatsApp",
      description: "Tiap minggu kami kabari via WA: Akun aman atau ada masalah.",
    },
  ]

  return (
    <div className="h-screen w-full flex flex-col justify-center px-6 py-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
        <div className="text-center mb-8 shrink-0">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">4 Langkah Mudah</h2>
          <p className="text-lg text-muted-foreground font-light">Proses yang transparan dan sederhana untuk Anda.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 shrink-0">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white border border-slate-200 rounded-xl p-6 h-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col items-start gap-4 mb-2">
                  <div className="flex items-center justify-between w-full">
                     <span className="text-3xl font-black text-slate-200 group-hover:text-primary/20 transition-colors">
                        {step.number}
                     </span>
                     <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <step.icon className="w-5 h-5" />
                     </div>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-bold mb-1 text-slate-900">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                   <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center max-w-3xl mx-auto shrink-0">
          <p className="text-xl md:text-2xl font-bold text-slate-800">
            → Selesai. <span className="text-primary underline decoration-primary/30 underline-offset-4">Kamu lanjut jualan.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
