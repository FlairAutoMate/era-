import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Building2, User, Wrench, Briefcase } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<string | null>(null);

  // Close on esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const roles = [
    { id: 'board', label: 'Styremedlem', icon: Building2 },
    { id: 'contractor', label: 'Håndverker', icon: Wrench },
    { id: 'partner', label: 'Selskap / Partner', icon: Briefcase },
    { id: 'homeowner', label: 'Boligeier', icon: User },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-era-navy/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl bg-white shadow-2xl overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center p-6 border-b border-era-navy/5 bg-era-ivory/50">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-era-navy/60 font-bold">Early Access</p>
                <h3 className="text-xl font-medium text-era-navy leading-none mt-1">Be om tilgang til ERA</h3>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-none bg-white hover:bg-era-navy hover:text-white flex items-center justify-center text-era-navy border border-era-navy/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <p className="text-sm text-era-navy/60 font-light mb-8">
                    Hvordan planlegger du å bruke plattformen?
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {roles.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => { setRole(r.id); setStep(2); }}
                        className="flex flex-col items-center justify-center p-8 border border-era-navy/5 hover:border-era-navy bg-white hover:bg-era-navy hover:text-white transition-all duration-300 group text-era-navy group h-32"
                      >
                        <r.icon className="w-6 h-6 mb-4 text-era-navy/60 group-hover:text-era-gold transition-colors" />
                        <span className="text-sm font-medium">{r.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : step === 2 ? (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <p className="text-sm text-era-navy/60 font-light mb-8">
                    Legg igjen kontaktinformasjon, så tar vi kontakt for en potensiell demonstrasjon.
                  </p>
                  
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Fullt navn" 
                      className="w-full bg-era-ivory border border-era-navy/5 px-6 py-4 text-sm focus:outline-none focus:border-era-navy focus:bg-white transition-colors"
                    />
                    <input 
                      type="email" 
                      placeholder="Jobb- eller privat e-postadresse" 
                      className="w-full bg-era-ivory border border-era-navy/5 px-6 py-4 text-sm focus:outline-none focus:border-era-navy focus:bg-white transition-colors"
                    />
                    {role !== 'homeowner' && (
                      <input 
                        type="text" 
                        placeholder={role === 'board' ? 'Navn på sameie/borettslag' : 'Selskapsnavn'} 
                        className="w-full bg-era-ivory border border-era-navy/5 px-6 py-4 text-sm focus:outline-none focus:border-era-navy focus:bg-white transition-colors"
                      />
                    )}
                  </div>

                  <div className="mt-10 flex gap-4">
                    <button 
                      onClick={() => setStep(1)}
                      className="px-6 py-4 border border-era-navy/5 text-era-navy hover:bg-era-ivory text-xs font-bold uppercase tracking-widest transition-colors flex-shrink-0"
                    >
                      Tilbake
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      className="flex-1 bg-era-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-era-midnight transition-colors py-4 flex items-center justify-center gap-2"
                    >
                      Send forespørsel
                      <ArrowRight className="w-4 h-4 text-era-gold" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-era-navy/5 rounded-full flex items-center justify-center mx-auto mb-6 text-era-gold">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-medium text-era-navy mb-4">Takk for interessen.</h3>
                  <p className="text-era-navy/60 font-light text-sm max-w-sm mx-auto mb-10 leading-relaxed">
                    Din forespørsel er mottatt. Siden vi for tiden ruller ut tilkoblinger selektivt, vil en av våre rådgivere ta kontakt innen kort tid.
                  </p>
                  <button 
                    onClick={onClose}
                    className="bg-transparent border-b border-era-navy text-era-navy font-bold text-xs uppercase tracking-widest pb-1 hover:text-era-gold hover:border-era-gold transition-colors"
                  >
                    Lukk vindu
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
