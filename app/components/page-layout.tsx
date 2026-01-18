import React from 'react';
import NavBar from './nav-bar';
import Footer from './nav-footer';

interface PageLayoutProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
  showNav?: boolean;
}

/**
 * Shared page layout component for consistent structure across all pages
 * Handles NavBar, Footer, and theme-aware styling
 */
const PageLayout = ({ children, theme = 'light', className = '', showNav = false }: PageLayoutProps) => {
  const themeClass = theme === "dark" ? "dark" : "";
  const bgClass = theme === 'dark'
    ? 'bg-gradient-darker'
    : 'bg-background';

  return (
    <div className={`w-full flex flex-col min-h-screen ${themeClass} ${bgClass} ${className} space-mono-regular text-foreground`}>
      {showNav ? <NavBar /> : null}
      <main className="flex-grow">
        {children}
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default PageLayout;
