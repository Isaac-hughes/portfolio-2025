"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const testimonials: Testimonial[] = [
  {
    author: "Colin Davies",
    role: "Lead FE Developer",
    company: "InHealth Intelligence",
    content:
      "Isaac worked as a React developer on my team for over 18 months. His technical ability and strong work ethic made him an invaluable member of the software development team. He is curious, quick to learn and always pushing to learn more. He cares about code quality and has a keen eye for improving existing code. As well as his technical strengths, Isaac also has excellent interpersonal skills and is comfortable working across teams and with people at all levels within an organisation. It has been a pleasure to work with Isaac and I’m confident he would be an asset to any software team.",
    image: "/testimonials/colin.jpeg",
  },
  {
    author: "Michal Klos",
    role: "Technical Lead",
    company: "InHealth Intelligence",
    content:
      "I’ve had the pleasure of working with Isaac, and I can confidently say he is an outstanding developer with a keen eye for detail and a passion for creating high-performance web applications. Isaac consistently delivers clean, maintainable, and scalable code. Whether it's implementing complex UI/UX features, or integrating with backend APIs, he approaches every task with precision and creativity. He is also up-to-date with the latest best practices and trends in React development, ensuring that projects are not only functional but also modern and future-proof.",
    image: "/testimonials/michal.jpeg",
  },
  {
    author: "Beck Davies",
    role: "Lead UI/UX Designer",
    company: "InHealth Intelligence",
    content:
      "I worked with Isaac at InHealth Intelligence and we worked on several separate UI's together. Isaac demonstrated his talents immediately and continued to make a positive impact throughout his employment. Isaac earned himself the reputation of being a person who can generate ideas, contribute to a product and then deliver - he's a real asset for any company who needs to ship software. He's got so much potential. I hope I get the chance to work with him again in the future.",
    image: "/testimonials/beck-davies.jpeg",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, isInView } = useIntersectionObserver();

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            What others say about working with me
          </p>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`relative max-w-4xl mx-auto animate-when-visible ${
            isInView ? "is-visible" : ""
          }`}
        >
          {/* Testimonial Card */}
          <div className="relative p-8 rounded-xl border border-accent-primary/10 bg-accent-muted/5">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {testimonials[currentIndex].image && (
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-full -rotate-6" />
                  <div className="relative h-full rounded-full overflow-hidden border-2 border-accent-primary/20">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              <div className="flex-1 text-center md:text-left">
                <p className="text-lg text-foreground/80 italic mb-6">
                  &quot;{testimonials[currentIndex].content} &quot;
                </p>
                <div>
                  <h4 className="text-xl font-bold text-accent-primary">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-foreground/60">
                    {testimonials[currentIndex].role} at{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-background border border-accent-primary/20 text-foreground/60 hover:text-accent-primary transition-colors"
                disabled={isAnimating}
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-background border border-accent-primary/20 text-foreground/60 hover:text-accent-primary transition-colors"
                disabled={isAnimating}
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 rounded-xl -z-10" />
            <div className="absolute -inset-[1px] bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-20" />
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-6 bg-accent-primary"
                    : "bg-accent-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
