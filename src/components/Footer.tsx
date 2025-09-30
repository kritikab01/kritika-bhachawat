import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--text-heading))" }}>
                Kritika Bhachawat
              </h3>
              <p style={{ color: "hsl(var(--text-muted))" }}>
                Data Analytics & Business Intelligence Professional
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/kritika-bhachawat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/kritika-bhachawat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:kritika.bhachawat@example.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center">
            <p className="flex items-center justify-center gap-2" style={{ color: "hsl(var(--text-muted))" }}>
              © {currentYear} Kritika Bhachawat. Made with <Heart className="h-4 w-4 text-red-500" /> and dedication.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
