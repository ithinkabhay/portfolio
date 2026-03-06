"use client";

import { useState } from "react";
import { Send, Mail, Linkedin, Github, MapPin } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   // Simulate form submission
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   setIsSubmitting(false);
  //   setSubmitted(true);
  //   setFormData({ name: "", email: "", message: "" });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_j0fuyyd",     // your service ID
      "template_jcmg0vc",    // your template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "BxlvBqpOnmsLHOlM7"         // your public key
    );

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("Email failed:", error);
  }

  setIsSubmitting(false);
};

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">04.</span>
            Get In Touch
          </h2>
        </div>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
          I'm currently open to new opportunities and interesting projects. 
          Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            
            <div className="space-y-4">
              <Link
                href="mailto:abhayrajsingh.dvp@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded bg-secondary group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">abhayrajsingh.dvp@gmail.com</span>
              </Link>
              
              <Link
                href="https://www.linkedin.com/in/abhaysinghp01/"
                target="_blank"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded bg-secondary group-hover:bg-primary/10 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="text-sm">linkedin.com/in/abhaysinghp01</span>
              </Link>
              
              <Link
                href="https://github.com/ithinkabhay"
                target="_blank"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded bg-secondary group-hover:bg-primary/10 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <span className="text-sm">github.com/ithinkabhay</span>
              </Link>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded bg-secondary">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h4>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                    placeholder="Your name"
                    suppressHydrationWarning
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                    placeholder="your.email@example.com"
                    suppressHydrationWarning
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground resize-none transition-colors"
                    placeholder="Your message..."
                    suppressHydrationWarning
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  suppressHydrationWarning
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
