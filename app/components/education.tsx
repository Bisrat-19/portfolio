import { education } from "../data"
import { Section } from "./section"

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol>
        {education.map((item) => (
          <li key={item.school}>
            <p className="w-fit rounded-full border border-border px-3 py-1 text-xs font-semibold">
              {item.period}
            </p>
            <div className="ml-10 border-l border-border pb-2 pl-5 pt-3">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline-offset-4 hover:underline"
              >
                {item.school}
              </a>
              <p className="text-xs text-muted-foreground">{item.college}</p>
              <p className="mt-2 text-sm">{item.degree}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:w-[85%]">{item.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
