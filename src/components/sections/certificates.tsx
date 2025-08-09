'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Trophy } from "lucide-react";  // Added Trophy import

const certificates = [
  {
    title: "Project Management Foundations",
    issuer: "LinkedIn Learning",
    date: "Issued Jul 2025",
    Certificate: "https://www.linkedin.com/learning/certificates/1d876d7306f9a622c290d80482e14e3b576eba074786d3db67725ae9ef134936?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BU13CAjcWRD6RWyb%2F5mPMQA%3D%3D"
  },
  {
    title: 'Introduction to Dart',
    issuer: 'LinkedIn Learning',
    date: 'Issued May 2023',
    Certificate: 'https://www.linkedin.com/learning/certificates/88b93504d0b0192c16eb74bb1d83479b6a93666d15692dca1a76a067b94d6af5'
  },
  {
    title: 'Data Structures',
    issuer: 'SWAYAM MHRD',
    date: 'Issued Apr 2023',
    Certificate: ''
  }
];

const hackathons = [
  {
    title: "Athmathon - Hackathon",
    issuer: "AWH Engineering College, Kuttikattoor",
    date: "May 2024",
    associatedWith: "Calicut University",
    description:
      "I participated in the Athmathon hackathon with a strong team, and we were the runner-up out of over 10 teams.",
  },
  {
    title: "First Prize, Ideathon - Diksha Tech Fest",
    issuer: "Institute of Engineering and Technology, University of Calicut",
    date: "May 2024",
    associatedWith: "Calicut University",
    description:
      "Achieved first prize in the Ideathon competition at Diksha, the annual tech fest organized by the college union of the Institute of Engineering and Technology, University of Calicut.",
  },
  {
    title: "First Prize, Hackathon - IEDC IETCU",
    issuer: "IEDC IETCU",
    date: "Dec 2022",
    associatedWith: "Calicut University",
    description:
      "Secured first place in the Hackathon organized by the Innovation and Entrepreneurship Development Cell (IEDC) at the Institute of Engineering and Technology, University of Calicut. Competing against over 10 teams.",
  },
  {
    title: "First Prize, Bug Byte - Diksha Tech Fest",
    issuer: "Institute of Engineering and Technology, University of Calicut",
    date: "Aug 2022",
    associatedWith: "Calicut University",
    description:
      "Awarded first place in the Bug Byte competition at Diksha, the annual tech fest conducted by the college union of the Institute of Engineering and Technology, University of Calicut. This competition tested participants' skills in debugging and problem-solving in various programming environments.",
  },
  {
    title: "Gold Medalist - International Maths Olympiad",
    issuer: "International Maths Olympiad",
    date: "",
    associatedWith: "",
    description: "Awarded Gold Medal in the International Maths Olympiad.",
  },
];


export function CertificatesSection() {
  return (
    <section id="certificates" className="container mx-auto text-center fade-in-up px-4">
      <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">Certificates & Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open(cert.Certificate, '_blank', 'noopener,noreferrer')}
                disabled={!cert.Certificate}
              >
                View Certificate
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Hackathon Achievements Section */}
      <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12 text-center">Hackathon Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hackathons.map((hack, index) => (
          <Card
            key={index}
            className="text-center group hover:border-primary transition-all duration-300 transform hover:-translate-y-2"
          >
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                <Trophy className="w-10 h-10 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle className="text-xl font-semibold">{hack.title}</CardTitle>
              <p className="text-muted-foreground text-sm">{hack.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
