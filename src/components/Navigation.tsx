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

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Main', icon: Home },
    { id: 'about', label: 'Biography', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'skills', label: 'Skills', icon: Sliders },
    { id: 'media', label: 'Media', icon: Radio },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav 
      className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1 max-w-full"
      id="header-nav"
    >
      <div className="flex items-center gap-1 md:gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              id={`nav-tab-${item.id}`}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 focus:outline-none cursor-pointer whitespace-nowrap ${
                isActive 
                  ? 'text-neutral-950 font-bold' 
                  : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/60'
              }`}
            >
              {/* Active Indicator Background */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute inset-0 bg-neutral-100 rounded-xl -z-10"
                />
              )}
              
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

