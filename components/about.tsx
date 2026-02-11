import {
  Cloud,
  Brain,
  Code2,
  GraduationCap,
  Target,
  Lightbulb,
  Wrench,
  BookOpen,
} from "lucide-react"

const interests = [
  { icon: Cloud, label: "Cloud Computing" },
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Code2, label: "Python Development" },
]

const softSkills = [
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Wrench, label: "System Troubleshooting" },
  { icon: BookOpen, label: "Continuous Learner" },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Get to Know Me
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Bio */}
          <div>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              I am a dedicated Computer Science and Engineering (AI) student at
              ABES Institute of Technology, with a strong foundation in cloud
              computing, DevOps practices, and AI-based system design. My
              passion lies in building scalable, cloud-native applications that
              leverage modern technologies.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              As an aspiring cloud engineer, I am focused on mastering
              serverless architectures, cloud-native application development,
              and AI-powered systems. I am actively seeking internship
              opportunities to apply my skills in real-world environments and
              contribute to meaningful projects.
            </p>

            {/* Education Card */}
            <div className="glass glow-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    B.Tech in CSE (AI)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    ABES Institute of Technology
                  </p>
                  <p className="mt-1 text-xs text-primary">
                    Expected Graduation: 2027
                  </p>
                </div>
              </div>
            </div>

            {/* Career Goal */}
            <div className="glass mt-4 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    Career Goal
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Aspiring Cloud Engineer focused on serverless, cloud-native
                    apps, and AI systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interests & Soft Skills */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
              Core Interests
            </h3>
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {interests.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass glow-border flex flex-col items-center gap-3 rounded-xl p-5 text-center transition-all hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {softSkills.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass flex flex-col items-center gap-3 rounded-xl p-5 text-center transition-all hover:border-accent/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
