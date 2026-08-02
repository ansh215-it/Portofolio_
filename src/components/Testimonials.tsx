// src/components/Testimonials.tsx
import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedWrapper from './AnimatedWrapper';

const testimonials = [
  {
    id: 1,
    text: 'Stefan is a profesional worker who always gives results that are beyond our expectations, thanks for your services.',
    name: 'Jasmin',
    title: 'Businessman',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&facepad=2&w=150&h=150&q=80',
  },
  {
    id: 2,
    text: 'Working with Stefan was a wonderful experience. His design skills are unmatched.',
    name: 'Alex',
    title: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&facepad=2&w=150&h=150&q=80',
  },
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[currentSlide];

  return (
    <section id="testimonials" className="section-container">
      <AnimatedWrapper yOffset={30}>
        <div className="mb-16">
          <h2 className="text-5xl font-extrabold leading-[1.2] text-slate-900 transition-colors duration-300 dark:text-textPrimary">Testimonials</h2>
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper yOffset={30} delay={0.1}>
        <div className="relative rounded-3xl border border-slate-200/70 bg-white/90 p-12 backdrop-blur transition-colors duration-300 md:p-16 dark:border-white/5 dark:bg-bgCard">
          <Quote className="absolute -left-6 -top-6 h-16 w-16 rounded-full border border-slate-300/70 bg-slate-100 p-4 text-primary transition-colors duration-300 dark:border-white/10 dark:bg-bgDark" />

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="space-y-10 md:col-span-7">
              <p className="text-4xl font-extrabold leading-[1.2] text-slate-900 transition-colors duration-300 md:text-5xl dark:text-textPrimary">
                {testimonial.text}
              </p>

              <div className="flex items-center justify-between border-t border-slate-300/70 pt-10 transition-colors duration-300 dark:border-white/5">
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="h-16 w-16 rounded-full" />
                  <div>
                    <p className="text-xl font-bold text-slate-900 transition-colors duration-300 dark:text-textPrimary">{testimonial.name}</p>
                    <p className="text-sm text-slate-600 transition-colors duration-300 dark:text-textSecondary">{testimonial.title}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={prevSlide} className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300/70 bg-slate-100 text-slate-600 transition-all hover:border-slate-700 hover:text-slate-900 dark:border-white/10 dark:bg-bgDark dark:text-textSecondary dark:hover:border-textPrimary dark:hover:text-textPrimary">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextSlide} className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300/70 bg-slate-100 text-slate-600 transition-all hover:border-slate-700 hover:text-slate-900 dark:border-white/10 dark:bg-bgDark dark:text-textSecondary dark:hover:border-textPrimary dark:hover:text-textPrimary">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&facepad=2&w=800&h=800&q=80"
                alt="Stefan William"
                className="h-[300px] w-[300px] rounded-3xl border border-slate-200/70 object-cover shadow-xl transition-colors duration-300 md:h-[350px] md:w-[350px] dark:border-white/5"
              />
            </div>
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default Testimonials;