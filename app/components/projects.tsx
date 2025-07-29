"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
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

  const projects = [
    {
      title: "📋 CollabBoard",
      description:
        "A full-stack project management tool for teams to create projects, organize tasks across boards, assign responsibilities, and track progress. Features include authentication, user roles, admin controls, and a responsive Kanban-style interface for seamless collaboration.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB"],
      image: "/collabboard.jpg?height=300&width=400",
      github: "https://github.com/Bisrat-19/CollabBoard.git",
      live: ""
    },
    {
      title: "🎵 ArifMusic App",
      description:
        "A Flutter-based music streaming app with user roles (listener, artist, admin). Features include music upload and management, artist dashboards with analytics, and music streaming with a local Node.js & MongoDB backend.",
      tech: ["Flutter", "Node.js", "Express.js", "MongoDB"],
      image: "/arifmusic.jpg?height=300&width=400",
      github: "https://github.com/Bisrat-19/Music-App",
      live: "https://github.com/Bisrat-19/Music-App", // Replace with actual live URL if deployed
    },
    {
      title: "🛒 EcoMart",
      description:
        "A full-stack e-commerce platform built with modern web technologies. Users can browse products, add items to cart, place orders, and track them. Includes a robust admin dashboard for managing products, orders, and users.",
      tech: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB"],
      image: "/ecomart.jpg?height=300&width=400",
      github: "https://github.com/Bisrat-19/EcoMart.git",
      live: ""
    },
    {
      title: "🛠️ Task Manager API",
      description:
        "A backend-only RESTful API for a Task Management System built with Express.js, Prisma, and MySQL. Includes secure JWT authentication, user profile access, and full task CRUD functionality with support for search, pagination, and status filtering. Deployed on Render.",
      tech: ["Node.js", "Express.js", "Prisma", "MySQL"],
      image: "/task.jpg?height=300&width=400",
      github: "https://github.com/Bisrat-19/Task_Management_System.git",
      live: "https://task-management-system-t4tr.onrender.com"
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-emerald-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've built, showcasing my skills across mobile, web, and full-stack
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`bg-white/5 border-white/10 overflow-hidden transition-all duration-1000 delay-${index * 200} hover:bg-white/10 hover:scale-105 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/20 text-white hover:bg-emerald-500/20 hover:border-emerald-500/50"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/20 text-white hover:bg-emerald-500/20 hover:border-emerald-500/50"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
