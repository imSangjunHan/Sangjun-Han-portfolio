import React from 'react';
import { motion } from 'motion/react';
import { FileText, MapPin, Mail, Linkedin, GraduationCap } from 'lucide-react';
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
        <motion.a
          href={`mailto:${personalInfo.email}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-yellow-300 hover:bg-yellow-400 text-black text-xs font-semibold tracking-wider uppercase shadow-sm mb-6 cursor-pointer transition-colors"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>{personalInfo.email}</span>
        </motion.a>

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
          className="text-base md:text-lg font-medium text-neutral-600 max-w-3xl mb-6 leading-relaxed text-center px-4"
        >
          <span className="inline text-2xl md:text-3xl text-neutral-300 font-serif select-none mr-1.5 align-top">“</span>
          <span className="inline">
            {personalInfo.tagline.includes(' — ') ? (
              <>
                {personalInfo.tagline.split(' — ')[0]} —
                <br className="hidden md:inline" />
                <span className="md:hidden"> </span>
                {personalInfo.tagline.split(' — ')[1]}
              </>
            ) : (
              personalInfo.tagline
            )}
          </span>
          <span className="inline text-2xl md:text-3xl text-neutral-300 font-serif select-none ml-1.5 align-bottom">”</span>
        </motion.p>

        {/* Main Topic Keywords in Button/Badge form */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl px-4"
        >
          {[
            "Active Metasurfaces",
            "Diffractive Optics",
            "Wavefront Engineering",
            "Nanophotonics inverse design"
          ].map((topic) => (
            <span
              key={topic}
              className="inline-block px-3.5 py-1.5 text-xs font-semibold text-neutral-600 bg-neutral-50 border border-neutral-200/80 rounded-full select-none cursor-default shadow-sm"
            >
              {topic}
            </span>
          ))}
        </motion.div>

        {/* Centered Framed Portrait */}
        <div className="flex flex-col items-center mb-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-3"
          >
            <img 
              src={personalInfo.avatar} 
              alt={personalInfo.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-xs md:text-sm font-medium text-neutral-500 max-w-md text-center leading-relaxed"
          >
            {personalInfo.role}
            <br />
            at the <span className="font-semibold text-neutral-800">University of California, Berkeley</span>
          </motion.p>
        </div>

        {/* Emphasized Connect Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
        >
          <a 
            href={personalInfo.googleScholar} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 border border-neutral-300 hover:border-neutral-900 bg-white text-neutral-800 hover:text-black rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            id="home-scholar-link"
          >
            <GraduationCap className="w-5 h-5 text-neutral-500" />
            <span>Google Scholar</span>
          </a>

          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            id="home-linkedin-link"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
