import React from 'react';

const NavBar = () => {
    return (
      <nav className="py-4 px-6 flex justify-between items-center">
        <div className="text-black text-xl font-bold">My Portfolio</div>
        <div className="hidden md:block">
          <a href="#" className="text-black hover:text-white mx-4">Home</a>
          <a href="#" className="text-black hover:text-white mx-4">About</a>
          <a href="#" className="text-black hover:text-white mx-4">Projects</a>
          <a href="#" className="text-black hover:text-white mx-4">Contact</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </nav>
    );
  };

export default NavBar;