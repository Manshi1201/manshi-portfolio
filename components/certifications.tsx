import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "AWS Cloud Course",
    org: "AWS Academy - 97% Score",
    year: "2025",
    link: "https://www.linkedin.com/posts/manshi75kumari_aws-academy-graduate-cloud-foundations-activity-7419657037023932417-ZqrC",
    linkLabel: "LinkedIn",
  },
  {
    title: "Google Gen AI Study Jam",
    org: "GDG (Google Developer Groups)",
    year: "2024-25",
    link: "https://www.linkedin.com/posts/manshi75kumari_genai-gdgc-abesit-activity-7275476468036485120-eyBe",
    linkLabel: "LinkedIn",
  },
  {
    title: "Google Arcade Program",
    org: "Google Cloud",
    year: "2025",
    link: "https://www.linkedin.com/posts/manshi75kumari_googlearcade-googlecloud-cloudcomputing-activity-7387485267865198592-X9II",
    linkLabel: "LinkedIn",
  },
  {
    title: "Google Cloud Skill Boost Badges",
    org: "Credly",
    year: "2025",
    link: "https://www.credly.com",
    linkLabel: "Credly",
  },
  {
    title: "Python Certification",
    org: "Cisco Networking Academy",
    year: "2024",
    link: "https://www.credly.com",
    linkLabel: "Credly",
  },
  {
    title: "Linux & Unix",
    org: "Infosys",
    year: "2025",
    link: "https://www.credly.com",
    linkLabel: "Credly",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Credentials
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Certifications & Achievements
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="glass glow-border group flex items-start gap-4 rounded-xl p-5 transition-all"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <Award size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-sm font-semibold text-foreground">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground">{cert.org}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {cert.year}
                  </span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ExternalLink size={10} />
                      {cert.linkLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
