import Image from "next/image"
import { Code2, ExternalLink } from "lucide-react"
import { projects } from "../data"
import { Connector, Section } from "./section"

const linkClass =
  "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul>
        {projects.map((project, index) => (
          <li key={project.title} className="group">
            {index > 0 && <Connector />}
            <article className="flex flex-col md:flex-row">
              <div className="relative h-52 w-full shrink-0 overflow-hidden rounded border border-border transition-all duration-300 group-hover:border-foreground group-hover:shadow-lg md:h-auto md:min-h-52 md:w-[40%]">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(min-width: 768px) 300px, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Short horizontal link between image and details, drawn on hover */}
              <div aria-hidden className="my-auto hidden w-3 shrink-0 border-t border-transparent transition-colors group-hover:border-foreground md:block" />

              <div className="mt-2 flex w-full flex-col justify-between gap-3 rounded border border-border px-4 py-3 transition-all duration-300 group-hover:border-foreground group-hover:shadow-md md:mt-0">
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
