import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
      <nav className="py-4 px-6 flex justify-between items-center">
        <div className="text-gray-900 text-xl font-bold"></div>
        <div className="hidden md:block">
          <Link href="/" className="text-gray-700 hover:text-gray-900 mx-4">Home</Link>
          <Link href="/resume" className="text-gray-700 hover:text-gray-900 mx-4">Resume</Link>
          {/*<a href="/CV/CV_Quentin_Lecomte_FR_EN.pdf" download className="text-gray-700 hover:text-gray-900 mx-4">Download Resume</a>*/}
        </div>
        <div className="md:hidden">
          <button className="text-gray-900 focus:outline-none">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </nav>
    );
  };

export default NavBar;