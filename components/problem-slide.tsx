import { AlertTriangle, TrendingDown, Users, XCircle } from "lucide-react"

export function ProblemSlide() {
  const problems = [
    { icon: TrendingDown, text: "Rata-rata kerugian: Rp 150–400 juta dalam 1–3 hari" },
    { icon: Users, text: "11 dari 15 seller kami wawancara kena bulan lalu" },
    { icon: XCircle, text: "Shopee/Tokopedia tidak tanggung jawab kalau akun di-hack" },
    { icon: AlertTriangle, text: "Seller bangun pagi → toko sudah lenyap → bisnis mati" },
  ]

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            THE PROBLEM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-accent">87%</span> Seller Marketplace
            <br />
            Pernah Rugi Karena Hack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:border-accent/50 transition-colors"
            >
              <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                <problem.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-lg text-foreground leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary/50 border-l-4 border-accent rounded-r-xl p-6 md:p-8">
          <p className="text-xl md:text-2xl italic text-foreground leading-relaxed">
            &quot;Kalau akun hilang 1 hari saja, Lebaran tahun ini tidak bisa beli tiket mudik.&quot;
          </p>
        </div>
      </div>
    </div>
  )
}
