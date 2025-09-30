import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: "hsl(var(--text-heading))" }}>
              Kritika Bhachawat
            </h1>
            <p className="text-xl md:text-2xl mb-2" style={{ color: "hsl(var(--text-body))" }}>
              Data Analytics & Business Intelligence Professional
            </p>
            <p className="text-lg md:text-xl" style={{ color: "hsl(var(--text-muted))" }}>
              Transforming Data into Actionable Insights
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
            <Button 
              size="lg" 
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
          </div>

          <div className="flex justify-center gap-6 pt-8 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
            <a 
              href="https://www.linkedin.com/in/kritika-bhachawat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/kritika-bhachawat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="/Kritika_Bhachawat_Resume.pdf" 
              download
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110"
            >
              <Download className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      </div>
    </section>
  );
};

export default Hero;
