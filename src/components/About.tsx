import { about } from "@/data/kritika-bhachawat";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {

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
              <p className="text-lg leading-relaxed whitespace-pre-line" style={{ color: "hsl(var(--text-body))" }}>
                {about.description}
              </p>
              <div className="grid gap-4 pt-6">
                {about?.highlights.map((highlight, index) => (
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
