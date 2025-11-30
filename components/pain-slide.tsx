import { MessageSquareQuote, User } from "lucide-react"

export function PainSlide() {
  const quotes = [
    { text: "Rugi Rp 380 juta dalam 2 hari. Nangis.", author: "Dita", role: "Seller Fashion Surabaya" },
    { text: "Bangun jam 4 pagi, toko sudah dijual orang. Langsung pingsan.", author: "Mas Budi", role: "Seller Makanan" },
    { text: "Saldo Rekening ku tiba tiba hilang ", author: "Rian", role: "Seller Elektronik" },
  ]

  return (
    <div className="h-screen w-full flex flex-col justify-center px-6 py-8 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto w-full flex flex-col h-full justify-center">
        <div className="text-center mb-8 shrink-0">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            Real Pain
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-foreground tracking-tight">Jeritan Hati Seller</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">Mereka yang pernah kehilangan segalanya dalam semalam.</p>
        </div>

        <div className="grid gap-4 mb-8 shrink-0">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 relative overflow-hidden group hover:shadow-md hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                 <div className="shrink-0 hidden md:block">
                   <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                      <User className="w-6 h-6 text-slate-400" />
                   </div>
                 </div>
                 <div className="relative z-10 flex-1">
                    <div className="flex items-start gap-2 mb-2">
                       <MessageSquareQuote className="w-6 h-6 text-accent/20 shrink-0" />
                       <p className="text-lg md:text-xl font-medium text-slate-800 leading-snug italic font-serif">
                         &quot;{quote.text}&quot;
                       </p>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                       <div className="w-6 h-6 rounded-full bg-slate-100 flex md:hidden items-center justify-center">
                          <User className="w-3 h-3 text-slate-400" />
                       </div>
                       <div className="flex items-baseline gap-2">
                          <p className="text-slate-900 font-bold text-sm">{quote.author}</p>
                          <span className="text-slate-300 text-xs">•</span>
                          <p className="text-slate-500 text-xs uppercase tracking-wider">{quote.role}</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 text-center max-w-4xl mx-auto shrink-0">
          <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
            <span className="text-primary font-black text-3xl">92%</span> bilang:{" "}
            <span className="italic text-slate-600">"Saya bayar berapa pun supaya ini tidak terulang."</span>
          </p>
        </div>
      </div>
    </div>
  )
}
