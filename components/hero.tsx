"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown, Download, Mail } from "lucide-react"

const roles = [
  "Cloud Computing Enthusiast",
  "AI-Powered Solutions Builder",
  "DevOps Learner",
  "Python Developer",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Manshi_Kumari_Resume.pdf"
    link.download = "Manshi_Kumari_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(role.substring(0, displayText.length + 1))
          if (displayText.length === role.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setDisplayText(role.substring(0, displayText.length - 1))
          if (displayText.length === 0) {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 80
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Background glow effects */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "hsl(16, 80%, 60%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 right-1/4 h-72 w-72 rounded-full opacity-15 blur-3xl"
        style={{ background: "hsl(30, 60%, 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Text Content */}
        <div className="animate-fade-in-up order-2 lg:order-1">
          <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
            Engineering Student
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {"Hi, I'm "}
            <span className="text-primary">Manshi Kumari</span>
          </h1>
          <div className="mt-4 h-8">
            <span className="font-display text-lg text-accent sm:text-xl">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            I am a Computer Science (AI) student passionate about building
            cloud-based and AI-powered solutions. I enjoy working with Python,
            Linux, AWS, and modern cloud technologies to solve real-world
            problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Download size={16} />
              Download Resume
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="animate-fade-in order-1 flex justify-center lg:order-2">
          <div className="glow-border relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/30 sm:h-80 sm:w-80">
            <Image
              src="/profile-photo.jpg"
              alt="Manshi Kumari - Engineering Student"
              fill
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 320px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
