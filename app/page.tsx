import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CardWithForm from './components/CardWithForm';
import { GeistSans } from 'geist/font/sans';
import { Github, Linkedin, Mail } from "lucide-react";
import ProjectCard from './components/CardWithForm';
import { 
  FaPython, FaDatabase, FaAws, FaMicrosoft, 
  FaReact, FaHtml5, FaCss3, FaJava, FaSwift, 
  FaAndroid 
} from 'react-icons/fa';
import { 
  SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, 
  SiMysql, SiOracle, SiPowerbi, SiTypescript, 
  SiJavascript, SiNextdotjs, SiTailwindcss, SiKotlin 
} from 'react-icons/si';

const PortfolioPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-gradient-to-bl from-neutral-300 to-yellow-800">
      <NavBar />
      
      {/* Hero Section */}
      <section className="flex-grow mx-auto w-full max-w-5xl px-4 py-20">
        <h1 className={`mb-4 text-5xl font-bold ${GeistSans.className}`}>Quentin Lecomte</h1>
        <p className="text-xl mb-4 font-geist">Data Engineer</p>
        <p className="text-lg mb-8 font-geist max-w-2xl">
          Engineering graduate specialized in Artificial Intelligence, with expertise in Data Science, 
          Data Engineering, Cloud and DevOps. Based in France, with professional experience in Switzerland.
        </p>
        
        {/* Social Links */}
        <div className="flex gap-6 mb-12">
          <a href="https://www.linkedin.com/in/lecomte-quentin/" className="flex items-center gap-2 hover:text-gray-600">
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/QLeBot" className="flex items-center gap-2 hover:text-gray-600">
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
          <a href="mailto:lecomteq.ql@gmail.com" className="flex items-center gap-2 hover:text-gray-600">
            <Mail className="w-6 h-6" />
            <span>Email</span>
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full flex-grow bg-white/90 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className={`text-3xl font-bold mb-8 ${GeistSans.className}`}>Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-300 -translate-x-1/2"></div>
            
            {/* Experience Items */}
            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
                <div className="w-full md:w-[calc(50%-20px)]">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Data Engineer</h3>
                    <p className="text-gray-600 font-semibold mb-1">Company Name</p>
                    <p className="text-gray-500 mb-2">Geneva, Switzerland</p>
                    <p className="text-sm text-gray-400">Jan 2023 - Present</p>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2"></div>
              </div>

              {/* Experience Item 2 (Copy and modify for additional experiences) */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
                <div className="w-full md:w-[calc(50%-20px)]">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Data Science Intern</h3>
                    <p className="text-gray-600 font-semibold mb-1">Previous Company</p>
                    <p className="text-gray-500 mb-2">Paris, France</p>
                    <p className="text-sm text-gray-400">Jun 2022 - Dec 2022</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className={`text-3xl font-bold mb-8 ${GeistSans.className}`}>Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Data Science & AI */}
            <div className="bg-white/90 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Data Science & AI</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <FaPython className="w-8 h-8 text-blue-500" />
                  <span className="text-sm mt-1">Python</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiTensorflow className="w-8 h-8 text-orange-500" />
                  <span className="text-sm mt-1">TensorFlow</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiPytorch className="w-8 h-8 text-red-500" />
                  <span className="text-sm mt-1">PyTorch</span>
                </div>
              </div>
            </div>

            {/* Data Engineering */}
            <div className="bg-white/90 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Data Engineering</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <FaDatabase className="w-8 h-8 text-gray-600" />
                  <span className="text-sm mt-1">SQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiMongodb className="w-8 h-8 text-green-500" />
                  <span className="text-sm mt-1">MongoDB</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiPostgresql className="w-8 h-8 text-blue-400" />
                  <span className="text-sm mt-1">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiMysql className="w-8 h-8 text-blue-600" />
                  <span className="text-sm mt-1">MySQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiOracle className="w-8 h-8 text-red-600" />
                  <span className="text-sm mt-1">Oracle</span>
                </div>
              </div>
            </div>

            {/* Cloud */}
            <div className="bg-white/90 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Cloud</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <FaMicrosoft className="w-8 h-8 text-blue-500" />
                  <span className="text-sm mt-1">Azure</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaAws className="w-8 h-8 text-orange-500" />
                  <span className="text-sm mt-1">AWS</span>
                </div>
              </div>
            </div>

            {/* Data Analysis & Visualization */}
            <div className="bg-white/90 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Data Analysis & Visualization</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <SiPowerbi className="w-8 h-8 text-yellow-500" />
                  <span className="text-sm mt-1">Power BI</span>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-white/90 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <FaHtml5 className="w-8 h-8 text-orange-600" />
                  <span className="text-sm mt-1">HTML5</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaCss3 className="w-8 h-8 text-blue-600" />
                  <span className="text-sm mt-1">CSS3</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiJavascript className="w-8 h-8 text-yellow-400" />
                  <span className="text-sm mt-1">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiTypescript className="w-8 h-8 text-blue-600" />
                  <span className="text-sm mt-1">TypeScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaReact className="w-8 h-8 text-blue-400" />
                  <span className="text-sm mt-1">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiNextdotjs className="w-8 h-8 text-black" />
                  <span className="text-sm mt-1">Next.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiTailwindcss className="w-8 h-8 text-cyan-400" />
                  <span className="text-sm mt-1">Tailwind</span>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="bg-white/90 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Mobile Development</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <FaSwift className="w-8 h-8 text-orange-500" />
                  <span className="text-sm mt-1">Swift</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiKotlin className="w-8 h-8 text-purple-600" />
                  <span className="text-sm mt-1">Kotlin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full bg-white/90 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className={`text-3xl font-bold mb-8 ${GeistSans.className}`}>Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard title="Project 1" description="Description 1" technologies={["Python", "Pandas", "SQL"]} link="https://example.com" />
            <ProjectCard title="Project 2" description="Description 2" technologies={["Python", "Pandas", "SQL"]} link="https://example.com" />
            <ProjectCard title="Project 3" description="Description 3" technologies={["Python", "Pandas", "SQL"]} link="https://example.com" />
            <ProjectCard title="Project 4" description="Description 4" technologies={["Python", "Pandas", "SQL"]} link="https://example.com" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;