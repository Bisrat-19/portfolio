"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showScrollHint, setShowScrollHint] = useState(true)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current
      if (scrollLeft > 20) {
        setShowScrollHint(false)
      } else {
        setShowScrollHint(true)
      }
    }
  }

  const projects = [
    {
      title: "HealPoint",
      description: "A comprehensive hospital management system I built for patient registration, appointments, treatment tracking, and Chapa payment integration.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Django", "Redis", "PostgreSQL"],
      github: "https://github.com/Bisrat-19/hospital_management.git",
      live: "https://heal-point-ten.vercel.app/",
      image: "/project_healpoint.png"
    },
    {
      title: "CollabBoard",
      description: "CollabBoard is a project management tool I worked on to help teams organize projects, manage tasks, and collaborate efficiently with real-time chat, notifications, boards, task assignments, and role-based access.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Socket.io", "MongoDB"],
      github: "https://github.com/Bisrat-19/CollabBoard.git",
      live: "https://collab-board-steel.vercel.app/",
      image: "/project_bg_2.png"
    },
    {
      title: "MicroShop API",
      description: "A microservices architecture I implemented with API Gateway (Nginx), Auth, Order, and Notification services using RabbitMQ for async messaging.",
      tech: ["Django", "Nginx", "RabbitMQ", "Docker", "Python"],
      github: "https://github.com/Bisrat-19/microservices_practice",
      live: "https://github.com/Bisrat-19/microservices_practice",
      image: "/project_microshop.png"
    },
    {
      title: "ArifMusic",
      description: "A cross-platform music streaming application I developed with offline playback and playlist management.",
      tech: ["Flutter", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Bisrat-19/Music-App",
      live: "https://github.com/Bisrat-19/Music-App",
      image: "/project_arifmusic.png"
    },
    {
      title: "Klever Küche",
      description: "A furniture showcase platform I contributed to with product details, retailer search, job portal, and an admin dashboard for content management.",
      tech: ["React","TypeScript","Tailwind CSS", "Strapi CMS", "PostgreSQL"],
      github: " ", 
      live: " ",
      image: "/project_bg_1.png"
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="text-emerald-500">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my work across web and mobile development.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-[1920px] mx-auto">
        {/* Scroll Hint */}
        <AnimatePresence>
          {showScrollHint && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center gap-2 pointer-events-none"
            >
              <span className="text-emerald-500/80 text-sm font-medium tracking-widest uppercase">Scroll</span>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-8 h-8 text-emerald-500" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-8 px-4 md:px-12 pb-12 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group flex-shrink-0 w-[85vw] md:w-[600px] h-[400px] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-xl snap-center cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Floating Links on Top Right */}
                <div className="absolute top-6 right-6 flex gap-3 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-emerald-500 text-white rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-110"
                    title="View Code"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 hover:bg-emerald-500 text-white rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-110"
                      title="View Live"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-3 tracking-wide group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-500/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Spacer for end of scroll */}
          <div className="w-[1px] h-full flex-shrink-0" />
        </div>
      </div>
    </section>
  )
}
