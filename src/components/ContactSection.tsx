import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Building2, 
  Copy, 
  Check, 
  ExternalLink,
  ArrowUpRight,
  Linkedin,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail1, setCopiedEmail1] = useState(false);
  const [copiedEmail2, setCopiedEmail2] = useState(false);

  const handleCopyEmail = (email: string, setCopiedState: React.Dispatch<React.SetStateAction<boolean>>) => {
    navigator.clipboard.writeText(email);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6" id="contact-view">
      {/* Header */}
      <div className="mb-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-display font-black text-neutral-900 tracking-tight"
        >
          Get in Touch
        </motion.h1>
      </div>

      {/* Main Grid containing the styled options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Email Card (Most prominent - Bright and Emphasized) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-white to-emerald-50/40 rounded-3xl p-8 flex flex-col justify-between shadow-md relative overflow-hidden group border-2 border-emerald-500/80"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-all duration-500" />
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                Email Inquiries & Outreach
              </span>
            </div>

            <h3 className="text-xl font-display font-black text-neutral-900 mb-3">
              Direct Communication Channel
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed mb-8">
              Send an inquiry directly to Dr. Han. For rapid correspondence regarding nanophotonics research, recruiter outreach, or general queries, please use the links below.
            </p>

            {/* Email list with Copy Buttons */}
            <div className="flex flex-col gap-3.5 mb-8">
              {/* Primary Contact */}
              <div className="flex items-center justify-between gap-3 bg-white hover:bg-emerald-50/30 border border-emerald-100 p-3.5 rounded-2xl shadow-sm transition-all min-w-0">
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-wider mb-0.5">Primary Outreach</span>
                  <a href="mailto:sangjun.han.contact@gmail.com" className="text-xs sm:text-sm font-bold text-neutral-900 hover:underline select-all truncate">
                    sangjun.han.contact@gmail.com
                  </a>
                </div>
                <button 
                  onClick={() => handleCopyEmail('sangjun.han.contact@gmail.com', setCopiedEmail1)}
                  className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200/80 text-neutral-500 hover:text-neutral-800 transition-all cursor-pointer border-none outline-none shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail1 ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Academic Email */}
              <div className="flex items-center justify-between gap-3 bg-white hover:bg-neutral-50/30 border border-neutral-150 p-3.5 rounded-2xl shadow-sm transition-all min-w-0">
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-neutral-400 font-extrabold uppercase tracking-wider mb-0.5">UC Berkeley</span>
                  <a href="mailto:sangjun.han@berkeley.edu" className="text-xs sm:text-sm font-semibold text-neutral-850 hover:underline select-all truncate">
                    sangjun.han@berkeley.edu
                  </a>
                </div>
                <button 
                  onClick={() => handleCopyEmail('sangjun.han@berkeley.edu', setCopiedEmail2)}
                  className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200/80 text-neutral-400 hover:text-neutral-850 transition-all cursor-pointer border-none outline-none shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail2 ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Big Action Button - Prominent high contrast style */}
          <a 
            href="mailto:sangjun.han.contact@gmail.com"
            className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-neutral-950 hover:bg-neutral-850 text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-[0.98]"
          >
            <Mail className="w-4 h-4" />
            <span>Email Dr. Han Now</span>
            <ArrowUpRight className="w-4 h-4 text-white/70" />
          </a>
        </motion.div>

        {/* Info & Lab Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-6"
        >
          {/* Academic & Professional Profiles */}
          <div className="bg-white rounded-3xl p-6 border border-neutral-150 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-neutral-50 rounded-xl text-neutral-600">
                <GraduationCap className="w-5 h-5 text-neutral-500" />
              </div>
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                Profiles & Networks
              </span>
            </div>
            
            <div className="flex flex-col gap-2.5">
              {/* Google Scholar Link */}
              <a 
                href={personalInfo.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl border border-neutral-150 bg-white hover:bg-neutral-50 shadow-sm transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-neutral-400 font-extrabold uppercase tracking-wider leading-none mb-0.5">Academic Publications</span>
                    <span className="text-xs font-bold text-neutral-800 truncate">Google Scholar Profile</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-800 transition-colors shrink-0" />
              </a>

              {/* LinkedIn Link */}
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl border border-neutral-150 bg-white hover:bg-neutral-50 shadow-sm transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-neutral-400 font-extrabold uppercase tracking-wider leading-none mb-0.5">Professional Network</span>
                    <span className="text-xs font-bold text-neutral-800 truncate">LinkedIn Profile</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-800 transition-colors shrink-0" />
              </a>
            </div>
          </div>

          {/* Coordinates Card */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-150 shadow-sm flex flex-col justify-between flex-grow">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Office Coordinates
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">
                Taylor Lab @ UC Berkeley
              </h3>
              <p className="text-sm font-semibold text-neutral-800 mb-3 select-all">
                5101 Etcheverry Hall
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed mb-8">
                Department of Mechanical Engineering, University of California, Berkeley.
                Please feel free to visit or drop by for scheduled research discussions.
              </p>
            </div>

            {/* Google Maps CTA */}
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(personalInfo.office)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-850 font-bold text-sm tracking-wide transition-all border border-neutral-250 hover:border-neutral-300 cursor-pointer"
            >
              <span>View Office on Google Maps</span>
              <ExternalLink className="w-4 h-4 text-neutral-500" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
