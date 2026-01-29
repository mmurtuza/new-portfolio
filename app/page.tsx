"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { StackSection } from "@/components/stack-section"
import { WorksSection } from "@/components/works-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <StackSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
