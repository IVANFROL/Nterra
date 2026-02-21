"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import type { Lang } from "@/lib/translations"
import { translations } from "@/lib/translations"

export function Navbar({ lang, onToggleLang }: { lang: Lang; onToggleLang: () => void }) {
  const t = translations[lang]
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t.navInvest, href: "#invest" },
    { label: t.navProjects, href: "#projects" },
    { label: t.navLoans, href: "#loans" },
    { label: t.navContacts, href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20">
            <span className="text-lg font-bold text-primary">{"N"}</span>
            <div className="absolute inset-0 rounded-lg bg-primary/10 animate-glow-pulse" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">{"NTerra"}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="px-4 py-2 text-xs font-semibold rounded-full border border-border text-foreground/70 hover:text-foreground hover:border-primary/40 transition-all"
          >
            {lang === "ru" ? "EN" : "RU"}
          </button>
          <Link
            href="/dashboard"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            {t.navLogin}
          </Link>
        </div>

        <button
          className="md:hidden text-foreground/80"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? t.closeMenu : t.openMenu}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <button
                onClick={onToggleLang}
                className="px-4 py-2 text-xs font-semibold rounded-full border border-border text-foreground/70"
              >
                {lang === "ru" ? "EN" : "RU"}
              </button>
              <Link
                href="/dashboard"
                className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full"
              >
                {t.navLogin}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
