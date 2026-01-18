"use client"

import React from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Stock Picker",
    description: "A tool to help you pick stocks based on fundamental data and AI.",
    href: "/projects/stock-picker",
    meta: "In progress",
  },
  {
    title: "Modern Data Stack with Snowflake",
    description:
      "A data engineering project leveraging Snowflake, dbt, Python, AWS, and SQL to build a scalable modern data stack.",
    href: "/projects/snowflake",
    meta: "Case study",
  },
  {
    title: "Black Scholes Option Pricer",
    description: "An interactive option pricer based on the Black-Scholes model using Python and Streamlit.",
    href: "/projects/option-pricer",
    meta: "Project",
  },
  {
    title: "Implied Volatility",
    description: "An interactive implied volatility calculator using Python and Streamlit.",
    href: "/projects/implied-volatility",
    meta: "Project",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr,2fr] gap-12">
          <div>
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Projects</h2>
            <p className="text-muted-foreground">A few things I&apos;ve built and I&apos;m building.</p>
          </div>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.href}
                className={`group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-border hover:bg-secondary/50 -mx-4 px-4 transition-colors ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-foreground font-medium group-hover:text-accent transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{project.description}</p>
                </div>
                <div className="flex items-center gap-4 mt-2 sm:mt-0 text-sm text-muted-foreground">
                  <span>{project.meta}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

