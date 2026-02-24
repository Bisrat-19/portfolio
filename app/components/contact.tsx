"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "emailjs-com"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        "service_qtafb58", // ✅ Your EmailJS Service ID
        "template_tvogcxm", // ✅ Your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "PDhb5IERJQtYcgtsE" // ✅ Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text)
          alert("✅ Message sent successfully!")
          setFormData({ name: "", email: "", message: "" }) // Clear form
        },
        (error) => {
          console.error("Email send error:", error.text)
          alert("❌ Failed to send message. Please try again later.")
        }
      )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-emerald-500">Touch</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let's work together!</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I&apos;m <span className="font-semibold text-foreground">Bisrat Dereje</span>, a software engineer with experience across web, backend, and API development. I&apos;m always interested in meaningful work whether it&apos;s joining a team, collaborating on a product, or solving a specific technical problem.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500/20 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <a href="tel:+251936092033" className="text-muted-foreground hover:text-emerald-400 transition-colors">
                    +251 936 092 033
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500/20 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <a
                    href="mailto:bdereje996@gmail.com"
                    className="text-muted-foreground hover:text-emerald-400 transition-colors"
                  >
                    bdereje996@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500/20 p-3 rounded-full">
                  <Github className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-foreground font-medium">GitHub</p>
                  <a
                    href="https://github.com/Bisrat-19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-emerald-400 transition-colors"
                  >
                    github.com/Bisrat-19
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500/20 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Location</p>
                  <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-card border-border text-foreground hover:bg-emerald-500/20 hover:border-emerald-500/50"
                asChild
              >
                <a href="https://github.com/Bisrat-19" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-card border-border text-foreground hover:bg-emerald-500/20 hover:border-emerald-500/50"
                asChild
              >
                <a href="mailto:bdereje996@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-card border-border text-foreground hover:bg-emerald-500/20 hover:border-emerald-500/50"
                asChild
              >
                <a href="tel:+251936092033">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-input text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:bg-background focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-input text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:bg-background focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-input text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:bg-background focus-visible:ring-0 focus-visible:ring-offset-0 resize-none transition-all duration-300"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">© 2024 Bisrat Dereje.</p>
        </div>
      </div>
    </section>
  )
}
