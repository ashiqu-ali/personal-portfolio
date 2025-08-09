type TimelineItemProps = {
  title: string;
  company: string;
  date: string;
  description: string;
  isLast?: boolean;
};

export function TimelineItem({ title, company, date, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="pl-10 relative">
      <div className="absolute left-0 top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-secondary"></div>
      {!isLast && <div className="absolute left-[7px] top-6 bottom-0 w-0.5 bg-border"></div>}
      <p className="text-sm text-muted-foreground -mt-1">{date}</p>
      <h4 className="font-semibold text-lg mt-1">{title}</h4>
      <p className="text-primary font-medium">{company}</p>
      <p className="text-muted-foreground mt-2 text-sm">{description}</p>
    </div>
  );
}
