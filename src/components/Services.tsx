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
            <h2 className="text-5xl font-extrabold leading-[1.2] mb-6">
              My Awesome <br /> Service
            </h2>
            <p className="text-textSecondary text-lg leading-relaxed max-w-lg">
              Eget malesuada tortor ut sed. Tincidunt viverra malesuada nisi vehicula vestibulum. Ut blandit fermentum, cursus nulla. Imperdiet neque mi convallis quis interdum sagittis.
            </p>
          </div>
        </div>
      </AnimatedWrapper>

      {/* Grid Kartu Layanan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedWrapper key={service.id} delay={0.1 + index * 0.15}>
            <div className="p-8 bg-bgCard/30 backdrop-blur-lg border border-white/5 rounded-2xl group hover:shadow-glow hover:-translate-y-2 transition-all duration-300">
              <img 
                src={`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&h=64&q=80&${service.id}`} 
                alt={service.title} 
                className="w-16 h-16 object-cover rounded-xl mb-6 border border-white/10"
              />
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-accent text-sm font-semibold">{service.projectCount}</p>
              
              <div className="mt-8 flex justify-end">
                 <button className="text-textPrimary group-hover:text-accent group-hover:translate-x-1.5 transition-all">
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