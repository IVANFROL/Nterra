"use client"

import { useState } from "react"
import { dashboardTranslations } from "@/lib/translations"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { StatsRow } from "@/components/dashboard/stats-row"
import { PortfolioSection } from "@/components/dashboard/portfolio-section"
import { ActivitySection } from "@/components/dashboard/activity-section"

function DashboardContent() {
  const [lang, setLang] = useState<"ru" | "en">("ru")
  const t = dashboardTranslations[lang]

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <DashboardSidebar
        t={t}
        lang={lang}
        onToggleLang={() => setLang(lang === "ru" ? "en" : "ru")}
      />

      <main className="md:ml-64 p-4 pt-16 md:p-8 md:pt-8 relative z-10">
        <header className="glass rounded-2xl p-4 md:p-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">{t.dashboard}</h1>
            <p className="text-sm text-muted-foreground mt-1">{t.subtitle}</p>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-xl md:text-2xl font-bold text-accent">{t.balanceValue}</div>
            <div className="text-sm text-muted-foreground">{t.balance}</div>
          </div>
        </header>

        <div className="mb-6">
          <StatsRow t={t} />
        </div>

        <div className="mb-6">
          <PortfolioSection t={t} />
        </div>

        <ActivitySection t={t} />
      </main>
    </div>
  )
}

export default DashboardContent
