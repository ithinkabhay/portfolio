import { Code2, Server, Cloud } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate full-stack developer with expertise in building scalable,
              enterprise-grade web applications. My journey in software development started
              with curiosity about how modern web systems work end-to-end, which led me to
              work across both frontend and backend technologies.
            </p>

            <p>
              Over the years, I've worked on diverse projects such as learning management
              systems, job portals, and e-commerce platforms. I build modern user
              interfaces using <strong>Angular and TypeScript</strong> and develop robust
              backend services with <strong>Java Spring Boot</strong>, focusing on clean,
              maintainable architecture.
            </p>

            <p>
              My approach combines clean code principles with practical solutions that
              deliver real business value. I'm particularly interested in scalable system
              design, RESTful APIs, microservices architecture, and cloud-ready
              applications.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
              <div className="p-2 rounded bg-primary/10">
                <Server className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Full-Stack Engineering</h3>
                <p className="text-sm text-muted-foreground">
                  Developing responsive Angular applications and robust Spring Boot microservices
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
              <div className="p-2 rounded bg-primary/10">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, testable code
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
              <div className="p-2 rounded bg-primary/10">
                <Cloud className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Cloud Native</h3>
                <p className="text-sm text-muted-foreground">
                  Building for AWS and cloud platforms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
