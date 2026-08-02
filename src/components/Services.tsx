// src/components/Services.tsx
import React from 'react';
import { services } from '../data/services';
import AnimatedWrapper from './AnimatedWrapper';

const Services: React.FC = () => {
  return (
    <section id="services" className="section-container relative">
      <AnimatedWrapper yOffset={30}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
          <div className="md:col-span-5">
            <h2 className="text-5xl font-extrabold leading-[1.2] mb-6 text-slate-900 transition-colors duration-300 dark:text-textPrimary">
              My Awesome <br /> Service
            </h2>
            <p className="text-lg leading-relaxed max-w-lg text-slate-600 transition-colors duration-300 dark:text-textSecondary">
              Eget malesuada tortor ut sed. Tincidunt viverra malesuada nisi vehicula vestibulum. Ut blandit fermentum, cursus nulla. Imperdiet neque mi convallis quis interdum sagittis.
            </p>
          </div>
        </div>
      </AnimatedWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedWrapper key={service.id} delay={0.1 + index * 0.15}>
            <div className="p-8 rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-lg shadow-sm transition-all duration-300 group hover:-translate-y-2 hover:shadow-glow dark:border-white/5 dark:bg-bgCard/30 dark:shadow-none">
              <img
                src={`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80&${service.id}`}
                alt={service.title}
                className="w-16 h-16 object-cover rounded-xl mb-6 border border-slate-300/70 dark:border-white/10"
              />
              <h3 className="text-2xl font-bold mb-2 text-slate-900 transition-colors duration-300 dark:text-textPrimary">{service.title}</h3>
              <p className="text-sm font-semibold text-accent">{service.projectCount}</p>

              <div className="mt-8 flex justify-end">
                <button className="text-slate-800 transition-all group-hover:text-accent group-hover:translate-x-1.5 dark:text-textPrimary">
                  →
                </button>
              </div>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
};

export default Services;