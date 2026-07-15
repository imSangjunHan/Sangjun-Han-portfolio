import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, ExternalLink } from 'lucide-react';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import MediaSection from './components/MediaSection';
import ContactSection from './components/ContactSection';
import AcademicCvModal from './components/AcademicCvModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);
  const [achievementsSubTab, setAchievementsSubTab] = useState<'publications' | 'patents' | 'conferences' | 'awards'>('publications');

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return <HomeSection setActiveTab={setActiveTab} onOpenCv={() => setIsCvOpen(true)} />;
      case 'about':
        return <AboutSection setActiveTab={setActiveTab} setAchievementsSubTab={setAchievementsSubTab} />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'achievements':
        return <AchievementsSection activeSubTab={achievementsSubTab} setActiveSubTab={setAchievementsSubTab} />;
      case 'media':
        return <MediaSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection setActiveTab={setActiveTab} onOpenCv={() => setIsCvOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col justify-between selection:bg-yellow-200 selection:text-neutral-950 font-sans">
      {/* Top Sticky Header with Integrated Navigation */}
      <header className="sticky top-0 z-45 bg-white/85 backdrop-blur-md border-b border-neutral-200/50 px-4 md:px-8 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 cursor-pointer group"
            id="header-logo"
          >
            <img 
              src="https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/2035a225e80799ca34e48ee92df087eec1ae24f6/Sangjun%20Han_profile.jpg" 
              alt="Sangjun Han" 
              className="w-8 h-8 rounded-xl object-cover border border-neutral-200/80 shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div>
              <h1 className="text-xs font-black uppercase tracking-widest text-neutral-900 group-hover:text-black font-display leading-none">
                Sangjun Han
              </h1>
              <p className="text-[9px] font-bold text-neutral-400 font-mono mt-0.5">
                UC Berkeley Postdoc
              </p>
            </div>
          </div>

          {/* Academic CV on Mobile */}
          <div className="md:hidden">
            <a
              href="https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/ca15c9d7424232e50f1b6219d1e0b990be9c3445/%5BCV%5D%20Sangjun%20Han_UC%20Berkeley_Postdoc_Mechanical%20Engineering.pdf"
              download="[CV] Sangjun Han_UC Berkeley_Postdoc_Mechanical Engineering.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg transition-all cursor-pointer"
              id="header-cv-btn-mobile"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          </div>
        </div>

        {/* Integrated Navigation Bar */}
        <div className="w-full md:w-auto flex flex-wrap justify-center px-4 md:px-0">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Academic CV on Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/ca15c9d7424232e50f1b6219d1e0b990be9c3445/%5BCV%5D%20Sangjun%20Han_UC%20Berkeley_Postdoc_Mechanical%20Engineering.pdf"
            download="[CV] Sangjun Han_UC Berkeley_Postdoc_Mechanical Engineering.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all cursor-pointer"
            id="header-cv-btn"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>
      </header>

      {/* Main Content Pane with Staggered Fade Transitions */}
      <main className="flex-grow pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Details */}
      <footer className="bg-white border-t border-neutral-200/60 px-6 py-8 text-center text-neutral-400 text-xs">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-bold text-neutral-600 font-display">Dr. Sangjun Han Portfolio</p>
            <p className="text-[10px] text-neutral-400 font-medium">Department of Mechanical Engineering, UC Berkeley</p>
          </div>
          <p className="text-right text-[10px]">
            &copy; {new Date().getFullYear()} Sangjun Han. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Curriculum Vitae Full printable Modal */}
      <AnimatePresence>
        {isCvOpen && (
          <AcademicCvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
