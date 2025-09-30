import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ExternalLink, Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "PGDM (Business Data Analytics)",
      institution: "FORE School of Management",
      year: "2025 - 2027",
      result: "Pursuing",
    },
    {
      degree: "B.E. (Computer Science Engineering)",
      institution: "M.B.M. University",
      year: "2020 - 2024",
      result: "88.00%",
    },
  ];

  const experience = [
    {
      role: "Marketing Intern",
      company: "SUPYAR®",
      duration: "July 2025 - August 2025",
      description: "Conducted market research covering 500+ customers and designed marketing plans that lifted brand recall by 35% among urban youth.",
    },
    {
      role: "Power BI Intern",
      company: "Celebal Technologies",
      duration: "June 2023 - August 2023",
      description: "Analyzed 100,000+ sales records, created dashboards achieving 25% improvement in data accessibility and 10% increase in sales insights.",
    },
    {
      role: "Embedded Systems & Robotics Trainee",
      company: "M.B.M. University",
      duration: "June 2022 - July 2022",
      description: "Built TIC-TAC-TOE robotic arm with Arduino and ESP32, enhancing IoT and embedded systems expertise.",
    },
  ];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in" style={{ color: "hsl(var(--text-heading))" }}>
            Resume
          </h2>

          <div className="text-center mb-12 animate-fade-in-up">
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <a href="/Kritika_Bhachawat_Resume.pdf" download className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download Full Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" className="ml-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <a href="/Kritika_Bhachawat_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink className="mr-2 h-5 w-5" />
                View PDF
              </a>
            </Button>
          </div>

          <div className="space-y-16">
            <div className="animate-slide-in-left">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-3xl font-bold" style={{ color: "hsl(var(--text-heading))" }}>
                  Education
                </h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-102">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--text-heading))" }}>
                          {edu.degree}
                        </h4>
                        <p className="text-lg mb-1" style={{ color: "hsl(var(--text-body))" }}>
                          {edu.institution}
                        </p>
                        <p style={{ color: "hsl(var(--text-muted))" }}>
                          {edu.year}
                        </p>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {edu.result}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-3xl font-bold" style={{ color: "hsl(var(--text-heading))" }}>
                  Experience
                </h3>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border ml-3"></div>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-10">
                      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary"></div>
                      <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-102">
                        <h4 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--text-heading))" }}>
                          {exp.role}
                        </h4>
                        <p className="text-lg font-medium mb-1 text-primary">
                          {exp.company}
                        </p>
                        <p className="mb-3" style={{ color: "hsl(var(--text-muted))" }}>
                          {exp.duration}
                        </p>
                        <p style={{ color: "hsl(var(--text-body))" }}>
                          {exp.description}
                        </p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
