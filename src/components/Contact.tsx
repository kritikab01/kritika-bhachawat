import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactInfo } from "@/data/kritika-bhachawat";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in" style={{ color: "hsl(var(--text-heading))" }}>
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6" style={{ color: "hsl(var(--text-heading))" }}>
                Let's Connect
              </h3>
              <p className="mb-8 text-lg leading-relaxed" style={{ color: "hsl(var(--text-body))" }}>
                I'm always open to discussing new opportunities, collaborations, or just having a conversation about data analytics and technology. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-102"
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: "hsl(var(--text-muted))" }}>
                            {info.label}
                          </p>
                          <p className="font-semibold group-hover:text-primary transition-colors" style={{ color: "hsl(var(--text-heading))" }}>
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: "hsl(var(--text-muted))" }}>
                            {info.label}
                          </p>
                          <p className="font-semibold" style={{ color: "hsl(var(--text-heading))" }}>
                            {info.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <Card className="p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "hsl(var(--text-heading))" }}>
                      Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="transition-all duration-300 focus:shadow-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "hsl(var(--text-heading))" }}>
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="transition-all duration-300 focus:shadow-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "hsl(var(--text-heading))" }}>
                      Message
                    </label>
                    <Textarea
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="transition-all duration-300 focus:shadow-md"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
