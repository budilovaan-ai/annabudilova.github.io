export function WipSection() {
  return (
    <section className="py-20 px-4 bg-secondary/10 border-t border-border/30" id="wip">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Skincare Scraper */}
          <div className="p-6 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-lg text-foreground">Skincare Price Tracker & Scraper</h4>
                <span className="text-xs px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-medium">Data Pipeline</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Long-term Python scraping pipeline running continuously for over 6 months. It automatically collects pricing, availability, and discount histories for skincare products from Alza and Notino. The final dataset is being prepared for time-series forecasting, interactive data visualizations and Machine Learning applications (such as price anomaly detection).
              </p>
              
              {/* Ukázka reálného Playwright kódu uvnitř karty */}
              <div className="w-full bg-background/80 rounded-lg border border-border p-3 mb-6 overflow-x-auto font-mono text-xs text-muted-foreground">
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
              {/* GitHub Link pod kódem */}
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

          {/* Skincare Webovka / Databáze */}
          <div className="p-6 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-lg text-foreground">Skincare Database & Expert System</h4>
                <span className="text-xs px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-medium">Full-Stack</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Full-stack web application powered by Flask and SQLite with a relational schema. It features an automated INCIDecoder scraping pipeline, expert dermatological logic mapping ingredients to skin concerns, and comprehensive CLI analytical tools.
              </p>
              
              {/* Ukázka expertní logiky */}
              <div className="w-full bg-background/80 rounded-lg border border-border p-3 mb-6 overflow-x-auto font-mono text-xs text-muted-foreground">
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
            </div>

            <div>
              {/* GitHub Link pod kódem */}
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
          }
