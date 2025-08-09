import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Tablet, Monitor } from "lucide-react";

export function WhatIDoSection() {
  const services = [
    {
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      title: "Android Development",
      description: "Building Android applications with Flutter, providing smooth performance and Material Design UI.",
    },
    {
      icon: <Tablet className="w-10 h-10 text-primary" />,
      title: "iOS Development",
      description: "Creating elegant and performant iOS apps using Flutter, designed for the Apple ecosystem.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-primary" />,
      title: "Windows Application",
      description: "Developing Windows desktop applications with Flutter, optimized for the Windows environment.",
    },
  ];

  return (
    <section id="what-i-do">
      <div className="container mx-auto text-center fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">What I Can Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center group hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
