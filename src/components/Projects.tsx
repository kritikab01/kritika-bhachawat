import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, Cpu, TrendingUp } from "lucide-react";
import { projects } from "@/data/kritika-bhachawat";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in" style={{ color: "hsl(var(--text-heading))" }}>
            Projects & Work
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-8">
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.color} shadow-lg`}>
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300" style={{ color: "hsl(var(--text-heading))" }}>
                    {project.title}
                  </h3>

                  <p className="mb-6 leading-relaxed" style={{ color: "hsl(var(--text-body))" }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
