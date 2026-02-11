import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projectCarbon from "@/assets/project-carbon.png";
import projectAyush from "@/assets/project-ayush.jpeg";
import projectVoting from "@/assets/project-voting.png";
const projects = [
  {
    title: "Smart India Hackathon – AYUSH EMR Integration",
    description: "Developed an API for integrating AYUSH medical records with EMR systems, featuring ICD-11 and AYUSH NAMASTE mapping for healthcare data standardization.",
    tech: ["Python", "API Development", "Healthcare"],
    image: projectAyush,
    link: "https://github.com/manshi",
  },
  {
    title: "Carbon Footprint Tracker (AI-based)",
    description: "AI system for tracking carbon emissions with daily, weekly, and yearly analytics. Features a comprehensive dashboard for sustainability metrics.",
    tech: ["Python", "AI/ML", "Data Analytics"],
    image: projectCarbon,
    link: "https://github.com/manshi",
  },
  {
    title: "AI-Powered Online Voting System",
    description: "Secure digital voting platform with AI voter assistance, vote verification & analysis, ensuring transparency and accessibility.",
    tech: ["Python", "AI", "Security"],
    image: projectVoting,
    link: "https://github.com/manshi",
  },
];
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, i) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="glass-card-hover p-6 flex flex-col group"
    >
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-xl overflow-hidden flex flex-col border border-border shadow-sm hover:shadow-lg transition-shadow"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-mono font-bold">
            0{i + 1}
          </div>
        </div>

        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          <ExternalLink
            size={18}
            className="absolute top-3 right-3 text-white opacity-70 group-hover:opacity-100 transition-opacity"
          />
        </div>

        <div className="p-5 flex flex-col flex-1 bg-card">
          <h3 className="font-semibold text-lg mb-2">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono text-primary/80 bg-primary/10 px-2.5 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          <ExternalLink
            size={18}
            className="text-muted-foreground group-hover:text-primary transition-colors"
          />
        </div>

        <h3 className="font-semibold text-lg mb-3">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-primary/80 bg-primary/10 px-2.5 py-1 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.a>
    </motion.div>
  ))}
</div>
