import { ArrowRight, Building2 } from "lucide-react"
import type { Lang } from "@/lib/translations"
import { translations } from "@/lib/translations"

export function CtaSection({ lang }: { lang: Lang }) {
  const t = translations[lang]

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-lg flex flex-col gap-4">
        <a
          href="#contact"
          className="group flex items-center justify-center gap-3 w-full px-8 py-6 bg-accent text-accent-foreground text-lg font-bold rounded-2xl shadow-xl shadow-accent/15 hover:shadow-accent/30 hover:scale-[1.02] transition-all duration-300"
        >
          {t.becomeInvestor}
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#contact"
          className="group flex items-center justify-center gap-3 w-full px-8 py-6 glass text-foreground text-lg font-bold rounded-2xl hover:bg-secondary transition-all duration-300"
        >
          <Building2 size={20} />
          {t.developers}
        </a>
      </div>
    </section>
  )
}
