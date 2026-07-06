import React from 'react';
import { motion } from 'motion/react';
import { X, Printer, Download, MapPin, Mail, Phone, GraduationCap } from 'lucide-react';
import { 
  personalInfo, 
  educationList, 
  researchExperiences, 
  publications, 
  conferences, 
  patents, 
  awards, 
  technicalSkills 
} from '../data/portfolioData';

interface AcademicCvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AcademicCvModal({ isOpen, onClose }: AcademicCvModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      {/* Printable Sheet Container */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white text-neutral-900 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-neutral-200 print:max-h-none print:shadow-none print:border-none print:rounded-none"
        id="academic-cv-sheet"
      >
        {/* Controls Header (Hidden on Print) */}
        <div className="flex justify-between items-center bg-neutral-50 text-neutral-900 border-b border-neutral-150 px-6 py-4 print:hidden">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-yellow-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">Curriculum Vitae</span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-250 text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-sm"
              id="cv-print-btn"
            >
              <Printer className="w-4 h-4 text-neutral-500" />
              <span>Print / Save as PDF</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-xl transition-all text-neutral-500 hover:text-neutral-800 cursor-pointer shadow-sm"
              id="cv-close-btn"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Sheet Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 print:overflow-visible print:p-0">
          <div className="max-w-3xl mx-auto" id="cv-printable-content">
            {/* CV Header */}
            <div className="border-b-2 border-neutral-900 pb-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
              <div>
                <h1 className="text-3xl font-display font-extrabold tracking-tight text-neutral-950 uppercase leading-none mb-1">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-semibold text-neutral-500 font-display">
                  {personalInfo.koreanName} • {personalInfo.role}
                </p>
                <p className="text-xs font-medium text-neutral-400">
                  {personalInfo.institution}
                </p>
              </div>

              {/* Contacts Directory Block */}
              <div className="text-xs font-medium text-neutral-600 sm:text-right flex flex-col gap-1">
                <p className="flex sm:justify-end items-center gap-1.5 justify-center">
                  <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>{personalInfo.email}</span>
                </p>
                <p className="flex sm:justify-end items-center gap-1.5 justify-center">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span className="max-w-[240px] leading-tight">{personalInfo.office.split(', ')[0]}, UC Berkeley</span>
                </p>
                <p className="flex sm:justify-end items-center gap-1.5 justify-center">
                  <Phone className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </p>
              </div>
            </div>

            {/* Research Interests Block */}
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 border-b pb-1 font-display">
                Research Areas of Interest
              </h2>
              <div className="flex flex-wrap gap-2">
                {personalInfo.researchInterests.map((interest, idx) => (
                  <span 
                    key={idx} 
                    className="bg-neutral-100 text-neutral-800 text-[10px] font-semibold px-2.5 py-1 rounded"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 border-b pb-1 font-display">
                Education
              </h2>
              <div className="flex flex-col gap-4">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs gap-4">
                    <div>
                      <h3 className="font-bold text-neutral-950">{edu.degree}</h3>
                      <p className="text-neutral-500 font-semibold">{edu.institution}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono text-neutral-400 font-bold">{edu.period}</span>
                      <p className="text-neutral-400 text-[10px]">{edu.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Appointments / Experiences */}
            <div className="mb-8 page-break-before">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 border-b pb-1 font-display">
                Research Appointments & Experiences
              </h2>
              <div className="flex flex-col gap-6">
                {researchExperiences.map((exp, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <div>
                        <h3 className="font-bold text-neutral-950">{exp.role}</h3>
                        <p className="text-neutral-500 font-semibold">{exp.institution} {exp.advisor && `(Advisor: ${exp.advisor})`}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono text-neutral-400 font-bold">{exp.period}</span>
                        <p className="text-neutral-400 text-[10px]">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-1.5 pl-4 list-disc text-neutral-600">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Peer-Reviewed Publications */}
            <div className="mb-8 page-break-before">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 border-b pb-1 font-display">
                Publications (Peer-Reviewed)
              </h2>
              <div className="flex flex-col gap-4">
                {publications.map((pub, idx) => (
                  <div key={pub.id} className="text-xs flex gap-2">
                    <span className="font-mono font-bold text-neutral-400">[{publications.length - idx}]</span>
                    <div>
                      <p className="text-neutral-950 font-medium">
                        {pub.authors.split(', ').map((author, index) => {
                          const isSelf = author.includes("Han, S.") || author.includes("Sangjun Han");
                          return (
                            <span key={index} className={isSelf ? "font-bold text-neutral-950 underline" : ""}>
                              {author}{index < pub.authors.split(', ').length - 1 ? ', ' : ''}
                            </span>
                          );
                        })}
                        , <span className="font-bold italic">"{pub.title}"</span>, <span className="font-bold text-neutral-800">{pub.journal}</span>
                        {pub.volumeAndPages && `, ${pub.volumeAndPages}`}, {pub.year}.
                      </p>
                      {pub.doi && <p className="text-[10px] text-neutral-400 mt-0.5">DOI: {pub.doi}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Patent Family List */}
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 border-b pb-1 font-display">
                Granted Patents & Applications
              </h2>
              <div className="flex flex-col gap-3">
                {patents.map((pat, idx) => (
                  <div key={pat.id} className="text-xs flex gap-2">
                    <span className="font-mono font-bold text-neutral-400">[{idx + 1}]</span>
                    <div>
                      <p className="text-neutral-950 font-medium leading-relaxed">
                        <span className="font-bold">{pat.inventors}</span>, <span className="italic">"{pat.title}"</span>, Patent No. <span className="font-bold">{pat.patentNumber}</span>, Assignee: {pat.assignee}, Published: {pat.publicationDate}.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* International Conferences */}
            <div className="mb-8 page-break-before">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 border-b pb-1 font-display">
                International Conferences (Presentations)
              </h2>
              <div className="flex flex-col gap-3">
                {conferences.map((conf) => (
                  <div key={conf.id} className="text-xs flex gap-2">
                    <span className="font-mono font-bold text-neutral-400">[{conf.id}]</span>
                    <div>
                      <p className="text-neutral-950">
                        {conf.authors}, <span className="italic">"{conf.title}"</span>, <span className="font-bold">{conf.conferenceName}</span>, {conf.location}, {conf.date}.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Honors */}
            <div className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 border-b pb-1 font-display">
                Awards, Fellowships, & Honors
              </h2>
              <div className="flex flex-col gap-3.5">
                {awards.map((award, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs gap-4">
                    <div>
                      <h3 className="font-bold text-neutral-950">{award.title}</h3>
                      <p className="text-neutral-500">{award.institution}</p>
                    </div>
                    <span className="font-mono text-neutral-400 shrink-0 font-bold">{award.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Expertise */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 border-b pb-1 font-display">
                Technical Expertise Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {technicalSkills.map((cat, idx) => (
                  <div key={idx} className="border border-neutral-100 p-3 rounded-lg">
                    <h3 className="font-bold text-neutral-900 mb-1.5">{cat.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((s, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="bg-neutral-50 border text-[10px] px-1.5 py-0.5 rounded text-neutral-600 font-medium"
                        >
                          {s.name} ({s.level[0]})
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Special styles injecting print rules to format PDF printout */}
      <style>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          #academic-cv-sheet {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: none !important;
            max-height: none !important;
            height: auto !important;
            overflow: visible !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            z-index: 99999 !important;
          }
          /* Hide surrounding layout elements completely on print */
          #bottom-floating-nav, #root > div > header, #root > div > footer, .print\\:hidden {
            display: none !important;
          }
          .page-break-before {
            page-break-before: always;
          }
        }
      `}</style>
    </div>
  );
}
