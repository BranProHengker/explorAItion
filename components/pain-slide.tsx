import { MessageSquareQuote } from "lucide-react"

export function PainSlide() {
  const quotes = [
    { text: "Rugi Rp 380 juta dalam 2 hari. Nangis.", author: "Seller Fashion Surabaya" },
    { text: "Bangun jam 4 pagi, toko sudah dijual orang. Langsung pingsan.", author: "Seller Makanan" },
    { text: "Shopee cuma bilang 'ganti password'. Tidak ada yang bantu.", author: "Seller Elektronik" },
  ]

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            PAIN NYATA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Quotes Langsung dari Korban</h2>
        </div>

        <div className="space-y-6 mb-12">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden group hover:border-accent/30 transition-colors"
            >
              <MessageSquareQuote className="absolute top-4 right-4 w-12 h-12 text-muted-foreground/10 group-hover:text-accent/20 transition-colors" />
              <p className="text-2xl md:text-3xl font-medium mb-4 text-foreground leading-snug">&quot;{quote.text}&quot;</p>
              <p className="text-muted-foreground font-medium">— {quote.author}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary">92%</span> bilang:{" "}
            <span className="italic">&quot;Saya bayar berapa pun supaya ini tidak terulang.&quot;</span>
          </p>
        </div>
      </div>
    </div>
  )
}
