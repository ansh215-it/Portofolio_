// src/components/Portfolio.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import AnimatedWrapper from './AnimatedWrapper';

const Portfolio: React.FC = () => {
  return (
    <section id="portofolio" className="section-container relative">
      <AnimatedWrapper yOffset={30}>
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-5xl font-extrabold leading-[1.2]">
            Our Portofolio
          </h2>
          <a href="#" className="inline-flex items-center gap-2.5 text-lg font-medium text-textPrimary group">
            See All 
            <ArrowRight className="text-accent group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </AnimatedWrapper>

      {/* Grid Proyek */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <AnimatedWrapper key={project.id} delay={0.1 + index * 0.1} yOffset={30}>
            <div className="overflow-hidden bg-bgCard border border-white/5 rounded-3xl group shadow-card hover:shadow-glow transition-all duration-300">
              {/* Gambar Pratinjau */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Info Proyek */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-textSecondary text-sm">{project.category}</p>
              </div>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;