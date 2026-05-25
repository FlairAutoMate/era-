import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  FileSearch, 
  MessageSquare, 
  Wrench, 
  Check, 
  ShieldCheck, 
  Smartphone,
  ChevronRight,
  Database
} from 'lucide-react';

interface HowItWorksScrollyProps {
  onOpenWaitlist?: () => void;
}

const FLOW_STEPS = [
  {
    id: "step-1",
    num: "01",
    tabLabel: "Motta/Kartlegging",
    title: "1. Automatisk kartlegging",
    sub: "Eiendommens hukommelse opprettes",
    desc: "Du laster enkelt opp e-poster, gamle PDF-rapporter, kvitteringer eller fargekoder. ERA skanner innholdet automatisk og samler alt i et ryddig, skybasert Boligminne.",
    visualType: "analysis",
    color: "bg-era-gold",
    accentText: "Kartlegging aktiv"
  },
  {
    id: "step-2",
    num: "02",
    tabLabel: "SMS-varsling",
    title: "2. Behovsbasert SMS-varsel",
    sub: "Ingen app-støy, kun dyp proaktivitet",
    desc: "Når en slitekomponent (som f.eks. sluket ditt fra 2012 eller fuktsoner) trenger ettersyn, sender ERA et enkelt filter-varsel på SMS. Alt skjer i bakgrunnen uten at du må overvåke noe.",
    visualType: "sms",
    color: "bg-[#0b1426]",
    accentText: "SMS sendt"
  },
  {
    id: "step-3",
    num: "03",
    tabLabel: "Ferdig løsning",
    title: "3. Direkte fastpris-løsning",
    sub: "Smidig utførelse på sekunder",
    desc: "Ved godkjenning kobler vi deg automatisk til en godkjent, lokal fagperson. Omfanget er fastsatt, avtalt til fastpris og overføres sømløst slik at rørleggeren har alt underlag klart.",
    visualType: "solution",
    color: "bg-emerald-500",
    accentText: "Match utført"
  }
];

