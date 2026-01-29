"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <div>
            <p
              className={`uppercase tracking-[0.4em] text-xs text-muted-foreground mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Contact
            </p>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-[1.1] mb-8 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              LET&apos;S BUILD<br />SOMETHING
            </h2>
            <p
              className={`text-sm text-muted-foreground leading-relaxed max-w-md transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Currently open to new opportunities. Whether you need a scalable backend 
              system or want to discuss a potential collaboration, I&apos;m interested in hearing from you.
            </p>
          </div>

          {/* Right side - Links */}
          <div
            className={`flex flex-col justify-end transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="space-y-0">
              <a
                href="mailto:m.murtuza.h@gmail.com"
                className="group flex items-center justify-between py-6 border-t border-border hover:bg-secondary/50 transition-colors px-4 -mx-4"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-1">Email</span>
                  <span className="text-lg">m.murtuza.h@gmail.com</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              
              <a
                href="https://github.com/mmurtuza"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 border-t border-border hover:bg-secondary/50 transition-colors px-4 -mx-4"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-1">GitHub</span>
                  <span className="text-lg">github.com/mmurtuza</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              
              <a
                href="https://linkedin.com/in/mmurtuzah004"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 border-t border-border hover:bg-secondary/50 transition-colors px-4 -mx-4"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-1">LinkedIn</span>
                  <span className="text-lg">linkedin.com/in/mmurtuzah004</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              
              <a
                href="https://murtuza.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 border-t border-b border-border hover:bg-secondary/50 transition-colors px-4 -mx-4"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-1">Website</span>
                  <span className="text-lg">murtuza.dev</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
