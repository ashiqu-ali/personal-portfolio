"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";

export function SkillsSection() {
  const [isOpen, setIsOpen] = useState(false);
  
  const primarySkills = [
    "Kotlin", "Swift", "TypeScript", "Python", "React", "Next.js", 
    "Node.js", "Jetpack Compose", "SwiftUI", "SQL", "NoSQL", "Docker"
  ];

  const secondarySkills = [
    "Java", "C#", "Go", "Vue.js", "Angular", "Firebase", "AWS", "GCP", 
    "Kubernetes", "GraphQL", "REST APIs", "CI/CD"
  ];

  return (
    <section id="skills" className="bg-secondary">
      <div className="container mx-auto text-center fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {primarySkills.map((skill) => (
            <Badge key={skill} variant="default" className="text-base px-4 py-2 bg-primary/20 text-primary-foreground hover:bg-primary/30">
              {skill}
            </Badge>
          ))}
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-8">
          <CollapsibleContent>
            <div className="flex flex-wrap justify-center gap-3 animate-in fade-in-0 duration-500">
              {secondarySkills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-base px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </CollapsibleContent>
          <div className="mt-8">
            <CollapsibleTrigger asChild>
              <Button variant="ghost">
                <ChevronsUpDown className="mr-2 h-4 w-4" />
                {isOpen ? "Show Less" : "Show More"}
              </Button>
            </CollapsibleTrigger>
          </div>
        </Collapsible>
      </div>
    </section>
  );
}
