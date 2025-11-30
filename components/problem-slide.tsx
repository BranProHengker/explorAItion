import { AlertTriangle, TrendingDown, Users, XCircle } from "lucide-react"

export function ProblemSlide() {
  const problems = [
    { icon: TrendingDown, title: "Kerugian Finansial Masif", text: "Rata-rata kerugian Rp 150–400 juta hanya dalam 1–3 hari pertama." },
    { icon: Users, title: "Sangat Sering Terjadi", text: "11 dari 15 seller top yang kami wawancara terkena serangan bulan lalu." },
    { icon: XCircle, title: "Tidak Ada Jaminan Platform", text: "Shopee & Tokopedia tidak bertanggung jawab atas kelalaian keamanan user." },
    { icon: AlertTriangle, title: "Bisnis Mati Seketika", text: "Bangun pagi → akses toko hilang → saldo dikuras → reputasi hancur." },
  ]

  return (
    <div className="h-screen w-full flex flex-col justify-center px-6 py-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
        <div className="text-center mb-8 shrink-0">
          <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-balance text-slate-900 leading-tight">
            <span className="text-red-600 text-5xl md:text-6xl font-black block mb-2">87%</span> 
            Seller Marketplace Pernah Rugi Karena Hack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8 shrink-0">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-3 bg-red-50 rounded-xl shrink-0 group-hover:bg-red-100 transition-colors">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                 <h3 className="text-base font-bold text-slate-900 mb-1">{problem.title}</h3>
                 <p className="text-sm text-slate-600 leading-relaxed">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border-l-8 border-red-600 rounded-r-xl p-6 md:p-8 shadow-sm shrink-0">
          <p className="text-lg md:text-xl italic text-slate-800 leading-relaxed font-serif">
            &quot;Kalau akun hilang 1 hari saja, Lebaran tahun ini saya tidak bisa beli tiket mudik.&quot;
          </p>
        </div>
      </div>
    </div>
  )
}
