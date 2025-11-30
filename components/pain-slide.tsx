import { MessageSquareQuote, User } from "lucide-react"

export function PainSlide() {
  const quotes = [
    { text: "Rugi Rp 380 juta dalam 2 hari. Nangis.", author: "Dita", role: "Seller Fashion Surabaya" },
    { text: "Bangun jam 4 pagi, toko sudah dijual orang. Langsung pingsan.", author: "Mas Budi", role: "Seller Makanan" },
    { text: "Shopee cuma bilang 'ganti password'. Tidak ada yang bantu.", author: "Rian", role: "Seller Elektronik" },
  ]

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12 bg-background">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
            Real Pain
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">Jeritan Hati Seller</h2>
          <p className="text-xl text-muted-foreground font-light">Mereka yang pernah kehilangan segalanya dalam semalam.</p>
        </div>

        <div className="grid gap-6 mb-16">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-8 relative overflow-hidden group hover:shadow-md hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex gap-6">
                 <div className="shrink-0 hidden md:block">
                   <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
                      <User className="w-8 h-8 text-slate-400" />
                   </div>
                 </div>
                 <div className="relative z-10">
                    <MessageSquareQuote className="w-10 h-10 text-accent/20 mb-4" />
                    <p className="text-2xl md:text-3xl font-medium mb-6 text-slate-800 leading-snug italic font-serif">
                      &quot;{quote.text}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-slate-100 flex md:hidden items-center justify-center">
                          <User className="w-5 h-5 text-slate-400" />
                       </div>
                       <div>
                          <p className="text-slate-900 font-bold">{quote.author}</p>
                          <p className="text-slate-500 text-sm uppercase tracking-wider">{quote.role}</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-10 text-center max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed">
            <span className="text-primary font-black text-4xl">92%</span> bilang: <br className="md:hidden" />
            <span className="italic text-slate-600">"Saya bayar berapa pun supaya ini tidak terulang."</span>
          </p>
        </div>
      </div>
    </div>
  )
}
