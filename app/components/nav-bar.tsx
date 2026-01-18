"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from "@/app/components/theme-toggle";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const baseHref = "/";
  const links = [
    { label: "About", href: `${baseHref}#about` },
    { label: "Projects", href: `${baseHref}#projects` },
    { label: "Blog", href: `${baseHref}#blog` },
    { label: "Resume", href: `${baseHref}#resume` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end items-center">
        {/* Desktop Navigation (right aligned) */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors space-mono-regular"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground focus:outline-none transition-transform"
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
          <div className="absolute top-full left-0 right-0 md:hidden bg-background border-t border-border shadow-lg">
            <div className="flex flex-col py-4">
              <div className="px-6 pb-3">
                <ThemeToggle />
              </div>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground px-6 py-2 transition-colors space-mono-regular"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;