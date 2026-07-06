import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  User, 
  Award, 
  Building2, 
  Activity, 
  BookOpen, 
  Compass 
} from 'lucide-react';
import { personalInfo, educationList, researchExperiences } from '../data/portfolioData';

export default function AboutSection() {
  const stats = [
    { value: '8+', label: 'Years of Research', desc: 'Optics & Nanotech' },
    { value: '7', label: 'Scientific Papers', desc: 'Nature LSA, ACS Nano' },
    { value: '4', label: 'Patent Family', desc: 'US, CN, KR, PCT' },
    { value: '3', label: 'Prestigious Awards', desc: 'KAIST & Samsung Foundation' }
  ];

  const personalDetails = [
    { label: 'Current Role', value: 'Postdoctoral Scholar', icon: User },
    { label: 'Affiliation', value: 'UC Berkeley, Dept. of Mech. Eng.', icon: Building2 },
    { label: 'Advisor', value: 'Prof. Hayden Taylor', icon: Award },
    { label: 'Ph.D. Advisor', value: 'Prof. Min Seok Jang (KAIST)', icon: GraduationCap },
    { label: 'Office', value: '5101 Etcheverry Hall, Berkeley', icon: MapPin },
    { label: 'Email', value: 'sangjun.han@berkeley.edu', icon: Mail },
  ];

  const currentInterests = [
    "Volumetric Additive Manufacturing (3D Printing)",
    "Diffractive Optical Elements & Beam Shaping",
    "Active Graphene Metasurfaces & Optical Modulators",
    "Electromagnetic Numerical Optimization",
    "Advanced Nanofabrication & Automated Optical Setup"
  ];

  // Specific research labs description matching user intent ("참여했던 연구실들")
  const researchLabs = [
    {
      name: "Hayden Taylor Lab (UC Berkeley)",
      focus: "Volumetric Additive Manufacturing & Optical Beam Shaping",
      period: "Apr. 2025 - Present",
      role: "Postdoctoral Researcher",
      description: "Working under Prof. Hayden Taylor. The lab focuses on designing mechanical systems and advanced manufacturing technologies. My core contribution lies in engineering diffractive glass optics to shape complex 3D laser beams, facilitating rapid, high-resolution volumetric 3D printing in photopolymers.",
      link: "https://taylorlab.me.berkeley.edu/"
    },
    {
      name: "Nano Optics Lab (KAIST)",
      focus: "Active Metasurfaces, Graphene Plasmonics & Computational Nano-Optics",
      period: "Mar. 2018 - Feb. 2025",
      role: "Graduate Research Assistant / Ph.D. Candidate",
      description: "Advised by Prof. Min Seok Jang. Conducted high-impact research on dynamic flat optics in the mid-infrared. Developed single-gate active beam steerers and multi-gated graphene plasmonic metamolecules that successfully decoupled phase and amplitude modulation. Optimized nanostructures utilizing machine-learning gradients.",
      link: "https://janglab.kaist.ac.kr/"
    },
    {
      name: "Nano Optics Lab (KAIST) - Undergraduate Research",
      focus: "Graphene Optoelectronic Simulations",
      period: "Jan. 2017 - Feb. 2018",
      role: "Undergraduate Researcher",
      description: "Explored initial concept architectures for active metamolecules. Modeled graphene surface impedance under varying Fermi levels using numerical FDTD and wave simulation methods, establishing my passion for computational nanophotonics.",
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Bio Header */}
      <div className="relative mb-12">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block bg-yellow-300 text-black text-xs font-bold px-3 py-1 rounded-md shadow-sm mb-3 rotate-[-2deg]"
        >
          Hello there!!
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-display font-extrabold text-neutral-900 tracking-tight"
        >
          Biography
        </motion.h1>
      </div>

      {/* Main Grid: Info + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Bio Text Column */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-2 flex flex-col justify-between"
        >
          <div>
            <p className="text-neutral-700 leading-relaxed text-base md:text-lg mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm md:text-base mb-6">
              Throughout my academic journey, I have specialized in bridging nanophotonic device physics, numerical inverse design, semiconductor cleanroom fabrication, and fully automated optical measurement setups. I thrive on developing elegant computational and structural frameworks that command light in unprecedented ways—whether to control heat emissions, steer mid-infrared LIDAR beams, or print solid 3D structures out of fluid resins in seconds.
            </p>
          </div>

          {/* Scientific Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-neutral-150 shadow-sm text-center">
                <div className="text-2xl md:text-3xl font-display font-black text-black mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-neutral-800 leading-tight mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-neutral-400">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info Column with Image Fallback */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          {/* Aesthetic Secondary Image */}
          <div className="w-full h-48 rounded-2xl overflow-hidden shadow-inner border border-neutral-200">
            <img 
              src="https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/2035a225e80799ca34e48ee92df087eec1ae24f6/Biography_1.png" 
              alt="Biography" 
              className="w-full h-full object-cover brightness-105 hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Personal Info Directory */}
          <div className="bg-white p-5 rounded-2xl border border-neutral-150 shadow-sm">
            <h3 className="text-sm font-bold text-neutral-900 mb-4 border-b pb-2 flex items-center gap-1.5 border-neutral-100">
              <Compass className="w-4 h-4 text-neutral-500" />
              <span>Personal Directory</span>
            </h3>
            <div className="flex flex-col gap-3.5">
              {personalDetails.map((detail, idx) => {
                const Icon = detail.icon;
                return (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <Icon className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-neutral-400 font-medium">{detail.label}</div>
                      <div className="text-neutral-800 font-semibold">{detail.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Participated Research Labs (참여했던 연구실들) */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-neutral-900 mb-6 border-b pb-3 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-neutral-700" />
          <span>Research Laboratories & Groups</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchLabs.map((lab, index) => (
            <div 
              key={index} 
              className="bg-white p-5 rounded-2xl border border-neutral-150 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold text-yellow-600 bg-yellow-100/50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {lab.role}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono text-right shrink-0 leading-tight">
                    {lab.period.split(' - ')[0]} -
                    <br />
                    {lab.period.split(' - ')[1]}
                  </span>
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1 leading-tight">
                  {lab.name}
                </h3>
                <div className="text-xs font-semibold text-neutral-500 mb-3 font-display">
                  Focus: {lab.focus}
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {lab.description}
                </p>
              </div>
              
              {lab.link && (
                <a 
                  href={lab.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[11px] font-semibold text-black hover:underline gap-1 mt-2 self-start"
                >
                  Visit Lab Website →
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Grid: Interests & Experience Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Education List */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-display font-extrabold text-neutral-900 mb-6 border-b pb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-neutral-700" />
            <span>Education</span>
          </h2>
          <div className="relative border-l-2 border-neutral-200 pl-4 py-1 flex flex-col gap-6">
            {educationList.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-neutral-400 group-hover:bg-neutral-950 transition-colors border-2 border-white" />
                <div className="text-neutral-400 font-mono text-xs font-semibold mb-1">
                  {edu.period}
                </div>
                <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                  {edu.degree}
                </h4>
                <div className="text-xs font-semibold text-neutral-500 font-display">
                  {edu.institution}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {edu.location}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Research Focus Specialties */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col h-full"
        >
          <h2 className="text-xl font-display font-extrabold text-neutral-900 mb-6 border-b pb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-neutral-700" />
            <span>Active Research Focus</span>
          </h2>
          <div className="bg-white p-5 rounded-2xl border border-neutral-150 shadow-sm flex-1">
            <p className="text-xs text-neutral-500 mb-4 leading-relaxed font-semibold">
              Areas I am actively designing and experimentally validating:
            </p>
            <ul className="flex flex-col gap-3.5">
              {currentInterests.map((interest, idx) => (
                <li key={idx} className="flex gap-2 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                  <span className="text-neutral-700 font-medium leading-relaxed">
                    {interest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Expanded Career Details (Detailed Experience Bullets) */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h2 className="text-xl md:text-2xl font-display font-extrabold text-neutral-900 mb-6 border-b pb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-neutral-700" />
          <span>Research Appointments & Detail Scope</span>
        </h2>
        <div className="flex flex-col gap-8">
          {researchExperiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-neutral-150 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 mb-4 border-neutral-100">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 leading-tight">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-semibold text-neutral-500 font-display">
                    {exp.institution} {exp.advisor && `(Advisor: ${exp.advisor})`}
                  </div>
                </div>
                <div className="text-right sm:text-right">
                  <div className="text-xs text-neutral-400 font-mono font-semibold">
                    {exp.period}
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    {exp.location}
                  </div>
                </div>
              </div>
              <ul className="flex flex-col gap-2.5">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2 text-xs leading-relaxed text-neutral-600">
                    <span className="text-neutral-400 shrink-0 select-none">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
