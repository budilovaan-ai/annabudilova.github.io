"use client"

import { useState, useEffect } from "react"
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectImage {
  src: string
  caption: string
}

export function WipSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

  // Cesty k 5 obrázkům přímo v public složce
  const skincareImages: ProjectImage[] = [
    {
      src: "/snimek_1.png",
      caption: "Flask Web Interface & Product Search"
    },
    {
      src: "/snimek_2.png",
      caption: "Expert System Ingredient Mapping"
    },
    {
      src: "/snimek_3.png",
      caption: "Terminal Analysis Tool Output"
    },
    {
      src: "/snimek_4.png",
      caption: "Database Management & Utilities"
    },
    {
      src: "/snimek_5.png",
      caption: "Additional System View"
    }
  ]

  const handleNext = () => {
    if (currentImageIndex !== null && skincareImages.length > 0) {
      setCurrentImageIndex((prev) => (prev! + 1) % skincareImages.length)
    }
  }

  const handlePrev = () => {
    if (currentImageIndex !== null && skincareImages.length > 0) {
      setCurrentImageIndex((prev) => (prev! - 1 + skincareImages.length) % skincareImages.length)
    }
  }

  // Ovládání šipkami na klávesnici a Escape pro zavření
  useEffect(() => {
    if (currentImageIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "ArrowLeft") {
        handlePrev()
      } else if (e.key === "Escape") {
        setCurrentImageIndex(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentImageIndex, skincareImages.length])

  return (
    <section className="py-20 px-4 bg-secondary/10 border-t border-border/30" id="wip">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500"></span>
            </span>
            Work in Progress
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            What I&apos;m actively coding, scraping, and building right now.
          </p>
        </div>

        {/* Změněno z grid-cols-2 na grid-cols-1, takže karty jsou pod sebou */}
        <div className="grid grid-cols-1 gap-12">
          {/* První projekt: Skincare Scraper */}
          <div className="p-6 md:p-8 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-xl text-foreground">Skincare Price Tracker & Scraper</h4>
                <span className="text-xs px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-medium">Data Pipeline</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Long-term Python scraping pipeline running continuously for over 6 months. It automatically collects pricing, availability, and discount histories for skincare products from Alza and Notino. The final dataset is being prepared for time-series forecasting, interactive data visualizations and Machine Learning applications (such as price anomaly detection).
              </p>
              
              {/* Ukázka reálného Playwright kódu */}
              <div className="w-full bg-background/80 rounded-lg border border-border p-4 mb-6 overflow-x-auto font-mono text-xs text-muted-foreground">
                <pre><code>{`from playwright.sync_api import sync_playwright
import pandas as pd
import datetime

with sync_playwright() as p:
    browser = p.chromium.connect_over_cdp("http://localhost:9222")
    page = browser.contexts[0].new_page()
    page.goto("https://www.notino.cz/pletova-sera/")
    
    brands = page.locator('[data-testid="product-tile-brand"]').all_text_contents()
    prices = page.locator('[data-testid="price-component"]').all_text_contents()
`}</code></pre>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <a 
                  href="https://github.com/budilovaan-ai/Skincare_Price_Tracker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline inline-flex items-center gap-1 font-medium"
                >
                  View full source code on GitHub →
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">Python</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">Playwright / BeautifulSoup</span>
              </div>
            </div>
          </div>

          {/* Druhý projekt: Skincare Database & Expert System + Galerie */}
          <div className="p-6 md:p-8 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-xl text-foreground">Skincare Database & Expert System</h4>
                <span className="text-xs px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-medium">Full-Stack</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Full-stack web application powered by Flask and SQLite with a relational schema. It features an automated INCIDecoder scraping pipeline, expert dermatological logic mapping ingredients to skin concerns, and comprehensive CLI analytical tools.
              </p>
              
              {/* Ukázka expertní logiky */}
              <div className="w-full bg-background/80 rounded-lg border border-border p-4 mb-6 overflow-x-auto font-mono text-xs text-muted-foreground">
                <pre><code>{`SKINCARE_KNOWLEDGE = {
    "Anti-Aging (Fine lines)": [
        "Retinol", "Retinal", "Bakuchiol", "Ascorbic Acid",
        "Acetyl Hexapeptide-8", "Copper Tripeptide-1"
    ],
    "Acné and clogged pores": [
        "Salicylic Acid", "Niacinamide", "Azelaic Acid"
    ],
    "Skin barrier (Nourishing)": [
        "Ceramide NP", "Cholesterol", "Squalane", "Ectoin"
    ]
}

def update_concerns(cur, keyword, concern_id):
    cur.execute("SELECT ingredient_id FROM ingredients WHERE ingred_name LIKE ?", (f"%{keyword}%",))
    for (ing_id,) in cur.fetchall():
        cur.execute("INSERT OR IGNORE INTO ingredient_to_concern (ingredient_id, concern_id) VALUES (?, ?)", (ing_id, concern_id))
`}</code></pre>
              </div>

              {/* Náhledové miniatury obrázků v kartě (rozložené do mřížky) */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {skincareImages.map((img, i) => (
                  <div 
                    key={i} 
                    className="relative h-28 rounded-lg overflow-hidden border border-border group cursor-pointer"
                    onClick={() => setCurrentImageIndex(i)}
                  >
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-foreground text-xs font-medium border border-border px-3 py-1 rounded-full backdrop-blur-sm bg-card/50">
                        View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4">
                <a 
                  href="https://github.com/budilovaan-ai/Website_skincare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline inline-flex items-center gap-1 font-medium"
                >
                  View full source code on GitHub →
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">Python / Flask</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">Expert Logic</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Gallery Modal */}
      {currentImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setCurrentImageIndex(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center">
            {/* Close button */}
            <Button 
              variant="secondary" 
              size="icon" 
              className="absolute top-0 right-0 z-[60] rounded-full bg-primary text-primary-foreground shadow-xl hover:scale-110 transition-transform border-2 border-background"
              onClick={(e) => {
                e.stopPropagation()
                setCurrentImageIndex(null)
              }}
            >
              <X className="w-6 h-6 stroke-[3px]" />
            </Button>

            {/* Left arrow (Previous) */}
            {skincareImages.length > 1 && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-[60] rounded-full bg-card/80 text-foreground shadow-lg hover:bg-card"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrev()
                }}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            )}

            {/* Right arrow (Next) */}
            {skincareImages.length > 1 && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-[60] rounded-full bg-card/80 text-foreground shadow-lg hover:bg-card"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            )}
            
            {/* Image */}
            <div 
              className="relative w-full h-[80vh] rounded-xl overflow-hidden border border-border bg-card/50 shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={skincareImages[currentImageIndex].src}
                alt={skincareImages[currentImageIndex].caption}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Caption and counter */}
            <div className="mt-4 text-center" onClick={(e) => e.stopPropagation()}>
              <p className="text-sm font-medium text-foreground">
                {skincareImages[currentImageIndex].caption}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {currentImageIndex + 1} / {skincareImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
