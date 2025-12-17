"use client"

import {
  SiJavascript, SiTypescript, SiPython, SiGo, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiAngular, SiTailwindcss,
  SiNodedotjs, SiExpress, SiNestjs, SiDjango, SiDotnet, SiPostgresql, SiMysql, SiMongodb, SiDocker, SiGit, SiGithub,
} from "react-icons/si"
import { FaNetworkWired, FaJava } from "react-icons/fa"
import { TbBrandCSharp } from "react-icons/tb"



export function Skills() {
  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Java", icon: FaJava, color: "#F89820" },
    { name: "C#", icon: TbBrandCSharp, color: "#68217A" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#ffffff" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "Django", icon: SiDjango, color: "#44B78B" },
    { name: ".NET Core", icon: SiDotnet, color: "#512BD4" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    { name: "CI/CD", icon: FaNetworkWired, color: "#2088FF" },
  ]

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="text-emerald-500">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I work with.
          </p>
        </div>

        {/* Creative Cloud Layout */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={index}
                className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-white/5 hover:border-emerald-500/50 hover:bg-zinc-800/80 backdrop-blur-sm transition-all duration-300 cursor-default hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              >
                <Icon
                  className="text-lg md:text-xl transition-colors duration-300 group-hover:text-emerald-400"
                  style={{ color: skill.color }}
                />
                <span className="text-sm md:text-base font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>

                {/* Subtle Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
