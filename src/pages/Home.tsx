// src/pages/Home.tsx
import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Contact = lazy(() => import('../components/Contact'));
const About = lazy(() => import('../components/About'));
const Project = lazy(() => import('../components/Project'));
const Skill = lazy(() => import('../components/Skill'));

const LoadingPlaceholder = () => <div className="min-h-screen"></div>;

interface HomeProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Home: React.FC<HomeProps> = ({ isDarkMode, onToggleTheme }) => {
  return (
    <>
      <Navbar isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
      <Hero />

      <Suspense fallback={<LoadingPlaceholder />}>
        <About />
        <Project />
        <Skill />
        <Contact />
      </Suspense>
    </>
  );
};

export default Home;