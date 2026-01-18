import React from "react"
import PageLayout from "./components/page-layout"
import { HeroSection } from "./components/hero"
import { AboutSection } from "./components/about"
import { ProjectsSection } from "./components/projects-section"
import { BlogSection } from "./components/blog"
import { ResumeAltSection } from "./components/resume_alt"

export default function PortfolioPage() {
  return (
    <PageLayout showNav>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ResumeAltSection />
    </PageLayout>
  )
}