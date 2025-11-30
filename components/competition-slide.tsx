import { Check, X, ShieldCheck, Minus } from "lucide-react"

export function CompetitionSlide() {
  const competitors = [
    {
      name: "Antivirus Biasa",
      features: { monitoring: true, autoBlock: false, human: false, guarantee: false, focus: false },
    },
    {
      name: "Medium Security",
      features: { monitoring: true, autoBlock: true, human: false, guarantee: false, focus: false },
    },
    // {
    //   name: "Agency Security",
    //   features: { monitoring: true, autoBlock: false, human: "partial", guarantee: false, focus: false },
    // },
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
    if (value === true) {
      return (
        <div className={`w-6 h-6 mx-auto rounded-full flex items-center justify-center ${isHighlight ? "bg-primary text-white" : "bg-green-100 text-green-600"}`}>
           <Check className="w-4 h-4" strokeWidth={3} />
        </div>
      )
    }
    if (value === "partial") {
        return <span className="text-slate-500 text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-wide">Kadang</span>
    }
    return (
        <div className="w-6 h-6 mx-auto rounded-full flex items-center justify-center bg-red-50 text-red-300">
            <X className="w-4 h-4" />
        </div>
    )
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center px-6 py-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
        <div className="text-center mb-8 shrink-0">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            Competition Analysis
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-foreground tracking-tight">Kenapa Kami Berbeda</h2>
          <p className="text-lg text-muted-foreground font-light">Bukan sekadar software, tapi partner keamanan lengkap.</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 bg-white shrink-0">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-6 px-6 bg-slate-50 border-b border-slate-200 w-1/4">
                    <span className="text-slate-400 font-medium text-xs uppercase tracking-widest">Kompetitor</span>
                </th>
                {featureLabels.map((f) => (
                  <th key={f.key} className="text-center py-6 px-2 bg-slate-50 border-b border-slate-200 w-[15%] align-middle">
                    <span className="text-slate-600 font-bold text-xs block max-w-[100px] mx-auto leading-tight">{f.label}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {competitors.map((comp, index) => (
                <tr 
                  key={index} 
                  className={`group transition-colors ${comp.highlight ? "bg-blue-50/30 hover:bg-blue-50/50" : "hover:bg-slate-50/50"}`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${comp.highlight ? "bg-primary text-white" : "bg-white border border-slate-100 text-slate-400"}`}>
                         {comp.highlight ? <ShieldCheck className="w-5 h-5" /> : <Minus className="w-3 h-3" />}
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-bold text-sm ${comp.highlight ? "text-primary" : "text-slate-700"}`}>
                            {comp.name}
                        </span>
                        {comp.highlight && (
                            <span className="text-[8px] font-bold text-white bg-accent px-1.5 py-0.5 rounded-full w-fit mt-0.5 shadow-sm">
                            GARANSI Uang Kemabali
                            </span>
                        )}
                      </div>
                    </div>
                  </td>
                  {featureLabels.map((f) => (
                    <td key={f.key} className="text-center py-4 px-2 align-middle">
                      {renderFeature(comp.features[f.key as keyof typeof comp.features], comp.highlight || false)}
                    </td>
                  ))}
                </tr>
              ))} 
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4 shrink-0">
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check className="w-4 h-4" />
                </div>
                <p className="text-xs text-slate-600 font-medium">Satu-satunya dengan <span className="text-slate-900 font-bold">Garansi Uang</span></p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Check className="w-4 h-4" />
                </div>
                <p className="text-xs text-slate-600 font-medium">Tim Manusia <span className="text-slate-900 font-bold">Standby 24 Jam</span></p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="w-4 h-4" />
                </div>
                <p className="text-xs text-slate-600 font-medium">Spesialis <span className="text-slate-900 font-bold">Marketplace Indonesia</span></p>
            </div>
        </div>
      </div>
    </div>
  )
}
