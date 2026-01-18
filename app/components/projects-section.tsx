"use client"

import React from "react"
import ProjectCard from "@/app/components/project-card"

const projects = [
  {
    title: "AI Platform",
    description: "A centralized platform to run cloud and local AI models with a modern UI.",
    href: "/projects/ai-platform",
    meta: "In progress",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind", "Python", "MongoDB"],
  },
  {
    title: "Dataset",
    description: "Work-in-progress dataset project (details coming soon).",
    href: "/projects/dataset",
    meta: "In progress",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind", "Python", "MongoDB"],
  },
  {
    title: "Modern Data Stack with Snowflake",
    description:
      "A data engineering project leveraging Snowflake, dbt, Python, AWS, and SQL to build a scalable modern data stack.",
    href: "/projects/snowflake",
    meta: "Case study",
    technologies: ["Snowflake", "dbt", "Python", "AWS", "SQL"],
  },
  {
    title: "Black Scholes Option Pricer",
    description: "An interactive option pricer based on the Black-Scholes model using Python and Streamlit.",
    href: "/projects/option-pricer",
    meta: "Project",
    technologies: ["Python", "Streamlit"],
  },
  {
    title: "Implied Volatility",
    description: "An interactive implied volatility calculator using Python and Streamlit.",
    href: "/projects/implied-volatility",
    meta: "Project",
    technologies: ["Python", "Pandas", "NumPy", "Plotly", "SciPy", "Streamlit", "Yahoo Finance API"],
  },
  {
    title: "Stock Picker",
    description: "A tool to help you pick stocks based on fundamental data and AI.",
    href: "/projects/stock-picker",
    meta: "In progress",
    technologies: ["Python", "Pandas", "NumPy", "Plotly", "SciPy", "Streamlit", "Yahoo Finance API"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">Projects</h2>
            <p className="text-muted-foreground">A few things I&apos;ve built and I&apos;m building.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.href}
                status={project.meta}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

