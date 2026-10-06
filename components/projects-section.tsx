import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "Football Match Outcome Prediction",
    tags: ["Python", "XGBoost", "Machine Learning", "Business Analytics"],
    description: "A machine learning project focused on predicting football match outcomes (Over/Under 2.5 goals). The goal was to build a predictive model (XGBoost / Random Forest) and quantify its business impact. Feature reduction based on prediction accuracy led to a 37% increase in expected annual profit.",
    teamNote: "Realized as a team project. My main responsibilities included exploratory data analysis, model training, feature selection, and testing features that had the highest impact on improving model accuracy.",
    images: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VbqN6aVIkihKs1xW3jBAZYM0QvgeVC.png", caption: "Vliv accuracy na očekávaný zisk (Matplotlib)" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zSbtOstZhUI6E8T6ZB8S9zm8ti2uPi.png", caption: "Analýza" },
      { src: "features.png", caption: "Důležitost features" },
      { src: "goly.png", caption: "Linear Regression: Relationship between shots on target and goals scored" } 
    ],
    links: [
      { text: "View Repository (GitHub)", href: "https://github.com/budilovaan-ai/football-betting-ml-optimization" }
    ],
  },
  {
    id: 2,
    title: "News Headline Generation (NLP & LLMs)",
    tags: ["Python", "NLP", "Transformers", "Streamlit"],
    description: "A comprehensive Natural Language Processing (NLP) project. The objective was fine-tuning a language model to automatically generate concise news headlines based on article text. The project covers the complete pipeline from text data preprocessing to deploying an interactive web application.",
    teamNote: "Collaborated in a 5-member team. I primarily focused on exploratory data analysis, text data preparation (embeddings, tokenization, seq2seq), and baseline model training.",
    images: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bqUpBTurPsx7k3JH3HcUobwcZlqzV3.png", caption: "Uživatelské rozhraní Streamlit aplikace" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pU3Ho6dQjSnqk5shsUwyKqSgUUiATw.png", caption: "Ukázka vygenerovaných titulků" }
    ],
    links: [
      { text: "Open Live Demo (PASSWORD: TA-2)", href: "https://ta2-headline-generation.streamlit.app/?fbclid=IwY2xjawQbeqBleHRuA2FlbQIxMABicmlkETBKc0tJOUNSdGhNQXZnYkMyc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhahHLEl26_UFBg4fAYqB4tQn3DFZDUwSYqwqR1ZC468mfHqZMuae6WOH-yL_aem_tK84JdhVQSs5Nn20jqAQlw" }
    ]
  },
  {
    id: 3,
    title: "Analysis of Legal Psychoactive Substance Abuse in the Czech Republic",
    tags: ["Oracle Cloud", "SQL", "Power BI", "Healthcare Data"],
    description: "A comprehensive analysis of open healthcare data from NZIP (over 18 million records). The project covered the entire pipeline—from data cleaning and database architecture in Oracle Cloud to identifying regional anomalies and analyzing medication consumption patterns.",
    teamNote: "Created within a 3-member team. My role primarily involved data transformation using SQL and designing analytical dashboards.",
    images: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/panel3-4lqkv5w7OLMHeuSQXOToSzn4FKNjQo.png", caption: "Demografický vývoj preskripce." },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pece-OPzV31OXsc6GepIWcoiQN5h5WL6fNf.png", caption: "Alkohol vs. Léky." },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mapa-r1qhbj0iHnP52jk4WcZVwKsbBJfNj5.png", caption: "Konzumace alkoholu dle regionů." },
      { src: "Snímek obrazovky 2026-03-11 194952.png", caption: "Architektura řešení" } 
    ],
    links: [
      { text: "Dashboard", href: "https://app.powerbi.com/view?r=eyJrIjoiYzM2M2IzMTUtYmM1Mi00NDBhLTg5OTMtZDk1ZGIzMWQyZmI2IiwidCI6IjJiNTFhNGIzLTQ0M2YtNDQwNi04Y2E0LTE5MDU2YTc5YTQ0NCIsImMiOjh9" },
      { text: "Problem Analysis", href: "/analyza_healthcare.pdf" },
      { text: "Solution Documentation", href: "/dokumentace_healthcare.pdf" }
    ]
  }
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Case Studies & Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Selected projects demonstrating my analytical and technical skills
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
