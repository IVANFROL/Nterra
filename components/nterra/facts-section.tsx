import { TrendingUp, Zap, Banknote } from "lucide-react"
import type { Lang } from "@/lib/translations"
import { translations } from "@/lib/translations"

export function FactsSection({ lang }: { lang: Lang }) {
  const t = translations[lang]

  const facts = [
    {
      icon: TrendingUp,
      value: t.f1Value,
      label: t.f1Label,
      description: t.f1Desc,
    },
    {
      icon: Zap,
      value: t.f2Value,
      label: t.f2Label,
      description: t.f2Desc,
    },
    {
      icon: Banknote,
      value: t.f3Value,
      label: t.f3Label,
      description: t.f3Desc,
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-6">
          {facts.map((fact) => {
            const Icon = fact.icon
            return (
              <div
                key={fact.label}
                className="glass-strong rounded-2xl p-8 text-center hover:scale-[1.02] transition-all duration-300"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                  <Icon size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{fact.value}</div>
                <div className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                  {fact.label}
                </div>
                <p className="text-sm text-foreground/50 leading-relaxed">{fact.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
