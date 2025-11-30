import { Check, Sparkles, TrendingUp, Users } from "lucide-react"

export function BusinessModelSlide() {
  const tiers = [
    {
      name: "Basic",
      price: "8,8",
      subtitle: "GMV < Rp 300 jt",
      features: ["1 akun marketplace", "Monitoring 24/7", "Auto-block serangan", "Ganti rugi Rp 100 jt"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "22,8",
      subtitle: "GMV Rp 300 jt – 2 M",
      features: [
        "3 akun marketplace",
        "Monitoring 24/7",
        "Auto-block + recovery",
        "Ganti rugi Rp 300 jt",
        "Dedicated support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      subtitle: "Brand besar / agency",
      features: [
        "Unlimited akun",
        "Monitoring 24/7",
        "Auto-block + recovery",
        "Ganti rugi Rp 500 jt",
        "24/7 hotline",
        "On-site audit",
      ],
      highlight: false,
    },
  ]

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12 bg-background">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
            Business Model
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">Subscription Bulanan</h2>
          <p className="text-xl text-muted-foreground font-light">Model bisnis yang terukur dan tervalidasi.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 items-start">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                tier.highlight
                  ? "bg-primary text-white shadow-xl scale-105 z-10 ring-1 ring-primary/50"
                  : "bg-white border border-slate-200 text-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  MOST POPULAR
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-1 ${tier.highlight ? "text-white" : "text-slate-900"}`}>{tier.name}</h3>
              <p className={`text-sm mb-6 ${tier.highlight ? "text-white/80" : "text-slate-500"}`}>{tier.subtitle}</p>
              
              <div className="mb-8 pb-8 border-b border-current/10">
                <div className="flex items-baseline gap-1">
                  {tier.price !== "Custom" && <span className="text-lg font-semibold">Rp</span>}
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className={`text-sm font-medium ${tier.highlight ? "text-white/80" : "text-slate-500"}`}>jt/bln</span>}
                </div>
              </div>

              <ul className="space-y-4">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full p-0.5 ${tier.highlight ? "bg-white/20" : "bg-primary/10"}`}>
                        <Check className={`w-3 h-3 ${tier.highlight ? "text-white" : "text-primary"}`} />
                    </div>
                    <span className={`text-sm leading-relaxed ${tier.highlight ? "text-white/90" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 flex flex-col justify-between">
            <div>
                <Sparkles className="w-8 h-8 text-accent mb-4" />
                <p className="text-sm text-accent/80 font-medium uppercase tracking-wider mb-1">Early Bird (50 slot)</p>
            </div>
            <p className="text-2xl font-bold text-slate-900">Rp 6,8 juta/bln</p>
            <p className="text-xs text-slate-500 mt-1">*Bayar tahunan</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
             <div>
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Target Bulan 3</p>
             </div>
            <p className="text-2xl font-bold text-slate-900">MRR Rp 1,5–2 M</p>
             <p className="text-xs text-slate-500 mt-1">120 Customer</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
             <div>
                <Users className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">LTV per Customer</p>
             </div>
            <p className="text-2xl font-bold text-slate-900">{"> "}Rp 250 juta</p>
            <p className="text-xs text-slate-500 mt-1">Retention rate tinggi</p>
          </div>
        </div>
      </div>
    </div>
  )
}
