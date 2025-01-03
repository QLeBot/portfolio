import React from 'react';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/nav-footer';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPython, SiMongodb } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

const DatasetPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-gradient-darker space-mono-regular">
      <NavBar />
      
      {/* Project Header */}
      <section className="flex-grow mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 pt-40 container">
        <h1 className="mb-4 py-8 pt-4 text-7xl text-stone-200 font-bold space-mono-bold">Dataset</h1>
        <p className="text-xl mb-4 text-stone-200">A comprehensive platform for developing and deploying AI-powered applications</p>
        <p className="text-lg mb-8 text-stone-200 max-w-2xl">
          Creating a centralized platform for AI models using pay-as-you-go API and running local models
        </p>
      </section>

      {/* Project Context */}
      <section className="w-full py-16">
        <div className="mx-auto w-[95%] lg:w-[90%] xl:w-[85%] px-4">
          <h2 className="text-3xl text-light font-bold mb-8">Project Context</h2>
          <div className="bg-uni-slate-light p-6 rounded-lg shadow-md">
            <p className="text-light">
              This project was developed to address the growing need for accessible AI tools
              and services. It aims to bridge the gap between complex AI technologies and
              practical business applications.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="w-full py-16">
        <div className="mx-auto w-[95%] lg:w-[90%] xl:w-[85%] px-4">
          <h2 className="text-3xl text-light font-bold mb-8">Technical Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-uni-slate-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-light font-bold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <SiTypescript className="w-8 h-8 text-blue-500" />
                  <span className="text-sm mt-1 text-light">TypeScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiNextdotjs className="w-8 h-8 text-light" />
                  <span className="text-sm mt-1 text-light">Next.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaReact className="w-8 h-8 text-blue-400" />
                  <span className="text-sm mt-1 text-light">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiTailwindcss className="w-8 h-8 text-cyan-400" />
                  <span className="text-sm mt-1 text-light">Tailwind</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiPython className="w-8 h-8 text-blue-500" />
                  <span className="text-sm mt-1 text-light">Python</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiMongodb className="w-8 h-8 text-green-500" />
                  <span className="text-sm mt-1 text-light">MongoDB</span>
                </div>
              </div>
            </div>
            <div className="bg-uni-slate-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-light font-bold mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-light">
                <li>Real-time AI model inference</li>
                <li>Scalable architecture</li>
                <li>API integration capabilities</li>
                <li>Advanced monitoring and analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DatasetPage;