import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CardWithForm from './components/CardWithForm';
import { GeistSans } from 'geist/font/sans';

const PortfolioPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-bl from-neutral-300 to-yellow-800">
      <NavBar />
      {/* Title Section */}
      <div className="flex-grow mx-10 py-20">
        <h1 className="mb-4 text-4xl font-bold ${GeistSans.className}">Quentin Lecomte</h1>
        <p className="text-lg mb-8 font-geist">Data Engineer with a background in Data Science & AI</p>
      </div>
      {/* Cards Section */}
      <div className="flex-grow mx-5 py-20 grid grid-cols-2 gap-8">
        <CardWithForm />
        <CardWithForm />
        <CardWithForm />
        <CardWithForm />
        <CardWithForm />
        <CardWithForm />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;