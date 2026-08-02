// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Skill', 'Project', 'Contact'];

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 text-slate-900 backdrop-blur-sm border-b border-slate-200/70 shadow-sm transition-colors duration-300 dark:bg-bgDark/80 dark:text-textPrimary dark:border-white/5 dark:shadow-md">
      <div className="container py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-extrabold text-primary flex items-center">
          Yubz<span className="w-1.5 h-1.5 bg-accent rounded-full ml-1"></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-textSecondary dark:hover:text-textPrimary"
            >
              {item}
            </a>
          ))}

          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-slate-300/70 bg-white/80 p-2 text-slate-700 shadow-sm transition-all hover:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-textPrimary"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-slate-300/70 bg-white/80 p-2 text-slate-700 shadow-sm transition-all dark:border-white/10 dark:bg-white/10 dark:text-textPrimary"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 dark:text-textPrimary">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white/95 border-b border-slate-200/70 py-6 flex flex-col items-center gap-6 md:hidden dark:bg-bgDark/95 dark:border-white/5">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-700 transition-colors hover:text-slate-900 dark:text-textSecondary dark:hover:text-textPrimary"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;