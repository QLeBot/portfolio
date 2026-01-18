import React from 'react';
import PageLayout from './components/page-layout';
import { Github, Linkedin, Mail } from "lucide-react";
import ProjectCard from './components/project-card';
import Waves from './components/waves';
import DarkVeil from './components/dark-veil';
import { designTokens } from '@/lib/design-tokens';

const PortfolioPage = () => {
  return (
    <PageLayout theme="light">
      {/* Hero Section with Waves background */}
      <div className="relative w-full min-h-[60vh] overflow-hidden">
        {/* Animated Waves background and overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Waves
            lineColor="#000000"
            backgroundColor="rgba(255, 255, 255, 0.08)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        
        {/* Foreground content: Hero */}
        <div className="relative z-10 w-full">
          <div className="flex flex-col items-center justify-center w-full mt-24 pb-16">
            <h1 className={`mb-4 py-8 pt-4 ${designTokens.typography.heading.h1} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} text-center`}>
              Quentin Lecomte
            </h1>
            <p className={`${designTokens.typography.body.large} mb-4 ${designTokens.colors.text.secondary} text-center`}>
              Data Engineer
            </p>
            <p className={`${designTokens.typography.body.base} mb-8 ${designTokens.colors.text.secondary} max-w-2xl text-center px-4`}>
              Engineering graduate specialized in Artificial Intelligence, with expertise in Data Science, 
              Data Engineering, Cloud and DevOps. Based in France, with professional experience in Switzerland.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-6 mb-12 justify-center px-4">
              <a 
                href="https://www.linkedin.com/in/lecomte-quentin/" 
                className={`${designTokens.colors.text.secondary} flex items-center gap-2 hover:${designTokens.colors.text.primary} ${designTokens.transitions.default} space-mono-regular`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/QLeBot" 
                className={`${designTokens.colors.text.secondary} flex items-center gap-2 hover:${designTokens.colors.text.primary} ${designTokens.transitions.default} space-mono-regular`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a 
                href="mailto:lecomteq.ql@gmail.com" 
                className={`${designTokens.colors.text.secondary} flex items-center gap-2 hover:${designTokens.colors.text.primary} ${designTokens.transitions.default} space-mono-regular`}
                aria-label="Send Email"
              >
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section - In Progress */}
      <section className={`${designTokens.layout.section} ${designTokens.spacing.section.py} bg-muted/90`}>
        <div className={designTokens.layout.container}>
          <h2 className={`${designTokens.typography.heading.h2} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} mb-8`}>
            What I'm working on
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Stock Picker" 
              status="In Progress" 
              description="A tool to help you pick stocks based on fundamental data and AI" 
              technologies={["Python", "Selenium", "Pandas", "PostgreSQL"]} 
              link="./projects/dataset"
              theme="light"
            />
            <ProjectCard 
              title="Modern Data Stack with Snowflake" 
              description="A comprehensive data engineering project leveraging Snowflake, dbt, Python, AWS, and SQL to build a scalable modern data stack." 
              technologies={["Snowflake", "dbt", "Python", "AWS", "SQL"]} 
              link="./projects/snowflake"
              theme="light"
            />
          </div>
        </div>
      </section>

      {/* Projects Section - Completed */}
      <section className={`${designTokens.layout.section} ${designTokens.spacing.section.py}`}>
        <div className={designTokens.layout.container}>
          <h2 className={`${designTokens.typography.heading.h2} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} mb-8`}>
            What I've built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Black Scholes Option Pricer" 
              description="An interactive option pricer based on the Black-Scholes model using Python and Streamlit." 
              technologies={["Python", "Streamlit"]} 
              link="./projects/option-pricer" 
              imageUrl="/img/interface.png"
              theme="light"
            />
            <ProjectCard 
              title="Implied Volatility" 
              description="An interactive implied volatility calculator using Python and Streamlit." 
              technologies={["Python", "Streamlit"]} 
              link="./projects/implied-volatility"
              theme="light"
              image={
                <div className="w-full h-full min-h-[10rem] min-w-[10rem] aspect-[4/1.6] flex items-center justify-center">
                  <DarkVeil />
                </div>
              } 
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PortfolioPage;