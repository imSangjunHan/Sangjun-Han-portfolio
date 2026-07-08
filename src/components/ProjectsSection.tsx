import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Layers, 
  Building2, 
  CheckCircle2, 
  Bookmark, 
  ExternalLink,
  Search
} from 'lucide-react';
import { projectsList, publications } from '../data/portfolioData';
import { Project } from '../types';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Find linked publication
  const getLinkedPublication = (pubId?: number) => {
    if (!pubId) return null;
    return publications.find(p => p.id === pubId);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          /* Grid View (Image 3) */
          <motion.div
            key="grid-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header */}
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-3xl font-display font-black text-neutral-900 tracking-tight mb-2">
                Core Research Projects
              </h1>
              <p className="text-sm text-neutral-500 max-w-xl">
                A showcase of key scientific thrusts spanning volumetric 3D printing, active graphene nanostructures, and machine learning optics.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsList.map((project) => (
                <motion.div
                  key={project.id}
                  layoutId={`project-container-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white rounded-2xl border border-neutral-150 shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer flex flex-col h-full hover:scale-[1.01]"
                >
                  {/* Aspect Ratio 4:3 Image */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-neutral-100">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 group-hover:text-black leading-snug mb-1">
                        {project.title}
                      </h3>
                      {project.id === "active-metasurfaces" ? (
                        <div className="mt-2 mb-3 rounded-xl overflow-hidden border border-neutral-150 shadow-sm max-h-[180px] flex items-center justify-center bg-neutral-50">
                          <img 
                            src="https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/8d53b5e246797a1a43d7001fcbb5c954b1abaa20/2020ACSNano_Cover_Full.jpg" 
                            alt="ACS Nano Front Cover" 
                            className="w-full h-full object-cover" 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        <p className="text-xs text-neutral-500 font-medium mb-3">
                          {project.tagline}
                        </p>
                      )}
                    </div>

                    <div className="text-[11px] font-bold text-black flex items-center gap-1 mt-2">
                      <span>Explore Details</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Detail View (Image 4) */
          <motion.div
            key="detail-view"
            layoutId={`project-container-${selectedProject.id}`}
            className="bg-white rounded-3xl border border-neutral-150 p-6 md:p-8 shadow-xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            {/* Header Navigation */}
            <div className="flex justify-between items-center mb-8 border-b pb-4 border-neutral-100">
              <button 
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-black cursor-pointer"
                id="project-back-btn"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </button>
              <span className="text-xs font-mono font-bold text-neutral-400">
                Project Showcase
              </span>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column (Rich Content) */}
              <div className="lg:col-span-2">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-md mb-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-bold text-yellow-600 bg-yellow-100/50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-display font-extrabold text-neutral-900 leading-tight mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {/* Key Details Scope */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-neutral-900 mb-4 flex items-center gap-2 uppercase tracking-wider border-l-2 border-black pl-2">
                    Scope & Implementation
                  </h4>
                  <ul className="flex flex-col gap-3.5">
                    {selectedProject.keyDetails.map((detail, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-neutral-600">
                        <CheckCircle2 className="w-4.5 h-4.5 text-neutral-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Accomplishments */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-neutral-900 mb-4 flex items-center gap-2 uppercase tracking-wider border-l-2 border-black pl-2">
                    Achievements & Impact
                  </h4>
                  <ul className="flex flex-col gap-3.5">
                    {selectedProject.achievements.map((ach, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-neutral-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0 mt-2" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Sidebar Column (Metadata) */}
              <div className="flex flex-col gap-6">
                {/* Info Card */}
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-150">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                    Project Directory
                  </h3>
                  <div className="flex flex-col gap-4">
                    {/* Role */}
                    <div className="flex items-start gap-3">
                      <Layers className="w-4.5 h-4.5 text-neutral-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Role</div>
                        <div className="text-xs font-semibold text-neutral-800">{selectedProject.role}</div>
                      </div>
                    </div>
                    {/* Affiliation */}
                    <div className="flex items-start gap-3">
                      <Building2 className="w-4.5 h-4.5 text-neutral-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Institution</div>
                        <div className="text-xs font-semibold text-neutral-800">{selectedProject.collaboration}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Linked Publications/Patents */}
                {((selectedProject.publicationIds && selectedProject.publicationIds.length > 0) || selectedProject.publicationId) && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-yellow-600">
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>Linked Publications ({((selectedProject.publicationIds || []).length || (selectedProject.publicationId ? 1 : 0))})</span>
                    </div>
                    {(() => {
                      const ids = selectedProject.publicationIds || (selectedProject.publicationId ? [selectedProject.publicationId] : []);
                      return ids.map((id) => {
                        const pub = getLinkedPublication(id);
                        if (!pub) return null;
                        const paperUrl = pub.doiUrl || pub.arxivUrl;
                        const labelText = pub.doiUrl ? "Read Paper" : "Read arXiv";
                        return (
                          <div key={id} className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between">
                            <div>
                              <h4 className="text-xs font-bold text-neutral-900 mb-1 leading-snug">
                                {pub.title}
                              </h4>
                              <p className="text-[10px] text-neutral-400 italic mb-1">
                                {pub.journal} ({pub.year})
                              </p>
                              <p className="text-[9px] text-neutral-500 font-medium mb-3 line-clamp-2">
                                {pub.authors}
                              </p>
                            </div>
                            {paperUrl && (
                              <a
                                href={paperUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1 bg-neutral-950 hover:bg-neutral-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all self-start mt-1"
                              >
                                <span>{labelText}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        );
                      });
                    })()}
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
