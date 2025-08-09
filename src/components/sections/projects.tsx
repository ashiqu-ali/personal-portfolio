"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";

// Android SVG icon
const AndroidIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="currentColor"  // This allows the icon color to inherit from parent text color
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Android"
    role="img"
  >
    <path
      d="M20.063 4.34419L18.844 6.06319C20.75 6.96919 22.125 8.65719 22.282 10.6262H9.282C9.438 8.65719 10.782 6.97019 12.688 6.06319L11.469 4.34419C11.406 4.21919 11.438 4.09419 11.532 4.03119C11.626 3.96819 11.751 4.00019 11.845 4.09419L13.095 5.90719C13.908 5.59419 14.814 5.40719 15.783 5.40719C16.752 5.40719 17.627 5.59519 18.471 5.90719L19.721 4.09419C19.784 4.00019 19.909 3.96919 20.002 4.03119C20.095 4.09319 20.127 4.21919 20.065 4.34419H20.063ZM13.031 8.81319C13.437 8.81319 13.75 8.50019 13.75 8.09419C13.75 7.71919 13.437 7.37519 13.031 7.37519C12.656 7.37519 12.312 7.71919 12.312 8.09419C12.312 8.50019 12.656 8.81319 13.031 8.81319ZM18.594 8.81319C19 8.81319 19.313 8.50019 19.313 8.09419C19.313 7.71919 19 7.37519 18.594 7.37519C18.219 7.37519 17.875 7.71919 17.875 8.09419C17.875 8.50019 18.219 8.81319 18.594 8.81319ZM5.5 18.7812V13.0002C5.5 12.1872 6.125 11.5002 6.969 11.5002C7.782 11.5002 8.407 12.1882 8.407 13.0002V18.7812C8.407 19.6252 7.782 20.2812 6.969 20.2812C6.125 20.2812 5.5 19.6252 5.5 18.7812ZM23.094 18.7812V13.0002C23.094 12.1872 23.75 11.5002 24.563 11.5002C25.376 11.5002 26.032 12.1882 26.032 13.0002V18.7812C26.032 19.6252 25.376 20.2812 24.563 20.2812C23.75 20.2812 23.094 19.6252 23.094 18.7812ZM9.313 22.1252V11.5312H22.313V22.1252C22.313 22.7502 21.782 23.2812 21.157 23.2812H19.876V26.5622C19.876 27.3752 19.22 28.0312 18.407 28.0312C17.594 28.0312 16.938 27.3752 16.938 26.5622V23.2812H14.657V26.5622C14.657 27.3752 14.032 28.0312 13.219 28.0312C12.375 28.0312 11.75 27.3752 11.75 26.5622V23.2812H10.437C9.843 23.2812 9.313 22.7502 9.313 22.1252Z"
      fill="currentColor"
    />
  </svg>
);



// iOS (Apple) SVG icon
const IosIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="iOS Platform Icon"
  >
    <path
      d="M15.1475 9.77578C14.8864 8.3804 15.5594 6.94439 16.37 5.97664C17.2633 4.90885 18.7963 4.08999 20.1063 4C20.3276 5.46297 19.7186 6.88836 18.9169 7.8966C18.0569 8.97974 16.5783 9.8197 15.1475 9.77578ZM22.8318 14.832C23.2372 13.7233 24.0402 12.7258 25.2861 12.0527C24.0271 10.5126 22.2595 9.61845 20.5914 9.61845C18.3844 9.61845 17.4513 10.6492 15.9183 10.6492C14.3392 10.6492 13.1412 9.61845 11.2296 9.61845C9.35501 9.61845 7.3596 10.7385 6.09411 12.6514C5.6288 13.3585 5.3136 14.2369 5.1417 15.2153C4.66471 17.96 5.37723 21.535 7.50266 24.7094C8.53608 26.2497 9.91354 27.9847 11.713 27.9998C13.3161 28.0152 13.7708 26.9951 15.9409 26.9846C18.1142 26.9725 18.5261 28.0104 20.1269 27.9954C21.9269 27.9805 23.3803 26.0604 24.4137 24.5203C25.1496 23.4151 25.4278 22.8568 26 21.6073C23.0906 20.5317 21.894 17.3889 22.8318 14.832Z"
      fill="currentColor"
    />
  </svg>
);

const WebIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Web Platform Icon"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.1177 24.5956C13.3471 25.0256 13.5768 25.4131 13.7964 25.7564C11.4633 25.2317 9.43875 23.8916 8.03784 22.0511C8.96241 21.5304 10.1466 20.9907 11.5702 20.5957C11.9748 22.1827 12.5457 23.5231 13.1177 24.5956ZM14.8824 23.6544C14.3855 22.7228 13.8875 21.5593 13.5287 20.1808C14.3011 20.0661 15.1256 20 16.0001 20C16.8745 20 17.6991 20.0661 18.4713 20.1807C18.1125 21.5593 17.6145 22.7228 17.1176 23.6544C16.7192 24.4015 16.3223 24.9979 16 25.4343C15.6777 24.9979 15.2808 24.4015 14.8824 23.6544ZM13 16C13 16.7788 13.0524 17.518 13.1448 18.2159C14.0359 18.0792 14.9885 18 16.0001 18C17.0116 18 17.9643 18.0791 18.8552 18.2159C18.9476 17.5179 19 16.7788 19 16C19 15.2212 18.9476 14.4821 18.8552 13.7841C17.9643 13.9208 17.0116 14 16.0001 14C14.9885 14 14.0359 13.9208 13.1448 13.7841C13.0524 14.482 13 15.2212 13 16ZM11.1825 13.3717C11.0664 14.1971 11 15.0739 11 16C11 16.9261 11.0664 17.8029 11.1825 18.6283C9.48451 19.0841 8.07843 19.7269 6.99099 20.3455C6.35597 19.0315 6 17.5573 6 16C6 14.4427 6.35597 12.9686 6.99097 11.6545C8.07829 12.273 9.4844 12.9158 11.1825 13.3717ZM13.5287 11.8193C14.3011 11.9339 15.1256 12 16.0001 12C16.8745 12 17.6991 11.9339 18.4713 11.8193C18.1125 10.4407 17.6145 9.27724 17.1176 8.3456C16.7192 7.59859 16.3223 7.00208 16 6.56576C15.6777 7.00208 15.2808 7.59859 14.8824 8.34557C14.3855 9.27721 13.8875 10.4407 13.5287 11.8193ZM20.8175 13.3719C20.9336 14.1972 21 15.074 21 16C21 16.9261 20.9336 17.8028 20.8175 18.6281C22.5155 19.0841 23.9216 19.7269 25.0091 20.3455C25.644 19.0313 26 17.5572 26 16C26 14.4428 25.644 12.9686 25.0091 11.6546C23.9217 12.273 22.5156 12.9159 20.8175 13.3719ZM23.9621 9.94904C23.0375 10.4697 21.8533 11.0094 20.4299 11.4044C20.0252 9.81739 19.4544 8.47692 18.8824 7.40443C18.6529 6.97436 18.4232 6.587 18.2036 6.2436C20.5368 6.76831 22.5613 8.10848 23.9621 9.94904ZM11.5702 11.4043C10.1467 11.0093 8.96253 10.4697 8.03785 9.94897C9.43875 8.10845 11.4633 6.76831 13.7963 6.2436C13.5768 6.587 13.3471 6.97435 13.1176 7.4044C12.5457 8.47689 11.9748 9.81735 11.5702 11.4043ZM20.4299 20.5956C20.0252 22.1827 19.4544 23.5231 18.8824 24.5956C18.6529 25.0256 18.4232 25.4131 18.2036 25.7564C20.5368 25.2317 22.5613 23.8915 23.9623 22.0509C23.0376 21.5303 21.8535 20.9907 20.4299 20.5956ZM16 28C22.6275 28 28 22.6275 28 16C28 9.37259 22.6275 4 16 4C9.37259 4 4 9.37259 4 16C4 22.6275 9.37259 28 16 28Z"
      fill="currentColor"
    />
  </svg>
);



  
const projects = [
  {
    title: "Essar Employee",
    image: "https://placehold.co/600x400.png",
    imageHint: "abstract design",
    description:
      "A comprehensive social media management tool designed for content creators. It features post scheduling, analytics tracking, and audience engagement tools, all in one seamless interface.",
    platforms: {
      web: "https://essarhealthcare.ie",
      android: "https://play.google.com/store/apps/details?id=ie.essarhealthcare.employee&pcampaignid=web_share",
      ios: "https://apps.apple.com/in/app/essar-healthcare/id6748294943",
    },
    tech: ["Flutter", "Flutter Bloc", "Firebase", "Firebase Cloud Notification"],
  },
  {
    title: "2nd Vahan",
    image: "https://placehold.co/600x400.png",
    imageHint: "futuristic technology",
    description:
      "An AI-powered platform for financial forecasting. Utilizes machine learning models to predict market trends and provide actionable insights for investors.",
    platforms: {
      web: "https://2ndvahan.com",
    },
    tech: ["Flutter", "Flutter Bloc", "Firebase", "Firebase Cloud Notification", "Google Maps", "Google API"],
  },
  {
    title: "RKS",
    image: "https://placehold.co/600x400.png",
    imageHint: "network connection",
    description:
      "A mobile-first networking application that helps professionals connect at events and conferences. Features include digital business card exchange and an integrated chat.",
    platforms: {
      android: "https://play.google.com/store/apps/details?id=rks.driver.app&pcampaignid=web_share",
    },
    tech: ["Flutter", "Flutter Bloc", "Google Maps"],
  },
];

const platformIcons = {
  web: <WebIcon />,
  android: <AndroidIcon />,
  ios: <IosIcon />,
};

export function ProjectsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="projects">
      <div className="container mx-auto text-center fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isOpen = openIndex === index;
            return (
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

                  <p className="text-muted-foreground text-sm">
                    {project.description.substring(0, 100)}
                    {!isOpen && "..."}
                  </p>

                  {isOpen && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {project.description.substring(100)}
                    </p>
                  )}

                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary mt-2 inline-flex items-center"
                    onClick={() => toggleOpen(index)}
                    aria-expanded={isOpen}
                    aria-controls={`project-desc-${index}`}
                  >
                    {isOpen ? "Read less" : "Read more"}
                    <ChevronDown
                      className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex flex-col items-start gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Platforms:</span>
                    <div className="flex gap-4 text-muted-foreground">
                      {Object.entries(project.platforms).map(([key, url]) =>
                        url ? (
                          <a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition"
                            aria-label={key}
                          >
                            {platformIcons[key as keyof typeof platformIcons]}
                          </a>
                        ) : null
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
