import { CheckCircle2, AlertTriangle, Bell, Award, BarChart3 } from "lucide-react"

export function ProductSlide() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            PRODUCT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Dashboard yang Sederhana</h2>
        </div>

        <div className="flex justify-center">
          <div className="bg-card border-4 border-border rounded-[3rem] p-4 w-full max-w-sm shadow-2xl">
            <div className="bg-background rounded-[2.5rem] overflow-hidden">
              <div className="bg-secondary px-6 py-4 flex justify-between items-center">
                <span className="text-sm text-muted-foreground font-mono">09:41</span>
                <span className="text-sm font-bold text-foreground">Marketplace Shield</span>
                <div className="w-4 h-4 bg-muted-foreground/30 rounded-full" />
              </div>

              <div className="p-6 space-y-6">
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-3" />
                  <p className="text-2xl font-bold text-primary">AKUN AMAN</p>
                  <p className="text-sm text-muted-foreground mt-1">Terakhir dicek: 2 detik lalu</p>
                </div>

                <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors">
                  <AlertTriangle className="w-5 h-5" />
                  ADA SERANGAN – KAMI TANGANI
                </button>

                <div className="bg-secondary rounded-xl p-4 flex items-center gap-3">
                  <Bell className="w-5 h-5 text-primary" />
                  <p className="text-sm text-foreground">Hari ini aman. Tidur nyenyak ya, Boss! 🌙</p>
                </div>

                <div className="flex items-center justify-center gap-2 py-3 border border-border rounded-xl">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Protected by Marketplace Shield</span>
                </div>

                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Laporan Minggu Ini</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Kami blokir <span className="text-accent font-bold">27 serangan</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
