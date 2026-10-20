import { Intro } from "./components/intro"
import { Experience } from "./components/experience"
import { Education } from "./components/education"
import { Projects } from "./components/projects"
import { Skills } from "./components/skills"
import { Contact } from "./components/contact"

export default function Portfolio() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-10 sm:px-6 md:pt-16">
      <main>
        <Intro />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="mt-16 flex flex-wrap justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Bisrat Dereje</p>
        <p>Addis Ababa, Ethiopia</p>
      </footer>
    </div>
  )
}
