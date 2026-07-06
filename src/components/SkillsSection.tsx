import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sliders, 
  Cpu, 
  Settings2, 
  LineChart, 
  Terminal, 
  Search,
  CheckCircle
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = [
    { title: 'Device Fabrication', icon: Cpu, color: 'text-indigo-500 bg-indigo-50' },
    { title: 'Automated Set-up for Optical Measurements', icon: Settings2, color: 'text-rose-500 bg-rose-50' },
    { title: 'Characterization Equipment', icon: LineChart, color: 'text-amber-500 bg-amber-55 bg-opacity-10' },
    { title: 'Simulation Software & Programming', icon: Terminal, color: 'text-emerald-500 bg-emerald-50' },
    { title: 'Algorithms & Optimization Methods', icon: Sliders, color: 'text-teal-500 bg-teal-55 bg-opacity-10' }
  ];

  const getCategoryIcon = (title: string) => {
    const item = categoryIcons.find(ci => ci.title === title);
    return {
      Icon: item ? item.icon : Sliders,
      color: item ? item.color : 'text-neutral-500 bg-neutral-50'
    };
  };

  // Filter skills based on search query
  const filteredSkills = technicalSkills.map(category => {
    const matched = category.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.level.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...category,
      skills: matched
    };
  }).filter(category => category.skills.length > 0);

  // Check if any of the cleanroom-related categories are present in search results
  const isTargetCategoryVisible = filteredSkills.some(category => 
    category.title === 'Device Fabrication' ||
    category.title === 'Automated Set-up for Optical Measurements' ||
    category.title === 'Characterization Equipment'
  );

  const shouldShowCleanroomAlert = !searchQuery || isTargetCategoryVisible;

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-display font-black text-neutral-900 tracking-tight mb-2">
            Technical Expertise
          </h1>
          <p className="text-sm text-neutral-500 max-w-lg">
            A comprehensive compilation of microfabrication capabilities, advanced optical instrumentation, structural characterization, and simulation toolkits.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Search tools, software or methods..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-neutral-400 hover:text-black"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Micro-Illustration Frame (Now at top, under search) */}
      {shouldShowCleanroomAlert && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 bg-yellow-50/50 border border-yellow-200/40 rounded-2xl"
        >
          <div>
            <h4 className="text-sm font-bold text-neutral-900 mb-1 leading-none">
              Cleanroom Fab & Characterization Facility Experience
            </h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Fabrication executed extensively in state-of-the-art cleanroom facilities including the <strong className="font-bold text-neutral-700">KAIST Nano-Fabrication Center (NNFC)</strong>, <strong className="font-bold text-neutral-700">UC Berkeley Marvell Nanofabrication Laboratory</strong>, and local national institutions.
            </p>
          </div>
        </motion.div>
      )}

      {/* Skills Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredSkills.map((category) => {
          const { Icon, color } = getCategoryIcon(category.title);

          return (
            <motion.div
              key={category.title}
              layout
              className="bg-white p-6 rounded-2xl border border-neutral-150 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Title Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 font-display">
                    {category.title}
                  </h3>
                </div>

                {/* Individual Skill List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/50 transition-all cursor-default"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                      <span className="text-xs font-medium text-neutral-800">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}

        {filteredSkills.length === 0 && (
          <div className="col-span-2 text-center py-12">
            <p className="text-neutral-400 text-sm font-semibold">
              No matching skills found. Try searching for something else!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
