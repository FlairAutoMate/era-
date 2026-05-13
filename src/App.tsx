/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Partners from './components/Partners';
import StepFlow from './components/StepFlow';
import Features from './components/Features';
import Timeline from './components/Timeline';
import Insights from './components/Insights';
import AmbientFeed from './components/AmbientFeed';
import Contractors from './components/Contractors';
import BRL from './components/BRL';
import Resources from './components/Resources';
import Comparison from './components/Comparison';
import Footer from './components/Footer';
import WhyERA from './components/WhyERA';
import TrustSection from './components/TrustSection';
import ContractorPage from './components/contractor/ContractorPage';
import BRLPage from './components/brl/BRLPage';
import { motion, AnimatePresence } from 'motion/react';

export type ViewType = 'homeowner' | 'brl' | 'contractor';

export default function App() {
  const [view, setView] = useState<ViewType>('homeowner');

  // Audit Fix: Reset scroll when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  return (
    <div className="min-h-screen bg-era-ivory selection:bg-era-gold selection:text-white">
      <Navigation currentView={view} onViewChange={setView} />
      
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
              <Hero />
              <Partners />
              <Features />
              <BRL />
              <Contractors />
              <WhyERA />
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
                  <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block font-body">Fremtiden er nå</span>
                  <h2 className="text-6xl md:text-8xl font-bold mb-12 leading-[0.9] tracking-tight">
                    Vedlikehold skal være like enkelt som Vipps.
                  </h2>
                  <div className="flex flex-wrap justify-center gap-6">
                    <button className="bg-white text-era-navy py-6 px-14 text-xs font-bold uppercase tracking-[0.2em] rounded-none hover:bg-era-ivory transition-all shadow-xl shadow-black/10">
                      Start gratis
                    </button>
                    <button className="px-14 py-6 text-xs font-bold uppercase tracking-[0.2em] border border-white/20 hover:bg-white/5 transition-colors rounded-none">
                      Om ERA
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
              <ContractorPage />
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
              <BRLPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onViewChange={setView} />
    </div>
  );
}

