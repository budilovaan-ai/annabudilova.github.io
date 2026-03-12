import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "Analýza zneužívání legálních psychoaktivních látek v ČR",
    tags: ["Oracle Cloud", "SQL", "Power BI", "Healthcare Data"],
    description: "Komplexní analýza otevřených zdravotnických dat z NZIP (přes 18 milionů záznamů). Projekt pokrýval celou pipeline od čištění dat přes databázovou architekturu v Oracle Cloud až po identifikaci regionálních anomálií a analýzu spotřeby léčiv.",
    teamNote: "Tento projekt vznikl v rámci tříčlenného týmu. Moje role spočívala primárně v transformaci dat pomocí SQL a návrhu analytických dashboardů.",
    images: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/panel3-4lqkv5w7OLMHeuSQXOToSzn4FKNjQo.png", caption: "Demografický vývoj preskripce." },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pece-OPzV31OXsc6GepIWcoiQN5h5WL6fNf.png", caption: "Alkohol vs. Léky." },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mapa-r1qhbj0iHnP52jk4WcZVwKsbBJfNj5.png", caption: "Konzumace alkoholu dle regionů." },
      { src: "Snímek obrazovky 2026-03-11 194952.png", caption: "Architektura řešení" } 
    ],
    links: [
      { text: "Dashboard", href: "https://app.powerbi.com/view?r=eyJrIjoiYzM2M2IzMTUtYmM1Mi00NDBhLTg5OTMtZDk1ZGIzMWQyZmI2IiwidCI6IjJiNTFhNGIzLTQ0M2YtNDQwNi04Y2E0LTE5MDU2YTc5YTQ0NCIsImMiOjh9" },
      { text: "Analýza problému", href: "/analyza_healthcare.pdf" },
      { text: "Dokumentace řešení", href: "/dokumentace_healthcare.pdf" }
    ],
  },
  {
    id: 2,
    title: "Generování novinových titulků (NLP & LLM)",
    tags: ["Python", "NLP", "Transformers", "Streamlit"],
    description: "Komplexní projekt zaměřený na zpracování přirozeného jazyka (NLP). Cílem byl fine-tuning jazykového modelu pro automatické generování výstižných novinových titulků na základě textu článku. Projekt pokrývá kompletní pipeline od předzpracování textových dat až po deployment interaktivní webové aplikace.",
    teamNote: "Na řešení jsem spolupracovala v pětičlenném týmu. Soustředila jsem se především na přípravu textových dat.",
    notice: "Interaktivní aplikace je nasazena v prostředí Streamlit. Pro přístup použijte heslo: TA-2.",
    images: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bqUpBTurPsx7k3JH3HcUobwcZlqzV3.png", caption: "Uživatelské rozhraní Streamlit aplikace" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pU3Ho6dQjSnqk5shsUwyKqSgUUiATw.png", caption: "Ukázka vygenerovaných titulků" }
    ],
    links: [
      { text: "Otevřít Live Demo (Streamlit)", href: "https://ta2-headline-generation.streamlit.app/?fbclid=IwY2xjawQbeqBleHRuA2FlbQIxMABicmlkETBKc0tJOUNSdGhNQXZnYkMyc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhahHLEl26_UFBg4fAYqB4tQn3DFZDUwSYqwqR1ZC468mfHqZMuae6WOH-yL_aem_tK84JdhVQSs5Nn20jqAQlw" }
    ]
  },
  {
    id: 3,
    title: "Prediktivní modelování a byznysová optimalizace",
    tags: ["Python", "XGBoost", "Machine Learning", "Business Analytics"],
    description: "Machine Learning projekt zaměřený na predikci výsledků fotbalových zápasů (Over/Under 2.5 gólů). Cílem bylo vytvořit prediktivní model (XGBoost / Random Forest) a kvantifikovat jeho byznysový přínos. Redukce features podle vlivu na přesnost modelu vedla k nárůstu očekávaného ročního zisku o 37 %.",
    teamNote: "Projekt byl realizován týmově. Mojí hlavní zodpovědností byl výběr a testování features, které měly nejvyšší dopad na zvýšení přesnosti modelu.",
    images: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VbqN6aVIkihKs1xW3jBAZYM0QvgeVC.png", caption: "Vliv accuracy na očekávaný zisk (Matplotlib)" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zSbtOstZhUI6E8T6ZB8S9zm8ti2uPi.png", caption: "Analýza" },
      { src: "features.png", caption: "Důležitost features" },
      { src: "goly.png", caption: "Lineární regrese: Vztah mezi střelami na branku a počtem gólů" } 
    ],
    links: [
      { text: "Zobrazit repozitář (GitHub)", href: "https://github.com/budilovaan-ai/football-betting-ml-optimization" }
    ]
  }
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Případové studie a analýzy
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Vybrané projekty demonstrující mé analytické a technické dovednosti
          </p>
        </div>
        
        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
