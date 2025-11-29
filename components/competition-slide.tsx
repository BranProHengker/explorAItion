import { Check, X, ShieldCheck } from "lucide-react"

export function CompetitionSlide() {
  const competitors = [
    {
      name: "Antivirus biasa",
      features: { monitoring: true, autoBlock: false, human: false, guarantee: false, focus: false },
    },
    {
      name: "Cloudflare",
      features: { monitoring: true, autoBlock: true, human: false, guarantee: false, focus: false },
    },
    {
      name: "Agency Security",
      features: { monitoring: true, autoBlock: false, human: "partial", guarantee: false, focus: false },
    },
    {
      name: "Marketplace Shield",
      features: { monitoring: true, autoBlock: true, human: true, guarantee: true, focus: true },
      highlight: true,
    },
  ]

  const featureLabels = [
    { key: "monitoring", label: "Monitoring" },
    { key: "autoBlock", label: "Auto Block" },
    { key: "human", label: "Manusia 24/7" },
    { key: "guarantee", label: "Ganti Rugi" },
    { key: "focus", label: "Fokus Marketplace ID" },
  ]

  const renderFeature = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-primary mx-auto" />
    if (value === "partial") return <span className="text-muted-foreground text-sm">Kadang</span>
    return <X className="w-5 h-5 text-accent mx-auto" />
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            COMPETITION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Kenapa Kami Berbeda</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-muted-foreground font-medium">Pemain</th>
                {featureLabels.map((f) => (
                  <th key={f.key} className="text-center py-4 px-4 text-muted-foreground font-medium text-sm">
                    {f.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competitors.map((comp, index) => (
                <tr key={index} className={`border-b border-border ${comp.highlight ? "bg-primary/10" : ""}`}>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      {comp.highlight && <ShieldCheck className="w-5 h-5 text-primary" />}
                      <span className={`font-medium ${comp.highlight ? "text-primary" : "text-foreground"}`}>
                        {comp.name}
                      </span>
                      {comp.highlight && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                          Rp 500 jt
                        </span>
                      )}
                    </div>
                  </td>
                  {featureLabels.map((f) => (
                    <td key={f.key} className="text-center py-4 px-4">
                      {renderFeature(comp.features[f.key as keyof typeof comp.features])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
          <p className="text-xl font-bold text-foreground">
            → Kami satu-satunya yang kasih <span className="text-primary">jaminan uang + manusia lokal.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
