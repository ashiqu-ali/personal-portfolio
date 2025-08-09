import { TimelineItem } from "@/components/ui/timeline-item";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    date: "2020 - Present",
    description: "Lead developer for the flagship mobile application, architecting new features and mentoring junior engineers. Improved app performance by 30%.",
  },
  {
    title: "Software Engineer",
    company: "Digital Solutions Co.",
    date: "2018 - 2020",
    description: "Developed and maintained full-stack web applications for enterprise clients. Specialized in creating responsive front-end interfaces with React.",
  },
  {
    title: "Junior Developer",
    company: "CodeCrafters LLC",
    date: "2016 - 2018",
    description: "Assisted in the development of various client websites and internal tools. Gained foundational experience in agile methodologies and version control.",
  },
];

const education = [
  {
    title: "M.S. in Computer Science",
    school: "University of Technology",
    date: "2014 - 2016",
    description: "Focused on artificial intelligence and machine learning. Thesis on natural language processing.",
  },
  {
    title: "B.S. in Software Engineering",
    school: "State University",
    date: "2010 - 2014",
    description: "Graduated with honors. President of the university's coding club.",
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
              Experience
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
