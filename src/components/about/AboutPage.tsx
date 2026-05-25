import { motion } from 'motion/react';
import { Network, Database, Zap, Sparkles, Building2, BrainCircuit, Users, MoveRight, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-era-ivory text-era-navy min-h-screen font-sans">
      {/* Hero: The Manifest */}
      <section className="pt-52 pb-32 px-6 bg-era-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-era-midnight/80 via-era-midnight/90 to-era-midnight" />
          {/* Subtle grid pattern */}
          <svg className="absolute w-full h-full opacity-10" style={{ left: 0, top: 0 }}>
             <pattern id="grid-about" width="60" height="60" patternUnits="userSpaceOnUse">
               <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
             </pattern>
             <rect width="100%" height="100%" fill="url(#grid-about)" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-era-gold rounded-full" />
              Manifesto
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-12 leading-[1.0] tracking-tight">
              Eiendom er verdens største aktivaklasse. <br className="hidden md:block"/>
              <span className="text-white/60">Likevel drives bygg i stor grad via PDF-er og intuisjon.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light mb-16 max-w-3xl mx-auto leading-relaxed">
              Vårt oppdrag er å bygge den intelligente infrastrukturen for eiendom. Vi kobler KI, strukturerte data og autonome workflows sammen for å skape bygg som forstår sine egne vedlikeholdsbehov.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why ERA */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
            <div className="lg:col-span-5">
              <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Hvorfor nå?</span>
              <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-[1.05]">
                Skiftet fra reaktiv til proaktiv forvaltning
              </h2>
              <p className="text-lg text-era-navy/60 font-light leading-relaxed mb-6">
                I dag venter bransjen på at noe skal ryke før det fikses. Konsekvensen er verditap, høye forsikringspremier og uforutsette utgifter.
              </p>
              <p className="text-lg text-era-navy/60 font-light leading-relaxed">
                Kunstig intelligens gjør det nå mulig å oversette ustrukturerte systemer (tusenvis av FDV-dokumenter, historikk og lover) til en <strong className="font-medium text-era-navy">kontinuerlig, handlingsrettet sanntidsmotor.</strong>
              </p>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-10 border border-era-navy/5 group hover:border-era-navy/20 transition-colors">
                <Database className="w-8 h-8 text-era-gold mb-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-bold text-sm tracking-widest uppercase mb-4">Datakaos til Struktur</h3>
                <p className="text-era-navy/60 font-light text-sm leading-relaxed">Systemet vårt inntar ubegrenset volum boligdata og bygger en semantisk, strukturert tvilling for bygget.</p>
              </div>
              <div className="bg-white p-10 border border-era-navy/5 group hover:border-era-navy/20 transition-colors">
                <BrainCircuit className="w-8 h-8 text-era-gold mb-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-bold text-sm tracking-widest uppercase mb-4">Statisk til Intelligent</h3>
                <p className="text-era-navy/60 font-light text-sm leading-relaxed">En KI-agent overvåker bygget døgnet rundt, finner avvik og oppretter forslag til forbedringer proaktivt.</p>
              </div>
              <div className="bg-white p-10 border border-era-navy/5 group hover:border-era-navy/20 transition-colors">
                <Zap className="w-8 h-8 text-era-gold mb-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-bold text-sm tracking-widest uppercase mb-4">Mellomledd til Autonomi</h3>
                <p className="text-era-navy/60 font-light text-sm leading-relaxed">Autonome workflows kutter ut byråkratiet, innhenter tilbud, og lar eier godkjenne med ett trykk.</p>
              </div>
              <div className="bg-white p-10 border border-era-navy/5 group hover:border-era-navy/20 transition-colors">
                <Network className="w-8 h-8 text-era-gold mb-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-bold text-sm tracking-widest uppercase mb-4">Isolert til Sammenkoblet</h3>
                <p className="text-era-navy/60 font-light text-sm leading-relaxed">Infrastrukturen kobler håndverkere, forsikring og styret sammen i samme transparente økosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Diagram (Tech Infrastructure) */}
      <section className="py-32 px-6 bg-era-midnight text-white text-center border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Infrastruktur</span>
          <h2 className="text-3xl md:text-4xl font-medium mb-24">Hvordan vi kobler alt sammen</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-white/10 -translate-y-1/2 z-0" />
            
            <div className="relative z-10 bg-era-midnight p-6 flex flex-col items-center w-full max-w-[200px] mb-12 md:mb-0">
              <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center mb-6 rounded-sm">
                <Building2 className="w-8 h-8 text-white/60" />
              </div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Eier & Bygg</h4>
              <p className="text-xs text-white/60 font-light">Datafangst av historikk og dokumentasjon.</p>
            </div>

            <div className="relative z-10 bg-era-midnight p-6 flex flex-col items-center w-full max-w-[200px] mb-12 md:mb-0">
              <div className="w-24 h-24 bg-era-gold flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(212,175,55,0.2)] rounded-sm">
                <Sparkles className="w-10 h-10 text-era-midnight" />
              </div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-2 text-era-gold">ERA Intelligence</h4>
              <p className="text-xs text-white/60 font-light">KI-analyse, prediksjon, og hendelseshåndtering.</p>
            </div>

            <div className="relative z-10 bg-era-midnight p-6 flex flex-col items-center w-full max-w-[200px]">
              <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center mb-6 rounded-sm">
                <Network className="w-8 h-8 text-white/60" />
              </div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Økosystem</h4>
              <p className="text-xs text-white/60 font-light">Autonome utførelser fra partnere og håndverkere.</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
