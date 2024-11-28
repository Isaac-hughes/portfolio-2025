"use client";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { ref, isInView } = useIntersectionObserver();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement form submission logic
    // This could be an API route, Email.js, or other service

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="relative py-20 text-foreground">
      <Container>
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mx-auto animate-when-visible ${
            isInView ? "is-visible" : ""
          }`}
        >
          <div className="relative p-8 rounded-xl border border-accent-primary/10 bg-accent-muted/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-foreground/80"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-accent-primary/20 
                             focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-transparent
                             placeholder:text-foreground/40 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-foreground/80"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-accent-primary/20 
                             focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-transparent
                             placeholder:text-foreground/40 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-accent-primary/20 
                           focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-transparent
                           placeholder:text-foreground/40 transition-all duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="min-w-[150px] bg-yellow-600/90 hover:bg-yellow-500/90 text-black font-mono uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </Button>
              </div>
            </form>

            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 rounded-xl -z-10" />
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/60">
              Prefer email?{" "}
              <a
                href="mailto:isaachughesbusiness@gmail.com"
                className="text-accent-primary hover:text-accent-secondary transition-colors font-medium"
              >
                isaachughesbusiness@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
