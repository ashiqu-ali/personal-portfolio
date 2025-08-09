import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Certified Kubernetes Application Developer",
    issuer: "The Linux Foundation",
    date: "Issued Jun 2023",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Issued Dec 2022",
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "Issued Mar 2022",
  },
];

export function CertificatesSection() {
  return (
    <section id="certificates">
      <div className="container mx-auto text-center fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">Certificates & Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-primary mt-1" />
                  <div className="text-left">
                    <CardTitle>{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow text-left">
                <p className="text-sm text-muted-foreground">{cert.date}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Certificate
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
