import { Link, Eye, Zap, ArrowRight } from "lucide-react"

export function HowItWorksSlide() {
  const steps = [
    {
      number: "1",
      icon: Link,
      title: "Hubungkan Akun",
      description: "Kamu hubungkan akun Shopee/Tokopedia (API resmi, 30 detik)",
    },
    { number: "2", icon: Eye, title: "Kami Pantau 24/7", description: "AI + tim manusia Surabaya monitoring non-stop" },
    {
      number: "3",
      icon: Zap,
      title: "Auto Response",
      description: "Ada serangan → auto-block + tim telepon kamu + pulihkan akun",
    },
  ]

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">3 Langkah Mudah</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 text-primary z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="bg-secondary border border-border rounded-2xl p-8 text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            → Selesai. <span className="text-primary">Kamu lanjut jualan.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
