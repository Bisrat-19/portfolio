"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left
  const ref = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container || !isVisible) return

    // Using interval for simpler control or requestAnimationFrame for smoothness
    const interval = setInterval(() => {
      if (container && !isHovered) {
        // Check for boundaries to reverse direction
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
          setDirection(-1)
        } else if (container.scrollLeft <= 0) {
          setDirection(1)
        }

        container.scrollLeft += direction
      }
    }, 20) // 50fps approx

    return () => clearInterval(interval)
  }, [isVisible, isHovered, direction])

  // Scroll-jacking removed to allow natural scrolling

  const projects = [
    {
      title: "CollabBoard",
      description: "A real-time collaborative whiteboard application allowing multiple users to draw and brainstorm together.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB"],
      github: "https://github.com/Bisrat-19/CollabBoard.git",
      live: "https://collab-board-steel.vercel.app/",
      image: "/collabboard.jpg"
    },
    {
      title: "LinkUp API",
      description: "A robust social media backend API handling user connections, posts, and real-time notifications.",
      tech: ["Node.js", "Express.js", "MongoDB", "Docker", "CI/CD"],
      github: "https://github.com/Bisrat-19/LinkUp.git",
      live: "https://github.com/Bisrat-19/LinkUp.git",
      image: "/linkup.jpg"
    },
    {
      title: "ArifMusic App",
      description: "A cross-platform music streaming application with offline playback and playlist management.",
      tech: ["Flutter", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Bisrat-19/Music-App",
      live: "https://github.com/Bisrat-19/Music-App",
      image: "/arifmusic.jpg"
    },
    {
      title: "EcoMart",
      description: "An e-commerce platform focused on sustainable products with a full shopping cart and checkout flow.",
      tech: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB"],
      github: "https://github.com/Bisrat-19/EcoMart.git",
      live: "https://github.com/Bisrat-19/EcoMart.git",
      image: "/ecomart.jpg"
    },
    {
      title: "Task Manager API",
      description: "A comprehensive task management system API with team collaboration features and progress tracking.",
      tech: ["Node.js", "Express.js", "Prisma", "MySQL"],
      github: "https://github.com/Bisrat-19/Task_Management_System.git",
      live: "https://task-management-system-t4tr.onrender.com",
      image: "/task.jpg"
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-12 px-3 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="text-emerald-500">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my work across web and mobile development.
          </p>
        </div>

        {/* Single-Row Horizontal Scroll Grid */}
        <div className="relative">
          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-8 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >

            <div
              className="flex gap-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {projects.map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className={`group relative overflow-hidden rounded-3xl flex-shrink-0 w-[400px] md:w-[550px] h-[450px] border border-white/10 bg-zinc-900/50 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Full Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />

                  {/* Gradient Overlay - Always present but changes on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500">

                    {/* Top Content (Hidden initially, visible on hover) */}
                    <div className="absolute top-8 right-8 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-20px] group-hover:translate-y-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-black/50 hover:bg-emerald-500 text-white rounded-full backdrop-blur-md border border-white/10 transition-all duration-300"
                        title="View Code"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-black/50 hover:bg-emerald-500 text-white rounded-full backdrop-blur-md border border-white/10 transition-all duration-300"
                          title="View Live"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>

                    {/* Main Content */}
                    <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-zinc-300 text-sm mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500 opacity-80 group-hover:opacity-100">
                        {project.description}
                      </p>

                      {/* Tech Stack - Glassmorphism Pills */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-medium rounded-full border border-emerald-500/20 backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
