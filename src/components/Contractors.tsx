import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Camera, 
  Users, 
  History, 
  ClipboardCheck, 
  Sparkles, 
  MessageSquare, 
  Check, 
  Bell, 
  Building,
  Radio,
  ExternalLink,
  Cpu
} from 'lucide-react';

const flowSteps = [
  {
    id: 1,
    title: "1. Oppdaget avvik",
    desc: "Slitasje terrasse detektert via bildeanalyse, klar for kobling til kvalifisert håndverker.",
    badge: "Detektert",
    badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/30",
    icon: Camera
  },
  {
    id: 2,
    title: "2. KI forespørsel generert",
    desc: "ERA oppretter komplett anbudsgrunnlag med kobling til kvalifisert håndverker.",
    badge: "Automatisert",
    badgeColor: "bg-era-gold/20 text-era-gold border-era-gold/30",
    icon: Sparkles
  },
  {
    id: 3,
    title: "3. Håndverkere varslet",
    desc: "Sendt til 3 kvalitetssikrede rørleggere med kobling til kvalifisert håndverker.",
    badge: "Sendt",
    badgeColor: "bg-blue-400/20 text-blue-300 border-blue-400/30",
    icon: Bell
  },
  {
    id: 4,
    title: "4. Tilbud mottatt",
    desc: "Fastpris matchet med ditt budsjett, klargjort for kobling til kvalifisert håndverker.",
    badge: "Matchet lynhurtig",
    badgeColor: "bg-purple-400/20 text-purple-300 border-purple-400/30",
    icon: MessageSquare
  },
  {
    id: 5,
    title: "5. Dokumentasjon arkivert",
    desc: "Dokumenter låst til FDV etter ferdigstilt kobling til kvalifisert håndverker.",
    badge: "Synkronisert",
    badgeColor: "bg-emerald-400/20 text-emerald-300 border-emerald-400/30",
    icon: ShieldCheck
  }
];

