import { ChevronRight } from "lucide-react"
import { experience } from "../data"
import { Section } from "./section"

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol>
        {experience.map((job) => (
          <li key={job.company}>
            {job.url ? (
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit rounded-full border border-border px-3 py-1 text-xs font-semibold transition-colors hover:border-foreground"
              >
                {job.company}
              </a>
            ) : (
              <p className="w-fit rounded-full border border-border px-3 py-1 text-xs font-semibold">
                {job.company}
              </p>
            )}
            <div className="ml-10 border-l border-border pb-6 pl-5 pt-3 md:w-[85%]">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-sm font-semibold">{job.role}</h3>
                {job.period && <p className="text-xs text-muted-foreground">{job.period}</p>}
              </div>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-1.5">
                    <ChevronRight aria-hidden className="mt-[3px] size-3.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
