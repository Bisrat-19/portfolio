import Image from "next/image"
import { ChevronRight, Laptop } from "lucide-react"
import { experience, type Job } from "../data"
import { Section } from "./section"

function CompanyLogo({ job }: { job: Job }) {
  const logo = job.logo ? (
    <Image
      src={job.logo}
      alt={`${job.company} logo`}
      width={48}
      height={48}
      className="size-12 rounded border border-border bg-white object-contain transition-transform duration-300 hover:scale-110"
    />
  ) : (
    <span className="flex size-12 items-center justify-center rounded border border-border bg-muted">
      <Laptop aria-hidden className="size-5" />
    </span>
  )

  if (!job.url) return logo

  return (
    <a href={job.url} target="_blank" rel="noopener noreferrer" aria-label={`${job.company} website`} className="w-fit">
      {logo}
    </a>
  )
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol>
        {experience.map((job) => (
          <li key={job.company}>
            <p className="w-fit rounded-full border border-border px-3 py-1 text-xs font-semibold">
              {job.period}
            </p>
            <div className="ml-10 flex flex-col gap-2 border-l border-border pb-6 pl-5 pt-3 sm:w-[85%]">
              <CompanyLogo job={job} />
              <div>
                <h3 className="text-sm font-semibold">{job.role}</h3>
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  <p className="text-sm text-foreground/80">{job.company}</p>
                )}
              </div>
              {job.description && <p className="text-sm leading-relaxed text-foreground/80">{job.description}</p>}
              {job.points && (
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-1.5">
                      <ChevronRight aria-hidden className="mt-[3px] size-3.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
