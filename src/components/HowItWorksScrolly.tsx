import React from 'react';
import { 
  ArrowRight, 
  FileUp, 
  Brain, 
  Wrench, 
  Database,
  Check,
  Search,
  AlertCircle,
  ShieldAlert,
  Sliders,
  Sparkles,
  UserCheck,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';

export default function HowItWorksScrolly() {
  return (
    <section className="py-36 px-6 bg-white text-era-navy relative overflow-hidden border-t border-era-navy/5" id="hvordan-det-fungerer">
      {/* Absolute micro background mesh */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#081426_1.2px,transparent_1.2px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Top Intro */}
        <div className="max-w-4xl mb-24">
          <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block font-sans">
            METODIKK & PROSESS
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight leading-[1.05] text-era-navy">
            Slik følger ERA opp boligen din kontinuerlig
          </h2>
          <p className="text-lg text-era-navy/60 font-light leading-relaxed max-w-2xl">
            ERA arbeider i bakgrunnen for å analysere, planlegge og dokumentere vedlikehold helt automatisk.
          </p>
        </div>

        {/* The sequence grid. We place interactive visual block and text block side by side in a structured, connected network */}
        <div className="relative grid gap-16 md:gap-24 lg:grid-cols-2">
          
          {/* BACKGROUND CONNECTING SVG FLOW LINE - ONLY DESKTOP */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
            <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Flow line wandering down between components */}
              <motion.path 
                d="M 50% 50 L 50% 300 Q 50% 350 100 350 Q -100 450 50% 550" 
                stroke="#d4af37" 
                strokeWidth="2" 
                strokeOpacity="0.1" 
                className="hidden" 
              />
              <path 
                d="M 250 180 C 250 320, 480 200, 480 340 S 250 480, 250 620 S 480 620, 480 780" 
                stroke="url(#goldGradient)" 
                strokeWidth="1.5" 
                strokeDasharray="8 8" 
                strokeOpacity="0.4"
              />
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0E2341" stopOpacity="0.1"/>
                  <stop offset="50%" stopColor="#d4af37" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* STEP 1: ERA LÆRER BOLIGEN Å KJENNE */}
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-stretch bg-era-beige border border-era-navy/10 p-8 rounded-2xl group hover:border-era-gold transition-colors duration-300">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-era-gold text-era-midnight flex items-center justify-center font-mono font-bold text-xs">01</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-era-navy/60">Input & Parsing</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">ERA lærer boligen å kjenne</h3>
                <p className="text-sm text-era-navy/70 leading-relaxed font-light mb-6">
                  Importer bilder, FDV, kvitteringer eller last opp direkte. Vår AI parser tabeller, finner fargekoder, tolker installasjonsdatoer og indekserer alt.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-era-navy/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-era-navy/80">
                  <div className="w-1.5 h-1.5 bg-era-gold rounded-full" />
                  <span>All dokumentasjon samlet på ett sted</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-era-navy/80">
                  <div className="w-1.5 h-1.5 bg-era-gold rounded-full" />
                  <span>Automatisk strukturering og indeksering</span>
                </div>
              </div>
            </div>

            {/* Visual Screen Widget Inside Card */}
            <div className="flex-1 bg-white border border-era-navy/5 p-4 rounded-xl flex flex-col justify-between min-h-[220px] shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-era-navy/5 pb-2.5 mb-3">
                <div className="flex items-center gap-1.5">
                  <FileUp className="w-3.5 h-3.5 text-era-gold" />
                  <span className="text-[8px] font-mono tracking-widest uppercase font-bold text-era-navy/60">FILE_PARSER_ACTIVE</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Extraction Visual Loop */}
              <div className="flex-1 space-y-2.5 text-[10px]">
                <div className="bg-era-beige/50 p-2 border border-era-navy/5 rounded relative">
                  <p className="font-mono text-[8px] text-era-navy/60">Source: felleskostnad_bad.pdf</p>
                  <p className="font-semibold text-[10px] mt-1 text-era-navy">Tolker installasjonsdato: 2012</p>
                  {/* Laser line overlay */}
                  <motion.div 
                    animate={{ y: [0, 24, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute left-0 right-0 h-0.5 bg-era-gold/80"
                  />
                </div>

                <div className="space-y-1.5">
                  <p className="text-[8px] font-bold text-era-navy/40 uppercase tracking-widest">Metadata ekstrahert:</p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="bg-era-navy/5 text-era-navy text-[8px] font-bold px-2 py-0.5 uppercase tracking-wider">Maling: S1500-N</span>
                    <span className="bg-era-navy/5 text-era-navy text-[8px] font-bold px-2 py-0.5 uppercase tracking-wider">Sluk: Purus (2012)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2: KI ANALYSERER OG OPPDAGER BEHOV */}
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-stretch bg-era-beige border border-era-navy/10 p-8 rounded-2xl group hover:border-era-gold transition-colors duration-300">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-era-gold text-era-midnight flex items-center justify-center font-mono font-bold text-xs">02</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-era-navy/60">Risk Engine & Predictions</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">KI analyserer og oppdager behov</h3>
                <p className="text-sm text-era-navy/70 leading-relaxed font-light mb-6">
                  ERA analyserer tilstand, levetid på røropplegg, historisk slitasje og forsikringskriterier automatisk i bakgrunnen. Du varsles proaktivt i god tid.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-era-navy/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-era-navy/80">
                  <div className="w-1.5 h-1.5 bg-era-gold rounded-full" />
                  <span>Tidlige proaktive varsler på avvik</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-era-navy/80">
                  <div className="w-1.5 h-1.5 bg-era-gold rounded-full" />
                  <span>Forutsigbare vedlikeholdsplaner</span>
                </div>
              </div>
            </div>

            {/* Visual Screen Widget Inside Card */}
            <div className="flex-1 bg-white border border-era-navy/5 p-4 rounded-xl flex flex-col justify-between min-h-[220px] shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-era-navy/5 pb-2.5 mb-3">
                <div className="flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-era-gold" />
                  <span className="text-[8px] font-mono tracking-widest uppercase font-bold text-era-navy/60">RISK_PREDICTION_ACTIVE</span>
                </div>
                <Sliders className="w-3 h-3 text-era-gold animate-spin" strokeWidth={3} />
              </div>

              {/* Model status visuals */}
              <div className="flex-1 space-y-3 text-[10px]">
                <div className="p-2.5 bg-amber-500/5 border border-amber-500/10 rounded-lg">
                  <div className="flex items-center gap-1.5 mb-1">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                    <span className="font-bold text-[8px] text-amber-600 uppercase tracking-widest">Kombinert signal: TG2 (Moderates)</span>
                  </div>
                  <p className="text-[9px] text-era-navy/70">Gulvkabler på bad har passert 22 år. Risiko for termostat-degradering stiger.</p>
                </div>

                <div className="border border-era-navy/5 p-2 rounded bg-era-beige/20 flex justify-between items-center">
                  <span className="font-semibold text-era-navy">Anbefalt service-tidslinje</span>
                  <span className="text-era-gold font-bold font-mono">Q3 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3: ERA KOBLER DEG MED RIKTIGE FAGFOLK */}
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-stretch bg-era-beige border border-era-navy/10 p-8 rounded-2xl group hover:border-era-gold transition-colors duration-300">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-era-gold text-era-midnight flex items-center justify-center font-mono font-bold text-xs">03</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-era-navy/60">Matching & Dispatch</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">ERA kobler deg med riktige fagfolk</h3>
                <p className="text-sm text-era-navy/70 leading-relaxed font-light mb-6">
                  Når ERA oppdager vedlikeholdsbehov, tilrettelegger systemet nøyaktig FDV-underlag og kobler deg direkte med kvalitetssikrede, lokale spesialister for utførelse.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-era-navy/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-era-navy/80">
                  <div className="w-1.5 h-1.5 bg-era-gold rounded-full" />
                  <span>Kvalitetssikrede lokale håndverkere</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-era-navy/80">
                  <div className="w-1.5 h-1.5 bg-era-gold rounded-full" />
                  <span>Sømløs bekreftelse og fastpris tilbud</span>
                </div>
              </div>
            </div>

            {/* Visual Screen Widget Inside Card */}
            <div className="flex-1 bg-white border border-era-navy/5 p-4 rounded-xl flex flex-col justify-between min-h-[220px] shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-era-navy/5 pb-2.5 mb-3">
                <div className="flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-era-gold" />
                  <span className="text-[8px] font-mono tracking-widest uppercase font-bold text-era-navy/60">MATCHING_ALGORITHM</span>
                </div>
                <span className="text-[8px] text-emerald-600 font-bold uppercase font-mono">LIVE MATCH</span>
              </div>

              {/* Match maker lists */}
              <div className="flex-1 space-y-2.5 text-[10px]">
                <div className="bg-era-navy/5 p-2 rounded border border-era-navy/5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-era-navy uppercase text-[8px] tracking-wider">Oslo VVS Senter AS</span>
                    <span className="text-[8px] font-bold text-emerald-600">98% Match</span>
                  </div>
                  <p className="text-[8px] text-era-navy/60 leading-tight">Godkjent våtromsbedrift • 3.2km unna • Tilgjengelig onsdag</p>
                </div>

                <div className="p-2 border border-emerald-500/20 bg-emerald-500/5 text-emerald-800 rounded-md flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold block text-[8px] uppercase tracking-wider">Fastpris tilbud bekreftet</span>
                    <span className="text-[7.5px] text-emerald-700/80">Sintef-standard spesifikasjon klargjort av ERA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 4: ERA LAGRER HISTORIKKEN AUTOMATISK */}
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-stretch bg-era-beige border border-era-navy/10 p-8 rounded-2xl group hover:border-era-gold transition-colors duration-300">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-era-gold text-era-midnight flex items-center justify-center font-mono font-bold text-xs">04</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-era-navy/60">Databank & Journal</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">ERA lagrer historikken automatisk</h3>
                <p className="text-sm text-era-navy/70 leading-relaxed font-light mb-6">
                  Utført arbeid, bilder, fargekoder, kvitteringer og lovpålagt FDV oppdateres kontinuerlig i boligens krypterte, digitale journal. Alltid ryddig og klart.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-era-navy/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-era-navy/80">
                  <div className="w-1.5 h-1.5 bg-era-gold rounded-full" />
                  <span>Komplett digital FDV-mappe</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-era-navy/80">
                  <div className="w-1.5 h-1.5 bg-era-gold rounded-full" />
                  <span>Sikret historikk for takst og forsikring</span>
                </div>
              </div>
            </div>

            {/* Visual Screen Widget Inside Card */}
            <div className="flex-1 bg-white border border-era-navy/5 p-4 rounded-xl flex flex-col justify-between min-h-[220px] shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-era-navy/5 pb-2.5 mb-3">
                <div className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-era-gold" />
                  <span className="text-[8px] font-mono tracking-widest uppercase font-bold text-era-navy/60">DIGITAL_BOLIGJOURNAL</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>

              {/* Journal synchronized visual list */}
              <div className="flex-1 space-y-2 text-[9px] relative pl-3.5">
                {/* Visual vertical dotted timeline divider */}
                <div className="absolute left-1.5 top-1 bottom-1 w-0.5 border-l border-dashed border-era-navy/20" />

                <div className="relative">
                  <div className="absolute -left-[11px] top-1 w-2 h-2 rounded-full bg-era-gold" />
                  <p className="font-bold text-era-navy">Mai 2026</p>
                  <p className="text-era-navy/70">Utført: Rørinspeksjon bad (Oslo VVS AS • Faktura #10321)</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[11px] top-1 w-2 h-2 rounded-full bg-emerald-500" />
                  <p className="font-bold text-emerald-700">Automatisk oppdatert</p>
                  <p className="text-era-navy/60">Ny FDV-dokumentasjon og garantiarkiv lastet inn i kryptert bank.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Simplistic footer block */}
        <div className="mt-24 pt-20 border-t border-era-navy/5 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-era-navy leading-tight mb-6">
            Et tryggere operativsystem for din bolig
          </h2>
          <p className="text-base text-era-navy/60 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            ERA gjør boligen enklere å forstå, vedlikeholde og dokumentere — helt automatisk.
          </p>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="square-button-navy bg-era-navy text-white hover:bg-era-midnight font-bold px-10 py-4.5 inline-flex items-center gap-2 group transition-colors"
          >
            Sikre din bolig nå
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
