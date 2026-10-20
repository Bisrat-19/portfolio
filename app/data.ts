// All portfolio content lives here so it can be edited without touching the layout.

export const profile = {
  name: "Bisrat Dereje",
  tagline: "Software Engineer | Addis Ababa, Ethiopia",
  email: "bdereje996@gmail.com",
  phone: "+251 936 092 033",
  phoneHref: "tel:+251936092033",
  location: "Addis Ababa, Ethiopia",
  resume: "https://drive.google.com/file/d/1BO9sBbdaZ_mIcLyfm7Q5mioy5yokmatN/view?usp=sharing",
  github: "https://github.com/Bisrat-19",
  linkedin: "https://www.linkedin.com/in/bisrat19/",
}

export const bio = [
  "Hi! I'm Bisrat, a software engineer from Addis Ababa, Ethiopia, focused on building scalable web and mobile applications with modern technologies.",
  "I'm passionate about solving real-world problems through clean, efficient code. Today I build backend systems and microservices with NestJS, Express.js, and Django at Infra Tech Software Services, and before that I built full-stack web and mobile apps at GumiSofts.",
  "I enjoy working with teams that value collaboration, creativity, and continuous improvement, and I take ownership of my work to deliver solutions that make a real impact.",
]

export type Job = {
  role: string
  company: string
  url?: string
  // e.g. "Jan 2024 - Present"; shown next to the role when set
  period?: string
  points: string[]
}

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "Infra Tech Software Services",
    url: "https://www.infratechsoftwareservices.com/",
    period: "12/2025 - Present",
    points: [
      "Designed, developed, and maintained backend systems using NestJS, Express.js, and Django across multiple projects with scalable and maintainable architectures.",
      "Built and implemented microservices-based architectures, including API Gateway patterns and event-driven systems using message brokers for asynchronous communication.",
      "Developed secure authentication and authorization systems (JWT, role-based access control), RESTful APIs, and service-to-service communication layers.",
      "Contributed as a QA Engineer on the Sydro mobile application (social media platform), testing user authentication, posts, messaging, notifications, APIs, and complete end-to-end user workflows to ensure production readiness.",
      "Identified, documented, and tracked bugs; collaborated closely with cross-functional teams to validate fixes and continuously improve software quality.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2025 - Present",
    points: [
      "Build modern, responsive websites and full-stack applications for clients.",
      "Manage entire project cycles: planning, design, development, and deployment.",
      "Provide ongoing maintenance, improvements, and client-centered problem solving.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "GumiSofts",
    url: "https://gumisoft.in/",
    period: "05/2024 - 10/2025",
    points: [
      "Developed and maintained full-stack web and mobile applications using React, Django REST Framework, and Flutter for multiple client projects.",
      "Collaborated closely with product managers, designers, and developers in agile teams to deliver scalable, high-quality mobile and web solutions.",
      "Integrated third-party services and implemented secure authentication and authorization systems.",
      "Wrote clean, maintainable, and well-documented code following best practices and software engineering principles.",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "INSA",
    points: [
      "Led backend development for Legalink, a legal case-management platform.",
      "Designed and implemented RESTful APIs for authentication, case tracking, and communication.",
      "Collaborated closely with the frontend team using Agile/Scrum workflows.",
    ],
  },
]

export type Project = {
  title: string
  description: string
  tech: string[]
  image: string
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: "HealPoint",
    description: "A hospital management system for patient registration, appointments, treatment tracking, and Chapa payment integration.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Django", "Redis", "PostgreSQL"],
    image: "/project_healpoint.png",
    github: "https://github.com/Bisrat-19/hospital_management",
    live: "https://heal-point-ten.vercel.app/",
  },
  {
    title: "CollabBoard",
    description: "A project management tool that helps teams organize projects, manage tasks, and collaborate with real-time chat, notifications, boards, task assignments, and role-based access.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Socket.io", "MongoDB"],
    image: "/project_bg_2.png",
    github: "https://github.com/Bisrat-19/CollabBoard",
    live: "https://collab-board-steel.vercel.app/",
  },
  {
    title: "MicroShop API",
    description: "A microservices architecture with an Nginx API gateway and Auth, Order, and Notification services communicating asynchronously over RabbitMQ.",
    tech: ["Django", "Nginx", "RabbitMQ", "Docker", "Python"],
    image: "/project_microshop.png",
    github: "https://github.com/Bisrat-19/microservices_practice",
  },
  {
    title: "ArifMusic",
    description: "A cross-platform music streaming app with offline playback and playlist management.",
    tech: ["Flutter", "Node.js", "Express.js", "MongoDB"],
    image: "/project_arifmusic.png",
    github: "https://github.com/Bisrat-19/Music-App",
  },
  {
    title: "Klever Küche",
    description: "A furniture showcase platform with product details, retailer search, a job portal, and an admin dashboard for content management.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Strapi CMS", "PostgreSQL"],
    image: "/project_bg_1.png",
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "Python", "C", "C++", "Go", "Dart"] },
  { group: "Frontend & Mobile", items: ["React", "Next.js", "Angular", "Flutter", "Tailwind CSS"] },
  { group: "Backend", items: ["NestJS", "Express.js", "Django", ".NET", "GraphQL"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
  { group: "DevOps & Tools", items: ["Git", "GitHub", "CI/CD", "Docker", "Kubernetes", "gRPC", "Webpack", "Vite"] },
  { group: "Architecture", items: ["Monolithic", "Microservices", "Caching", "Message Brokers"] },
]

export const education = [
  {
    school: "Addis Ababa University",
    college: "College of Technology and Built Environment (CTBE)",
    url: "https://www.aau.edu.et/",
    degree: "BSc in Information Technology, Software Engineering",
    period: "2022 - 2027",
    summary:
      "Core coursework in Software Development, Data Structures & Algorithms, Databases, Web & Mobile Application Development, and Artificial Intelligence. Designed and built full-stack projects applying software engineering principles, system design, and clean, maintainable code.",
  },
]
