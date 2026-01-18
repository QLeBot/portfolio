import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/lecomte-quentin/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/QLeBot", label: "GitHub" },
  { icon: Mail, href: "mailto:lecomteq.ql@gmail.com", label: "Email" },
]

const skills = [
  "Python",
  "SQL",
  "Pandas",
  "PySpark",
  "dbt",
  "Snowflake",
  "Azure",
  "AWS",
  "PostgreSQL",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr,2fr] gap-12">
          <div>
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-8">
              About
            </h2>
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-foreground text-lg leading-relaxed">
              I&apos;m a data engineer with a strong foundation in AI, focused on building reliable
              pipelines, clean data models, and production-ready analytics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;ve worked on data and analytics projects in Switzerland and France, delivering dashboards,
              optimizing transformations, and helping teams turn messy data into useful products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not working, I like exploring modern data stacks, building side projects,
              and learning new tools and patterns.
            </p>
            <div className="pt-6">
              <h3 className="text-sm font-medium text-foreground mb-4">Technologies I work with</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
