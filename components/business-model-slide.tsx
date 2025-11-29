import { Check, Sparkles, TrendingUp, Users } from "lucide-react"

export function BusinessModelSlide() {
  const tiers = [
    {
      name: "Protect",
      price: "9,9",
      features: ["1 akun marketplace", "Monitoring 24/7", "Auto-block serangan", "Ganti rugi Rp 100 jt"],
      highlight: false,
    },
    {
      name: "Grow",
      price: "24,9",
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
      price: "49,9",
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
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            BUSINESS MODEL
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Subscription Bulanan</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${tier.highlight ? "bg-primary text-primary-foreground border-2 border-primary scale-105" : "bg-card border border-border text-foreground"}`}
            >
              {tier.highlight && (
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-medium">Most Popular</span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Rp {tier.price}</span>
                <span className={tier.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {" "}
                  juta/bln
                </span>
              </div>
              <ul className="space-y-3">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 ${tier.highlight ? "text-primary-foreground" : "text-primary"}`}
                    />
                    <span className={tier.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
            <Sparkles className="w-6 h-6 text-accent mb-3" />
            <p className="text-sm text-muted-foreground mb-1">Early Bird (50 orang)</p>
            <p className="text-2xl font-bold text-foreground">Rp 7,9 juta/bln</p>
          </div>
          <div className="bg-secondary rounded-xl p-6">
            <TrendingUp className="w-6 h-6 text-primary mb-3" />
            <p className="text-sm text-muted-foreground mb-1">Target Bulan 3</p>
            <p className="text-2xl font-bold text-foreground">MRR Rp 1,5–2 M</p>
          </div>
          <div className="bg-secondary rounded-xl p-6">
            <Users className="w-6 h-6 text-primary mb-3" />
            <p className="text-sm text-muted-foreground mb-1">LTV per Customer</p>
            <p className="text-2xl font-bold text-foreground">{"> "}Rp 250 juta</p>
          </div>
        </div>
      </div>
    </div>
  )
}
