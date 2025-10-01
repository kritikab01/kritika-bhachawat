import { Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "PGDM in Business Data Analytics from FORE School of Management",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Power BI Development, Data Analytics & Marketing Strategy",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Google Data Analytics, Power BI, SQL & Python",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in" style={{ color: "hsl(var(--text-heading))" }}>
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img src="/images/profile.png"
                  alt="Kritika Bhachawat"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--text-body))" }}>
                I'm a passionate data analytics professional with expertise in transforming complex datasets into actionable business insights. With a strong foundation in Power BI, DAX, and data visualization, I've successfully delivered impactful KPI dashboards and analytical solutions that drive data-driven decision-making.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--text-body))" }}>
                Beyond analytics, I bring hands-on experience in IoT automation, embedded systems, and innovative project development. My leadership roles in finance coordination and campus engagement have honed my abilities in team collaboration, strategic planning, and problem-solving.
              </p>

              <div className="grid gap-4 pt-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card hover:shadow-lg transition-all duration-300 hover:scale-102"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 rounded-lg bg-primary/10">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1" style={{ color: "hsl(var(--text-heading))" }}>
                        {highlight.title}
                      </h3>
                      <p style={{ color: "hsl(var(--text-muted))" }}>
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
