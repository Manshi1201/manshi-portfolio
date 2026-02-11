import { Cloud, Brain, Terminal, Code2, Wrench } from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Cloud Application Development",
    description:
      "Building scalable, cloud-native applications using AWS services like EC2, S3, and IAM.",
  },
  {
    icon: Brain,
    title: "AI-Based System Design",
    description:
      "Designing intelligent systems that leverage AI and machine learning for real-world problem solving.",
  },
  {
    icon: Terminal,
    title: "DevOps Automation",
    description:
      "Automating deployment pipelines and infrastructure management using Git, Linux CLI, and Terraform.",
  },
  {
    icon: Code2,
    title: "API Development",
    description:
      "Creating robust RESTful APIs for seamless data integration and communication between services.",
  },
  {
    icon: Wrench,
    title: "System Troubleshooting",
    description:
      "Diagnosing and resolving system-level issues across Linux environments and cloud infrastructure.",
  },
]

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            What I Offer
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Services
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass glow-border group rounded-xl p-6 transition-all"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <Icon size={24} />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
