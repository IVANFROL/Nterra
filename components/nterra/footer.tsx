"use client"

import { useState } from "react"
import { Send, ArrowRight } from "lucide-react"
import type { Lang } from "@/lib/translations"
import { translations } from "@/lib/translations"

export function Footer({ lang }: { lang: Lang }) {
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
    <footer id="contact" className="relative py-20 px-6 overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/6 blur-[100px]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t.footerTitle}</h2>
        <p className="text-foreground/50 text-base sm:text-lg mb-10">{t.footerSub}</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-12">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
            className="flex-1 px-5 py-4 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t.phonePlaceholder}
            className="flex-1 px-5 py-4 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
          >
            {submitted ? t.submitted : t.sendBtn}
            {!submitted && <Send size={16} />}
          </button>
        </form>

        <div className="border-t border-border pt-8" />

        <div className="mb-8 flex justify-center">
          <a
            href="#contact"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-accent text-accent-foreground text-base font-bold rounded-2xl shadow-xl shadow-accent/15 hover:shadow-accent/30 hover:scale-[1.02] transition-all duration-300"
          >
            {t.becomeInvestor}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/40">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary/20 flex items-center justify-center">
              <span className="text-xs font-bold text-primary">{"N"}</span>
            </div>
            <span className="font-medium text-foreground/60">{"NTerra"}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{t.city}</span>
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
            <span>{"Telegram"}</span>
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
            <span>{"nterra.shipper.now"}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
