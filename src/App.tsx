// src/App.tsx
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return true;

    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-slate-50 text-slate-900 dark:bg-bgDark dark:text-textPrimary flex items-center justify-center z-[100]"
          >
            <motion.div
              animate={{ rotate: 360, transition: { duration: 1.5, repeat: Infinity, ease: 'linear' } }}
              className="text-4xl font-extrabold text-primary flex items-center"
            >
              S<span className="w-1.5 h-1.5 bg-accent rounded-full ml-1"></span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Home isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
        </motion.main>
      )}
    </>
  );
};

export default App;