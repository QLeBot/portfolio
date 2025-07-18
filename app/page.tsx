import React from 'react';
import NavBar from './components/nav-bar';
import Footer from './components/nav-footer';
import GradientLoad from './components/gradient-load';
import LiquidGradient from './components/liquid-gradient';
import CardWithForm from './components/project-card';
import { GeistSans } from 'geist/font/sans';
import { Github, Linkedin, Mail } from "lucide-react";
import ProjectCard from './components/project-card';

const PortfolioPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white space-mono-regular">
      <NavBar />
      {/*
      <GradientLoad />

      <LiquidGradient 
        colors={["#0C090B", "#281A11", "#CAD1DD", "#462D1C", "#E0CDC5", "#3A393E", "#B5BED0", "#584436", "#9AAFC5"]}
        animated={true} 
        noiseLevel={0.3}
        width={640}
        height={240}
        rounded={false}
        className="shadow-2xl absolute top-0 left-40" 
      />
      */}

      {/* Gradient Preview */}
      {/*
      <div className="lg:col-span-2">
        <div
          className="w-full aspect-[16/9] rounded-3xl shadow-lg"
          style={{
          background: `linear-gradient(180deg, 
          #2d1b0f 0%, 
          #4a3426 20%, 
          #6b4d3a 30%, 
          #8a6b5a 45%, 
          #a8897a 60%, 
          #c4a89a 75%, 
          #dcc7ba 90%, 
          #f0e6da 100%)`,
          }}
        />
      </div>
      */}
      
      {/* Hero Section */}
      <section className="flex-grow mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 pt-40 container">
        <h1 className="mb-4 py-8 pt-4 text-7xl text-gray-900 font-bold space-mono-bold">Quentin Lecomte</h1>
        <p className="text-xl mb-4 text-gray-800">Data Engineer</p>
        <p className="text-lg mb-8 text-gray-700 max-w-2xl">
          Engineering graduate specialized in Artificial Intelligence, with expertise in Data Science, 
          Data Engineering, Cloud and DevOps. Based in France, with professional experience in Switzerland.
        </p>
        
        {/* Social Links */}
        <div className="flex gap-6 mb-12">
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
      </section>

      {/* Projects Section */}
      <section className="w-full py-16">
        <div className="mx-auto w-[95%] lg:w-[90%] xl:w-[85%] px-4">
          <h2 className="text-3xl text-gray-900 font-bold mb-8">What I'm working on</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard title="Stock Picker" description="A tool to help you pick stocks based on fundamental data and AI" technologies={["Python", "Selenium", "Pandas", "PostgreSQL"]} link="./projects/dataset" />
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
            <ProjectCard title="Implied Volatility" description="An interactive implied volatility calculator using Python and Streamlit." technologies={["Python", "Streamlit"]} link="./projects/implied-volatility" />
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