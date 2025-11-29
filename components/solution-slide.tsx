import { Shield, Zap, Banknote, Moon } from "lucide-react"

export function SolutionSlide() {
  const features = [
    { icon: Shield, title: "Kami jaga akunmu 24/7", description: "Monitoring tanpa henti setiap detik" },
    { icon: Zap, title: "Blokir dalam 60 detik", description: "Kalau ada serangan → kami blokir + pulihkan akun" },
    { icon: Banknote, title: "Ganti rugi Rp 500 juta", description: "Kalau kami gagal → kami tanggung kerugianmu" },
  ]

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            SOLUTION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Marketplace Shield</span>
          </h2>
          <p className="text-xl text-muted-foreground">Asuransi Digital + Benteng 24 Jam</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <Moon className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <p className="text-2xl md:text-3xl font-bold leading-relaxed">
            &quot;Tidur nyenyak. Besok bangun, tokomu masih ada.&quot;
          </p>
        </div>
      </div>
    </div>
  )
}
