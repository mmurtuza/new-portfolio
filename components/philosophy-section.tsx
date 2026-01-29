"use client"

import { useEffect, useRef, useState } from "react"

export function PhilosophySection() {
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
    <section ref={sectionRef} id="philosophy" className="py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left side - Text */}
          <div>
            <p
              className={`uppercase tracking-[0.4em] text-xs text-muted-foreground mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              Philosophy
            </p>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-[1.1] mb-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              PRECISION &<br />PERFORMANCE
            </h2>
            <div
              className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                I architect backend systems that prioritize stability and speed. Every line of code
                is written with intention, every database query optimized for performance.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                From high-load booking platforms handling millions of requests to microfinance
                systems powering financial inclusion, I build infrastructure that scales.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                My approach combines the rigor of aerospace engineering with the creativity
                of software development, resulting in systems that are both robust and elegant.
              </p>
            </div>
          </div>

          {/* Right side - Technical Visualization */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <div className="relative aspect-square border border-border p-8">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Central element */}
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-light tracking-tighter mb-4">99.9%</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Uptime Standard</div>
                </div>
              </div>

              {/* Corner markers */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-border" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-border" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-border" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
