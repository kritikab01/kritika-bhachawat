import { Card } from "@/components/ui/card";
import { Database, LineChart, Code, Cpu, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: LineChart,
      title: "Data Analytics",
      skills: ["Power BI", "DAX", "Data Visualization", "KPI Dashboards", "Business Intelligence"],
      level: 95,
      color: "bg-blue-500",
    },
    {
      icon: Database,
      title: "Data Management",
      skills: ["SQL", "Data Modeling", "ETL Processes", "Database Design", "Data Quality"],
      level: 85,
      color: "bg-purple-500",
    },
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "MATLAB", "Arduino", "MIT App Inventor", "C++"],
      level: 80,
      color: "bg-green-500",
    },
    {
      icon: Cpu,
      title: "IoT & Embedded",
      skills: ["Arduino", "ESP32", "Diptrace", "Embedded Systems", "Wireless Communication"],
      level: 75,
      color: "bg-orange-500",
    },
    {
      icon: Brain,
      title: "Analytical Skills",
      skills: ["Market Research", "Statistical Analysis", "Problem Solving", "Critical Thinking"],
      level: 90,
      color: "bg-pink-500",
    },
    {
      icon: Users,
      title: "Leadership",
      skills: ["Team Management", "Financial Planning", "Event Coordination", "Strategic Planning"],
      level: 85,
      color: "bg-cyan-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in" style={{ color: "hsl(var(--text-heading))" }}>
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-xl ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4" style={{ color: "hsl(var(--text-heading))" }}>
                  {category.title}
                </h3>

                <div className="space-y-3 mb-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "hsl(var(--text-body))" }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span style={{ color: "hsl(var(--text-muted))" }}>Proficiency</span>
                    <span className="font-semibold text-primary">{category.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full ${category.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: `${category.level}%`,
                        animationDelay: `${index * 0.1 + 0.5}s`,
                      }}
                    ></div>
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

export default Skills;
