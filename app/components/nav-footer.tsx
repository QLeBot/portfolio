"use client"

import * as React from "react"

const Footer = () => {
    return (
      <footer className="py-6 px-6 pt-20 .sticky .bottom-0 text-light">
        <div className="flex justify-between items-center">
          <div>&copy; 2024</div>
          <div className="hidden md:block">
            <a href="#" className="hover:text-dark mx-4">Info</a>
            <a href="#" className="hover:text-dark mx-4">About</a>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;