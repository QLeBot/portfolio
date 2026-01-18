"use client"

import * as React from "react"

const Footer = () => {
  return (
    <footer className="py-8 px-6 mt-auto text-muted-foreground space-mono-regular">
      <div className="mx-auto w-[95%] lg:w-[90%] xl:w-[85%]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Quentin Lecomte
          </div>
          <div className="text-sm text-center md:text-right">
            Data Engineer & AI Specialist
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;