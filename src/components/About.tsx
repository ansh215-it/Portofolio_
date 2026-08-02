// src/components/About.tsx
import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';

const timelineData = [
  { year: '2022', title: 'Bachelor of Computer Science', subtitle: 'Universitas Diponegoro' },
  { year: '2025', title: 'Web Development Intern', subtitle: 'Diskominfo Semarang' },
  { year: '2026', title: 'Universitas Diponegoro Graduate', subtitle: 'GPA 3.71/4.00' },
];

const About: React.FC = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1tLKqdcgKb3eL3Jux53v8Ppyc4SwMJhv6/view?usp=sharing';

  return (
    <section id="about" className="section-container pt-24">
      <AnimatedWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold text-slate-900 transition-colors duration-300 dark:text-textPrimary">About Me</h2>
            <div className="w-full h-px bg-slate-300/80 my-6 transition-colors duration-300 dark:bg-white/10"></div>
            <p className="text-lg leading-relaxed text-slate-600 transition-colors duration-300 dark:text-textSecondary">
              I am an Informatics graduate with a keen interest in software development, programming, and design. I have experience developing various software projects and possess strong teamwork, adaptability, and a responsible approach to task completion. I am highly motivated to continuously learn new technologies and hone my skills to deliver effective and innovative solutions.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-slate-300/70 text-slate-800 transition-colors duration-300 hover:bg-slate-100/80 font-medium dark:border-white/20 dark:text-textPrimary dark:hover:bg-white/5"
              >
                My Resume
              </a>
            </div>
          </div>

          <div className="relative border-l border-slate-300/80 pl-8 space-y-12 transition-colors duration-300 dark:border-white/10">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-slate-800 transition-colors duration-300 dark:bg-white"></div>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <span className="text-sm font-mono min-w-[80px] text-slate-500 transition-colors duration-300 dark:text-textSecondary">{item.year}</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 dark:text-textPrimary">{item.title}</h3>
                    <p className="text-slate-600 transition-colors duration-300 dark:text-textSecondary">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default About;