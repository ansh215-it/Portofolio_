// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Skill', 'Project', 'Contact'];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bgDark/80 backdrop-blur-sm border-b border-white/5 shadow-md">
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-extrabold text-primary flex items-center">
          Yubz<span className="w-1.5 h-1.5 bg-accent rounded-full ml-1"></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-textSecondary hover:text-textPrimary transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-textPrimary">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-bgDark/95 border-b border-white/5 py-6 flex flex-col items-center gap-6 md:hidden">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                className="text-textSecondary hover:text-textPrimary transition-colors text-lg font-medium"
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