"use client"

import { useState } from "react"
import { ShieldCheck, ArrowRight } from "lucide-react"
import type { Lang } from "@/lib/translations"
import { translations } from "@/lib/translations"

export function TrustSection({ lang }: { lang: Lang }) {
  const t = translations[lang]
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (name.trim() && phone.trim()) {
      setSubmitted(true)
      setName("")
      setPhone("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="trust" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15">
            <ShieldCheck size={28} className="text-accent" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{t.trustTitle}</h2>
          <p className="text-foreground/60 text-base sm:text-lg mb-8">{t.trustSubtitle}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="flex-1 px-5 py-3.5 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.phonePlaceholder}
              className="flex-1 px-5 py-3.5 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
            >
              {submitted ? t.submitted : t.learnFirst}
              {!submitted && <ArrowRight size={16} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
