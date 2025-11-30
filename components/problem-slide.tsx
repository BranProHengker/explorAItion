import { AlertTriangle, TrendingDown, Users, XCircle } from "lucide-react"

export function ProblemSlide() {
  const problems = [
    { icon: TrendingDown, title: "Kerugian Finansial Masif", text: "Rata-rata kerugian Rp 150–400 juta hanya dalam 1–3 hari pertama." },
    { icon: Users, title: "Sangat Sering Terjadi", text: "11 dari 15 seller top yang kami wawancara terkena serangan bulan lalu." },
    { icon: XCircle, title: "Tidak Ada Jaminan Platform", text: "Shopee & Tokopedia tidak bertanggung jawab atas kelalaian keamanan user." },
    { icon: AlertTriangle, title: "Bisnis Mati Seketika", text: "Bangun pagi → akses toko hilang → saldo dikuras → reputasi hancur." },
  ]

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12 bg-background">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900 leading-tight">
            <span className="text-red-600 text-6xl font-black block mb-2">87%</span> 
            Seller Marketplace Pernah Rugi Karena Hack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-8 flex items-start gap-5 hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-4 bg-red-50 rounded-xl shrink-0 group-hover:bg-red-100 transition-colors">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <div>
                 <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.title}</h3>
                 <p className="text-base text-slate-600 leading-relaxed">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border-l-8 border-red-600 rounded-r-xl p-8 md:p-10 shadow-sm">
          <p className="text-xl md:text-2xl italic text-slate-800 leading-relaxed font-serif">
            &quot;Kalau akun hilang 1 hari saja, Lebaran tahun ini saya tidak bisa beli tiket mudik.&quot;
          </p>
        </div>
      </div>
    </div>
  )
}
