import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Skills } from "./components/skills"
import { Projects } from "./components/projects"
import { Contact } from "./components/contact"
import { Navigation } from "./components/navigation"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
