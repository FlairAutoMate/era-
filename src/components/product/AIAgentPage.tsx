import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Network, Database, Zap, Cpu, ScanLine, FileSearch, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

const TerminalLine = ({ text, delay, onComplete, colorClass = "text-white/60" }: { text: string, delay: number, onComplete?: () => void, colorClass?: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started, text, onComplete]);

  if (!started) return null;

  return (
    <div className={colorClass}>
      {displayedText}
      {displayedText.length < text.length && <span className="inline-block w-2 relative top-0.5 h-3 bg-era-gold ml-1" />}
    </div>
  );
};

interface AIAgentPageProps {
  onOpenWaitlist?: () => void;
}

export default function AIAgentPage({ onOpenWaitlist }: AIAgentPageProps) {
  const [step, setStep] = useState(0);

  return (
    <div className="bg-era-ivory text-era-navy min-h-screen">
      {/* Hero */}
      <section className="pt-52 pb-32 px-6 bg-era-midnight text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="absolute w-full h-full" style={{ left: 0, top: 0 }}>
             {/* Tech grid */}
             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
             </pattern>
             <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-era-midnight via-transparent to-era-midnight" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div>
            <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block font-mono flex items-center justify-center gap-2">
              <Activity className="w-4 h-4 text-era-gold" />
              ERA Intelligence Layer
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-10 leading-[0.9] tracking-tight">
              Eiendommens <br className="hidden md:block"/> intelligente hjerne
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              KI-agenten oversetter statisk dokumentasjon til levende vedlikeholdsplaner, oppdager avvik, og fjerner alt av administrativt stress — slik at det å vedlikeholde boligen blir like enkelt som Vipps.
            </p>
            <button onClick={onOpenWaitlist} className="square-button-gold px-12 py-5 text-sm shadow-2xl">Meld interesse</button>
          </div>
        </div>
      </section>

      {/* How it works - Architecture */}
      <section className="py-40 px-6 bg-white overflow-hidden text-center md:text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 md:text-center max-w-3xl mx-auto">
             <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Infrastruktur</span>
             <h2 className="text-4xl md:text-5xl font-medium mb-8">Hvordan fungerer ERA OS?</h2>
             <p className="text-xl text-era-navy/60 font-light leading-relaxed">
               Agenten opererer i tre kontinuerlige faser: Datafangst, Analyse og Handling — og sparer deg for alt av manuelle papirprosesser i bakgrunnen.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            {/* Phase 1 */}
            <div className="relative group p-10 border border-era-navy/5 bg-era-ivory/30 hover:border-era-navy transition-colors duration-500 rounded-xl">
              <div className="w-12 h-12 bg-era-navy/5 flex items-center justify-center mb-10 text-era-navy rounded-xl">
                <ScanLine className="w-6 h-6" />
              </div>
              <h4 className="text-[10px] uppercase tracking-widest text-era-navy/60 font-bold mb-4">Fase 1</h4>
              <h3 className="text-2xl font-medium mb-4">Automatisk Datafangst</h3>
              <p className="text-era-navy/60 font-light leading-relaxed">
                Agenten prosesserer FDV-dokumentasjon, bilder fra boligen, kvitteringer og historiske data. Ved hjelp av strukturert datakonvertering bygges en nøyaktig digital tvilling.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="relative group p-10 border border-era-navy/5 bg-era-ivory/30 hover:border-era-navy transition-colors duration-500 rounded-xl">
              <div className="w-12 h-12 bg-era-navy/5 flex items-center justify-center mb-10 text-era-navy rounded-xl">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="text-[10px] uppercase tracking-widest text-era-navy/60 font-bold mb-4">Fase 2</h4>
              <h3 className="text-2xl font-medium mb-4">Prediktiv Analyse</h3>
              <p className="text-era-navy/60 font-light leading-relaxed">
                Hver dag vurderes boligens tilstand opp mot historisk forventning, standarder (SINTEF/BNL) og værdata. Den estimerer levetid og varsler før noe ryker.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="relative group p-10 border border-era-navy/5 bg-era-ivory/30 hover:border-era-navy transition-colors duration-500 rounded-xl">
              <div className="w-12 h-12 bg-era-navy/5 flex items-center justify-center mb-10 text-era-navy rounded-xl">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-[10px] uppercase tracking-widest text-era-navy/60 font-bold mb-4">Fase 3</h4>
              <h3 className="text-2xl font-medium mb-4">Vipps-enkel utførelse</h3>
              <p className="text-era-navy/60 font-light leading-relaxed">
                Når ERA oppdager et behov, samles underlaget automatisk. Du får et fiks ferdig tilbud på mobilen og bekrefter det med ett enkelt trykk — akkurat som å betale med Vipps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-40 px-6 bg-era-ivory border-t border-era-navy/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] bg-era-midnight border-[8px] border-white shadow-2xl overflow-hidden flex items-center justify-center rounded-2xl">
               <div className="absolute inset-0 bg-white/5" />
               <div className="p-8 w-full max-w-sm space-y-4 font-mono text-[10px]">
                 <div className="flex gap-2 text-white/60 mb-8">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
                 </div>
                 
                 <TerminalLine 
                   text="// Autonomous Scan Initiated" 
                   delay={500} 
                   colorClass="text-era-gold uppercase"
                   onComplete={() => setStep(1)}
                 />
                 {step >= 1 && (
                   <TerminalLine 
                     text="Analyzing FDV manual: Vannbåren varme CT-500..." 
                     delay={200}
                     onComplete={() => setStep(2)}
                   />
                 )}
                 {step >= 2 && (
                   <TerminalLine 
                     text="Extracting service intervals... [OK]" 
                     delay={400}
                     onComplete={() => setStep(3)}
                   />
                 )}
                 {step >= 3 && (
                   <TerminalLine 
                     text="=> Next service due: October 2026" 
                     delay={300}
                     colorClass="text-white mt-4"
                     onComplete={() => setStep(4)}
                   />
                 )}
                 {step >= 4 && (
                   <TerminalLine 
                     text="=> Matching with 3 certified plumbers in Oslo..." 
                     delay={600}
                     colorClass="text-white"
                     onComplete={() => setStep(5)}
                   />
                 )}
                 
                 {step >= 5 && (
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="mt-8 bg-white/10 p-4 border border-white/20 text-white rounded-xl"
                   >
                     <div className="font-sans text-sm font-bold mb-2 flex items-center gap-2">
                       <Zap className="w-4 h-4 text-era-gold" />
                       Forslag: Service på varmeanlegg
                     </div>
                     <div className="font-sans text-xs font-light opacity-60">ERA har innhentet 2 tilbud for service.</div>
                     <button className="mt-4 w-full bg-white text-era-midnight py-2 font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-era-gold transition-colors rounded-xl">
                       Godkjenn forslag
                     </button>
                   </motion.div>
                 )}
               </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Property Engine</span>
              <h2 className="text-4xl md:text-5xl font-medium mb-8">Fra statisk perm til aktiv forvaltning</h2>
              <p className="text-xl text-era-navy/60 font-light leading-relaxed mb-6">
                En perm i skapet oppdaterer seg ikke. Med vår teknologi forvandles død dokumentasjon til dynamiske regler for huset ditt.
              </p>
              <ul className="space-y-6 mt-12 text-era-navy/80 font-light">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-era-navy/5 flex items-center justify-center flex-shrink-0 text-era-navy">
                    <FileSearch className="w-3 h-3" />
                  </div>
                  <span><strong className="font-medium text-era-navy">Smart dokumentforståelse:</strong> Laster du opp en bruksanvisning, forstår KI nøyaktig hvilke vedlikeholdsrutiner som kreves.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-era-navy/5 flex items-center justify-center flex-shrink-0 text-era-navy">
                    <Database className="w-3 h-3" />
                  </div>
                  <span><strong className="font-medium text-era-navy">Digital tvilling:</strong> Sensordata, Alder og Materialer kryssjekkes i sanntid.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-era-navy/5 flex items-center justify-center flex-shrink-0 text-era-navy">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  <span><strong className="font-medium text-era-navy">Proaktiv forsikring:</strong> Hendelser logges i blockchain-lignende journaler, noe som beviser at huset er godt vedlikeholdt.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
