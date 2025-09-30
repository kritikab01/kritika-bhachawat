import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, Cpu, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: TrendingUp,
      title: "SUPYAR® Marketing Strategy",
      description: "Conducted comprehensive market research covering 500+ customers and executed a test-run marketing plan that increased brand recall by 35% among urban youth within 4 weeks.",
      tags: ["Market Research", "GTM Strategy", "Brand Management"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Sales Analytics Dashboard",
      description: "Analyzed 100,000+ sales records using Power BI and DAX to create interactive dashboards, achieving 25% improvement in data accessibility and 10% increase in sales insights.",
      tags: ["Power BI", "DAX", "Data Visualization"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "TIC-TAC-TOE Robotic Arm",
      description: "Built an intelligent robotic arm using Arduino and ESP32 with wireless capabilities, demonstrating expertise in IoT, embedded systems, and automation technologies.",
      tags: ["Arduino", "ESP32", "IoT", "Robotics"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: BarChart3,
      title: "Tech Fest Financial Management",
      description: "Managed financial operations for a 3-day tech fest with ₹1,20,000 budget and 600+ students, optimizing planning through Power BI dashboards and ensuring complete transparency.",
      tags: ["Financial Planning", "Power BI", "Event Management"],
      color: "from-green-500 to-emerald-500",
    },
  ];

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
