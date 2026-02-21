"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Home, TrendingUp, Calendar, Wallet } from "lucide-react"
import { projectDetailTranslations, type Lang } from "@/lib/translations"

type ProjectKey = "poselok" | "pyaterocka" | "otelSpa"

const projectImages: Record<ProjectKey, string> = {
  poselok: "/images/project-village.jpg",
  pyaterocka: "/images/project-store.jpg",
  otelSpa: "/images/project-hotel.jpg",
}

const projectColors: Record<ProjectKey, { gradient: string; accent: string; shadow: string; progressBg: string }> = {
  poselok: {
    gradient: "from-emerald-400 to-teal-400",
    accent: "text-emerald-400",
    shadow: "shadow-emerald-500/25",
    progressBg: "bg-emerald-500",
  },
  pyaterocka: {
    gradient: "from-amber-400 to-orange-400",
    accent: "text-amber-400",
    shadow: "shadow-amber-500/25",
    progressBg: "bg-amber-500",
  },
  otelSpa: {
    gradient: "from-primary to-blue-400",
    accent: "text-primary",
    shadow: "shadow-primary/25",
    progressBg: "bg-primary",
  },
}

const progressMap: Record<ProjectKey, number> = {
  poselok: 50,
  pyaterocka: 50,
  otelSpa: 19,
}

export default function ProjectDetailPage({ projectKey }: { projectKey: ProjectKey }) {
  const [lang, setLang] = useState<Lang>("ru")
  const t = projectDetailTranslations[lang]
  const p = t[projectKey]
  const colors = projectColors[projectKey]
  const progress = progressMap[projectKey]

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6 sm:mb-10">
          <Link
            href="/"
            className="glass rounded-xl px-4 py-2.5 flex items-center gap-2 text-foreground/80 hover:text-foreground hover:bg-secondary transition-all text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backHome}</span>
          </Link>
          <button
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
            className="glass rounded-xl px-4 py-2.5 text-xs font-semibold text-foreground/70 hover:text-foreground transition-all"
          >
            {lang === "ru" ? "EN" : "RU"}
          </button>
        </div>

        {/* Hero card */}
        <div className="glass-strong rounded-3xl overflow-hidden mb-8">
          {/* Image header */}
          <div className="relative h-48 sm:h-64">
            <Image
              src={projectImages[projectKey]}
              alt={p.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold glass mb-2 ${colors.accent}`}>
                {p.status}
              </div>
              <h1 className={`text-3xl sm:text-5xl font-black bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                {p.title}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
              {/* Left: details */}
              <div className="flex flex-col gap-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <MapPin className={`w-5 h-5 shrink-0 mt-0.5 ${colors.accent}`} />
                  <span className="text-sm sm:text-base">{p.location}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Home className={`w-5 h-5 shrink-0 mt-0.5 ${colors.accent}`} />
                  <span className="text-sm sm:text-base">{p.specs}</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className={`w-5 h-5 shrink-0 mt-0.5 ${colors.accent}`} />
                  <span className="text-sm sm:text-base">{p.yield}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Wallet className={`w-5 h-5 shrink-0 mt-0.5 ${colors.accent}`} />
                  <span className="text-sm sm:text-base">{p.cap}</span>
                </div>
              </div>

              {/* Right: user share */}
              <div className="glass rounded-2xl p-5 sm:p-6">
                <div className="text-xl sm:text-2xl font-bold text-foreground mb-4">{t.yourShare}</div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between text-foreground/80">
                    <span>{p.userShares} {t.shares}</span>
                    <span className={`font-bold ${colors.accent}`}>{p.userValue}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${colors.progressBg} transition-all duration-500`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="text-sm text-foreground/50">
                    {t.monthlyIncome}: {p.userIncome}{t.incomePerMonth}
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <button className={`flex-1 px-6 sm:px-8 py-4 bg-accent text-accent-foreground font-bold rounded-2xl text-base sm:text-lg shadow-xl ${colors.shadow} hover:scale-[1.02] transition-all`}>
                {t.sellP2P}
              </button>
              <button className="flex-1 px-6 sm:px-8 py-4 border-2 border-accent/30 text-accent font-bold rounded-2xl bg-accent/5 hover:bg-accent/10 transition-all text-base sm:text-lg">
                {t.addShares}
              </button>
            </div>
          </div>
        </div>

        {/* Financial metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="glass rounded-2xl p-5 sm:p-6">
            <div className={`text-2xl font-bold ${colors.accent} mb-2`}>{p.yieldValue}</div>
            <div className="text-sm text-foreground/50">{t.currentYield}</div>
          </div>
          <div className="glass rounded-2xl p-5 sm:p-6">
            <div className="text-2xl font-bold text-primary mb-2">{p.incomeValue}</div>
            <div className="text-sm text-foreground/50">{t.monthlyIncome}</div>
          </div>
          <div className="glass rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-chart-4" />
              <span className="text-2xl font-bold text-chart-4">{p.payoutDate}</span>
            </div>
            <div className="text-sm text-foreground/50">{t.nextPayout}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
