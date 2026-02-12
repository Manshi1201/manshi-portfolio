import { Linkedin, Mail, Award, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-display text-sm text-muted-foreground">
          {"© 2025 Manshi Kumari. All rights reserved."}
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:manshi75kumari@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/Manshi1201"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Credly Profile"
          >
            <Award size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
