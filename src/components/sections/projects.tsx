"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Smartphone, Tablet, ChevronDown, Globe } from "lucide-react";

const projects = [
  {
    title: "Project Nova",
    image: "https://placehold.co/600x400.png",
    imageHint: "abstract design",
    description: "A comprehensive social media management tool designed for content creators. It features post scheduling, analytics tracking, and audience engagement tools, all in one seamless interface.",
    platforms: [<Globe key="web" />, <Smartphone key="android" />, <Tablet key="ios" />],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Kotlin", "Swift"],
  },
  {
    title: "QuantumLeap AI",
    image: "https://placehold.co/600x400.png",
    imageHint: "futuristic technology",
    description: "An AI-powered platform for financial forecasting. Utilizes machine learning models to predict market trends and provide actionable insights for investors.",
    platforms: [<Globe key="web" />],
    tech: ["Python", "React", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    title: "ConnectSphere",
    image: "https://placehold.co/600x400.png",
    imageHint: "network connection",
    description: "A mobile-first networking application that helps professionals connect at events and conferences. Features include digital business card exchange and an integrated chat.",
    platforms: [<Smartphone key="android" />, <Tablet key="ios" />],
    tech: ["Jetpack Compose", "SwiftUI", "Go", "GraphQL", "GCP"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container mx-auto text-center fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
                <Collapsible>
                  <p className="text-muted-foreground text-sm">
                    {project.description.substring(0, 100)}...
                    <CollapsibleContent className="mt-2 text-sm text-muted-foreground">
                      {project.description.substring(100)}
                    </CollapsibleContent>
                  </p>
                  <CollapsibleTrigger asChild>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Read more
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </CollapsibleTrigger>
                </Collapsible>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">Platforms:</span>
                  <div className="flex gap-2 text-muted-foreground">
                    {project.platforms}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
