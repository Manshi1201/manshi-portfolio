import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AYUSH EMR Integration",
    subtitle: "Smart India Hackathon",
    image: "/symbiomed.png",
    description:
      "Developed an API for integrating AYUSH medical records with EMR systems, enabling ICD-11 and AYUSH NAMASTE mapping for healthcare data standardization.",
    tech: ["Python", "REST API", "Healthcare", "ICD-11"],
    highlights: [
      "ICD-11 and AYUSH NAMASTE mapping",
      "Healthcare data standardization",
      "API development & integration",
    ],
  },
  {
    title: "Carbon Footprint Tracker",
    subtitle: "AI-Based System",
    image: "/carbon-tracker.png",
    description:
      "An AI-powered system for tracking carbon emissions with daily, weekly, and yearly analytics, featuring a comprehensive dashboard for sustainability metrics.",
    tech: ["Python", "AI/ML", "Data Analytics", "Dashboard"],
    highlights: [
      "Daily/weekly/yearly analytics",
      "Sustainability metrics dashboard",
      "AI-powered emission tracking",
    ],
  },
  {
    title: "AI-Powered Online Voting",
    subtitle: "Secure Digital Platform",
    image: "/voting.png",
    description:
      "A secure digital voting platform with AI voter assistance, vote verification & analysis, ensuring transparency and accessibility in the voting process.",
    tech: ["Python", "AI", "Security", "Cloud"],
    highlights: [
      "AI voter assistance",
      "Vote verification & analysis",
      "Transparency & accessibility",
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            What I Built
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass glow-border group flex flex-col overflow-hidden rounded-xl transition-all"
            >
              {/* Project Screenshot */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Header */}
              <div className="mb-4 px-6 pt-5">
                <p className="mb-1 text-xs font-medium tracking-wider text-accent uppercase">
                  {project.subtitle}
                </p>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mb-4 flex-1 px-6 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mb-5 space-y-2 px-6">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="mb-4 flex flex-wrap gap-2 px-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 px-6 pb-6">
                <a
                  href="https://github.com/Manshi1201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <ExternalLink size={14} />
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
