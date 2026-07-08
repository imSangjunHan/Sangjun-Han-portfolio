import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  GraduationCap, 
  Send, 
  CheckCircle,
  Building2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate real API contact route dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', affiliation: '', subject: '', message: '' });
      
      // Auto-dismiss success alert after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactCards = [
    {
      title: "Academic Inquiries & Collaboration",
      detail: personalInfo.email,
      sub: "Always open to discussion regarding research, postdoctoral partnerships, or project collaborations.",
      actionLabel: "Email Dr. Han",
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      accent: "text-emerald-500 bg-emerald-50"
    },
    {
      title: "Office & Lab Coordinates",
      detail: "5101 Etcheverry Hall",
      sub: "Taylor Lab, Department of Mechanical Engineering, University of California, Berkeley.",
      actionLabel: "View on Google Maps",
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.office)}`,
      icon: MapPin,
      accent: "text-blue-500 bg-blue-50"
    },
    {
      title: "Direct Tel Line",
      detail: personalInfo.phone,
      sub: "Available for business hour correspondence or formal academic panel coordinates.",
      actionLabel: "Call Office",
      href: `tel:${personalInfo.phone}`,
      icon: Phone,
      accent: "text-indigo-500 bg-indigo-50"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-display font-black text-neutral-900 tracking-tight mb-2">
          Get in Touch
        </h1>
        <p className="text-sm text-neutral-500 max-w-lg mx-auto">
          Have an academic inquiry, a collaboration proposal, or a research question? Please fill out the contact form below or reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left Column (Directories) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-5 rounded-2xl border border-neutral-150 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl ${card.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider leading-none">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-sm font-bold text-neutral-900 font-display mb-1.5 leading-tight select-all">
                    {card.detail}
                  </p>
                  <p className="text-[11px] text-neutral-500 leading-relaxed mb-4">
                    {card.sub}
                  </p>
                </div>

                <a 
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center text-[11px] font-bold text-black hover:underline gap-1 mt-1 self-start cursor-pointer"
                  id={`contact-card-action-${idx}`}
                >
                  <span>{card.actionLabel}</span>
                  <span>→</span>
                </a>
              </div>
            );
          })}

          {/* Scholars Citation Footnote link */}
          <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200/50 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-neutral-400" />
              <div>
                <h4 className="text-xs font-bold text-neutral-800 leading-snug">UC Berkeley Affiliation</h4>
                <p className="text-[10px] text-neutral-400 font-medium">Department of Mechanical Engineering</p>
              </div>
            </div>
            <span className="text-[9px] font-extrabold text-blue-700 bg-blue-100 px-2 py-0.5 rounded tracking-wide shrink-0">
              POSTDOC
            </span>
          </div>
        </div>

        {/* Right Column (Contact Form) */}
        <div className="lg:col-span-3">
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-150 shadow-sm flex flex-col gap-5"
            id="contact-form"
          >
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-2 border-b border-neutral-100 pb-2 flex items-center gap-2">
              <Send className="w-4.5 h-4.5 text-neutral-400" />
              <span>Direct Communication Channel</span>
            </h3>

            {/* Notification Bar */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2.5 shadow-sm"
                  id="contact-form-success"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <p className="leading-tight">Thank you! Your message has been sent successfully.</p>
                    <p className="text-[10px] text-emerald-600 font-medium mt-0.5">We will get back to your email address shortly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider" htmlFor="form-name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Prof. Jane Doe"
                  className="bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider" htmlFor="form-email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g., colleague@institution.edu"
                  className="bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Affiliation */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider" htmlFor="form-affiliation">
                  Affiliation / Company
                </label>
                <input
                  type="text"
                  id="form-affiliation"
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleChange}
                  placeholder="e.g., Stanford University"
                  className="bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider" htmlFor="form-subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="form-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g., Inquiry regarding DOE design"
                  className="bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            </div>

            {/* Message Body */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider" htmlFor="form-message">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="form-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your academic or collaboration message details here..."
                className="bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black resize-y"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
              className="flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-850 text-white disabled:bg-neutral-300 disabled:text-neutral-500 py-3.5 rounded-xl text-xs font-bold transition-all mt-2 cursor-pointer shadow-md select-none"
              id="contact-form-submit-btn"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Transmitting Wave Signals...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Electronic Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
