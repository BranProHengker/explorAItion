import { Briefcase, Code, Users, Award } from "lucide-react"

export function TeamSlide() {
  const team = [
    { icon: Briefcase, role: "Founder & CEO", description: "Business owner 10 tahun, sukses duplikasi 3 bisnis" },
    {
      icon: Code,
      role: "Co-Founder Tech",
      description: "Ex-engineering lead e-commerce, bangun sistem untuk brand Rp 50 M GMV",
    },
    { icon: Users, role: "Tim 24/7", description: "4 lulusan informatika ITS/UNAIR — siap mulai Senin" },
    { icon: Award, role: "Advisor", description: "Eks-Kominfo Jatim + mantan Head of Security Tokopedia" },
  ]

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            TEAM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Kita Orang Lapangan</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-xl shrink-0">
                  <member.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{member.role}</h3>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-secondary border border-border rounded-2xl p-8 text-center">
          <p className="text-xl md:text-2xl font-medium text-foreground italic">
            &quot;Kami bukan cuma bikin slide.{" "}
            <span className="text-primary not-italic font-bold">Kami sudah siap jalan minggu depan.</span>&quot;
          </p>
        </div>
      </div>
    </div>
  )
}
