import { Badge } from "@/components/ui/badge"
import { Database, BarChart3, Cloud, Code, Server } from "lucide-react"

const techCategories = [
  {
    title: "Jazyky",
    icon: Database,
    techs: ["Python", "R", "SQL"]
  },
  {
    title: "Knihovny a frameworky",
    icon: Code,
    techs: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "TidyVerse"]
  },
  {
    title: "Databázové systémy",
    icon: Server,
    techs: ["Oracle", "MSSQL", "Snowflake"]
  },
  {
    title: "Vizualizace a BI",
    icon: BarChart3,
    techs: ["Power BI", "Oracle Analytics Cloud", "Tableau"]
  },
  {
    title: "Nástroje a Cloud",
    icon: Cloud,
    techs: ["OCI", "Jupyter", "Jira", "Git"]
  }
]

export function TechStackSection() {
  return (
    <section className="py-20 px-4 bg-secondary/30" id="tech-stack">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Můj datový stack: Nástroje, se kterými mám zkušenost.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techCategories.map((category) => (
            <div 
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <Badge 
                    key={tech}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground border border-border hover:bg-primary/10 hover:border-primary/30 transition-colors px-3 py-1.5 text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
