import { ShieldCheck, Rocket, MessageCircle, QrCode, ArrowRight } from "lucide-react"

export function CTASlide() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            CALL TO ACTION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kami Mulai <span className="text-primary">Minggu Depan</span>
          </h2>
          <p className="text-xl text-muted-foreground">dengan 10 early customer pertama</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8">
            <ShieldCheck className="w-12 h-12 mb-6 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">Jadi Customer</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 shrink-0" />
                <span>Harga: Rp 7,9 juta/bulan (tahunan)</span>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 shrink-0" />
                <span>Ganti rugi sampai Rp 500 juta</span>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 shrink-0" />
                <span>Perlindungan seumur hidup</span>
              </div>
            </div>
            <p className="text-lg font-bold opacity-90">Mau jadi 1 dari 10 orang pertama?</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <Rocket className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">Jadi Investor</h3>
            <div className="space-y-3 mb-6 text-muted-foreground">
              <div className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                <span>Seed Round: Rp 2–5 miliar</span>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                <span>Equity: 10–15% saham</span>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                <span>Target: Rp 1,5–2 M MRR bulan 3</span>
              </div>
            </div>
            <p className="text-lg font-bold text-foreground">Join the journey from day 1</p>
          </div>
        </div>

        <div className="bg-secondary rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <MessageCircle className="w-8 h-8 text-primary" />
              <div>
                <p className="text-muted-foreground text-sm">Hubungi sekarang</p>
                <p className="text-2xl font-bold text-foreground">WA: 0877-5176-5260</p>
              </div>
            </div>
            <div className="w-24 h-24 bg-foreground rounded-xl flex items-center justify-center">
              <QrCode className="w-16 h-16 text-background" />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
            <p className="text-accent font-bold">⏰ 10 slot early bird akan habis dalam 7 hari.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-medium text-foreground mb-4">
            Terima kasih. Mari kita lindungi seller Indonesia, mulai dari Surabaya.
          </p>
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-primary">Marketplace Shield</span>
          </div>
        </div>
      </div>
    </div>
  )
}
