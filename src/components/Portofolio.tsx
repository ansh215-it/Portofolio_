// src/components/Portfolio.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import AnimatedWrapper from './AnimatedWrapper';

const Portfolio: React.FC = () => {
  return (
    <section id="portofolio" className="section-container relative">
      <AnimatedWrapper yOffset={30}>
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-5xl font-extrabold leading-[1.2] text-slate-900 transition-colors duration-300 dark:text-textPrimary">
            Our Portofolio
          </h2>
          <a href="#" className="group inline-flex items-center gap-2.5 text-lg font-medium text-slate-700 transition-colors duration-300 dark:text-textPrimary">
            See All
            <ArrowRight className="text-accent transition-transform group-hover:translate-x-1" size={20} />
          </a>
        </div>
      </AnimatedWrapper>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <AnimatedWrapper key={project.id} delay={0.1 + index * 0.1} yOffset={30}>
            <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 shadow-sm transition-all duration-300 group hover:shadow-glow dark:border-white/5 dark:bg-bgCard dark:shadow-card">
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-1 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-primary dark:text-textPrimary">{project.name}</h3>
                <p className="text-sm text-slate-600 transition-colors duration-300 dark:text-textSecondary">{project.category}</p>
              </div>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;