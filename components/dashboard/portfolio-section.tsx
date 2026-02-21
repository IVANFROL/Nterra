"use client"

import Link from "next/link"
import { Plus } from "lucide-react"
import { type dashboardTranslations } from "@/lib/translations"

type DashT = (typeof dashboardTranslations)["ru"]

type ProjectStatus = "active" | "collecting" | "completed"

interface ProjectCardData {
  name: string
  status: ProjectStatus
  statusLabel: string
  shares: string
  income: string
  progress: number
  note?: string
  href: string
}

const statusStyles: Record<ProjectStatus, { border: string; dot: string; badge: string }> = {
  active: {
    border: "border-l-accent",
    dot: "bg-accent",
    badge: "text-accent bg-accent/10",
  },
  collecting: {
    border: "border-l-chart-3",
    dot: "bg-chart-3",
    badge: "text-chart-3 bg-chart-3/10",
  },
  completed: {
    border: "border-l-destructive/50",
    dot: "bg-accent",
    badge: "text-destructive bg-destructive/10",
  },
}

function ProjectCard({
  project,
  sellLabel,
  historyLabel,
}: {
  project: ProjectCardData
  sellLabel: string
  historyLabel: string
}) {
  const style = statusStyles[project.status]

  return (
    <div
      className={`glass rounded-2xl p-5 hover:scale-[1.02] transition-transform border-l-4 ${style.border}`}
    >
      <Link href={project.href} className="block mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
            <span className={`w-3 h-3 rounded-full ${style.dot}`} />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-foreground truncate">{project.name}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full ${style.badge}`}>
              {project.statusLabel}
            </span>
          </div>
        </div>
      </Link>

      <div className="flex flex-col gap-2 mb-4">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{project.shares}</span>
          <span className="font-semibold text-accent">{project.income}</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-1.5">
          <div
            className={`h-1.5 rounded-full ${project.status === "completed" ? "bg-accent" : project.status === "collecting" ? "bg-chart-3" : "bg-accent"}`}
            style={{ width: `${project.progress}%` }}
          />
        </div>
        {project.note && (
          <p className="text-xs text-muted-foreground">{project.note}</p>
        )}
      </div>

      {project.status === "completed" ? (
        <Link href={project.href} className="block w-full px-4 py-2.5 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent/90 transition-colors text-sm text-center">
          {historyLabel}
        </Link>
      ) : (
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2.5 bg-secondary text-foreground/80 border border-border rounded-xl hover:bg-secondary/80 transition-colors text-sm font-medium">
            {sellLabel}
          </button>
          <button className="px-3 py-2.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}

export function PortfolioSection({ t }: { t: DashT }) {
  const projects: ProjectCardData[] = [
    {
      name: t.p1Name,
      status: "active",
      statusLabel: t.p1Status,
      shares: t.p1Shares,
      income: t.p1Income,
      progress: 85,
      note: t.p1Note,
      href: "/poselok-1",
    },
    {
      name: t.p2Name,
      status: "collecting",
      statusLabel: t.p2Status,
      shares: t.p2Shares,
      income: t.p2Income,
      progress: 67,
      href: "/pyaterocka",
    },
    {
      name: t.p3Name,
      status: "completed",
      statusLabel: t.p3Status,
      shares: t.p3Shares,
      income: t.p3Income,
      progress: 100,
      href: "/otel-spa",
    },
  ]

  return (
    <section className="glass rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">{t.portfolio}</h2>
        <button className="px-4 sm:px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent/90 transition-colors text-sm">
          {t.addProjects}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <ProjectCard
            key={p.name}
            project={p}
            sellLabel={t.sell}
            historyLabel={t.paymentHistory}
          />
        ))}
      </div>
    </section>
  )
}
