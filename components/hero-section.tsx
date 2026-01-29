"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const MacBookVideo = dynamic(
  () => import("@/components/macbook-video").then((mod) => mod.MacBookVideo),
  { ssr: false }
)

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <MacBookVideo />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <p
            className={`text-muted-foreground uppercase tracking-[0.4em] text-xs mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Senior Software Engineer
          </p>

          <h1
            className={`text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[-0.02em] leading-none mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <span className="block">MD MURTUZA</span>
            <span className="block">HUSSAIN</span>
          </h1>

          <div
            className={`w-16 h-[1px] bg-border mb-8 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
          />

          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs mb-8">
              Engineered for Scalability
            </p>

            <a
              href="/resume.pdf"
              download="MD_MURTUZA_HUSSAIN_RESUME.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-colors duration-300 text-sm tracking-widest uppercase"
            >
              <span>Download Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 z-10 ${isVisible ? "opacity-100" : "opacity-0"
        }`}>
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <div className="w-[1px] h-12 bg-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
