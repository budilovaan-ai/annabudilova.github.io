export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Rychlé odkazy
          </h3>
          <div className="flex gap-6">
            <a 
              href="#tech-stack"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Tech Stack
            </a>
            <a 
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projekty
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Anna Budilová. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
}
