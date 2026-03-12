"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
            Open to opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight text-balance">
          Anna Budilová
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-medium mb-6">
          Data Analytics Student 
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Studentka oboru Data Analytics na VŠE s praxí na pozici Junior analytik dat v České spořitelně. 
          Zaměřuji se na explorativní analýzu dat, SQL, Machine Learning a NLP (textovou analytiku).
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium"
            asChild
          >
            <a href="/cv_2026.pdf" download="cv_2026.pdf">
              <Download className="w-5 h-5 mr-2" />
              Stáhnout životopis (PDF)
            </a>
          </Button>
          
<div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 border-border text-foreground hover:bg-secondary hover:text-primary hover:border-primary/50 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/anna-budilov%C3%A1-35a817252/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 border-border text-foreground hover:bg-secondary hover:text-primary hover:border-primary/50 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/budilovaan-ai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
