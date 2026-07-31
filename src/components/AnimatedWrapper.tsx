// src/components/AnimatedWrapper.tsx
import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedWrapperProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children, delay = 0, yOffset = 50 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;