import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    title: "Learning Management System",
    description:
      "A comprehensive LMS platform built for educational institutions. Features include course management, student enrollment, progress tracking, quiz systems, and video streaming integration. Handles 10,000+ concurrent users with optimized database queries.",
    tech: ["Java", "Spring Boot", "Angular", "MySQL", "AWS S3", "Redis"],
    github: "#",
    external: "#",
  },
  {
    title: "E-Commerce Backend Platform",
    description:
      "Scalable microservices-based e-commerce backend supporting high-traffic retail operations. Includes inventory management, payment processing integration (Stripe), order fulfillment workflows, and real-time analytics dashboard.",
    tech: ["Java", "Spring Cloud", "MySQL", "RabbitMQ", "Docker", "Kubernetes"],
    github: "#",
    external: "#",
  },
  {
    title: "Appointment Scheduling System",
    description:
      "Enterprise appointment management system for healthcare providers. Features include multi-location scheduling, automated reminders, calendar sync, patient portal, and HIPAA-compliant data handling.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Angular", "AWS", "Twilio"],
    github: "#",
    external: "#",
  },
];

const otherProjects = [
  {
    title: "REST API Template",
    description: "Production-ready Spring Boot starter template with authentication, logging, and monitoring built-in.",
    tech: ["Java", "Spring Boot", "JWT"],
  },
  {
    title: "Database Migration Tool",
    description: "CLI tool for seamless database schema migrations with rollback support.",
    tech: ["Java", "Flyway", "MySQL"],
  },
  {
    title: "Cache Manager Library",
    description: "Lightweight Redis caching library with automatic cache invalidation strategies.",
    tech: ["Java", "Redis", "Spring"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Featured Projects
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:col-start-6 md:order-2" : ""
                }`}
              >
                {/* <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Folder className="w-16 h-16 text-primary/30" />
                  </div>
                </div> */}
              </div>

              <div
                className={`md:col-span-6 md:row-start-1 ${
                  index % 2 === 1 ? "md:col-start-1" : "md:col-start-6"
                } relative z-10`}
              >
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="bg-card p-6 rounded-lg shadow-lg border border-border mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 mb-4 font-mono text-xs text-muted-foreground ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                {/* <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  <Link
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={project.external}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link> */}
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-foreground text-center mt-24 mb-8">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
