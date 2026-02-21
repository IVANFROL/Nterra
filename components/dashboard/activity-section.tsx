"use client"

import { ArrowUpRight, Plus, ArrowDownLeft } from "lucide-react"
import { type dashboardTranslations } from "@/lib/translations"

type DashT = (typeof dashboardTranslations)["ru"]

export function ActivitySection({ t }: { t: DashT }) {
  const activities = [
    {
      icon: Plus,
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      title: t.act1Title,
      time: t.act1Time,
      badge: "+2.1%",
      badgeColor: "text-accent",
    },
    {
      icon: ArrowDownLeft,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      title: t.act2Title,
      time: t.act2Time,
      badge: t.act2Badge,
      badgeColor: "text-primary",
    },
    {
      icon: ArrowUpRight,
      iconBg: "bg-chart-3/10",
      iconColor: "text-chart-3",
      title: t.act3Title,
      time: t.act3Time,
      badge: "P2P",
      badgeColor: "text-chart-3",
    },
  ]

  return (
    <section className="glass rounded-2xl p-6">
      <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
        <ArrowUpRight className="w-5 h-5 text-accent" />
        {t.recentActivity}
      </h2>
      <div className="flex flex-col gap-3">
        {activities.map((act, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className={`w-10 h-10 ${act.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                <act.icon className={`w-5 h-5 ${act.iconColor}`} />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-foreground text-sm truncate">{act.title}</div>
                <div className="text-xs text-muted-foreground">{act.time}</div>
              </div>
            </div>
            <span className={`font-semibold text-sm shrink-0 ${act.badgeColor}`}>
              {act.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
