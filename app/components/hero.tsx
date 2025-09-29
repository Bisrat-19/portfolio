"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Software Engineer"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    try {
      const link = document.createElement("a")
      link.href = "/cv/Resume.pdf"
      link.download = "Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Download failed:", error)
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 xl:gap-12 max-w-6xl mx-auto">
          {/* Mobile: Profile Image First */}
          <div className="flex-shrink-0 lg:hidden order-1">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-white p-1 shadow-xl relative mx-auto">
                <img
                  src="/images/profile.jpg"
                  alt="Bisrat Dereje - Software Engineer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full opacity-80 animate-pulse" />
              <div
                className="absolute -bottom-3 -left-3 w-4 h-4 bg-emerald-400 rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 max-w-xl text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-3 lg:mb-4">
                Hello
                <span className="text-emerald-500">.</span>
              </h1>

              <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6 justify-center lg:justify-start">
                <div className="w-8 lg:w-12 h-0.5 bg-emerald-500" />
                <p className="text-xl sm:text-2xl md:text-3xl text-white font-medium">I'm Bisrat Dereje</p>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 lg:mb-8 font-light">
                {text}
                <span className="animate-blink text-emerald-500">|</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8 justify-center lg:justify-start">
              <Button
                onClick={downloadCV}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg text-sm lg:text-base"
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>

              <Button
                onClick={scrollToAbout}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-lg font-medium text-sm lg:text-base"
              >
                Explore My Work
              </Button>
            </div>

            <div className="flex space-x-3 lg:space-x-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-full transition-all duration-300 w-10 h-10 lg:w-12 lg:h-12"
                asChild
              >
                <a href="https://github.com/Bisrat-19" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 lg:h-5 lg:w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-full transition-all duration-300 w-10 h-10 lg:w-12 lg:h-12"
                asChild
              >
                <a href="https://linkedin.com/in/bisrat-dereje-434496356" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 lg:h-5 lg:w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-full transition-all duration-300 w-10 h-10 lg:w-12 lg:h-12"
                asChild
              >
                <a href="mailto:bdereje996@gmail.com">
                  <Mail className="h-4 w-4 lg:h-5 lg:w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Desktop: Profile Image */}
          <div className="hidden lg:flex flex-shrink-0 order-2">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-white p-2 shadow-2xl relative">
                <img
                  src="/images/profile.jpg"
                  alt="Bisrat Dereje - Software Engineer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full opacity-80 animate-pulse" />
              <div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-emerald-400 rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-500" />
      </div>
    </section>
  )
}
