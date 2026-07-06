import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  BookOpen, 
  FileCheck, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Users,
  Search,
  Check,
  Star
} from 'lucide-react';
import { publications, patents, conferences, awards } from '../data/portfolioData';

export default function AchievementsSection() {
  const [activeSubTab, setActiveSubTab] = useState<'publications' | 'patents' | 'conferences' | 'awards'>('publications');
  const [expandedPubId, setExpandedPubId] = useState<number | null>(null);
  const [expandedPatId, setExpandedPatId] = useState<number | null>(null);
  const [pubFilter, setPubFilter] = useState<'all' | 'first-author'>('all');
  const [pubSearch, setPubSearch] = useState('');

  const toggleExpandPub = (id: number) => {
    setExpandedPubId(expandedPubId === id ? null : id);
  };

  const toggleExpandPat = (id: number) => {
    setExpandedPatId(expandedPatId === id ? null : id);
  };

  // Filter publications
  const filteredPubs = publications.filter(pub => {
    const matchesFilter = pubFilter === 'all' || pub.isFirstAuthor;
    const matchesSearch = pub.title.toLowerCase().includes(pubSearch.toLowerCase()) || 
                          pub.authors.toLowerCase().includes(pubSearch.toLowerCase()) ||
                          pub.journal.toLowerCase().includes(pubSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Header */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl font-display font-black text-neutral-900 tracking-tight mb-2">
          Academic Accomplishments
        </h1>
        <p className="text-sm text-neutral-500 max-w-xl">
          Detailed list of scientific peer-reviewed papers, international conference presentations, patent family publications, and research awards.
        </p>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex border-b border-neutral-200 mb-8 overflow-x-auto scrollbar-none">
        {(['publications', 'patents', 'conferences', 'awards'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`px-5 py-3 text-xs font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-all cursor-pointer ${
              activeSubTab === tab
                ? 'border-neutral-950 text-black'
                : 'border-transparent text-neutral-400 hover:text-neutral-950'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content Panels */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSubTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
        >
          {/* 1. PUBLICATIONS TAB */}
          {activeSubTab === 'publications' && (
            <div>
              {/* Filter Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-1.5 bg-neutral-100 p-1 rounded-xl self-start">
                  <button
                    onClick={() => setPubFilter('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      pubFilter === 'all'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-neutral-500 hover:text-neutral-950'
                    }`}
                  >
                    All Papers
                  </button>
                  <button
                    onClick={() => setPubFilter('first-author')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      pubFilter === 'first-author'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-neutral-500 hover:text-neutral-950'
                    }`}
                  >
                    <Star className="w-3 h-3 fill-yellow-400 stroke-yellow-500" />
                    <span>Lead First-Author</span>
                  </button>
                </div>

                {/* Publications Search */}
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search papers..."
                    value={pubSearch}
                    onChange={(e) => setPubSearch(e.target.value)}
                    className="w-full bg-white pl-9 pr-3 py-2 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              {/* Publications List */}
              <div className="flex flex-col gap-4">
                {filteredPubs.map((pub) => {
                  const isExpanded = expandedPubId === pub.id;
                  return (
                    <div 
                      key={pub.id}
                      className="bg-white border border-neutral-150 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-neutral-300"
                    >
                      {/* Accordion Row Header */}
                      <div 
                        onClick={() => toggleExpandPub(pub.id)}
                        className="p-5 flex items-start gap-4 justify-between cursor-pointer select-none"
                      >
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            {pub.isFirstAuthor && (
                              <span className="inline-flex items-center gap-0.5 text-[9px] font-extrabold text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded-md uppercase tracking-wide">
                                <Star className="w-2.5 h-2.5 fill-current" />
                                <span>First Author</span>
                              </span>
                            )}
                            {pub.isCoverArticle && (
                              <span className="text-[9px] font-extrabold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-md uppercase tracking-wide">
                                Front Cover Article
                              </span>
                            )}
                            <span className="text-[9px] font-mono font-bold text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded">
                              {pub.journal} ({pub.year})
                            </span>
                          </div>

                          <h3 className="text-sm md:text-base font-bold text-neutral-900 leading-snug mb-1">
                            {pub.title}
                          </h3>
                          <div className="text-xs text-neutral-500 font-medium">
                            {pub.authors.split(', ').map((author, index) => {
                              const isSelf = author.includes("Han, S.") || author.includes("Sangjun Han");
                              return (
                                <span key={index} className={isSelf ? "font-bold text-neutral-900 underline" : ""}>
                                  {author}{index < pub.authors.split(', ').length - 1 ? ', ' : ''}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        <div className="text-neutral-400 shrink-0 mt-1">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </div>

                      {/* Expanded Section (Abstract Summary) */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden bg-neutral-50 border-t border-neutral-150"
                          >
                            <div className="p-5 text-xs">
                              {/* Abstract */}
                              <div className="mb-4">
                                <h4 className="font-bold text-neutral-800 uppercase tracking-wider text-[10px] mb-1.5">
                                  Abstract Summary
                                </h4>
                                <p className="text-neutral-600 leading-relaxed font-sans font-medium">
                                  {pub.abstractSummary}
                                </p>
                              </div>

                              {/* Emphasis Bullets */}
                              <div className="mb-5">
                                <h4 className="font-bold text-neutral-800 uppercase tracking-wider text-[10px] mb-1.5">
                                  Scientific Portfolio Emphasis
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1">
                                  {pub.portfolioEmphasis.map((emph, index) => (
                                    <li key={index} className="flex gap-1.5 text-neutral-600 font-semibold items-center">
                                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                      <span>{emph}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex gap-3">
                                {pub.doiUrl && (
                                  <a 
                                    href={pub.doiUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 bg-black text-white px-3 py-1.5 rounded-lg font-bold"
                                    id={`pub-doi-link-${pub.id}`}
                                  >
                                    <span>Read DOI Publisher</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                                {pub.arxivUrl && (
                                  <a 
                                    href={pub.arxivUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 bg-neutral-200 text-neutral-700 px-3 py-1.5 rounded-lg font-bold"
                                    id={`pub-arxiv-link-${pub.id}`}
                                  >
                                    <span>Read arXiv Preprint</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. PATENTS TAB */}
          {activeSubTab === 'patents' && (
            <div>
              {/* Introduction Card */}
              <div className="p-5 bg-yellow-50/50 rounded-2xl border border-yellow-200/40 mb-8 text-xs leading-relaxed">
                <h4 className="font-bold text-neutral-900 mb-1 flex items-center gap-1.5 uppercase">
                  <FileCheck className="w-4 h-4 text-neutral-700" />
                  <span>Patent Family: Active Wavefront Modulation Devices</span>
                </h4>
                <p className="text-neutral-500">
                  The patents below belong to Dr. Sangjun Han's joint invention family related to active optoelectronic modulators. The technology targets controlling the mid-infrared light amplitude, phase, and polarization using sub-wavelength variable conductivity patterns, and is protected across major national jurisdictions including the United States, South Korea, and China.
                </p>
              </div>

              {/* Patents List */}
              <div className="flex flex-col gap-4">
                {patents.map((pat) => {
                  const isExpanded = expandedPatId === pat.id;
                  return (
                    <div 
                      key={pat.id}
                      className="bg-white border border-neutral-150 rounded-2xl overflow-hidden shadow-sm"
                    >
                      <div 
                        onClick={() => toggleExpandPat(pat.id)}
                        className="p-5 flex items-start gap-4 justify-between cursor-pointer select-none"
                      >
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-[9px] font-extrabold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded uppercase">
                              {pat.country} Patent
                            </span>
                            <span className="text-[9px] font-mono font-bold text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded">
                              No. {pat.patentNumber}
                            </span>
                          </div>
                          <h3 className="text-sm md:text-base font-bold text-neutral-900 leading-snug">
                            {pat.title}
                          </h3>
                          <p className="text-xs text-neutral-400 mt-1 font-mono">
                            Published: {pat.publicationDate}
                          </p>
                        </div>
                        <div className="text-neutral-400 shrink-0 mt-1">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="bg-neutral-50 border-t border-neutral-150"
                          >
                            <div className="p-5 text-xs">
                              {/* Summary */}
                              <div className="mb-4">
                                <h4 className="font-bold text-neutral-400 uppercase tracking-wider text-[10px] mb-1">
                                  Patent Invention Summary
                                </h4>
                                <p className="text-neutral-600 leading-relaxed font-sans font-medium">
                                  {pat.abstractSummary}
                                </p>
                              </div>

                              {/* Details */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-xs font-semibold text-neutral-500">
                                <div>
                                  <span className="text-neutral-400 text-[10px] uppercase">Inventors:</span>
                                  <p className="text-neutral-700">{pat.inventors}</p>
                                </div>
                                <div>
                                  <span className="text-neutral-400 text-[10px] uppercase">Assignee / Applicant:</span>
                                  <p className="text-neutral-700">{pat.assignee}</p>
                                </div>
                              </div>

                              {/* Action Link */}
                              <a 
                                href={pat.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 bg-black text-white px-3 py-1.5 rounded-lg font-bold"
                                id={`pat-link-${pat.id}`}
                              >
                                <span>View Google Patents Page</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 3. CONFERENCES TAB */}
          {activeSubTab === 'conferences' && (
            <div className="flex flex-col gap-6">
              {conferences.map((conf) => (
                <div 
                  key={conf.id}
                  className="bg-white p-5 rounded-2xl border border-neutral-150 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[9px] font-mono font-bold text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded">
                        Presentation #{conf.id}
                      </span>
                      <span className="text-[9px] text-neutral-400 font-bold flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{conf.date}</span>
                      </span>
                    </div>

                    <h4 className="text-xs md:text-sm font-bold text-neutral-900 leading-snug mb-2">
                      "{conf.title}"
                    </h4>

                    <p className="text-xs text-neutral-500 font-medium mb-3">
                      Speaker: {conf.authors}
                    </p>
                  </div>

                  <div className="border-t pt-3 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="font-bold text-black">{conf.conferenceName}</span>
                    <span className="flex items-center gap-0.5 shrink-0">
                      <MapPin className="w-3 h-3" />
                      <span>{conf.location}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 4. AWARDS TAB */}
          {activeSubTab === 'awards' && (
            <div className="flex flex-col gap-6">
              {awards.map((award, index) => (
                <div 
                  key={index}
                  className="relative group bg-white p-6 rounded-2xl border border-neutral-150 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-4">
                    {/* Golden Laurel Icon container */}
                    <div className="p-3 bg-yellow-100 rounded-xl shrink-0 text-yellow-600">
                      <Award className="w-6 h-6 stroke-[1.5]" />
                    </div>

                    <div>
                      <div className="text-[10px] text-neutral-400 font-mono font-semibold mb-1">
                        {award.date}
                      </div>
                      <h3 className="text-base font-bold text-neutral-900 leading-snug mb-1">
                        {award.title}
                      </h3>
                      <p className="text-xs font-semibold text-neutral-500 mb-2">
                        {award.institution}
                      </p>
                      {award.description && (
                        <p className="text-xs text-neutral-600 max-w-xl">
                          {award.description}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Visual Accent Sticker */}
                  <span className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 shrink-0 text-[10px] font-bold uppercase tracking-widest text-neutral-400 bg-neutral-100 px-2 py-1 rounded">
                    Honorary Recipient
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
