import Image from "next/image"
import { ArrowUpRight, Mail } from "lucide-react"
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa"
import { bio, profile } from "../data"
import { ThemeToggle } from "./theme-toggle"

const socials = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "Telegram", href: profile.telegram, icon: FaTelegram },
  { label: "Instagram", href: profile.instagram, icon: FaInstagram },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
]

export function Intro() {
  return (
    <header id="about" className="flex flex-col gap-6 sm:flex-row sm:gap-8">
      <div className="relative aspect-square w-full max-w-96 shrink-0 self-center sm:w-[46%] sm:self-start">
        <Image
          src="/bisrat-sketch.png"
          alt="Sketch portrait of Bisrat Dereje"
          fill
          priority
          sizes="(min-width: 640px) 340px, 90vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              {profile.name}
              <span className="text-emerald-500">.</span>
            </h1>
            <p className="text-sm text-muted-foreground">{profile.tagline}</p>
          </div>
          <ThemeToggle />
        </div>

        <div className="space-y-3 text-sm leading-relaxed">
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer me"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-80"
          >
            Resume
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