export default function Contractors() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-36 px-6 bg-era-navy text-white relative overflow-hidden" id="oppdrag-vipps">
      {/* Editorial space grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:32px_32px]" />
      
      {/* Background radial soft light to make it look incredibly premium and space-like */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-era-gold/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP INTRO CARD: Massive Hero Style Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-era-gold font-bold uppercase tracking-[0.3em] font-sans text-[10px]">
                KOMMANDOSENTRAL — LYNENKELT REKVISISJON
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-semibold mb-6 leading-[1.05] tracking-tight text-white">
              Like enkelt som Vipps
            </h2>
            <p className="text-white/70 text-lg font-light leading-relaxed max-w-2xl">
              Når ERA oppdager slitasje eller vedlikeholdsavvik, fikser du det med ett trykk. Ingen telefonrunder, ingen anbudskaos. Alt fra spesifikasjon til kobling og dokumentasjon skjer umiddelbart i bakgrunnen, ukomplisert og lynraskt.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Live autonomous stats metrics */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <span className="text-[10px] uppercase font-bold tracking-wider text-white/50 block mb-1">Overvåkning</span>
              <p className="text-2xl font-bold text-white font-mono">SANNTID</p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[8px] uppercase tracking-wider font-mono text-emerald-400 font-bold">Responstid: &lt; 1 sek</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <span className="text-[10px] uppercase font-bold tracking-wider text-white/50 block mb-1">KI Formidling</span>
              <p className="text-2xl font-bold text-era-gold font-mono">1 420+</p>
              <span className="text-[8px] uppercase tracking-wider font-mono text-white/40 block mt-2">Sertifiserte bedrifter</span>
            </div>
          </div>
        </div>

        {/* TWO COLUMN GRID: LEFT = COCKPIT METRICS & RADAR SCREEN. RIGHT = STEP PROGRESSION GRAPHIC */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT SIDEBAR: RADAR AND ACTIVE SCANS */}
          <div className="lg:col-span-5 bg-[#0b1b31]/80 border border-white/10 p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden">
            {/* High-tech scan panel */}
            <div>
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                <span className="text-[10px] font-mono tracking-widest text-[#a3b8cc] uppercase font-bold">SCANNER_SATELLITE_A1</span>
                <Radio className="w-4 h-4 text-era-gold" />
              </div>

              {/* Scanning visual radar screen */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto mb-8 bg-[#040d1a] border border-white/10 rounded-full overflow-hidden flex items-center justify-center group/radar">
                {/* Embedded Radar Sweep lines */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,#040d1a_70%)] opacity-80" />
                {/* Dotted grid lines */}
                <div className="absolute w-full h-[1px] bg-white/10" />
                <div className="absolute h-full w-[1px] bg-white/10" />
                
                {/* Sweeping radar blade animates on hover of the radar/container */}
                <motion.div 
                  className="absolute inset-0 origin-center bg-gradient-to-tr from-transparent via-emerald-500/20 to-transparent"
                  whileHover={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                />

                {/* Radar Blip */}
                <div className="absolute w-3 h-3 bg-emerald-400 rounded-full top-1/3 left-1/4 shadow-[0_0_12px_#34d399]" />
                <div className="absolute w-2.5 h-2.5 bg-era-gold rounded-full bottom-1/3 right-1/3 shadow-[0_0_8px_#d4af37]" />

                <span className="text-[8px] font-mono tracking-widest text-white/40 uppercase absolute bottom-4">System radar</span>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[9px] uppercase tracking-widest text-white/50 font-bold block">Aktivt telemetri-feil</span>
              <div className="space-y-2 text-xs font-mono">
                <div className="p-3 bg-white/5 border border-white/10 rounded flex justify-between items-center">
                  <span className="text-white/70">Takfornying status</span>
                  <span className="text-emerald-400">Normal</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded flex justify-between items-center">
                  <span className="text-white/70">Våtrom risiko</span>
                  <span className="text-era-gold">Overvåkes (TG2)</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COL: DYNAMIC PROCESS STEPS */}
          <div className="lg:col-span-7 bg-[#0b1b31]/80 border border-white/10 p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Scanline overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_50%,rgba(0,0,0,0.08)_50%)] bg-[size:100%_4px] pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#a3b8cc] font-bold">Kommando-sekvens</span>
                  <h3 className="text-xl font-medium mt-1">Live oppdragsflyt</h3>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[8px] font-bold font-mono tracking-wider opacity-80 uppercase text-[#a3b8cc]">Hold musen over for å utforske</span>
                </div>
              </div>

              {/* Steps progression visualizer */}
              <div className="space-y-4 relative">
                {/* Connecting track line */}
                <div className="absolute left-[20px] top-6 bottom-6 w-0.5 bg-white/10 z-0" />
                <div 
                  className="absolute left-[20px] top-6 w-0.5 bg-era-gold transition-all duration-300 z-0" 
                  style={{ height: `${(activeStep / (flowSteps.length - 1)) * 90}%` }}
                />

                {flowSteps.map((step, idx) => {
                  const SvgIcon = step.icon;
                  const isActive = idx === activeStep;
                  const isCompleted = idx < activeStep;
                  
                  return (
                    <motion.div 
                      key={idx}
                      onMouseEnter={() => setActiveStep(idx)}
                      whileHover={{ scale: 1.01, x: 4 }}
                      style={{ cursor: "pointer" }}
                      className={`relative z-10 p-4 border transition-all duration-300 flex gap-4 ${
                        isActive 
                          ? 'bg-white/10 border-era-gold shadow-lg shadow-era-gold/5 factor-100'
                          : isCompleted 
                            ? 'bg-white/5 border-white/5 opacity-70'
                            : 'bg-transparent border-transparent opacity-30'
                      }`}
                    >
                      {/* Left icon circle with active state and connection lines */}
                      <div className="relative">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
                          isActive 
                            ? 'bg-era-navy border-era-gold text-era-gold shadow-md' 
                            : isCompleted 
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                              : 'bg-white/5 border-white/10 text-white/40'
                        }`}>
                          {isCompleted ? (
                            <Check className="w-5 h-5" />
                          ) : (
                            <SvgIcon className="w-4 h-4" />
                          )}
                        </div>
                      </div>

                      {/* Descriptive content */}
                      <div className="flex-1 min-w-0 text-left">
                        <div className="flex items-center justify-between mb-1 gap-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white truncate">
                            {step.title}
                          </h4>
                          <span className={`text-[8px] font-bold uppercase px-2 py-0.5 border ${step.badgeColor} whitespace-nowrap shrink-0`}>
                            {step.badge}
                          </span>
                        </div>
                        <p className="text-xs font-light text-white/70 leading-relaxed max-w-xl">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom explanation */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-light italic">
              <span>Oppdaterer FDV i sanntid...</span>
              <span className="font-mono text-[9px] text-era-gold">PROSESS: AKTIV</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
