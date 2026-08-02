// src/components/Project.tsx
import React from 'react';
import AnimatedWrapper from './AnimatedWrapper'; // Dinyalakan kembali!
import projectQuestlime from "../assets/Questlime.png";
import projectHelmetDetection from "../assets/detection_helm.png";
import projectMonteCarlo from "../assets/monte_carlo.png";
import projectwebsiteakademik from "../assets/login_web_akademik.png";
import icon_Github from "../assets/github.svg";

const projects = [
  {
    title: 'Questlime Adventure',
    desc: 'An educational turn-based 2D game featuring pixel art mechanics to make learning interactive. Designed using standard object-oriented programming (OOP) principles and validated through System Usability Scale (SUS) testing.',
    tech: ['Godot 4.6', 'GDScript', 'Aseprite'],
    image: projectQuestlime,
    githubLink: 'https://github.com/ansh215-it/Questlime_Adventure'
  },
  {
    title: 'Intelligent Parking and Helmet Detection',
    desc: 'Object detection model to identify helmets. Built using visual data processing and logistic regression modeling for academic data labeling.',
    tech: ['Python', 'YOLO', 'OpenCV', 'Machine Learning'],
    image: projectHelmetDetection,
    githubLink: 'https://github.com/ansh215-it/Detection_Helmet'
  },
  {
    title: 'Monte Carlo Simulation Monster Chase NPC',
    desc: 'A comprehensive Monte Carlo simulation tool for modeling and analyzing the behavior of a monster chase NPC in a game environment. Utilizes statistical methods to predict outcomes and optimize game mechanics.',
    tech: ['Python', 'NumPy', 'Matplotlib', 'Simulation'],
    image: projectMonteCarlo,
    githubLink: 'https://github.com/ansh215-it/MonteCarlo_Implementation'
  },
  {
    title: 'SAKURA (Sistem Analisis Kuliah Unggul dan Rekapitulasi Akademik)',
    desc: 'A secure and user-friendly login system for an academic website, featuring role-based access control and data validation.',
    tech: ['PHP', 'JavaScript', 'CSS', 'Bootstrap', 'MySQL','Laravel'],
    image: projectwebsiteakademik,
    githubLink: 'https://github.com/ansh215-it/Website_Project_PBP_Akademik'
  }
];

const Project: React.FC = () => {
  return (
    <section id="project" className="section-container pt-24">
      <AnimatedWrapper>
        {/* Teks Judul: Hitam di Light Mode, Putih/textPrimary di Dark Mode */}
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-textPrimary mb-8 transition-colors">
          Notable Projects
        </h2>
        
        {/* Garis Pembatas: Abu-abu di Light, Putih Transparan di Dark */}
        <div className="w-full h-px bg-gray-300 dark:bg-white/10 mb-12 transition-colors"></div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start gap-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:bg-gray-50 dark:border-white/5 dark:bg-[#1a1a1a] dark:shadow-none dark:hover:bg-[#222] lg:flex-row lg:items-center lg:p-8"
            >
              <div className="w-full flex-1 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3 lg:items-center">
                  <h3 className="text-2xl font-bold text-purple-600 transition-colors md:text-3xl dark:text-[#8b5cf6]">
                    {project.title}
                  </h3>

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-0 inline-flex shrink-0 items-center justify-center rounded-full bg-gray-800 p-1.5 shadow-md transition-all hover:scale-110 hover:bg-black dark:bg-white/90 dark:hover:bg-white"
                      title="View Source on GitHub"
                    >
                      <img
                        src={icon_Github}
                        alt="GitHub Repository"
                        className="h-6 w-6 opacity-90 invert dark:opacity-80 dark:invert-0"
                      />
                    </a>
                  )}
                </div>

                <p className="leading-relaxed text-gray-600 transition-colors dark:text-textSecondary">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-gray-200 bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-textSecondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="group relative h-[220px] w-full shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 transition-colors sm:h-[250px] lg:w-[360px] dark:border-white/10">
                <div className="absolute inset-0 z-10 bg-purple-500/10 transition-colors group-hover:bg-transparent dark:bg-primary/20"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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