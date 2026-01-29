"use client"

import { useEffect, useRef, useState } from "react"
import {
  SiGo,
  SiLaravel,
  SiDocker,
  SiLinux,
  SiPhp,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiApachekafka,
  SiGit
} from "react-icons/si"
import { Boxes } from "lucide-react"
import { IconType } from "react-icons"
import { LucideIcon } from "lucide-react"

const stackItems: { name: string; level: string; category: string; icon: IconType | LucideIcon }[] = [
  { name: "GO LANG", level: "8.0", category: "LANGUAGE", icon: SiGo },
  { name: "LARAVEL", level: "9.0", category: "FRAMEWORK", icon: SiLaravel },
  { name: "DOCKER", level: "7.0", category: "DEVOPS", icon: SiDocker },
  { name: "LINUX", level: "7.0", category: "SYSTEMS", icon: SiLinux },
  { name: "PHP", level: "9.0", category: "LANGUAGE", icon: SiPhp },
  { name: "JAVASCRIPT", level: "9.0", category: "LANGUAGE", icon: SiJavascript },
  { name: "POSTGRESQL", level: "7.0", category: "DATABASE", icon: SiPostgresql },
  { name: "REACT", level: "8.0", category: "FRONTEND", icon: SiReact },
  { name: "NODE.JS", level: "9.0", category: "RUNTIME", icon: SiNodedotjs },
  { name: "APACHE KAFKA", level: "7.5", category: "KAFKA", icon: SiApachekafka },
  { name: "gRPC", level: "7.0", category: "TOOLS", icon: Boxes },
  { name: "GIT", level: "9.0", category: "VERSION CTRL", icon: SiGit },
]

export function StackSection() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} id="stack" className="py-32 border-t border-border bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p
              className={`uppercase tracking-[0.4em] text-xs text-muted-foreground mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              The Stack
            </p>
            <h2
              className={`text-4xl md:text-5xl font-light tracking-[-0.02em] transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              COMPONENT SPECS
            </h2>
          </div>
          <p
            className={`text-xs uppercase tracking-[0.2em] text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            Proficiency Index / 10.0
          </p>
        </div>

        {/* Technical Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-border">
          {stackItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.name}
                className={`bg-background p-6 transition-all duration-500 hover:bg-secondary group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: `${200 + index * 50}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {item.category}
                    </span>
                    <IconComponent className="w-7 h-7 text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-medium tracking-[0.1em] mb-auto group-hover:text-foreground transition-colors">
                    {item.name}
                  </h3>
                  <div className="mt-6 flex items-end justify-between">
                    <span className="text-2xl font-light tracking-tight">{item.level}</span>
                    <div className="w-16 h-[2px] bg-border overflow-hidden">
                      <div
                        className="h-full bg-foreground transition-all duration-1000"
                        style={{
                          width: isVisible ? `${(parseFloat(item.level) / 10) * 100}%` : '0%',
                          transitionDelay: `${400 + index * 50}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
