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
            What I'm actively coding, scraping, and building right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Skincare Scraper s místem pro kód */}
          <div className="p-6 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-lg text-foreground">Skincare Price Tracker & Scraper</h4>
                <span className="text-xs px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-medium">Data Pipeline</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Long-term Python scraping pipeline running continuously for over 6 months. It automatically collects pricing, availability, and discount histories for skincare products from Alza and Notino. The final dataset is being prepared for time-series forecasting, interactive data visualizations and Machine Learning applications (such as price anomaly detection).
              </p>
              
              {/* ZDE PŘIJDE FOTKA TVÉHO KÓDU */}
              <div className="w-full h-40 bg-secondary/50 rounded-lg border border-border mb-6 flex items-center justify-center overflow-hidden relative">
                 {/* Až budeš mít screen kódu, dej sem tag <img src="cesta-k-fotce.jpg" alt="code" className="object-cover w-full h-full" /> a smaž ten span pod tím */}
                 <span className="text-xs text-muted-foreground font-mono">[ Space for your Python code snippet ]</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">Python</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">BeautifulSoup / Playwright</span>
            </div>
          </div>

          {/* Skincare Webovka s místem pro screeny */}
          <div className="p-6 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-lg text-foreground">Skincare Database Web App</h4>
                <span className="text-xs px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-medium">Full-Stack</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Developing an interactive web application designed to help users navigate complex skincare formulations. Users can filter products by skin concerns or specific active ingredients, with everything cross-referenced in a custom database.
              </p>
              
              {/* ZDE PŘIJDE FOTKA TVÉ WEBOVKY */}
              <div className="w-full h-40 bg-secondary/50 rounded-lg border border-border mb-6 flex items-center justify-center overflow-hidden relative">
                 {/* Až budeš mít screen webu, dej sem tag <img src="cesta-k-fotce.jpg" alt="web UI" className="object-cover w-full h-full" /> a smaž ten span pod tím */}
                 <span className="text-xs text-muted-foreground font-mono">[ Space for your App UI screenshot ]</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">Next.js / React</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">Database Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
