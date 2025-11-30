import { Briefcase, Code, Users, Award, Linkedin, Github } from "lucide-react"

export function TeamSlide() {
  const team = [
    { icon: Briefcase, name: "Anda", role: "Founder & CEO", description: "Business owner 10 tahun, sukses duplikasi 3 bisnis" },
    {
      icon: Code,
      name: "Saya",
      role: "Co-Founder Tech",
      description: "Ex-engineering lead e-commerce, bangun sistem untuk brand Rp 50 M GMV",
    },
    { icon: Users, name: "Tim 24/7", role: "Operations", description: "4 lulusan informatika ITS/UNAIR — siap mulai Senin" },
    { icon: Award, name: "Advisor", role: "Expert", description: "Eks-Kominfo Jatim + mantan Head of Security Tokopedia" },
  ]

  return (
    <div className="h-screen w-full flex flex-col justify-center px-6 py-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
        <div className="text-center mb-8 shrink-0">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-foreground tracking-tight">Kita Orang Lapangan</h2>
          <p className="text-lg text-muted-foreground font-light">Praktisi berpengalaman, bukan sekadar teoritis.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 shrink-0">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-slate-100 rounded-full mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <member.icon className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-0.5">{member.name}</h3>
              <p className="text-xs text-primary font-medium uppercase tracking-wide mb-3">{member.role}</p>
              <div className="w-10 h-1 bg-slate-100 mb-3 rounded-full group-hover:bg-primary/20 transition-colors" />
              <p className="text-slate-600 text-xs leading-relaxed">{member.description}</p>
              
              {(index === 0 || index === 1) && (
                 <div className="flex justify-center gap-3 mt-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    <Linkedin className="w-4 h-4 text-slate-400 hover:text-primary cursor-pointer" />
                    <Github className="w-4 h-4 text-slate-400 hover:text-primary cursor-pointer" />
                 </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center max-w-4xl mx-auto relative overflow-hidden shrink-0">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
          
          <p className="text-lg md:text-2xl font-medium text-white italic leading-relaxed relative z-10 font-serif">
            &quot;Kami bukan cuma bikin slide. <br className="hidden md:block" />
            <span className="text-primary not-italic font-bold underline decoration-primary/30 underline-offset-4">Kami sudah siap jalan minggu depan.</span>&quot;
          </p>
        </div>
      </div>
    </div>
  )
}
