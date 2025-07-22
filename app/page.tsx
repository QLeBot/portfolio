import React from 'react';
import NavBar from './components/nav-bar';
import Footer from './components/nav-footer';
import GradientLoad from './components/gradient-load';
import LiquidGradient from './components/liquid-gradient';
import CardWithForm from './components/project-card';
import { GeistSans } from 'geist/font/sans';
import { Github, Linkedin, Mail } from "lucide-react";
import ProjectCard from './components/project-card';
import Waves from './components/waves';
import DarkVeil from './components/dark-veil';

const PortfolioPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white space-mono-regular">
      {/* Hero + Navbar + Waves background */}
      <div className="relative w-full min-h-[60vh] overflow-hidden">
        {/* Animated Waves background and overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Waves
            lineColor="#000000"
            backgroundColor="rgba(255, 255, 255, 0.08)" // reduced opacity
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
          {/* Optional: subtle white overlay for extra contrast */}
          <div className="absolute inset-0 bg-white/80" />
        </div>
        {/* Foreground content: Navbar and hero */}
        <div className="relative z-10 w-full">
          <NavBar />
          <div className="flex flex-col items-center justify-center w-full mt-24">
            <h1 className="mb-4 py-8 pt-4 text-7xl text-gray-900 font-bold space-mono-bold text-center">Quentin Lecomte</h1>
            <p className="text-xl mb-4 text-gray-800 text-center">Data Engineer</p>
            <p className="text-lg mb-8 text-gray-700 max-w-2xl text-center">
              Engineering graduate specialized in Artificial Intelligence, with expertise in Data Science, 
              Data Engineering, Cloud and DevOps. Based in France, with professional experience in Switzerland.
            </p>
            {/* Social Links */}
            <div className="flex gap-6 mb-12 justify-center">
              <a href="https://www.linkedin.com/in/lecomte-quentin/" className="text-gray-700 flex items-center gap-2 hover:text-gray-900">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/QLeBot" className="text-gray-700 flex items-center gap-2 hover:text-gray-900">
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a href="mailto:lecomteq.ql@gmail.com" className="text-gray-700 flex items-center gap-2 hover:text-gray-900">
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="w-full py-16 bg-muted/90">
        <div className="mx-auto w-[95%] lg:w-[90%] xl:w-[85%] px-4">
          <h2 className="text-3xl text-gray-900 font-bold mb-8">What I'm working on</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard title="Stock Picker" status="In Progress" description="A tool to help you pick stocks based on fundamental data and AI" technologies={["Python", "Selenium", "Pandas", "PostgreSQL"]} link="./projects/dataset" />
            {/* 
            <ProjectCard title="Football Data Analysis" description="Scraping data from websites and creating a end-to-end data infrastructure with pipelines, queues and dashboards." technologies={["Python", "Selenium", "SQL", "Databricks", "Kafka", "PowerBI"]} link="https://example.com" />
            <ProjectCard title="Project 4" description="Description 4" technologies={["Python", "Pandas", "SQL"]} link="https://example.com" />
            */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-16">
        <div className="mx-auto w-[95%] lg:w-[90%] xl:w-[85%] px-4">
          <h2 className="text-3xl text-gray-900 font-bold mb-8">What I've built</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard title="Black Scholes Option Pricer" description="An interactive option pricer based on the Black-Scholes model using Python and Streamlit." technologies={["Python", "Streamlit"]} link="./projects/option-pricer" imageUrl="/img/interface.png" />
            <ProjectCard title="Implied Volatility" description="An interactive implied volatility calculator using Python and Streamlit." technologies={["Python", "Streamlit"]} link="./projects/implied-volatility" 
              image={<div className="w-full h-full min-h-[10rem] min-w-[10rem] aspect-[4/1.6] flex items-center justify-center"><DarkVeil /></div>} 
            />
            {/*<ProjectCard title="AI Platform" description="Creating a centralized platform for AI models using pay-as-you-go API and running local models" technologies={["Typescript", "Next.js", "React", "Tailwind", "Python", "MongoDB"]} link="./projects/ai-platform" />*/}
            {/*<ProjectCard title="Synthetic Dataset" description="Exploring a mix of techniques to create a synthetic dataset from real data using Data Science, LLM Generative AI and Scraping" technologies={["Python", "Selenium", "Pandas", "OpenAI API"]} link="./projects/dataset" />*/}
            {/* 
            <ProjectCard title="Football Data Analysis" description="Scraping data from websites and creating a end-to-end data infrastructure with pipelines, queues and dashboards." technologies={["Python", "Selenium", "SQL", "Databricks", "Kafka", "PowerBI"]} link="https://example.com" />
            <ProjectCard title="Project 4" description="Description 4" technologies={["Python", "Pandas", "SQL"]} link="https://example.com" />
            */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;