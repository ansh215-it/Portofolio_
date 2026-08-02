// src/components/Skill.tsx
import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';

const skills = [
  {
    category: 'Software & Web Development',
    desc: 'Creating responsive interfaces and robust standard OOP architectures.',
    techs: ['PHP', 'CSS', 'JavaScript', 'Laravel', 'React.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  },
  {
    category: 'Game Development',
    desc: 'Designing 2D mechanics, pixel art assets, and interactive turn-based logic.',
    techs: ['Godot 4', 'GDScript', 'Pygame', 'Aseprite'],
  },
  {
    category: 'Tools & Hardware',
    desc: 'Proficient in development environments and computer hardware configuration.',
    techs: ['Git', 'Vite', 'VS Code', 'Aseprite', 'Figma', 'Godot Engine'],
  },
];

const Skill: React.FC = () => {
  return (
    <section id="skill" className="section-container pt-24">
      <AnimatedWrapper>
        <h2 className="text-5xl font-extrabold mb-8 text-slate-900 transition-colors duration-300 dark:text-textPrimary">Skills</h2>
        <div className="w-full h-px bg-slate-300/80 mb-12 transition-colors duration-300 dark:bg-white/10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-slate-200/70 bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/70 dark:border-white/5 dark:bg-white/5 dark:hover:border-white/20"
            >
              <h3 className="text-2xl font-bold mb-3 text-slate-900 transition-colors duration-300 dark:text-textPrimary">{skill.category}</h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-600 transition-colors duration-300 dark:text-textSecondary">{skill.desc}</p>

              <div className="flex flex-wrap gap-3">
                {skill.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-slate-300/70 bg-slate-100/80 px-4 py-2 text-sm text-slate-700 transition-colors duration-300 dark:border-white/10 dark:bg-black/40 dark:text-textSecondary"
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