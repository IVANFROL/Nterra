import { Landmark } from "lucide-react"
import type { Lang } from "@/lib/translations"
import { translations } from "@/lib/translations"

export function LoansSection({ lang }: { lang: Lang }) {
  const t = translations[lang]

  return (
    <section id="loans" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15">
          <Landmark size={28} className="text-orange-400" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-black mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          {t.loansTitle}
        </h2>
        <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.loansSub}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-2xl shadow-xl shadow-orange-500/15 hover:shadow-orange-500/30 hover:scale-[1.02] transition-all duration-300"
        >
          {t.loansBtn}
        </a>
      </div>
    </section>
  )
}
