import React from 'react';

const Footer = () => {
    return (
      <footer className="py-6 px-6 .sticky .bottom-0">
        <div className="flex justify-between items-center">
          <div className="text-black">&copy; 2024</div>
          <div className="hidden md:block">
            <a href="#" className="text-black hover:text-white mx-4">Info</a>
            <a href="#" className="text-black hover:text-white mx-4">About</a>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;