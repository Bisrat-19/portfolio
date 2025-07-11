"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Database, Smartphone, GitBranch, Palette } from "lucide-react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      name: "Programming Languages",
      level: 85,
      icon: Code,
      description: "Java (OOP), Python, JavaScript",
    },
    {
      name: "Web Development",
      level: 80,
      icon: Globe,
      description: "React, NextJS, ExpressJS, NestJS",
    },
    {
      name: "Mobile Development",
      level: 80,
      icon: Smartphone,
      description: "Kotlin, Flutter",
    },
    {
      name: "Database Systems",
      level: 80,
      icon: Database,
      description: "MySQL, MongoDB, PostgreSQL",
    },
    {
      name: "Software Engineering",
      level: 85,
      icon: GitBranch,
      description: "Git, GitHub, Agile methodologies",
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-emerald-500">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technical skills gained through academic coursework and hands-on project experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className={`bg-white/5 border-white/10 transition-all duration-1000 delay-${index * 100} hover:bg-white/10 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-emerald-500/20 p-3 rounded-lg">
                    <skill.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full transition-all duration-1500 delay-${index * 200}`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                  <p className="text-gray-400 text-sm">{skill.level}% Proficiency</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
