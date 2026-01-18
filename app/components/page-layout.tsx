import React from 'react';
import NavBar from './nav-bar';
import Footer from './nav-footer';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  showNav?: boolean;
}

/**
 * Shared page layout component for consistent structure across all pages
 * Handles NavBar, Footer, and theme-aware styling
 */
const PageLayout = ({ children, className = '', showNav = false }: PageLayoutProps) => {
  return (
    <div className={`w-full flex flex-col min-h-screen bg-background ${className} space-mono-regular text-foreground`}>
      {showNav ? <NavBar /> : null}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
