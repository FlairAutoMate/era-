/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturesSummary from './components/FeaturesSummary';
import HowItWorksScrolly from './components/HowItWorksScrolly';
import Contractors from './components/Contractors';
import Resources from './components/Resources';
import Footer from './components/Footer';
import WhyERA from './components/WhyERA';
import TrustSection from './components/TrustSection';
import ContractorPage from './components/contractor/ContractorPage';
import BRLPage from './components/brl/BRLPage';
import PartnersPage from './components/partners/PartnersPage';
import AboutPage from './components/about/AboutPage';
import AIAgentPage from './components/product/AIAgentPage';
import WaitlistModal from './components/WaitlistModal';
import { motion, AnimatePresence } from 'motion/react';

export type ViewType = 'homeowner' | 'brl' | 'contractor' | 'partners' | 'about' | 'product-ai';

export default function App() {
  const [view, setView] = useState<ViewType>('homeowner');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // Audit Fix: Reset scroll when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  return (
    <div className="min-h-screen bg-era-ivory selection:bg-era-gold selection:text-white">
      <Navigation currentView={view} onViewChange={setView} onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      
      <main>
        <AnimatePresence mode="wait">
          {view === 'homeowner' && (
            <motion.div
              key="homeowner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero 
                onOpenWaitlist={() => setIsWaitlistOpen(true)} 
                onOpenProductAI={() => setView('product-ai')}
              />
              <FeaturesSummary />
              <HowItWorksScrolly />
              <Contractors />
              <WhyERA />

              {/* B2B / Professional Exit Banner */}
              <section className="bg-white border-y border-era-navy/5 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-era-navy/5 flex items-center justify-center rounded-xl text-era-navy hidden sm:flex">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-bold text-era-navy uppercase tracking-widest mb-1">Profesjonell aktør?</h3>
                      <p className="text-era-navy/60 font-light text-sm">Representerer du et sameie eller er du håndverker? Utforsk våre Enterprise-løsninger.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 w-full md:w-auto">
                    <button 
                      onClick={() => setView('brl')}
                      className="flex-1 md:flex-none border border-era-navy/10 text-era-navy hover:bg-era-ivory px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors text-center rounded-xl"
                    >
                      For Styret
                    </button>
                    <button 
                      onClick={() => setView('contractor')}
                      className="flex-1 md:flex-none border border-era-navy/10 text-era-navy hover:bg-era-ivory px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors text-center rounded-xl"
                    >
                      For Håndverkere
                    </button>
                  </div>
                </div>
              </section>

              <TrustSection />
              <Resources />
              
              {/* FINAL CTA SECTION */}
              <section className="py-60 px-6 bg-era-navy text-center relative overflow-hidden text-white">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="max-w-4xl mx-auto relative z-10"
                >
                  <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block font-body">Fremtidsvisjon</span>
                  <h2 className="text-6xl md:text-8xl font-bold mb-12 leading-[0.9] tracking-tight">
                    Fremtidens bolig er intelligent
                  </h2>
                  <p className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    ERA gjør boligen enklere å forstå, vedlikeholde og følge opp — med kunstig intelligens som jobber i bakgrunnen.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                    <button 
                      onClick={() => setIsWaitlistOpen(true)}
                      className="bg-white text-era-navy py-6 px-14 text-xs font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-era-ivory transition-all shadow-xl shadow-black/10"
                    >
                      Be om tilgang
                    </button>
                  </div>
                </motion.div>
                
                {/* Cinematic Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-era-midnight to-transparent opacity-60" />
              </section>
            </motion.div>
          )}

          {view === 'contractor' && (
            <motion.div
              key="contractor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContractorPage onOpenWaitlist={() => setIsWaitlistOpen(true)} />
            </motion.div>
          )}

          {view === 'brl' && (
            <motion.div
              key="brl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BRLPage onOpenWaitlist={() => setIsWaitlistOpen(true)} />
            </motion.div>
          )}

          {view === 'partners' && (
            <motion.div
              key="partners"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PartnersPage onOpenWaitlist={() => setIsWaitlistOpen(true)} />
            </motion.div>
          )}

          {view === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutPage />
            </motion.div>
          )}

          {view === 'product-ai' && (
            <motion.div
              key="product-ai"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AIAgentPage onOpenWaitlist={() => setIsWaitlistOpen(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onViewChange={setView} />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}

