import { Check, X, ShieldCheck } from "lucide-react"

export function CompetitionSlide() {
  const competitors = [
    {
      name: "Antivirus Biasa",
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
      name: "Teman Pelindung",
      features: { monitoring: true, autoBlock: true, human: true, guarantee: true, focus: true },
      highlight: true,
    },
  ]

  const featureLabels = [
    { key: "monitoring", label: "Monitoring 24/7" },
    { key: "autoBlock", label: "Blokir Otomatis" },
    { key: "human", label: "Bantuan Manusia" },
    { key: "guarantee", label: "Ganti Rugi Uang" },
    { key: "focus", label: "Fokus Marketplace" },
  ]

  const renderFeature = (value: boolean | string, isHighlight: boolean) => {
    if (value === true) return <Check className={`w-6 h-6 mx-auto ${isHighlight ? "text-primary" : "text-slate-400"}`} strokeWidth={3} />
    if (value === "partial") return <span className="text-slate-500 text-sm font-medium bg-slate-100 px-2 py-1 rounded-full">Kadang</span>
    return <X className="w-5 h-5 text-red-400/50 mx-auto" />
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12 bg-background">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
            Competition Analysis
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">Kenapa Kami Berbeda</h2>
          <p className="text-xl text-muted-foreground font-light">Bukan sekadar software, tapi partner keamanan lengkap.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-white">
          <table className="w-full">
            <thead className="bg-slate-50/50">
              <tr className="border-b border-slate-200">
                <th className="text-left py-6 px-6 text-slate-500 font-semibold text-sm uppercase tracking-wider w-1/4">Pemain</th>
                {featureLabels.map((f) => (
                  <th key={f.key} className="text-center py-6 px-4 text-slate-500 font-semibold text-xs uppercase tracking-wider w-[15%]">
                    {f.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {competitors.map((comp, index) => (
                <tr 
                  key={index} 
                  className={`group transition-colors ${comp.highlight ? "bg-primary/5 hover:bg-primary/10" : "hover:bg-slate-50"}`}
                >
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${comp.highlight ? "bg-white shadow-sm" : "bg-slate-100"}`}>
                         {comp.highlight ? <ShieldCheck className="w-6 h-6 text-primary" /> : <div className="w-6 h-6 rounded-full bg-slate-300" />}
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-bold text-base ${comp.highlight ? "text-primary" : "text-slate-700"}`}>
                            {comp.name}
                        </span>
                        {comp.highlight && (
                            <span className="text-[10px] font-bold text-white bg-primary px-2 py-0.5 rounded-full w-fit mt-1">
                            GARANSI 500JT
                            </span>
                        )}
                      </div>
                    </div>
                  </td>
                  {featureLabels.map((f) => (
                    <td key={f.key} className="text-center py-6 px-4">
                      {renderFeature(comp.features[f.key as keyof typeof comp.features], comp.highlight || false)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 bg-white border border-primary/20 rounded-xl p-8 text-center shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
          <p className="text-xl md:text-2xl text-slate-800 leading-relaxed">
            Hanya <span className="font-bold text-primary">Teman Pelindung</span> yang berani memberikan <br className="hidden md:block"/>
            <span className="underline decoration-primary/30 decoration-4 underline-offset-4">jaminan uang kembali</span> + bantuan manusia lokal.
          </p>
        </div>
      </div>
    </div>
  )
}
