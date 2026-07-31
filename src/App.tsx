// src/App.tsx
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Efek Pemuatan Layar Awal
  useEffect(() => {
    // Simulasikan waktu pemuatan
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    // Matikan pemuatan jika situs web dimuat sebelumnya (opsional)
    // const handleLoad = () => setIsLoading(false);
    // window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      // window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-bgDark flex items-center justify-center z-[100]"
          >
            <motion.div
              animate={{ rotate: 360, transition: { duration: 1.5, repeat: Infinity, ease: "linear" } }}
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
          <Home />
        </motion.main>
      )}
    </>
  );
};

export default App;