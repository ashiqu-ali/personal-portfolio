import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HomeSection() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-center md:text-left fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary tracking-tighter">
            Ashiqu Ali
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Software Engineer
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto md:mx-0">
            Crafting elegant and efficient software solutions. Passionate about building beautiful user experiences and robust, scalable systems.
          </p>
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <Button asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center items-center fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="p-1.5 rounded-full bg-gradient-to-tr from-primary to-purple-300">
            <div className="bg-background rounded-full p-2">
              <Image
                src="/asset/profile.png"
                alt="Profile Photo"
                width={400}
                height={400}
                className="rounded-full aspect-square object-cover"
                data-ai-hint="profile photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
