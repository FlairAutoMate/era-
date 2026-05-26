import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Clock, 
  Paintbrush, 
  Activity, 
  HardDrive, 
  ArrowRight,
  CheckCircle,
  FileCheck,
  Lock,
  User,
  Home,
  Briefcase,
  Camera,
  BookOpen,
  FileText
} from 'lucide-react';

const boligminneItems = [
  { name: "Samsvarserklæring", desc: "Dokumenter tilknyttet rør og el låst til adressen." },
  { name: "Sertifisert FDV-Dokument", desc: "Alt arbeid utført i henhold til byggeforskriftene." },
  { name: "Verifisert bildearkiv", desc: "Dokumentasjons av membran og skjult røropplegg." }
];

interface WhyERAProps {
  onOpenWaitlist?: () => void;
}

export default function WhyERA({ onOpenWaitlist }: WhyERAProps) {
  return (
    <section className="py-32 px-6 bg-era-ivory overflow-hidden border-t border-era-navy/5" id="boligminne-merger">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER: Trygghet, penger spart, lavere risiko */}
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-era-gold animate-pulse" />
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] font-sans text-[10px]">
              VERDISIKRING & TRYGGHET I PRAKSIS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-era-navy tracking-tight leading-[1.05] mb-8">
            KI-agenten som <br />
            følger opp boligen din.
          </h2>
          
          <p className="text-lg text-era-navy/70 font-light leading-relaxed max-w-2xl">
            Det dyreste vedlikeholdet er det som tas for sent. ERA er en helautomatisk KI-agent som overvåker slitasje, forebygger fuktskader, og samler all historikk og FDV automatisk for deg — helt gratis.
          </p>
        </div>

        {/* TWO-COLUMN GRID: Left = Boligminne archive grid, Right = Mobile App Mockup */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Comprehensive data points list */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[9px] mb-3 block font-sans">ALT PÅ ÉN PLASS</span>
              <h3 className="text-3xl font-semibold text-era-navy tracking-tight mb-4">
                Alt samlet i ditt Boligminne
              </h3>
              <p className="text-sm text-era-navy/60 leading-relaxed font-light mb-8">
                Glem bortkomne e-poster og falmede kvitteringer. ERA samler og lagrer all dokumentasjon på ett felles, sikkert sted låst til din eiendom.
              </p>
            </div>

            <div className="grid gap-4">
              {boligminneItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 bg-white border border-era-navy/5 rounded-xl flex items-center justify-between hover:border-era-gold transition-colors duration-200 shadow-3xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-era-gold/10 text-era-gold flex items-center justify-center shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-era-navy">
                        {item.name}
                      </h4>
                      <p className="text-xs text-era-navy/60 font-light mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded font-mono shrink-0">
                    Sikret
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white/50 border border-era-navy/5 rounded-xl flex items-center gap-3">
              <Lock className="w-5 h-5 text-[#b0a89d]" />
              <p className="text-xs text-era-navy/60 font-light leading-relaxed">
                Boligminne er ferdig utarbeidet for å være 100% godkjent for overføring til ny eier ved et eventuelt boligsalg, beskrevet i avhendingsloven.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button 
                onClick={onOpenWaitlist}
                className="square-button bg-era-navy text-white hover:bg-era-midnight font-bold px-8 py-4 flex items-center gap-2 shadow-lg tracking-wider text-xs uppercase transition-colors"
              >
                Opprett boligminne
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: High-fidelity Mobile App Mockup based on the user's reference */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Elegant Outer Phone Frame */}
            <div className="w-full max-w-[340px] bg-[#1a1b1f] p-3 rounded-[40px] shadow-2xl border-4 border-era-navy/10 relative overflow-hidden">
              
              {/* Phone Speaker Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-[#1a1b1f] rounded-full z-30 flex items-center justify-center">
                <span className="w-10 h-1 bg-[#2e3035] rounded-full" />
              </div>

              {/* Screen Content Wrapper */}
              <div className="bg-[#F4F3EF] rounded-[32px] overflow-hidden pt-8 pb-4 px-5 relative text-left min-h-[580px] flex flex-col justify-between select-none">
                
                {/* Header Navbar inside device */}
                <div>
                  <div className="flex justify-between items-center mb-8 pt-1">
                    <div className="flex items-center gap-1 font-sans font-bold text-xl text-era-navy tracking-tight">
                      era
                      <span className="w-1.5 h-1.5 bg-era-gold rounded-full relative top-0.5" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-era-navy/5 shadow-3xs cursor-pointer">
                      <User className="w-4 h-4 text-era-navy" />
                    </div>
                  </div>

                  {/* Body Content resembling the provided image */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-[1.5px] bg-era-gold shrink-0" />
                      <span className="text-[9px] font-sans font-semibold tracking-[0.25em] text-[#a19a90]">
                        EIENDOMSDATA
                      </span>
                    </div>

                    <h3 className="text-3xl font-sans font-medium text-era-navy tracking-tight leading-tight">
                      Boligens Hukommelse.
                    </h3>

                    <p className="text-[11.5px] text-era-navy/70 leading-relaxed font-light">
                      En tidslinje over boligens utvikling og en oppdatert teknisk oversikt. Bilder, dokumenter, og observasjoner flettet sammen i én historie.
                    </p>
                  </div>

                  {/* Document analyzer action button block */}
                  <div className="mt-8">
                    <div 
                      onClick={onOpenWaitlist}
                      className="bg-era-navy text-white rounded-xl p-4 flex items-center justify-center gap-3 shadow-md hover:bg-[#0c223c] cursor-pointer active:scale-98 transition-all"
                    >
                      <FileText className="w-4 h-4 text-white shrink-0" />
                      <span className="text-[10px] font-sans font-bold uppercase tracking-[0.15em]">
                        Last opp dokument
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom navigation bar mirroring the layout requested and shown */}
                <div className="border-t border-era-navy/5 pt-3">
                  <div className="flex items-center justify-between text-center relative">
                    
                    {/* Home Item */}
                    <div className="flex flex-col items-center gap-1 cursor-pointer w-12 text-era-navy/40">
                      <Home className="w-4 h-4" />
                      <span className="text-[7.5px] font-sans font-bold uppercase tracking-widest scale-90">HJEM</span>
                    </div>

                    {/* Prosjekt Item */}
                    <div className="flex flex-col items-center gap-1 cursor-pointer w-12 text-era-navy/40">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-[7.5px] font-sans font-bold uppercase tracking-widest scale-90">PROSJEKT</span>
                    </div>

                    {/* Floating main action square button in center */}
                    <div className="relative -top-3">
                      <div className="w-10 h-10 bg-[#0B1426] text-white rounded-xl flex items-center justify-center shadow-lg relative cursor-pointer hover:bg-emerald-950 transition-colors">
                        <Camera className="w-4.5 h-4.5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-era-gold rounded-full" />
                      </div>
                    </div>

                    {/* Boligminne Item (Replacing JOURNAL/LOGG) */}
                    <div className="flex flex-col items-center gap-1 cursor-pointer w-16 text-era-navy">
                      <BookOpen className="w-4 h-4 text-era-gold" />
                      <span className="text-[7.5px] font-sans font-bold uppercase tracking-widest scale-90 text-era-navy">BOLIGMINNE</span>
                    </div>

                    {/* Agent Item (Replacing ASSISTENT/ERA) */}
                    <div className="flex flex-col items-center gap-1 cursor-pointer w-12 text-era-navy/40">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-[7.5px] font-sans font-bold uppercase tracking-widest scale-90">AGENT</span>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

