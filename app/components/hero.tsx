"use client"

import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openResume = () => {
    window.open("/cv/Resume.pdf", "_blank")
  }

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground">
              Bisrat Dereje
              <span className="text-emerald-500">.</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground font-light">
              Software Engineer
            </h2>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Software Engineer with a background from Addis Ababa University, building
            reliable, well-structured web applications and scalable systems. I care about clear
            architecture, clean code, and collaborating with teams to ship production-ready
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-8">
            <Button
              onClick={openResume}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-md text-lg font-medium transition-all duration-300 min-w-[180px]"
            >
              Resume
            </Button>

            <Button
              onClick={scrollToProjects}
              variant="outline"
              className="border-input text-foreground hover:bg-accent px-8 py-6 rounded-md text-lg font-medium transition-all duration-300 min-w-[180px]"
            >
              Explore My Work
            </Button>
          </div>

          <div className="pt-16 space-y-6">
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
              Connect
            </p>
            <div className="flex gap-8 justify-center">
              <a
                href="https://github.com/Bisrat-19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/bisrat19/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:bdereje996@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
