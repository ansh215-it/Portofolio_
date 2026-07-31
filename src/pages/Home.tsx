// src/pages/Home.tsx
import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Gunakan 'lazy loading' untuk komponen di bawah lipatan untuk performa
// const Services = lazy(() => import('../components/Services'));
// const Portfolio = lazy(() => import('../components/Portofolio'));
// const Testimonials = lazy(() => import('../components/Testimonials'));
const Contact = lazy(() => import('../components/Contact'));
const About = lazy(() => import('../components/About'));
const Project = lazy(() => import('../components/Project'));
const Skill = lazy(() => import('../components/Skill'));


// Komponen pemuatan placeholder
const LoadingPlaceholder = () => <div className="min-h-screen"></div>;

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Bungkus komponen yang dimuat lambat dalam Suspense */}
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