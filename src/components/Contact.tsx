// src/components/Contact.tsx
import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full pt-32 pb-16 px-6 md:px-12 relative overflow-hidden">
      <AnimatedWrapper>
        {/* Garis Pembatas Atas */}
        <div className="w-full h-px bg-white/20 mb-16"></div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          
          {/* Kiri: Kosong (bisa untuk logo/copyright nanti) */}
          <div className="text-textSecondary text-sm">
            © 2026. All rights reserved.
          </div>

          {/* Kanan: Link Kontak besar sesuai gambar */}
          <div className="flex flex-col items-end gap-2">
            <a href="https://www.linkedin.com/in/ayyub-al-anshor-b57651374/" className="text-4xl md:text-5xl font-light text-textSecondary hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
              LinkedIn
            </a>
            <a href="https://github.com/ansh215-it" className="text-4xl md:text-5xl font-light text-textSecondary hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
              GitHub
            </a>
            <a href="mailto:ansh21568@gmail.com" className="text-3xl md:text-4xl font-light text-textPrimary hover:text-white transition-colors border-b border-white pb-1 mt-2">
              ansh21568@gmail.com
            </a>
          </div>

        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default Contact;