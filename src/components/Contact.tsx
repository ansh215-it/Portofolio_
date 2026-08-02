// src/components/Contact.tsx
import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full pt-32 pb-16 px-6 md:px-12 relative overflow-hidden">
      <AnimatedWrapper>
        <div className="mb-16 h-px w-full bg-slate-300/80 transition-colors duration-300 dark:bg-white/20"></div>

        <div className="flex flex-col items-end justify-between gap-12 md:flex-row">
          <div className="text-sm text-slate-600 transition-colors duration-300 dark:text-textSecondary">
            © 2026. All rights reserved.
          </div>

          <div className="flex flex-col items-end gap-2">
            <a href="https://www.linkedin.com/in/ayyub-al-anshor-b57651374/" className="border-b border-transparent pb-1 text-4xl font-light text-slate-700 transition-colors duration-300 hover:border-slate-700 hover:text-slate-900 md:text-5xl dark:text-textSecondary dark:hover:border-white dark:hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com/ansh215-it" className="border-b border-transparent pb-1 text-4xl font-light text-slate-700 transition-colors duration-300 hover:border-slate-700 hover:text-slate-900 md:text-5xl dark:text-textSecondary dark:hover:border-white dark:hover:text-white">
              GitHub
            </a>
            <a href="mailto:ansh21568@gmail.com" className="mt-2 border-b border-slate-700 pb-1 text-3xl font-light text-slate-900 transition-colors duration-300 hover:text-slate-700 md:text-4xl dark:border-white dark:text-textPrimary dark:hover:text-white">
              ansh21568@gmail.com
            </a>
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default Contact;