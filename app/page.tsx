import { HeroSection } from "@/components/hero-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import { WipSection } from "@/components/wip-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <Footer />
      <WipSection/>
    </main>
  )
}
