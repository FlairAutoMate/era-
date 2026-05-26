/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PartnersSlideshow from './components/PartnersSlideshow';
import HowItWorksScrolly from './components/HowItWorksScrolly';
import Contractors from './components/Contractors';
import FutureTimeline from './components/FutureTimeline';
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
              <PartnersSlideshow />
              <HowItWorksScrolly onOpenWaitlist={() => setIsWaitlistOpen(true)} />
              <Contractors onOpenWaitlist={() => setIsWaitlistOpen(true)} />
              <FutureTimeline onOpenWaitlist={() => setIsWaitlistOpen(true)} />
              <WhyERA onOpenWaitlist={() => setIsWaitlistOpen(true)} />

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
              
              {/* FINAL CTA SECTION */}
              <section className="py-60 px-6 bg-era-navy text-center relative overflow-hidden text-white">
                {/* Subtle digital intelligence background animations */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                  {/* Neural Grid Dot Constellation */}
                  <div 
                    className="absolute inset-0 opacity-[0.035]" 
                    style={{
                      backgroundImage: `radial-gradient(#C8A96B 1.5px, transparent 1.5px)`,
                      backgroundSize: '40px 40px'
                    }}
                  />
                  
                  {/* Floating Analytical Waveforms */}
                  <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="none">
                    <motion.path
                      d="M -100 300 C 200 150, 400 450, 800 350 C 1200 250, 1300 500, 1600 400"
                      fill="none"
                      stroke="#C8A96B"
                      strokeWidth="1.2"
                      strokeDasharray="6 8"
                      animate={{ strokeDashoffset: [0, -120] }}
                      transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                      d="M -50 500 C 300 400, 500 550, 900 420 C 1300 290, 1400 480, 1650 380"
                      fill="none"
                      stroke="#C8A96B"
                      strokeWidth="1.2"
                      strokeDasharray="3 5"
                      animate={{ strokeDashoffset: [0, 90] }}
                      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>

                  {/* Soft cognitive brain glow areas */}
                  <div className="absolute top-[20%] left-[12%] w-[380px] h-[380px] bg-era-gold/[0.05] rounded-full blur-[80px]" />
                  <div className="absolute bottom-[15%] right-[8%] w-[420px] h-[420px] bg-emerald-500/[0.04] rounded-full blur-[90px]" />

                  {/* Pulsing Neural Nodes with Tech-Labels */}
                  <motion.div 
                    className="absolute top-[24%] left-[16%] hidden sm:flex items-center gap-2"
                    animate={{ opacity: [0.15, 0.45, 0.15], y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="w-2 h-2 bg-era-gold rounded-full shadow-[0_0_10px_#C8A96B]" />
                    <span className="text-[8px] font-mono tracking-[0.2em] text-[#a19a90] uppercase font-semibold">KI_ANALYSE</span>
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-[24%] right-[16%] hidden sm:flex items-center gap-2"
                    animate={{ opacity: [0.12, 0.4, 0.12], y: [0, 8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
                    <span className="text-[8px] font-mono tracking-[0.2em] text-[#a19a90] uppercase font-semibold">AUTOMATISERING</span>
                  </motion.div>

                  <motion.div 
                    className="absolute top-[68%] left-[10%] hidden md:flex items-center gap-2"
                    animate={{ opacity: [0.1, 0.35, 0.1], y: [0, -4, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  >
                    <span className="w-1.5 h-1.5 bg-era-gold rounded-full" />
                    <span className="text-[7.5px] font-mono tracking-[0.2em] text-[#a19a90] uppercase font-semibold">BOLIGMINNE_CLOUD</span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="max-w-5xl mx-auto relative z-10 text-center"
                >
                  <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block font-body">STRATEGISK INFRASTRUKTUR</span>
                  
                  <h2 className="text-4xl md:text-6xl font-medium mb-12 leading-[1.05] tracking-tight max-w-4xl mx-auto">
                    Intelligent infrastruktur for automatisk boligforvaltning.
                  </h2>
                  
                  <p className="text-lg md:text-xl text-white/70 font-light mb-16 max-w-3xl mx-auto leading-relaxed">
                    ERA bygger infrastrukturen som kobler sammen rå boligdata, intelligente KI-agenter og fysisk utførelse. Vi oversetter passive dokumenter til kontinuerlig forebygging, verdioptimalisering og sømløs prosesskontroll.
                  </p>

                  {/* Elegant strategic pillar grid (Palantir × Stripe style) */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left mb-16 max-w-4xl mx-auto border-t border-b border-white/10 py-10">
                    <div className="space-y-2">
                      <h4 className="text-era-gold font-mono text-[10px] uppercase tracking-wider">// SYSTEM_CORE</h4>
                      <p className="text-base font-semibold">Kontinuerlig boligintelligens</p>
                      <p className="text-xs text-white/50 font-light leading-relaxed">Kontinuerlig verdisikring og automatisert overvåking av slitasje og risiko.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-era-gold font-mono text-[10px] uppercase tracking-wider">// AGENT_LAYER</h4>
                      <p className="text-base font-semibold">Intelligente arbeidsflyter</p>
                      <p className="text-xs text-white/50 font-light leading-relaxed">Smarte KI-agenter som oppdager behov, verifiserer løsninger og igangsetter tiltak.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-era-gold font-mono text-[10px] uppercase tracking-wider">// LIVING_FDV</h4>
                      <p className="text-base font-semibold">Levende boligminne</p>
                      <p className="text-xs text-white/50 font-light leading-relaxed">FDV og vedlikeholdshistorikk synkronisert i sanntid, alltid klar for overdragelse.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-era-gold font-mono text-[10px] uppercase tracking-wider">// TILDELING_API</h4>
                      <p className="text-base font-semibold">Autonom tildeling</p>
                      <p className="text-xs text-white/50 font-light leading-relaxed">Direkte tildeling og kobling til sertifiserte partnere uten mellomledd.</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-6">
                    <button 
                      onClick={() => setIsWaitlistOpen(true)}
                      className="bg-white text-era-navy py-6 px-14 text-xs font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-era-ivory transition-all shadow-xl shadow-black/10"
                    >
                      Bli enterprise-partner
                    </button>
                  </div>
                </motion.div>
                
                {/* Cinematic Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-era-midnight to-transparent opacity-60 z-0" />
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

