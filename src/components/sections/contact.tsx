import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";

export function ContactSection() {
  const socialLinks = [
    {
      href: "mailto:connect.ashiqu@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
    },
    {
      href: "tel:+91-9188345675",
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
    },
    {
      href: "https://www.linkedin.com/in/ashiqu-ali/",
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/ashiqu-ali",
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
    },
  ];

  return (
    <section id="contact" className="bg-secondary">
      <div className="container mx-auto text-center fade-in-up">
        <Send className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Get In Touch</h2>
        <p className="max-w-xl mx-auto text-muted-foreground mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
        </p>
        <div className="flex justify-center items-center gap-4">
          {socialLinks.map((link) => (
            <Button key={link.label} asChild variant="outline" size="icon" className="w-14 h-14 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-110">
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                {link.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
