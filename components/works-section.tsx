"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    number: "01",
    title: "SKYTICKET PLATFORM",
    tag: "HIGH-LOAD BACKEND",
    description: "Japan's largest online booking platform. Implemented major features including points systems and membership services handling millions of daily transactions.",
    technologies: ["PHP", "Laravel", "MySQL", "Redis", "Docker"],
    period: "2024 — Present",
  },
  {
    number: "02",
    title: "FINTECH ARCHITECTURE",
    tag: "SECURITY & MICROSERVICES",
    description: "Backend systems for a Fintech application using Go and Laravel. Enhanced scalability and performance with secure transaction processing and microservice architecture.",
    technologies: ["Go Lang", "Laravel", "PostgreSQL", "Docker", "Linux"],
    period: "2022 — 2023",
  },
  {
    number: "03",
    title: "REST API ENGINE",
    tag: "GO FIBER CONCURRENCY",
    description: "High-performance RESTful API backend leveraging Go's concurrency features and Fiber's lightweight architecture for maximum throughput and minimal latency.",
    technologies: ["Go Lang", "Go-Fiber", "PostgreSQL", "JWT", "Docker"],
    period: "Personal Project",
  },
]

export function WorksSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="works" className="py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p
            className={`uppercase tracking-[0.4em] text-xs text-muted-foreground mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Selected Works
          </p>
          <h2
            className={`text-4xl md:text-5xl font-light tracking-[-0.02em] transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            PROJECT ARCHIVE
          </h2>
        </div>

        {/* Project Cards */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={project.number}
              className={`group border-t border-border py-12 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="text-xs font-mono text-muted-foreground">{project.number}</span>
                </div>

                {/* Title & Tag */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-2 group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-muted-foreground border border-border px-3 py-1">
                    {project.tag}
                  </span>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Period & Arrow */}
                <div className="lg:col-span-2 flex items-start justify-between lg:flex-col lg:items-end gap-4">
                  <span className="text-xs text-muted-foreground font-mono">{project.period}</span>
                  <div className={`w-10 h-10 border border-border flex items-center justify-center transition-all duration-300 ${
                    hoveredIndex === index ? 'bg-foreground' : 'bg-transparent'
                  }`}>
                    <ArrowUpRight className={`w-4 h-4 transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-background' : 'text-foreground'
                    }`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
