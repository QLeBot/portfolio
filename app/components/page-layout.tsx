import React from 'react';
import NavBar from './nav-bar';
import Footer from './nav-footer';

interface PageLayoutProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
}

/**
 * Shared page layout component for consistent structure across all pages
 * Handles NavBar, Footer, and theme-aware styling
 */
const PageLayout = ({ children, theme = 'light', className = '' }: PageLayoutProps) => {
  const bgClass = theme === 'dark' 
    ? 'bg-gradient-darker space-mono-regular' 
    : 'bg-white space-mono-regular';

  return (
    <div className={`w-full flex flex-col min-h-screen ${bgClass} ${className}`}>
      <NavBar theme={theme} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default PageLayout;
