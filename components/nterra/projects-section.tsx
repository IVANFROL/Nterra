import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TreePine, Store, Hotel } from "lucide-react"
import type { Lang } from "@/lib/translations"
import { translations } from "@/lib/translations"

export function ProjectsSection({ lang }: { lang: Lang }) {
  const t = translations[lang]

  const projects = [
    {
      id: 1,
      title: t.p1Title,
      image: "/images/project-village.jpg",
      icon: TreePine,
      tagline: t.p1Tagline,
      details: [t.p1Detail1, t.p1Detail2],
      yield: "15%",
      color: "from-emerald-500/20 to-green-500/10",
      accentColor: "text-emerald-400",
      href: "/poselok-1",
    },
    {
      id: 2,
      title: t.p2Title,
      image: "/images/project-store.jpg",
      icon: Store,
      tagline: t.p2Tagline,
      details: [t.p2Detail1, t.p2Detail2],
      yield: "9\u201312%",
      color: "from-amber-500/20 to-orange-500/10",
      accentColor: "text-amber-400",
      href: "/pyaterocka",
    },
    {
      id: 3,
      title: t.p3Title,
      image: "/images/project-hotel.jpg",
      icon: Hotel,
      tagline: t.p3Tagline,
      details: [t.p3Detail1, t.p3Detail2],
      yield: "18%",
      color: "from-primary/20 to-blue-500/10",
      accentColor: "text-primary",
      href: "/otel-spa",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            {t.projectsLabel}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground text-balance">
            {t.projectsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <article
                key={project.id}
                className="group glass-strong rounded-3xl overflow-hidden flex flex-col hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <Link href={project.href} className="relative h-52 overflow-hidden block">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent`} />
                  <div className="absolute top-4 right-4 glass rounded-full px-3 py-1.5 flex items-center gap-1.5">
                    <span className={`text-sm font-bold ${project.accentColor}`}>{project.yield}</span>
                    <span className="text-xs text-foreground/60">{t.annually}</span>
                  </div>
                </Link>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground leading-tight">{project.title}</h3>
                      <p className="text-xs text-foreground/50">{project.tagline}</p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 mb-4">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-sm text-foreground/60 flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 flex flex-col gap-1.5">
                    <p className="text-emerald-400 font-bold text-xs bg-black/20 px-3 py-1.5 rounded-full inline-block">
                      {t.stockInfo}
                    </p>
                    <p className="text-xs text-foreground/50">{t.p2pExit}</p>
                  </div>

                  <div className="mt-auto flex gap-3">
                    <a
                      href="#contact"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent/90 transition-all"
                    >
                      {t.investCardBtn}
                      <ArrowRight size={16} />
                    </a>
                    <Link
                      href={project.href}
                      className="px-5 py-3.5 glass text-foreground/80 font-semibold rounded-xl hover:bg-secondary transition-all text-sm"
                    >
                      {t.viewDetails}
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
