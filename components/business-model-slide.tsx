import { Check, Sparkles, TrendingUp, Users } from "lucide-react"

export function BusinessModelSlide() {
  const tiers = [
    {
      name: "Basic",
      price: "-",
      subtitle: "GMV < Rp 300 jt",
      features: ["1 akun marketplace", "Monitoring 24/7", "Auto-block serangan", "Ganti rugi Rp 100 jt"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "-",
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
    <div className="h-screen w-full flex flex-col justify-center px-6 py-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
        <div className="text-center mb-8 shrink-0">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            Business Model
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-foreground tracking-tight">Subscription Bulanan</h2>
          <p className="text-lg text-muted-foreground font-light">Model bisnis yang terukur dan tervalidasi.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8 items-start shrink-0">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 transition-all duration-300 ${
                tier.highlight
                  ? "bg-primary text-white shadow-xl scale-105 z-10 ring-1 ring-primary/50"
                  : "bg-white border border-slate-200 text-slate-800 shadow-sm hover:shadow-md"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-accent text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm">
                  MOST POPULAR
                </div>
              )}
              <h3 className={`text-xl font-bold mb-0.5 ${tier.highlight ? "text-white" : "text-slate-900"}`}>{tier.name}</h3>
              <p className={`text-xs mb-4 ${tier.highlight ? "text-white/80" : "text-slate-500"}`}>{tier.subtitle}</p>
              
              <div className="mb-4 pb-4 border-b border-current/10">
                <div className="flex items-baseline gap-1">
                  {tier.price !== "Custom" && <span className="text-sm font-semibold">Rp</span>}
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className={`text-xs font-medium ${tier.highlight ? "text-white/80" : "text-slate-500"}`}>jt/bln</span>}
                </div>
              </div>

              <ul className="space-y-2">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <div className={`mt-0.5 rounded-full p-0.5 ${tier.highlight ? "bg-white/20" : "bg-primary/10"}`}>
                        <Check className={`w-3 h-3 ${tier.highlight ? "text-white" : "text-primary"}`} />
                    </div>
                    <span className={`text-xs leading-relaxed ${tier.highlight ? "text-white/90" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 shrink-0">
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 flex flex-col justify-between h-full">
            <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <p className="text-xs text-accent/80 font-medium uppercase tracking-wider">Early Bird (50 slot)</p>
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900">-</p>
              <p className="text-[10px] text-slate-500">*Bayar tahunan</p>
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between h-full">
             <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Target Bulan 3</p>
             </div>
             <div>
              <p className="text-xl font-bold text-slate-900">-</p>
               <p className="text-[10px] text-slate-500">120 Customer</p>
             </div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between h-full">
             <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">LTV per Customer</p>
             </div>
             <div>
              <p className="text-xl font-bold text-slate-900">{"> "}-</p>
              <p className="text-[10px] text-slate-500">Retention rate tinggi</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
