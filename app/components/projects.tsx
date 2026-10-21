import Image from "next/image"
import { Code2, ExternalLink } from "lucide-react"
import { projects } from "../data"
import { Connector, Section } from "./section"

const linkClass =
  "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      {/* Phones: horizontal swipeable row (edge to edge). Tablets and up: vertical list */}
      <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:block sm:overflow-visible sm:px-0 sm:pb-0">
        {projects.map((project, index) => (
          <li key={project.title} className="group w-[85%] shrink-0 snap-start sm:w-auto">
            {index > 0 && (
              <div className="hidden sm:block">
                <Connector />
              </div>
            )}
            <article className="flex h-full flex-col sm:h-auto sm:flex-row">
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded border border-border bg-muted transition-all duration-300 group-hover:border-foreground group-hover:shadow-lg sm:w-[40%] sm:self-center">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 640px) 300px, 85vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="flex h-full items-center justify-center bg-muted bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] p-6 text-center [background-size:14px_14px]"
                  >
                    <span className="text-lg font-semibold tracking-tight text-foreground/80 transition-transform duration-500 group-hover:scale-105">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Short horizontal link between image and details, drawn on hover */}
              <div aria-hidden className="my-auto hidden w-3 shrink-0 border-t border-transparent transition-colors group-hover:border-foreground sm:block" />

              <div className="mt-2 flex w-full flex-1 flex-col justify-between gap-3 rounded border border-border px-4 py-3 transition-all duration-300 group-hover:border-foreground group-hover:shadow-md sm:mt-0">
                <div className="space-y-1.5">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </div>

                <ul aria-label="Tech stack" className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <li key={tech} className="rounded bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                      {tech}
                    </li>
                  ))}
                </ul>

                {(project.live || project.github) && (
                  <div className="flex flex-wrap gap-2">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        <ExternalLink aria-hidden className="size-3.5" />
                        View Live
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        <Code2 aria-hidden className="size-3.5" />
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>

      <a
        href="https://github.com/Bisrat-19"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 mt-6 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm transition-colors hover:bg-foreground hover:text-background"
      >
        More on GitHub
        <ExternalLink aria-hidden className="size-3.5" />
      </a>
    </Section>
  )
}
