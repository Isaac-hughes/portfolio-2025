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
    <section
      id="contact"
      className="relative py-20 bg-background text-foreground"
    >
      <div className="absolute top-0 left-0 w-full h-1 animate-gradient" />

      <Container>
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mx-auto animate-when-visible ${
            isInView ? "is-visible" : ""
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-foreground/60">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 
                         focus:outline-none focus:ring-2 focus:ring-accent-primary/50
                         placeholder:text-foreground/40"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 
                         focus:outline-none focus:ring-2 focus:ring-accent-primary/50
                         placeholder:text-foreground/40"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 
                         focus:outline-none focus:ring-2 focus:ring-accent-primary/50
                         placeholder:text-foreground/40 resize-none"
                placeholder="Your message..."
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="min-w-[150px]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-foreground/10">
            <p className="text-center text-foreground/60">
              You can also reach me directly at{" "}
              <a
                href="mailto:isaachughesbusiness@gmail.com"
                className="text-accent-primary hover:underline"
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