export default function HowItWorksScrolly({ onOpenWaitlist }: HowItWorksScrollyProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-28 md:py-36 px-6 bg-white text-era-navy relative overflow-hidden border-t border-era-navy/5" id="hvordan-det-fungerer">
      {/* Subtle brand grid lines background element */}
      <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none">
        <div 
          className="absolute inset-x-0 top-0 bottom-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #0E2341 1px, transparent 1px)`,
            backgroundSize: '64px 100%'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Simplified Header */}
        <div className="max-w-2xl mb-16 text-left">
          <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block font-sans">
            ET AUTOMATISERT SYSTEM
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0E2341] leading-[1.1] mb-5">
            Hvordan ERA fungerer.
          </h2>
          <p className="text-base md:text-lg text-[#0E2341]/70 font-light leading-relaxed">
            Vi gjør alt det kjedelige arbeidet. Vi kartlegger dokumentasjon, overvåker slitesoner, og formidler riktig partner til avtalt fastpris.
          </p>
        </div>

        {/* Minimalist interactive tabs to replace heavy card blocks */}
        <div className="flex border-b border-[#0E2341]/10 mb-12 overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
          {FLOW_STEPS.map((step, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveTab(idx)}
                className={`pb-4 px-2 md:px-6 font-sans text-xs uppercase tracking-widest font-bold border-b-2 transition-all duration-300 mr-4 md:mr-8 relative outline-none ${
                  isSelected 
                    ? "border-era-gold text-era-navy" 
                    : "border-transparent text-era-navy/40 hover:text-era-navy/70"
                }`}
              >
                <span className="font-mono text-[10px] text-era-gold mr-2 font-normal">{step.num}</span>
                {step.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Two Column Workspace (Interactive Content on Left, Simulated Dynamic Phone on Right) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Contextual Explainer */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#a19a90] uppercase font-bold">
                    {FLOW_STEPS[activeTab].sub}
                  </span>
                  <h3 className="text-2xl md:text-3.5xl font-medium tracking-tight text-[#0E2341] mt-2 mb-4 leading-tight">
                    {FLOW_STEPS[activeTab].title}
                  </h3>
                  <p className="text-sm md:text-base text-[#0E2341]/75 leading-relaxed font-light">
                    {FLOW_STEPS[activeTab].desc}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-[#0E2341]/80">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-emerald-600">Alltid 100% gratis for deg som boligeier</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#0E2341]/80">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Låst og kryptert etter strenge sikkerhetskrav</span>
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    onClick={onOpenWaitlist}
                    className="bg-[#0b1426] hover:bg-[#060b14] text-white text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg"
                  >
                    <span>Kom i gang med ERA</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Ultra-clean Live interactive visualization frame (Simulated Phone concept, but raw and borderless) */}
          <div className="lg:col-span-6 flex justify-center">
            
            <div className="w-full max-w-[360px] bg-[#FAF9F5] rounded-3xl p-6 shadow-[0_20px_50px_rgba(14,35,65,0.06)] border border-[#0E2341]/5 relative overflow-hidden text-left min-h-[380px] flex flex-col justify-between">
              
              {/* Dynamic Simulated Background effects */}
              <div className="absolute inset-0 bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15]" />
              
              {/* Mock Status Header inside device */}
              <div className="relative z-10 flex justify-between items-center pb-4 border-b border-[#0E2341]/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-bold tracking-widest text-era-navy/60 uppercase">
                    {FLOW_STEPS[activeTab].accentText}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-era-navy/40">SIMULERING</span>
              </div>

              {/* Dynamic Interactive Views */}
              <div className="relative z-10 flex-1 flex items-center justify-center py-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    
                    {/* VIEW 1: DOCUMENT / ANALYSIS SCAN */}
                    {FLOW_STEPS[activeTab].visualType === "analysis" && (
                      <div className="space-y-4">
                        <div className="bg-white border border-[#0E2341]/5 rounded-xl p-4 shadow-3xs space-y-3">
                          <div className="flex items-center justify-between text-[10px] font-mono text-era-gold font-bold">
                            <span>DOKUMENT TOLKET</span>
                            <span className="text-emerald-500">✓ AVLEST</span>
                          </div>
                          
                          <div className="space-y-1">
                            <p className="text-xs font-bold text-era-navy font-sans">bad_samsvarsdok.pdf</p>
                            <p className="text-[10px] text-era-navy/60 font-mono">Fagområde: Sanitær & Våtrom</p>
                          </div>

                          <div className="h-[1px] bg-era-navy/5" />

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            <span className="bg-[#0b1426]/5 text-era-navy text-[9px] font-semibold px-2 py-0.5 rounded">Litex Membran</span>
                            <span className="bg-[#0b1426]/5 text-era-navy text-[9px] font-semibold px-2 py-0.5 rounded">Installasjon: 2012</span>
                          </div>
                        </div>

                        {/* KI Note */}
                        <div className="bg-era-gold/10 border border-era-gold/20 rounded-xl p-3 text-[10px] text-era-navy/80 font-light flex items-start gap-2">
                          <Database className="w-3.5 h-3.5 text-era-gold shrink-0 mt-0.5" />
                          <span>Analysert: Sluk har forventet levetid på 14 år. Estimeres sjekket i 2026.</span>
                        </div>
                      </div>
                    )}

                    {/* VIEW 2: LIVE SMS THREAD */}
                    {FLOW_STEPS[activeTab].visualType === "sms" && (
                      <div className="space-y-3">
                        <span className="text-[8px] font-mono text-[#a19a90] text-center block uppercase">Melding i dag</span>
                        
                        {/* Outbound SMS Bubble */}
                        <div className="bg-[#FAF9F5] border border-[#0E2341]/10 rounded-2xl p-4 max-w-[85%] shadow-3xs text-left">
                          <span className="text-[8px] font-mono text-era-gold uppercase font-bold block mb-1">ERA ASSISTENT</span>
                          <p className="text-[11px] font-sans text-era-navy font-light leading-relaxed">
                            "Hei Lars! Sluket montert i 2012 bør sjekkes for å opprettholde garantien. Vi har klargjort en kontroll hos Oslo VVS til fastpris kr 1 490. Svar JA for å godkjenne."
                          </p>
                        </div>

                        {/* Interactive customer response mock */}
                        <div className="ml-auto bg-[#0b1426] text-white rounded-2xl p-3 max-w-[45%] shadow-3xs text-right">
                          <p className="text-[11px] font-sans font-medium">JA, bekreft</p>
                        </div>
                      </div>
                    )}

                    {/* VIEW 3: DISPATCH / APPOINTMENT WRAP */}
                    {FLOW_STEPS[activeTab].visualType === "solution" && (
                      <div className="space-y-4">
                        <div className="bg-white border border-emerald-500/20 rounded-xl p-4 shadow-3xs space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono text-emerald-600 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                              TILDELT PARTNER
                            </span>
                            <span className="text-[10px] text-emerald-500 font-bold font-mono">100% SIKRET</span>
                          </div>

                          <div className="space-y-1">
                            <p className="text-xs font-bold text-era-navy font-sans">Oslo VVS AS</p>
                            <p className="text-[10px] text-era-navy/60 font-light leading-relaxed">Fastpris rørleggerbefaring • Skjermet FDV-arkiv overføres sømløst.</p>
                          </div>

                          <div className="h-[1px] bg-era-navy/5" />

                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-era-navy/50 font-mono">Slukservice-avtale</span>
                            <span className="font-bold text-era-navy">kr 1 490,-</span>
                          </div>
                        </div>

                        {/* Small green trust bar */}
                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-[10px] text-emerald-800 text-center font-bold font-mono">
                          ✓ Oppdrag utføres med våtromsgaranti • Vipps
                        </div>
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation dots matching the phase index */}
              <div className="relative z-10 flex justify-center gap-2 pt-2">
                {FLOW_STEPS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeTab === idx ? "w-6 bg-era-navy" : "w-1.5 bg-era-navy/15"
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
