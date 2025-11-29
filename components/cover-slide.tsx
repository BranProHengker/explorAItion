import { ShieldCheck } from "lucide-react"

export function CoverSlide() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
            <ShieldCheck className="w-12 h-12 text-primary" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-primary">MARKETPLACE</span> <span className="text-foreground">SHIELD</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          Asuransi + Benteng Anti-Hack untuk Akun Shopee & Tokopedia
        </p>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="text-accent font-bold">87% seller pernah rugi karena akun kena hack.</span>{" "}
            <span className="text-foreground">Kami jamin tidak akan terjadi lagi — atau kami ganti rugi sampai </span>
            <span className="text-primary font-bold">Rp 500 juta.</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <span className="font-medium">Surabaya • November 2025</span>
        </div>
      </div>
    </div>
  )
}
