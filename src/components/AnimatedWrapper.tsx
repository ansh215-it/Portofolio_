// src/components/AnimatedWrapper.tsx
import React, { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedWrapperProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children, delay = 0, yOffset = 50 }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (isMobile) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;