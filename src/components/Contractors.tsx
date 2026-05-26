import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ContractorsProps {
  onOpenWaitlist?: () => void;
}

export default function Contractors({ onOpenWaitlist }: ContractorsProps) {
  return (
    <section className="py-28 md:py-40 px-6 bg-era-midnight text-white relative overflow-hidden" id="oppdrag-vipps">
      {/* Editorial premium background grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>
      
      {/* Light Luxury Scandinavian ambient glow - Drifting softly */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-era-gold/[0.05] blur-[170px] pointer-events-none rounded-full animate-pulse [animation-duration:12s]" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center"
      >
        
        {/* UPPER LABEL */}
        <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] block font-sans mb-6">
          KVALITETSSIKRET UTFØRELSE — UTEN ANBUDSSTRESS
        </span>
        
        {/* MAIN HEADLINE */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.08] font-sans max-w-3xl mb-8">
          Håndverkere du kan stole på.<br />Koblet helt uten anbudskaos.
        </h2>
        
        {/* SUBHEADLINE */}
        <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12">
          ERA analyserer vedlikeholdsbehovet, spesifiserer jobben og kobler deg direkte med kvalifiserte håndverkere — uten anbudskaos, tilfeldige tilbud eller stressende telefonrunder.
        </p>

        {/* Benefit Stack */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-3xl pt-8 border-t border-white/10 mb-12 w-full">
          <div className="flex items-center gap-2.5">
            <span className="w-4.5 h-4.5 rounded-full bg-era-gold/15 flex items-center justify-center shrink-0 border border-era-gold/20">
              <Check className="w-3 h-3 text-era-gold" />
            </span>
            <span className="text-white/90 text-sm font-medium">Kvalitetssikrede fagfolk</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-4.5 h-4.5 rounded-full bg-era-gold/15 flex items-center justify-center shrink-0 border border-era-gold/20">
              <Check className="w-3 h-3 text-era-gold" />
            </span>
            <span className="text-white/90 text-sm font-medium">Fastpris og tydelig omfang</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-4.5 h-4.5 rounded-full bg-era-gold/15 flex items-center justify-center shrink-0 border border-era-gold/20">
              <Check className="w-3 h-3 text-era-gold" />
            </span>
            <span className="text-white/90 text-sm font-medium">FDV oppdatert automatisk</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-4.5 h-4.5 rounded-full bg-era-gold/15 flex items-center justify-center shrink-0 border border-era-gold/20">
              <Check className="w-3 h-3 text-era-gold" />
            </span>
            <span className="text-white/90 text-sm font-medium">Ingen telefonrunder</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-4.5 h-4.5 rounded-full bg-era-gold/15 flex items-center justify-center shrink-0 border border-era-gold/20">
              <Check className="w-3 h-3 text-era-gold" />
            </span>
            <span className="text-white/90 text-sm font-medium">Lokal utførelse</span>
          </div>
        </div>

        {/* Premium Centered CTA - High transition quality hover */}
        <div className="flex flex-col items-center">
          <button 
            onClick={onOpenWaitlist}
            className="square-button bg-white text-era-midnight hover:bg-era-ivory font-bold px-10 py-5 flex items-center gap-3 shadow-2xl tracking-wider text-xs uppercase transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <span>Se hvordan ERA kobler deg</span>
            <ArrowRight className="w-4 h-4 text-era-midnight" />
          </button>
          <p className="text-[10px] text-white/40 font-mono mt-4 uppercase tracking-[0.2em]">
            "ERA gjør vedlikehold like enkelt som Vipps"
          </p>
        </div>

      </motion.div>
    </section>
  );
}
