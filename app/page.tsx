import { Hero } from "./components/hero"
import { Skills } from "./components/skills"
import { Projects } from "./components/projects"
import { WorkHistory } from "./components/work-history"
import { Contact } from "./components/contact"
import { Navigation } from "./components/navigation"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <WorkHistory />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
