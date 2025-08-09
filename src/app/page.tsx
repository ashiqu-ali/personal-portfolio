import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HomeSection } from "@/components/sections/home";
import { AboutSection } from "@/components/sections/about";
import { WhatIDoSection } from "@/components/sections/what-i-do";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { TimelineSection } from "@/components/sections/timeline";
import { CertificatesSection } from "@/components/sections/certificates";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HomeSection />
        <AboutSection />
        <WhatIDoSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
