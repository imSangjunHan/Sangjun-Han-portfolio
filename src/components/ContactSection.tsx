import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle,
  Building2,
  Copy,
  Check,
  ExternalLink
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyBody = () => {
    const subjectLine = formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : '[Portfolio Inquiry] Contact from Portfolio Website';
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nAffiliation: ${formData.affiliation || 'None'}\n\nMessage:\n${formData.message}`;
    const fullText = `To: sangjun.han.contact@gmail.com\nSubject: ${subjectLine}\n\n${emailBody}`;
    
    navigator.clipboard.writeText(fullText);
    setCopiedBody(true);
    setTimeout(() => setCopiedBody(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const subjectLine = formData.subject ? `[Inquiry] ${formData.subject}` : '[Inquiry] Contact from Portfolio Website';
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nAffiliation: ${formData.affiliation || 'None'}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:sangjun.han.contact@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(emailBody)}`;

    // Try opening via iframe-escape safe redirect/window launch
    try {
      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.warn('Mailto link launch blocked or failed:', err);
    }

    // Set success to true to show fallback copying help panel
    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  const contactCards = [
    {
      title: "Inquiries & Opportunities",
      detail: "sangjun.han.contact@gmail.com",
      sub: "Open to discussions regarding research collaboration, postdoctoral partnerships, industry opportunities, or recruiter outreach.",
      actionLabel: "Email Dr. Han",
      href: "mailto:sangjun.han.contact@gmail.com",
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
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6" id="contact-view">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-display font-black text-neutral-900 tracking-tight mb-2">
          Get in Touch
        </h1>
        <p className="text-sm text-neutral-500 max-w-lg mx-auto">
          Have an academic inquiry, collaboration proposal, industry recruitment opportunity, or research question? Please fill out the contact form below or reach out directly.
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

                  {idx === 0 ? (
                    <div className="flex flex-col gap-2 mb-2 font-display text-sm font-bold text-neutral-900">
                      <div className="flex items-center justify-between gap-2 group">
                        <span className="leading-tight select-all">sangjun.han.contact@gmail.com</span>
                        <button 
                          onClick={() => handleCopyEmail('sangjun.han.contact@gmail.com')}
                          className="p-1 rounded bg-neutral-50 hover:bg-neutral-100 text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer border-none outline-none"
                          title="Copy email to clipboard"
                        >
                          {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                      <div className="flex items-center justify-between gap-2 border-t border-neutral-100 pt-2">
                        <span className="leading-tight select-all">sangjun.han@berkeley.edu</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm font-bold text-neutral-900 font-display mb-1.5 leading-tight select-all">
                      {card.detail}
                    </p>
                  )}
                  <p className="text-[11px] text-neutral-500 leading-relaxed mb-4">
                    {card.sub}
                  </p>
                </div>

                <a 
                  href={card.href}
                  onClick={(e) => {
                    if (idx === 0) {
                      e.preventDefault();
                      const formElement = document.getElementById('contact-form');
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth' });
                        const subjectInput = document.getElementById('form-subject');
                        if (subjectInput) {
                          subjectInput.focus();
                        }
                      }
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
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
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider border-b border-neutral-100 pb-2 flex items-center gap-2">
              <Send className="w-4.5 h-4.5 text-neutral-400" />
              <span>Send Message</span>
            </h3>

            {/* Notification Bar */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-emerald-50 border border-emerald-150 p-4 rounded-2xl text-emerald-950 text-xs flex flex-col gap-3 shadow-sm"
                  id="contact-form-success"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold leading-tight">Opened Email Client!</p>
                      <p className="text-[11px] text-emerald-700 font-medium mt-1">
                        We attempted to open your local email client (such as Gmail or Mail app) pre-filled with your message. 
                      </p>
                    </div>
                  </div>

                  {/* Fallback Help Center */}
                  <div className="bg-white/80 p-3.5 rounded-xl border border-emerald-100 flex flex-col gap-2.5 mt-1">
                    <p className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider">
                      ⚠️ Did the email app fail to open?
                    </p>
                    <p className="text-[11px] text-neutral-600 leading-normal">
                      Some browsers or security settings block direct mail opening in sandboxes. You can copy the email or the complete pre-formatted message below to send manually:
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <button
                        type="button"
                        onClick={() => handleCopyEmail('sangjun.han.contact@gmail.com')}
                        className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-700 bg-white hover:bg-neutral-50 border border-neutral-200 px-3 py-2 rounded-lg transition-all cursor-pointer outline-none"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
                        <span>{copiedEmail ? 'Copied Email!' : 'Copy Email Address'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleCopyBody}
                        className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-700 bg-white hover:bg-neutral-50 border border-neutral-200 px-3 py-2 rounded-lg transition-all cursor-pointer outline-none"
                      >
                        {copiedBody ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
                        <span>{copiedBody ? 'Copied Full Content!' : 'Copy Full Message Text'}</span>
                      </button>
                    </div>
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
                placeholder="Type your message details here..."
                className="bg-neutral-50 border border-neutral-200 px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-black resize-y"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
              className="flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-850 text-white disabled:bg-neutral-300 disabled:text-neutral-500 py-3.5 rounded-xl text-xs font-bold transition-all mt-2 cursor-pointer shadow-md select-none border-none outline-none"
              id="contact-form-submit-btn"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Launch Mail Application</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
