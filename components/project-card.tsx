"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ExternalLink, AlertCircle, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface ProjectImage {
  src: string
  caption: string
}

interface ProjectCardProps {
  title: string
  tags: string[]
  description: string
  teamNote?: string
  notice?: string
  images: ProjectImage[]
  buttonText?: string
  buttonHref?: string
  links?: { text: string; href: string }[]
}

export function ProjectCard({
  title,
  tags,
  description,
  teamNote,
  notice,
  images,
  buttonText,
  buttonHref,
  links
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentImageIndex !== null && images.length > 0) {
      setCurrentImageIndex((prev) => (prev! + 1) % images.length)
    }
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentImageIndex !== null && images.length > 0) {
      setCurrentImageIndex((prev) => (prev! - 1 + images.length) % images.length)
    }
  }

  return (
    <>
      <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge 
                key={tag}
                variant="outline"
                className="bg-primary/10 text-primary border-primary/30 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            {title}
          </h3>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          {teamNote && (
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-primary">
                <span className="font-semibold">Team role: </span>
                {teamNote}
              </p>
            </div>
          )}

          {images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((image, i) => (
                <div key={i} className="flex flex-col">
                  <div 
                    className="relative h-48 md:h-64 rounded-lg overflow-hidden border border-border group cursor-pointer"
                    onClick={() => setCurrentImageIndex(i)}
                  >
                    {image.src ? (
                      <Image
                        src={image.src}
                        alt={image.caption}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-secondary/80">
                        <span className="text-xs text-muted-foreground text-center px-2">
                          {image.caption}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-foreground text-sm font-medium border border-border px-4 py-2 rounded-full backdrop-blur-sm bg-card/50">
                        View Gallery
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground text-center">
                    {image.caption}
                  </p>
                </div>
              ))}
            </div>
          )}

          {notice && (
            <div className="flex items-start gap-3 bg-secondary/50 p-4 rounded-lg border border-border">
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                {notice}
              </p>
            </div>
          )}
          
          <div className="pt-2 flex flex-wrap gap-3">
            {links && links.length > 0 ? (
              links.map((link, idx) => (
                <Button 
                  key={idx}
                  asChild
                  variant={idx === 0 ? "default" : "outline"}
                  className={idx === 0 ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "border-border text-foreground hover:bg-secondary hover:text-primary"}
                >
                  <a 
                    href={link.href} 
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.text}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              ))
            ) : (
              buttonText && buttonHref && (
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a 
                    href={buttonHref} 
                    target={buttonHref.startsWith('http') ? '_blank' : undefined}
                    rel={buttonHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {buttonText}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              )
            )}
          </div>
        </CardContent>
      </Card>

      {/* Galerie Modal */}
      {currentImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setCurrentImageIndex(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center">
            {/* Zavírací tlačítko */}
            <Button 
              variant="secondary" 
              size="icon" 
              className="absolute top-0 right-0 z-[60] rounded-full bg-primary text-primary-foreground shadow-xl hover:scale-110 transition-transform border-2 border-background"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(null);
              }}
            >
              <X className="w-6 h-6 stroke-[3px]" />
            </Button>

            {/* Šipka vlevo (Předchozí) */}
            {images.length > 1 && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-[60] rounded-full bg-card/80 text-foreground shadow-lg hover:bg-card"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            )}

            {/* Šipka vpravo (Další) */}
            {images.length > 1 && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-[60] rounded-full bg-card/80 text-foreground shadow-lg hover:bg-card"
                onClick={handleNext}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            )}
            
            {/* Obrázek */}
            <div className="relative w-full h-[80vh] rounded-xl overflow-hidden border border-border bg-card/50 shadow-2xl flex items-center justify-center">
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].caption}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Popisek a počítadlo obrázků */}
            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-foreground">
                {images[currentImageIndex].caption}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {currentImageIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
