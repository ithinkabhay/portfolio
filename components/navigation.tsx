"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-primary font-mono"
        >
          {"<AS />"}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
              >
                <span className="text-primary">0{index + 1}.</span> {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/resume.pdf"
              className="border border-primary text-primary px-4 py-2 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
            >
              Resume
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <ul className="flex flex-col items-center py-8 gap-6">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                >
                  <span className="text-primary">0{index + 1}.</span> {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume.pdf"
                className="border border-primary text-primary px-4 py-2 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
