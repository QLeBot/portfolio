"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface NavBarProps {
  theme?: 'light' | 'dark';
}

const NavBar = ({ theme = 'light' }: NavBarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const textColor = theme === 'dark' 
    ? 'text-stone-200 hover:text-white' 
    : 'text-gray-700 hover:text-gray-900';
  
  const textColorMobile = theme === 'dark' 
    ? 'text-stone-200' 
    : 'text-gray-900';

  return (
    <nav className="py-4 px-6 flex justify-between items-center relative z-50">
      <div className={`${textColorMobile} text-xl font-bold space-mono-bold`}>
        <Link href="/">QL</Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className={`${textColor} transition-colors space-mono-regular`}>
          Home
        </Link>
        <Link href="/resume" className={`${textColor} transition-colors space-mono-regular`}>
          Resume
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`${textColorMobile} focus:outline-none transition-transform`}
          aria-label="Toggle menu"
        >
          <svg 
            className="h-6 w-6" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-white dark:bg-slate-800 border-t border-gray-200 shadow-lg">
          <div className="flex flex-col py-4">
            <Link 
              href="/" 
              className={`${textColor} px-6 py-2 transition-colors space-mono-regular`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/resume" 
              className={`${textColor} px-6 py-2 transition-colors space-mono-regular`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;