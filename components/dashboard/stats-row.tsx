"use client"

import { TrendingUp, Layers, DollarSign, Percent } from "lucide-react"
import { type dashboardTranslations } from "@/lib/translations"

type DashT = (typeof dashboardTranslations)["ru"]

export function StatsRow({ t }: { t: DashT }) {
  const stats = [
    {
      icon: Layers,
      value: "3",
      label: t.projectsActive,
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: DollarSign,
      value: t.incomeValue,
      label: t.monthlyIncome,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: TrendingUp,
      value: "248",
      label: t.shares,
      color: "text-chart-3",
      bg: "bg-chart-3/10",
    },
    {
      icon: Percent,
      value: "12.3%",
      label: t.yieldYtd,
      color: "text-chart-4",
      bg: "bg-chart-4/10",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="glass rounded-2xl p-5 flex flex-col gap-3 hover:scale-[1.02] transition-transform"
        >
          <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center`}>
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
          </div>
          <div>
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
