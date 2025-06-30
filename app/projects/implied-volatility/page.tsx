import React from 'react';
import NavBar from '../../components/nav-bar';
import Footer from '../../components/nav-footer';
import { SiPython, SiGithub, SiStreamlit, SiNumpy, SiPlotly, SiScipy, SiPandas} from 'react-icons/si';
import { TbApi } from "react-icons/tb";

const ImpliedVolatilityPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-gradient-darker space-mono-regular">
      
      {/* Project Header */}
      <section className="flex-grow mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 pt-40 container">
        <h1 className="mb-4 py-8 pt-4 text-7xl text-stone-200 font-bold space-mono-bold">Implied Volatility Surface Dashboard</h1>
        <p className="text-xl mb-4 text-stone-200">A Streamlit-based dashboard for visualizing and analyzing implied volatility surfaces for options. This tool helps traders and analysts understand market expectations and potential arbitrage opportunities through interactive visualization of option implied volatilities.</p>

        <div className="flex flex-row items-center">
            <a href="https://github.com/QLeBot/Implied_Volatility" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <SiGithub className="w-8 h-8 text-light" />
                <span className="text-sm text-light ml-2">View on GitHub</span>
            </a>
        </div>
      </section>

      {/* Project Context */}
      <section className="w-full py-16">
        <div className="mx-auto w-[95%] lg:w-[90%] xl:w-[85%] px-4">
          <h2 className="text-3xl text-light font-bold mb-8">Project Context</h2>
          <div className="bg-uni-slate-light p-6 rounded-lg shadow-md">
            <p className="text-light">
                Explore and visualize the implied volatility surface for options.
                This tool helps traders and analysts understand market expectations and potential arbitrage opportunities through interactive visualization of option implied volatilities.
            </p>
            {/*<br />
            <p className="text-light">
                The Black-Scholes model is a mathematical model used to price options. It is a popular model in the field of finance and is used to price options on stocks, futures, and other financial instruments.
                The model is named after Fischer Black and Myron Scholes, who developed the model in 1973.
                The model is based on the assumption that the price of the underlying asset follows a geometric Brownian motion.
                The model is also based on the assumption that the option is a European option, meaning that it can only be exercised at the expiration date.
                The model is also based on the assumption that the risk-free rate is constant.
                The model is also based on the assumption that the volatility of the underlying asset is constant.
            </p>*/}
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
              <div className="space-y-4">
                {/* First row */}
                <div className="flex justify-start gap-8">
                  <div className="flex flex-col items-center">
                    <SiPython className="w-8 h-8 text-white" />
                    <span className="text-sm mt-1 text-light">Python</span>
                  </div>
                </div>
                
                {/* Second row */}
                <div className="flex justify-start gap-8">
                  <div className="flex flex-col items-center">
                    <SiPandas className="w-8 h-8 text-white" />
                    <span className="text-sm mt-1 text-light">Pandas</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiNumpy className="w-8 h-8 text-white" />
                    <span className="text-sm mt-1 text-light">Numpy</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiPlotly className="w-8 h-8 text-white" />
                    <span className="text-sm mt-1 text-light">Plotly</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiScipy className="w-8 h-8 text-white" />
                    <span className="text-sm mt-1 text-light">Scipy</span>
                  </div>
                </div>

                {/* Third row */}
                <div className="flex justify-start gap-8">
                    <div className="flex flex-col items-center">
                        <SiStreamlit className="w-8 h-8 text-white" />
                        <span className="text-sm mt-1 text-light">Streamlit</span>
                    </div>
                </div>

                {/* Fourth row */}
                <div className="flex justify-start gap-8">
                  <div className="flex flex-col items-center">
                    <TbApi className="w-8 h-8 text-white" />
                    <span className="text-sm mt-1 text-light">Yahoo Finance API</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-uni-slate-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-light font-bold mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-light">
                <li>Interactive 3D visualization of implied volatility surfaces</li>
                <li>Real-time option data fetching using Yahoo Finance API</li>
                <li>Black-Scholes option pricing model implementation</li>
                <li>Implied volatility calculation using Brent's method</li>
                <li>Convexity violation detection for arbitrage opportunities</li>
                <li>Surface quality metrics</li>
                <li>Customizable parameters: </li>
                <ul className="list-disc list-inside space-y-2 text-light">
                    <li>Risk-free rate</li>
                    <li>Dividend yield</li>
                    <li>Strike price range</li>
                    <li>Option type (CALL or PUT)</li>
                    <li>Y-axis display (Strike Price/Moneyness)</li>
                </ul>
                <li>Adjustments for generating heatmaps of both prices and P&L</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="w-full py-16">
        <div className="mx-auto w-[95%] lg:w-[90%] xl:w-[85%] px-4">
          <h2 className="text-3xl text-light font-bold mb-8">Next Steps</h2>
          <p className="text-light">
            This project is a work in progress and will continue to evolve.
          </p>
          {/* line break */}
          <br />
          <ul className="list-disc list-inside space-y-2 text-light">
            <li>Add more options to the dashboard</li>
            <li>Add more features to the dashboard</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpliedVolatilityPage;