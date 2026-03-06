"use client";

const skills = [
  {
    category: "Backend",
    items: [
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 90 },
      { name: "Spring Security", level: 85 },
      { name: "Hibernate/JPA", level: 88 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Angular", level: 80 },
      { name: "TypeScript", level: 78 },
      { name: "HTML/CSS", level: 75 },
      { name: "Bootstrap" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 70 },
      { name: "Redis", level: 72 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS (EC2, S3, RDS)", level: 85 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 78 },
      { name: "Git", level: 90 },
      { name: "Kafka"},
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            Skills & Technologies
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-l-2 border-primary pl-3">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      {/* <span className="text-xs font-mono text-primary">
                        {skill.level}%
                      </span> */}
                    </div>
                    {/* <div className="h-1.5 bg-secondary rounded-full overflow-hidden"> */}
                      {/* <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      /> */}
                    {/* </div> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          {["Java", "Spring Boot", "Angular", "AWS", "MySQL", "Docker", "REST", "Microservices"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-mono hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
