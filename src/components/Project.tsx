// src/components/Project.tsx
import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import projectQuestlime from "../assets/Questlime.png";

const projects = [
  {
    title: 'Questlime Adventure',
    desc: 'An educational turn-based 2D game featuring pixel art mechanics to make learning interactive. Designed using standard object-oriented programming (OOP) principles and validated through System Usability Scale (SUS) testing.',
    tech: ['Godot 4.6', 'GDScript', 'Aseprite'],
    image: projectQuestlime
  },
  {
    title: 'Intelligent Parking and Helmet Detection',
    desc: 'Object detection model to identify helmets and manage parking seamlessly. Built using visual data processing and logistic regression modeling for academic data labeling.',
    tech: ['Python', 'YOLO', 'OpenCV', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1573431526435-0210287ff122?auto=format&fit=crop&w=800&q=80'
  }
];

const Project: React.FC = () => {
  return (
    <section id="project" className="section-container pt-24">
      <AnimatedWrapper>
        <h2 className="text-5xl font-extrabold text-textPrimary mb-8">Notable Projects</h2>
        <div className="w-full h-px bg-white/10 mb-12"></div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 bg-[#1a1a1a] hover:bg-[#222] rounded-3xl border border-white/5 transition-all"
            >
              {/* Kiri: Detail Proyek */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#8b5cf6]">
                  {project.title}
                </h3>
                <p className="text-textSecondary leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-sm font-medium text-textSecondary bg-white/5 px-4 py-1.5 rounded-md border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Kanan: Gambar Proyek */}
              <div className="w-full md:w-[400px] h-[250px] rounded-2xl overflow-hidden shrink-0 border border-white/10 relative group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default Project;