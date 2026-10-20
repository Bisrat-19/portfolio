import { Hero } from "./components/hero"
import { Skills } from "./components/skills"
import { Projects } from "./components/projects"
import { WorkHistory } from "./components/work-history"
import { Contact } from "./components/contact"
import { Navigation } from "./components/navigation"

export default function Portfolio() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="min-h-screen bg-background">
        <Hero />
        <WorkHistory />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-background px-4 pb-8">
        <div className="max-w-6xl mx-auto text-center pt-8 border-t border-border">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Bisrat Dereje.</p>
        </div>
      </footer>
    </>
  )
}
