import {
  SiJavascript, SiTypescript, SiPython, SiC, SiCplusplus, SiGo, SiDart, SiReact, SiNextdotjs, SiRedux, SiAngular, SiFlutter, SiTailwindcss,
  SiNestjs, SiExpress, SiDjango, SiDotnet, SiGraphql, SiApachekafka, SiRabbitmq, SiPostgresql, SiMongodb, SiMysql, SiRedis,
  SiGit, SiGithub, SiGithubactions, SiDocker, SiKubernetes,
} from "react-icons/si"
import { FaAws, FaJava } from "react-icons/fa"
import { TbApi } from "react-icons/tb"
import type { IconType } from "react-icons"
import { skills } from "../data"
import { Section } from "./section"

// Skills without a matching brand icon render as text only
const icons: Record<string, IconType> = {
  JavaScript: SiJavascript, TypeScript: SiTypescript, Python: SiPython, Java: FaJava, C: SiC, "C++": SiCplusplus, Go: SiGo, Dart: SiDart,
  React: SiReact, "Next.js": SiNextdotjs, Redux: SiRedux, Angular: SiAngular, Flutter: SiFlutter, "Tailwind CSS": SiTailwindcss,
  NestJS: SiNestjs, "Express.js": SiExpress, Django: SiDjango, ".NET": SiDotnet, GraphQL: SiGraphql, Kafka: SiApachekafka, RabbitMQ: SiRabbitmq, "REST API": TbApi,
  PostgreSQL: SiPostgresql, MongoDB: SiMongodb, MySQL: SiMysql, Redis: SiRedis,
  Git: SiGit, GitHub: SiGithub, "CI/CD": SiGithubactions, Docker: SiDocker, Kubernetes: SiKubernetes, AWS: FaAws,
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-4 rounded border border-border p-4">
        {skills.map(({ group, items }) => (
          <div key={group} className="flex flex-col gap-2 sm:flex-row sm:items-start">
            <dt className="w-36 shrink-0 pt-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {group}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {items.map((skill) => {
                const Icon = icons[skill]
                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 border border-border px-3 py-1 text-sm transition-all hover:rounded-lg hover:bg-foreground hover:text-background"
                  >
                    {Icon && <Icon aria-hidden className="size-3.5" />}
                    {skill}
                  </span>
                )
              })}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
