import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Radio, 
  ExternalLink, 
  Calendar, 
  Tag, 
  ArrowLeft,
  BookOpen,
  X,
  Compass
} from 'lucide-react';
import { mediaExposures } from '../data/portfolioData';
import { MediaExposure } from '../types';

export default function MediaSection() {
  const [selectedMedia, setSelectedMedia] = useState<MediaExposure | null>(null);

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <AnimatePresence mode="wait">
        {!selectedMedia ? (
          /* List View (Image 5) */
          <motion.div
            key="list-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header */}
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-3xl font-display font-black text-neutral-900 tracking-tight mb-2">
                Media Exposure & Press Highlights
              </h1>
              <p className="text-sm text-neutral-500 max-w-xl">
                Editorial highlights, cover designs, and university press coverages featuring my nanotechnology and optics research.
              </p>
            </div>

            {/* List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaExposures.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedMedia(item)}
                  className="group bg-white p-6 rounded-2xl border border-neutral-150 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between hover:scale-[1.01]"
                >
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        item.type === 'Cover'
                          ? 'bg-indigo-100 text-indigo-700'
                          : item.type === 'News'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.type}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-mono font-bold flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.date}</span>
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-neutral-400 font-mono mb-1 uppercase tracking-wider">
                      {item.source}
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-neutral-900 leading-snug mb-3 group-hover:text-black">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="text-[11px] font-bold text-black flex items-center gap-1">
                    <span>Read Press Coverage</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Detail View (Image 6) */
          <motion.div
            key="detail-view"
            className="bg-white rounded-3xl border border-neutral-150 p-6 md:p-8 shadow-xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            {/* Header Navigation */}
            <div className="flex justify-between items-center mb-8 border-b pb-4 border-neutral-100">
              <button 
                onClick={() => setSelectedMedia(null)}
                className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-black cursor-pointer"
                id="media-back-btn"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Media List</span>
              </button>
              <span className="text-xs font-mono font-bold text-neutral-400">
                Media Spotlight
              </span>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cover/Illustration Card */}
              <div className="lg:col-span-1">
                {selectedMedia.type === 'Cover' ? (
                  /* ACS Nano Cover illustration mock card */
                  <div className="aspect-[3/4] w-full rounded-2xl bg-neutral-950 p-6 flex flex-col justify-between text-white border-4 border-neutral-850 shadow-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
                    <div>
                      <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">ACS PUBLICATIONS</div>
                      <h2 className="text-2xl font-extrabold font-display leading-none text-indigo-400">ACS NANO</h2>
                      <div className="h-0.5 w-8 bg-indigo-500 my-2" />
                      <p className="text-[9px] text-neutral-400">VOL. 14 • NO. 1</p>
                    </div>
                    
                    <div className="border border-neutral-800 p-3 rounded-lg bg-neutral-900/60 backdrop-blur-md">
                      <p className="text-[10px] font-semibold text-neutral-300 leading-tight">
                        "Complete Complex Amplitude Modulation with Electronically Tunable Graphene Plasmonic Metamolecules"
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Lab News Illustration placeholder */
                  <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-inner border border-neutral-100">
                    <img 
                      src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600&h=600" 
                      alt="News spotlight" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>

              {/* Textual Overview */}
              <div className="lg:col-span-2 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-yellow-600 bg-yellow-100 px-2.5 py-1 rounded-full">
                      {selectedMedia.source}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{selectedMedia.date}</span>
                    </span>
                  </div>

                  <h2 className="text-2xl font-display font-extrabold text-neutral-900 leading-tight mb-4">
                    {selectedMedia.title}
                  </h2>

                  <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-150 text-xs text-neutral-600 leading-relaxed mb-6 font-medium">
                    {selectedMedia.description}
                  </div>

                  <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                    This media spotlight reflects a milestone in the scientific translation of flat optics. By presenting breakthroughs in mid-infrared wave modulation to both peer specialists and general scientific audiences, it supports the long-term industry roadmap for compact solid-state LIDAR, chemical gas sensing, and fast volumetric 3D manufacturing.
                  </p>
                </div>

                {selectedMedia.link && (
                  <div className="border-t pt-5">
                    <a
                      href={selectedMedia.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md"
                      id="media-source-url-link"
                    >
                      <span>Read Original Press Article</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
