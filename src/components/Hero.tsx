// src/components/Hero.tsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';
import AnimatedWrapper from './AnimatedWrapper';
import profileImage from "../assets/R_ppp.jpg";

const Hero: React.FC = () => {
  return (
    <section id="home" className="section-container">
      <AnimatedWrapper>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
          
          {/* Kolom Kiri: Teks */}
          <div className="md:col-span-7 space-y-8">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Software Engineer <br />
              {/* Tambahkan h-[80px] atau md:h-[96px] agar tingginya terkunci */}
              <span className="text-primary block h-[60px] md:h-[120px] mt-2">
                <TypeAnimation
                  sequence={[
                    'Ayyub Al Anshor',
                    2000, 
                    'a Creative Thinker',
                    2000,
                    'a Problem Solver',
                    2000
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <div className="w-16 h-1 bg-accent/80 rounded-full my-4"></div>

            <p className="text-xl text-textSecondary max-w-xl">
              Developing modern web experiences, exploring intelligent solutions with Artificial Intelligence, and crafting engaging interactive applications.
            </p>

            <a href="#contact" className="inline-flex items-center gap-3 text-lg font-semibold text-textPrimary group">
              Let's talk 
              <ArrowRight className="text-accent group-hover:translate-x-1.5 transition-transform" size={24} />
            </a>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="md:col-span-5 flex justify-center md:justify-end relative my-16 md:my-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10"></div>
            <img 
              src={profileImage} 
              alt="Ayyub Al Anshor" 
              className="w-[300px] md:w-[400px] h-[400px] md:h-[500px] object-cover rounded-[30px] shadow-2xl border-2 border-white/5"
            />
          </div>
          
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default Hero;