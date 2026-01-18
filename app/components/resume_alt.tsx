import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/app/components/ui/button"

const experience = [
{
    period: "Oct 2024 — Present",
    title: "Data Analyst",
    company: "Aktivco",
    companyUrl: "https://www.aktivco.com/",
    description:
      "Analyzing data to identify trends and insights, and providing data-driven recommendations to improve business performance.",
    skills: ["Python", "SQL", "Power BI", "Snowflake"],
  },    
  {
    period: "Nov 2023 — Mar 2024",
    title: "Data Engineer Consultant",
    company: "Talan",
    companyUrl: "https://www.talan.com/",
    description:
      "Delivered Qlik Sense dashboards and data models for the City of Geneva, improved performance and reliability, and produced documentation for technical and non-technical stakeholders.",
    skills: ["Qlik Sense", "Data modeling", "Documentation"],
  },
  {
    period: "Apr 2023 — Nov 2023",
    title: "Data Engineer Intern",
    company: "Talan",
    companyUrl: "https://www.talan.com/",
    description:
      "Built ETL pipelines on Azure Data Factory (time- and event-driven), integrated SAP and on‑prem SQL sources, and automated metadata-driven pipeline creation with Python.",
    skills: ["Azure Data Factory", "Python", "SQL", "SAP"],
  },
  {
    period: "Jun 2022 — Sep 2022",
    title: "Data & Cloud Intern",
    company: "Infotel Conseil",
    companyUrl: "https://www.infotel.com/",
    description:
      "Built a PoC using AWS Transcribe and Lambda to extract and enrich data from videos, and documented and presented results to stakeholders.",
    skills: ["AWS", "Lambda", "Python", "Transcribe"],
  },
]

export function ResumeAltSection() {
  return (
    <section id="resume" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr,2fr] gap-12">
          <div>
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Experience
            </h2>
            <p className="text-muted-foreground mb-6">
              A summary of my professional journey and the skills I&apos;ve developed along the way.
            </p>
            <Button asChild className="group" variant="outline">
              <a href="mailto:lecomteq.ql@gmail.com">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Request PDF resume
              </a>
            </Button>
          </div>
          <div className="space-y-12">
            {experience.map((job) => (
              <div key={job.title} className="group">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <span className="text-sm text-muted-foreground whitespace-nowrap min-w-[140px]">
                    {job.period}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-foreground font-medium">
                      {job.title} · {" "}
                      <a 
                        href={job.companyUrl}
                        className="inline-flex items-center gap-1 text-foreground hover:text-accent transition-colors"
                      >
                        {job.company}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
