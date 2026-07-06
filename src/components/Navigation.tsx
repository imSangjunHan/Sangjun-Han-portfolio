import React from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  User, 
  Briefcase, 
  Sliders, 
  Award, 
  Radio, 
  Mail 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Main', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Sliders },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'media', label: 'Media', icon: Radio },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120, damping: 15 }}
        className="pointer-events-auto flex items-center gap-1 bg-white/90 backdrop-blur-xl px-3 py-2.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-neutral-200 max-w-full overflow-x-auto scrollbar-none"
        id="bottom-floating-nav"
      >
        {/* Compact Avatar on left */}
        <button 
          onClick={() => setActiveTab('home')}
          className="flex items-center justify-center p-1 rounded-full hover:scale-105 transition-transform mr-1 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          id="nav-avatar-btn"
          aria-label="Go to Home"
        >
          <img 
            src={personalInfo.avatar} 
            alt={personalInfo.name} 
            className="w-7 h-7 rounded-full object-cover border border-neutral-200"
            referrerPolicy="no-referrer"
          />
        </button>

        <div className="h-4 w-px bg-neutral-200 mr-1.5" />

        {/* Tab Items */}
        <div className="flex items-center gap-1 md:gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                id={`nav-tab-${item.id}`}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 focus:outline-none ${
                  isActive 
                    ? 'text-black font-semibold' 
                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/50'
                }`}
              >
                {/* Active Indicator Slide */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-neutral-100 rounded-full -z-10"
                  />
                )}
                
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
}
