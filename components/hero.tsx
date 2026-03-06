"use client";

import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 lg:px-12">
      <div className="max-w-4xl">
        <p className="text-primary font-mono text-sm mb-4 tracking-wide">
          Hi, I'm
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          Abhay Singh
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 text-balance">
          I build full-stack applications.
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          I'm a full-stack developer specializing in building scalable,
          high-performance web applications. I craft modern user experiences
          with <span className="text-primary">Angular & TypeScript</span> and
          build robust backend systems using{" "}
          <span className="text-primary">Java Spring Boot </span>
          and cloud technologies.
        </p>
        {/* <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          I'm a backend developer specializing in building scalable, high-performance 
          enterprise applications. Currently focused on crafting elegant solutions with{" "}
          <span className="text-primary">Java Spring Boot</span> and cloud technologies.
        </p> */}

        <div className="flex items-center gap-6 mb-12">
          <Link
            href="mailto:abhayrajsingh.dvp@gmail.com"
            className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/ithinkabhay"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abhaysinghp01/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:abhayrajsingh.dvp@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to about section"
        suppressHydrationWarning
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
