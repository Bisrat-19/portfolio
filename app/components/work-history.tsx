"use client"

import { useEffect, useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const TimelineItem = ({
    title,
    company,
    description,
    index,
}: {
    title: string
    company: string
    description: string[]
    index: number
}) => {
    const isEven = index % 2 === 0

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative flex items-start justify-between md:justify-normal w-full mb-24 ${isEven ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Empty space for the other side */}
            <div className="hidden md:block w-1/2" />

            {/* Center Point */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-10 w-4 h-4 rounded-full bg-background border-[3px] border-emerald-500 z-10 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />

            {/* Content Card */}
            <div
                className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}
            >
                <div className="relative">
                    {/* Connector Line (Horizontal) */}
                    <div className={`absolute top-[47px] h-[2px] bg-emerald-500 w-12 hidden md:block ${isEven ? "-right-12" : "-left-12"
                        }`} />

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-card p-8 rounded-xl border border-border hover:border-emerald-500/50 transition-all duration-300 shadow-xl group text-left relative overflow-hidden"
                    >
                        {/* Card Glow Effect */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
                        <h4 className="text-2xl font-bold text-emerald-500 mb-6">{company}</h4>
                        <ul className="space-y-3 flex flex-col items-start">
                            {description.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="text-muted-foreground text-sm leading-relaxed flex items-start gap-3"
                                >
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export function WorkHistory() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    })

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    const history = [
        {
            title: "Full-Stack Developer",
            company: "GumiSofts",
            description: [
                "Developed full-stack applications using React, Django REST Framework, and Flutter for various client projects.",
                "Contributed to Bita Platform backend development, implementing RESTful APIs and database schemas.",
                "Collaborated in agile teams to deliver scalable mobile and web solutions with clean, maintainable code.",
                "Integrated third-party services and implemented authentication/authorization systems."
            ]
        },
        {
            title: "Backend Developer",
            company: "INSA",
            description: [
                "Led backend development for Legalink, a legal case-management platform",
                "Designed and implemented RESTful APIs for authentication, case tracking, and communication",
                "Collaborated closely with the frontend team using Agile/Scrum workflows",
                "Gained strong experience in backend architecture, scalability, and collaborative development"
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "Infra Tech Software Services",
            description: [
                "Contributed to the development of diverse software solutions, actively participating in coding and feature implementation.",
                "Performed comprehensive software testing and quality assurance, ensuring high standards of product reliability.",
                "Collaborated closely with senior developers to troubleshoot issues, document bugs, and optimize system performance."
            ]
        },
        {
            title: "Freelance Web Developer",
            company: "Self-Employed",
            description: [
                "Build modern, responsive websites and full-stack applications for clients",
                "Deliver clean UI/UX, optimized performance, and scalable backend solutions",
                "Manage entire project cycles: planning → design → development → deployment",
                "Provide ongoing maintenance, improvements, and client-centered problem solving"
            ]
        }
    ]

    return (
        <section id="work-history" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        My <span className="text-emerald-500">Experience</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A timeline of my professional journey and achievements.
                    </p>
                </div>

                <div ref={containerRef} className="relative max-w-7xl mx-auto min-h-[1000px]">
                    {/* Central Line Background */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-zinc-800/50" />

                    {/* Animated Line */}
                    <motion.div
                        style={{ height }}
                        className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                    >
                        {/* Glowing Tip */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(16,185,129,1)] animate-pulse" />
                    </motion.div>

                    {/* Bottom Arrow Removed */}

                    <div className="relative z-10 pt-10">
                        {history.map((item, index) => (
                            <TimelineItem
                                key={index}
                                {...item}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
