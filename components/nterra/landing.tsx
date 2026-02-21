"use client"

import { useState } from "react"
import type { Lang } from "@/lib/translations"
import { Navbar } from "@/components/nterra/navbar"
import { Hero } from "@/components/nterra/hero"
import { TrustSection } from "@/components/nterra/trust-section"
import { LoansSection } from "@/components/nterra/loans-section"
import { ProjectsSection } from "@/components/nterra/projects-section"
import { FactsSection } from "@/components/nterra/facts-section"
import { CtaSection } from "@/components/nterra/cta-section"
import { Footer } from "@/components/nterra/footer"

export default function NTerraLanding() {
  const [lang, setLang] = useState<Lang>("ru")

  function toggleLang() {
    setLang((prev) => (prev === "ru" ? "en" : "ru"))
  }

  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,212,255,0.08),transparent)]" />

      <Navbar lang={lang} onToggleLang={toggleLang} />

      <main>
        <Hero lang={lang} />
        <TrustSection lang={lang} />
        <LoansSection lang={lang} />
        <ProjectsSection lang={lang} />
        <FactsSection lang={lang} />
        <CtaSection lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  )
}
