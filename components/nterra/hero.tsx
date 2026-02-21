import { ArrowRight, ArrowLeft } from "lucide-react"
import type { Lang } from "@/lib/translations"
import { translations } from "@/lib/translations"

export function Hero({ lang }: { lang: Lang }) {
  const t = translations[lang]

  const stats = [
    { value: t.stat1Value, label: t.stat1Label },
    { value: t.stat2Value, label: t.stat2Label },
    { value: t.stat3Value, label: t.stat3Label },
  ]

  return (
    <section
      id="invest"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[100px]" />

      <div className="mb-8 glass rounded-full px-5 py-2 flex items-center gap-2 animate-float">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="text-sm font-medium text-foreground/80">{t.badge}</span>
      </div>

      <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-balance max-w-5xl">
        <span className="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-transparent">
          {t.heroTitle1}
        </span>
        <br />
        <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
          {t.heroTitle2}
        </span>
        {t.heroTitle3 && (
          <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            {t.heroTitle3}
          </span>
        )}
      </h1>

      <p className="mt-6 text-center text-lg sm:text-xl md:text-2xl text-foreground/60 max-w-2xl leading-relaxed text-balance">
        <span>{t.heroSub1}</span>
        <span>{" \u2022 "}</span>
        <span>{t.heroSub2}</span>
        <span>{" \u2022 "}</span>
        <span>{t.heroSub3}</span>
      </p>

      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#projects"
          className="group flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-accent text-accent-foreground text-base sm:text-lg font-bold rounded-2xl shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:scale-[1.02] transition-all duration-300"
        >
          {t.investBtn}
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#contact"
          className="group flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 glass text-foreground text-base sm:text-lg font-bold rounded-2xl hover:bg-secondary transition-all duration-300"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {t.requestBtn}
        </a>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-6 sm:gap-12 max-w-lg">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-foreground/50">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
