import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  GraduationCap, 
  Send, 
  CheckCircle,
  Building2,
  LogOut,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { initAuth, googleSignIn, logout } from '../lib/firebase';
import { User } from 'firebase/auth';

// Helper to build an RFC 822 formatted raw email and base64url encode it
const buildRawEmail = ({ to, subject, body }: { to: string; subject: string; body: string }) => {
  const emailLines = [
    `To: ${to}`,
    `Subject: =?utf-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset="UTF-8"',
    '',
    body
  ];
  const email = emailLines.join('\r\n');
  const base64 = btoa(unescape(encodeURIComponent(email)));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

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

  // Authentication State
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  // Initialize Auth State Listener
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, currentToken) => {
        setUser(currentUser);
        setToken(currentToken);
        setIsLoadingAuth(false);
      },
      () => {
        setUser(null);
        setToken(null);
        setIsLoadingAuth(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // Pre-fill fields from user profile when they login
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: prev.name || user.displayName || '',
        email: prev.email || user.email || ''
      }));
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async () => {
    try {
      setIsSubmitting(true);
      setAuthError(null);
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setToken(result.accessToken);
      }
    } catch (err: any) {
      console.error('Google Sign In failed:', err);
      setAuthError('Failed to sign in with Google. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      setUser(null);
      setToken(null);
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setAuthError(null);
    
    const subjectLine = formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : '[Portfolio Inquiry] Contact from Academic Portfolio';
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nAffiliation: ${formData.affiliation || 'None'}\n\nMessage:\n${formData.message}`;

    try {
      let currentToken = token;
      
      // If not logged in, trigger Google Login flow automatically
      if (!currentToken) {
        const result = await googleSignIn();
        if (result) {
          setUser(result.user);
          setToken(result.accessToken);
          currentToken = result.accessToken;
        } else {
          throw new Error('Google Authentication is required to transmit direct messages via Gmail.');
        }
      }

      if (!currentToken) {
        throw new Error('Gmail authorization token is missing. Please sign in with Google.');
      }

      // Transmit email directly using Google Gmail API
      const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${currentToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          raw: buildRawEmail({
            to: 'sangjun.han.contact@gmail.com',
            subject: subjectLine,
            body: emailBody
          })
        })
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        console.error('Gmail API send failed:', errData);
        throw new Error(errData.error?.message || 'Failed to send message via Gmail API.');
      }

      setSubmitSuccess(true);
      setFormData(prev => ({ ...prev, subject: '', message: '' }));
      
      // Auto-dismiss success alert after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err: any) {
      console.error('Gmail transmission error:', err);
      setAuthError(err.message || 'An error occurred while attempting to send the email.');
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="max-w-5xl mx-auto py-12 px-6">
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
                    <div className="flex flex-col gap-1 mb-1.5 font-display text-sm font-bold text-neutral-900">
                      <p className="leading-tight select-all">sangjun.han.contact@gmail.com</p>
                      <p className="leading-tight select-all">sangjun.han@berkeley.edu</p>
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
              <span>Direct Communication Channel</span>
            </h3>

            {/* Google Authentication Status Panel */}
            <div className="bg-neutral-50 px-4 py-3 rounded-2xl border border-neutral-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner">
              <div className="flex items-center gap-2.5">
                <div className={`w-2.5 h-2.5 rounded-full ${user ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-300'}`} />
                <div>
                  <h4 className="text-[11px] font-bold text-neutral-700 leading-none">
                    {user ? 'Authenticated with Gmail' : 'Direct Email Transmission'}
                  </h4>
                  <p className="text-[10px] text-neutral-400 font-medium mt-1">
                    {user ? `Connected as ${user.email}` : 'Sign in to send your message directly via Google API'}
                  </p>
                </div>
              </div>

              {user ? (
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="flex items-center gap-1 text-[10px] font-extrabold text-neutral-500 hover:text-neutral-800 bg-neutral-200/50 hover:bg-neutral-200 px-3 py-1.5 rounded-lg transition-all cursor-pointer border-none outline-none"
                >
                  <LogOut className="w-3 h-3" />
                  <span>Disconnect</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSignIn}
                  className="flex items-center gap-1.5 text-[10px] font-extrabold text-neutral-850 hover:text-black bg-white border border-neutral-200 hover:border-neutral-300 shadow-sm px-3 py-1.5 rounded-lg transition-all cursor-pointer border-none outline-none"
                >
                  {/* Styled Google Icon */}
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.3 1 3.3 3.7 1.3 7.7l3.7 2.9C6 7.4 8.7 5 12 5z"/>
                    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.1-2 3.7-5 3.7-9z"/>
                    <path fill="#FBBC05" d="M5 14.2c-.3-.8-.4-1.7-.4-2.2s.1-1.4.4-2.2L1.3 6.9C.5 8.5 0 10.2 0 12s.5 3.5 1.3 5.1l3.7-2.9z"/>
                    <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.3 0-6-2.4-7-5.6l-3.7 2.9C3.3 19.3 7.3 23 12 23z"/>
                  </svg>
                  <span>Connect Gmail</span>
                </button>
              )}
            </div>

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
                    <p className="text-[10px] text-emerald-600 font-medium mt-0.5">We transmitted the email directly via your Gmail API client.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Notification Bar */}
            <AnimatePresence>
              {authError && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-rose-50 border border-rose-200 p-3.5 rounded-xl text-rose-800 text-xs font-bold flex items-center gap-2.5 shadow-sm"
                  id="contact-form-error"
                >
                  <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  <div className="flex-grow">
                    <p className="leading-tight">{authError}</p>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setAuthError(null)}
                    className="text-rose-400 hover:text-rose-600 text-[10px] uppercase font-bold border-none bg-transparent cursor-pointer"
                  >
                    Dismiss
                  </button>
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
              className="flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-850 text-white disabled:bg-neutral-300 disabled:text-neutral-500 py-3.5 rounded-xl text-xs font-bold transition-all mt-2 cursor-pointer shadow-md select-none border-none outline-none"
              id="contact-form-submit-btn"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Transmitting via Gmail API...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>{user ? 'Transmit via Gmail' : 'Connect & Transmit via Gmail'}</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
