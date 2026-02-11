"use client"

import { useEffect, useRef, useState } from "react"

const skillGroups = [
  {
    category: "Programming",
    skills: [{ name: "Python", level: 85 }],
  },
  {
    category: "OS & Scripting",
    skills: [
      { name: "Linux", level: 80 },
      { name: "Shell Scripting", level: 70 },
    ],
  },
  {
    category: "Cloud Technologies",
    skills: [
      { name: "AWS (EC2, S3, IAM)", level: 78 },
      { name: "CloudWatch", level: 65 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", level: 82 },
      { name: "Linux CLI", level: 75 },
      { name: "Terraform (Basic)", level: 55 },
    ],
  },
  {
    category: "Core Skills",
    skills: [
      { name: "Cloud Computing", level: 80 },
      { name: "Problem Solving", level: 85 },
      { name: "System Troubleshooting", level: 75 },
    ],
  },
]

function SkillBar({
  name,
  level,
  inView,
}: {
  name: string
  level: number
  inView: boolean
}) {
  return (
    <div className="mb-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: inView ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.2 }
    )
    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  return (
    <section id="skills" className="px-6 py-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            My Expertise
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="glass glow-border rounded-xl p-6 transition-all"
            >
              <h3 className="mb-5 font-display text-lg font-semibold text-accent">
                {group.category}
              </h3>
              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  inView={inView}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
