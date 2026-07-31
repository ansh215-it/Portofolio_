// src/components/Testimonials.tsx
import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedWrapper from './AnimatedWrapper';

const testimonials = [
  { 
    id: 1, 
    text: "Stefan is a profesional worker who always gives results that are beyond our expectations, thanks for your services.",
    name: "Jasmin", 
    title: "Businessman",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&facepad=2&w=150&h=150&q=80"
  },
  { 
    id: 2, 
    text: "Working with Stefan was a wonderful experience. His design skills are unmatched.",
    name: "Alex", 
    title: "Project Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&facepad=2&w=150&h=150&q=80"
  }
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
          <h2 className="text-5xl font-extrabold leading-[1.2]">Testimonials</h2>
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper yOffset={30} delay={0.1}>
        <div className="p-12 md:p-16 bg-bgCard backdrop-blur border border-white/5 rounded-3xl relative">
          <Quote className="absolute -top-6 -left-6 text-primary w-16 h-16 p-4 bg-bgDark rounded-full border border-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Kolom Kiri: Teks */}
            <div className="md:col-span-7 space-y-10">
              <p className="text-4xl md:text-5xl font-extrabold leading-[1.2]">
                {testimonial.text}
              </p>
              
              <div className="flex items-center justify-between pt-10 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <p className="text-xl font-bold">{testimonial.name}</p>
                    <p className="text-textSecondary text-sm">{testimonial.title}</p>
                  </div>
                </div>

                {/* Kontrol Navigasi */}
                <div className="flex gap-4">
                  <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center bg-bgDark border border-white/10 rounded-full text-textSecondary hover:text-textPrimary hover:border-textPrimary transition-all">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center bg-bgDark border border-white/10 rounded-full text-textSecondary hover:text-textPrimary hover:border-textPrimary transition-all">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Gambar Foto */}
            <div className="md:col-span-5 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&facepad=2&w=800&h=800&q=80" 
                alt="Stefan William" 
                className="w-[300px] md:w-[350px] h-[300px] md:h-[350px] object-cover rounded-3xl shadow-xl border border-white/5"
              />
            </div>
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default Testimonials;