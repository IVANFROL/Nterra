"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, Briefcase, Building2, Home, Clock, User, Globe, Menu, X } from "lucide-react"
import { type dashboardTranslations } from "@/lib/translations"

type DashT = (typeof dashboardTranslations)["ru"]

const navItems = [
  { key: "dashboard" as const, icon: BarChart3, active: true },
  { key: "portfolio" as const, icon: Briefcase, active: false },
  { key: "projects" as const, icon: Building2, active: false },
  { key: "loans" as const, icon: Home, active: false },
  { key: "history" as const, icon: Clock, active: false },
] as const

export function DashboardSidebar({
  t,
  lang,
  onToggleLang,
}: {
  t: DashT
  lang: "ru" | "en"
  onToggleLang: () => void
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const sidebarContent = (
    <>
      <div className="p-6 pb-2 flex items-center justify-between">
        <div>
          <div className="text-2xl font-black bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            {"NTerra"}
          </div>
          <p className="text-xs text-muted-foreground mt-1">{"Shares Marketplace"}</p>
        </div>
        <button
          className="md:hidden text-foreground/60 hover:text-foreground"
          onClick={() => setMobileOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.key}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              item.active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            <span>{t[item.key]}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 flex flex-col gap-2 border-t border-border">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
        >
          <Home className="w-5 h-5 shrink-0" />
          <span>{t.backHome}</span>
        </Link>
        <button
          onClick={onToggleLang}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
        >
          <Globe className="w-5 h-5 shrink-0" />
          <span>{lang === "ru" ? "EN" : "RU"}</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-all">
          <User className="w-5 h-5 shrink-0" />
          <span>{t.profile}</span>
        </button>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 glass rounded-xl p-3 hover:bg-secondary transition-all"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5 text-foreground" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 glass-strong flex flex-col z-50 transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 glass-strong flex-col z-50">
        {sidebarContent}
      </aside>
    </>
  )
}
