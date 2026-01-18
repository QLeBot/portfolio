import { ArrowUpRight } from "lucide-react"

const posts = [
  {
    title: "Designing reliable data pipelines",
    description: "Pragmatic patterns for ingestion, validation, and observability in production ETL/ELT.",
    date: "January 2026",
    readTime: "8 min read",
    href: "#",
  },
  {
    title: "dbt project structure that scales",
    description: "How I organize models, tests, and documentation to keep analytics maintainable.",
    date: "December 2025",
    readTime: "6 min read",
    href: "#",
  },
  {
    title: "Snowflake cost & performance basics",
    description: "A practical guide to warehouses, clustering, and keeping spend under control.",
    date: "November 2025",
    readTime: "10 min read",
    href: "#",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr,2fr] gap-12">
          <div>
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Writing
            </h2>
            <p className="text-muted-foreground">
              Infrequent thoughts on design, code, and building for the web.
            </p>
          </div>
          <div className="space-y-0">
            {posts.map((post, index) => (
              <a
                key={post.title}
                href={post.href}
                className={`group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-border hover:bg-secondary/50 -mx-4 px-4 transition-colors ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-foreground font-medium group-hover:text-accent transition-colors flex items-center gap-2">
                    {post.title}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-1">
                    {post.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-2 sm:mt-0 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="hidden sm:inline">·</span>
                  <span className="hidden sm:inline">{post.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
