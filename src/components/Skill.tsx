// src/components/Skill.tsx
import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';

const skills = [
  {
    category: 'Software & Web Development',
    desc: 'Creating responsive interfaces and robust standard OOP architectures.',
    techs: ['PHP','CSS','JavaScript','Laravel','React.js', 'TypeScript', 'Tailwind CSS', 'Node.js']
  },
  {
    category: 'Game Development',
    desc: 'Designing 2D mechanics, pixel art assets, and interactive turn-based logic.',
    techs: ['Godot 4', 'GDScript', 'Pygame', 'Aseprite']
  },
//   {
//     category: 'AI & Data Science',
//     desc: 'Implementing object detection models and processing data labeling for research.',
//     techs: ['Python', 'YOLO', 'OpenCV', 'Logistic Regression']
//   },
  {
    category: 'Tools & Hardware',
    desc: 'Proficient in development environments and computer hardware configuration.',
    techs: ['Git', 'Vite', 'VS Code', 'Aseprite', 'Figma', 'Godot Engine']
  }
];

const Skill: React.FC = () => {
  return (
    <section id="skill" className="section-container pt-24">
      <AnimatedWrapper>
        <h2 className="text-5xl font-extrabold text-textPrimary mb-8">Skills</h2>
        <div className="w-full h-px bg-white/10 mb-12"></div>

        {/* Layout Grid Baru (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-textPrimary mb-3">{skill.category}</h3>
              <p className="text-textSecondary mb-6 text-sm leading-relaxed">{skill.desc}</p>
              
              {/* Badge/Pill Container */}
              <div className="flex flex-wrap gap-3">
                {skill.techs.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-black/40 text-textSecondary text-sm rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default Skill;