import { TimelineItem } from "@/components/ui/timeline-item";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    title: "Software Engineer - Flutter",
    company: "Quadleo Techno Solutions",
    date: "Sep 2020 - Present",
    description: "Designed and developed Android, iOS, and Windows applications using Flutter with Flutter BLoC, incorporating push notifications and Google Maps integration. Successfully published mobile apps on both Google Play Store and Apple App Store",
  },
];

const education = [
  {
    title: "BTech Information Technology",
    school: "University of Calicut",
    date: "2024",
    description: "Studied core IT fundamentals including Object-Oriented Programming, Data Structures & Algorithms, and software engineering principles. Gained exposure to current industry technologies and practical applications through community events and projects.",
  },
  {
    title: "Higher Secondary Education",
    school: "Markaz HSS Karanthur, Kozhikode",
    date: "2020",
    description: "Completed a two-year higher secondary program, building a foundation and analytical skills. Served as a student union member, gaining experience in leadership and teamwork.",
  },
  {
    title: "Secondary Education",
    school: "mems International, Karanthur, Kozhikode",
    date: "2018",
    description: "Completed foundational secondary education with emphasis on core academic skills. Developed discipline and a strong work ethic during this period.",
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="bg-secondary">
      <div className="container mx-auto fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-16">My Journey</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold font-headline flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-primary" />
              Professional Experience
            </h3>
            <div className="relative flex flex-col gap-8">
              {experience.map((item, index) => (
                <TimelineItem key={index} {...item} isLast={index === experience.length - 1} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold font-headline flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              Education
            </h3>
            <div className="relative flex flex-col gap-8">
              {education.map((item, index) => (
                <TimelineItem key={index} title={item.title} company={item.school} date={item.date} description={item.description} isLast={index === education.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
