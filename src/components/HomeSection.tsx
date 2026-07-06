import React from 'react';
import { motion } from 'motion/react';
import { FileText, MapPin, Mail, Github, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HomeSectionProps {
  setActiveTab: (tab: string) => void;
  onOpenCv: () => void;
}

export default function HomeSection({ setActiveTab, onOpenCv }: HomeSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center py-12 px-6 overflow-hidden bg-grid-pattern">
      {/* Huge Background Text Mimicking the Mockup */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden z-0 whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -300, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="text-[12vw] font-bold text-neutral-200/40 font-display uppercase tracking-widest leading-none flex gap-12"
        >
          <span>OPTICS</span>
          <span>•</span>
          <span>METASURFACE</span>
          <span>•</span>
          <span>NANOPHOTONICS</span>
          <span>•</span>
          <span>BEAM SHAPING</span>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        {/* Email Pill Tag */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-yellow-300 text-black text-xs font-semibold tracking-wider uppercase shadow-sm mb-6"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>{personalInfo.email}</span>
        </motion.div>

        {/* Floating Intro */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl md:text-6xl font-display font-extrabold text-neutral-900 tracking-tight leading-tight mb-4 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="animate-wave mr-1">👋</span>
          <span>Hi, I'm</span>
          <span className="text-black underline decoration-yellow-400 decoration-wavy decoration-3 underline-offset-4">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Subtitle / Role Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base md:text-lg font-medium text-neutral-600 max-w-xl mb-10"
        >
          {personalInfo.role} at the <span className="font-semibold text-neutral-900">University of California, Berkeley</span>
        </motion.p>

        {/* Centered Framed Portrait */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          className="relative group w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl mb-10 border-4 border-white"
        >
          <img 
            src={personalInfo.avatar} 
            alt={personalInfo.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          {/* Glass Overlay on Hover */}
          <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Primary Call-to-Actions (Mockup Download CV & Location badges) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-12"
        >
          <button 
            onClick={onOpenCv}
            className="flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg text-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            id="home-view-cv-btn"
          >
            <FileText className="w-4 h-4" />
            <span>View Full CV & Resume</span>
          </button>

          <div className="flex items-center gap-2 text-neutral-500 text-sm font-semibold">
            <MapPin className="w-4 h-4 text-neutral-400" />
            <span>{personalInfo.location}</span>
          </div>
        </motion.div>

        {/* Dynamic Tagline Quote Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-l-4 border-yellow-400 pl-4 py-1 text-left max-w-xl mb-10"
        >
          <p className="text-neutral-500 italic text-sm md:text-base leading-relaxed font-sans font-medium">
            "{personalInfo.tagline}"
          </p>
        </motion.div>

        {/* Social Links (Scholar, GitHub, etc.) */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center gap-4 text-xs font-semibold text-neutral-500"
        >
          <span>Connect:</span>
          
          <a 
            href={personalInfo.googleScholar} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-neutral-600 hover:text-black transition-colors"
            id="home-scholar-link"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Google Scholar</span>
          </a>

          <span className="text-neutral-300">•</span>

          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-neutral-600 hover:text-black transition-colors"
            id="home-github-link"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
