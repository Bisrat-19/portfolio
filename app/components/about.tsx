"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Lightbulb } from "lucide-react"

export function About() {
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

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-emerald-500">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Software Engineering student at Addis Ababa Institute of Technology (AAIT) with hands-on experience from
            working on academic and personal projects. A dedicated and motivated team player with strong communication
            skills, eager to continuously learn and grow. Passionate about building impactful software and contributing
            to dynamic tech teams through collaboration, creativity, and problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              description:
                "Currently pursuing Software Engineering at Addis Ababa Institute of Technology (AAIT), AAU (2022-2027).",
            },
            {
              icon: Users,
              title: "Team Player",
              description:
                "Strong communication skills with experience in collaborative projects and team environments.",
            },
            {
              icon: Lightbulb,
              title: "Problem Solver",
              description: "Passionate about tackling complex challenges and finding creative solutions through code.",
            },
          ].map((item, index) => (
            <Card
              key={item.title}
              className={`bg-white/5 border-white/10 transition-all duration-1000 delay-${index * 200} hover:bg-white/10 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-8 text-center">
                <item.icon className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
