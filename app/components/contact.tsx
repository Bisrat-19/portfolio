"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"
import { Mail, MapPin, Phone } from "lucide-react"
import { profile } from "../data"
import { Section } from "./section"

const inputClass =
  "w-full rounded border border-border bg-transparent px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"

const details = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: "Location", value: profile.location, icon: MapPin },
]

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    try {
      await emailjs.send(
        "service_qtafb58", // EmailJS Service ID
        "template_tvogcxm", // EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        { publicKey: "PDhb5IERJQtYcgtsE" } // EmailJS Public Key
      )
      toast.success("Message sent! I'll get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Email send error:", error)
      toast.error("Failed to send message. Please try again or email me directly.")
    } finally {
      setIsSending(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-4 sm:grid-cols-[2fr_3fr]">
        <div className="space-y-4 px-1">
          <p className="text-sm leading-relaxed">
            Have a project in mind, a role to fill, or just want to say hi? My inbox is open.
          </p>
          <ul className="space-y-3 text-sm">
            {details.map(({ label, value, href, icon: Icon }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border">
                  <Icon aria-hidden className="size-3.5" />
                </span>
                <span className="sr-only">{label}: </span>
                {href ? (
                  <a href={href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {value}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 rounded border border-border p-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              aria-label="Your name"
              autoComplete="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              aria-label="Your email"
              autoComplete="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
          <textarea
            name="message"
            aria-label="Your message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className={`${inputClass} resize-none`}
          />
          <button
            type="submit"
            disabled={isSending}
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80 disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </Section>
  )
}
