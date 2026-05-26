import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Database, Zap, FileSearch, ArrowRight, ShieldCheck, Activity, BookOpen, Clock, Wrench } from 'lucide-react';

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
    }, 20);
    return () => clearInterval(interval);
  }, [started, text, onComplete]);

  if (!started) return null;

  return (
    <div className={`${colorClass} font-mono text-[10.5px] tracking-wide leading-relaxed`}>
      {displayedText}
      {displayedText.length < text.length && <span className="inline-block w-2 relative top-0.5 h-3 bg-era-gold ml-1 animate-pulse" />}
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
        {/* Subtle Elegant Grid Background instead of sci-fi cyberpunk */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
              backgroundSize: '36px 36px'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-era-midnight via-transparent to-era-midnight" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div>
            <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block font-sans justify-center flex items-center gap-2">
              <Activity className="w-4 h-4 text-era-gold animate-pulse" />
              AI-NATIVE BOLIGOPPFØLGING
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-10 leading-[0.95] tracking-tight">
              KI-agenten som <br className="hidden md:block"/>følger opp boligen din.
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              ERA analyserer boligdata, tolker bilder og dokumentasjon, oppdager vedlikeholdsbehov og kobler deg direkte med kvalifiserte håndverkere — helt gratis for deg som eier.
            </p>
            <button onClick={onOpenWaitlist} className="square-button-gold px-12 py-5 text-sm uppercase tracking-wider font-bold shadow-2xl">
              Prøv ERA Agent
            </button>
          </div>
        </div>
      </section>

      {/* How it works - Strategic Positioning */}
      <section className="py-40 px-6 bg-white overflow-hidden text-center md:text-left">
        <div className="max-w-7xl mx-auto pb-4">
          <div className="mb-24 md:text-center max-w-3xl mx-auto">
             <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">OPERATIVSYSTEMET</span>
             <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight text-era-navy">
               Et intelligent operativsystem for boligen din
             </h2>
             <p className="text-xl text-era-navy/60 font-light leading-relaxed">
               I stedet for å være et passivt arkiv eller et statisk dashboard, tilrettelegger ERA for helautomatisk, kontinuerlig boligoppfølging.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            {/* Phase 1 */}
            <div className="relative group p-10 border border-era-navy/5 bg-era-ivory/30 hover:border-era-navy/20 transition-all duration-300 rounded-xl">
              <div className="w-12 h-12 bg-era-navy/5 flex items-center justify-center mb-10 text-era-navy rounded-xl">
                <BookOpen className="w-5 h-5 text-era-gold" />
              </div>
              <h4 className="text-[10px] uppercase tracking-widest text-[#a19a90] font-bold mb-4">LEVENDE DATA</h4>
              <h3 className="text-2xl font-medium mb-4 text-era-navy">Levende Boligdata</h3>
              <p className="text-era-navy/70 text-sm font-light leading-relaxed">
                Last opp det du har av FDV-mapper, bilder og vedlikeholdshistorikk. ERA analyserer dokumentene automatisk og samler alt i én levende, oversiktlig boligprofil.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="relative group p-10 border border-era-navy/5 bg-era-ivory/30 hover:border-era-navy/20 transition-all duration-300 rounded-xl">
              <div className="w-12 h-12 bg-era-navy/5 flex items-center justify-center mb-10 text-era-navy rounded-xl">
                <Clock className="w-5 h-5 text-era-gold" />
              </div>
              <h4 className="text-[10px] uppercase tracking-widest text-[#a19a90] font-bold mb-4">AI-NATIVE</h4>
              <h3 className="text-2xl font-medium mb-4 text-era-navy">Autonome Arbeidsflyter</h3>
              <p className="text-era-navy/70 text-sm font-light leading-relaxed">
                ERA følger opp boligen din over tid. Ved å sammenstille boligens alder, materialer og historikk, beregner vi når deler bør sjekkes for å unngå uforutsette skader.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="relative group p-10 border border-era-navy/5 bg-era-ivory/30 hover:border-era-navy/20 transition-all duration-300 rounded-xl">
              <div className="w-12 h-12 bg-era-navy/5 flex items-center justify-center mb-10 text-era-navy rounded-xl">
                <Wrench className="w-5 h-5 text-era-gold" />
              </div>
              <h4 className="text-[10px] uppercase tracking-widest text-[#a19a90] font-bold mb-4">UTFØRELSE</h4>
              <h3 className="text-2xl font-medium mb-4 text-era-navy">Utførelse & Dokumentasjon</h3>
              <p className="text-era-navy/70 text-sm font-light leading-relaxed">
                Når et tiltak krever fagfolk, presenterer ERA ferdig spesifiserte forslag med godkjente, lokale håndverkere klare til fastpris – bestilt og bekreftet på sekunder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-40 px-6 bg-era-ivory border-t border-era-navy/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Document Understanding Interactive Panel */}
            <div className="order-2 lg:order-1 relative min-h-[500px] bg-[#071324] border-[6px] border-[#182a3f] shadow-2xl overflow-hidden flex flex-col justify-between p-8 rounded-2xl">
               <div className="absolute top-0 right-0 w-32 h-32 bg-era-gold/[0.03] blur-xl pointer-events-none rounded-full" />
               
               <div>
                 <div className="flex gap-2 text-white/30 mb-8 border-b border-white/5 pb-4">
                   <div className="w-3.5 h-3.5 rounded-full bg-red-400/20" />
                   <div className="w-3.5 h-3.5 rounded-full bg-yellow-400/20" />
                   <div className="w-3.5 h-3.5 rounded-full bg-green-400/20" />
                   <span className="font-mono text-[9px] text-white/40 ml-4">PRODUKTANALYSE.SH</span>
                 </div>
                 
                 <div className="space-y-4">
                   <TerminalLine 
                     text="// Starter automatisk dokumentanalyse..." 
                     delay={500} 
                     colorClass="text-era-gold uppercase font-bold"
                     onComplete={() => setStep(1)}
                   />
                   {step >= 1 && (
                     <TerminalLine 
                       text="Leser samsvarserklæring: Bad / rør-i-rør system..." 
                       delay={200}
                       onComplete={() => setStep(2)}
                     />
                   )}
                   {step >= 2 && (
                     <TerminalLine 
                       text="Avleser merker, pakningstyper og levetidsgrenser... [OK]" 
                       delay={400}
                       onComplete={() => setStep(3)}
                     />
                   )}
                   {step >= 3 && (
                     <TerminalLine 
                       text="=> Lagrer i Boligminnet: Sluk og rør-i-rør (sertifisert 2022)" 
                       delay={300}
                       colorClass="text-emerald-300 mt-4"
                       onComplete={() => setStep(4)}
                     />
                   )}
                   {step >= 4 && (
                     <TerminalLine 
                       text="=> Neste planlagte slukservice: August 2026" 
                       delay={600}
                       colorClass="text-white font-bold"
                       onComplete={() => setStep(5)}
                     />
                   )}
                 </div>
               </div>
               
               {step >= 5 && (
                 <motion.div 
                   initial={{ opacity: 0, y: 15 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="mt-8 bg-[#0C223C] p-5 border border-white/10 text-white rounded-xl"
                 >
                   <div className="font-sans text-xs font-bold mb-2 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                       <Zap className="w-4 h-4 text-era-gold" />
                       Foreslått service: Sluk & rør-kontroll
                     </div>
                     <span className="text-[9px] font-mono text-emerald-400">ANBEFALT</span>
                   </div>
                   <div className="font-sans text-[11px] text-white/70 font-light">ERA har innhentet fastpristilbud hos autorisert rørlegepartner.</div>
                   <button onClick={onOpenWaitlist} className="mt-4 w-full bg-[#ff5b00] hover:bg-[#e05000] text-white py-2.5 font-sans font-bold text-[10px] uppercase tracking-widest transition-colors rounded-lg flex items-center justify-center gap-2">
                     <span>Bestill tilstandsrapport med Vipps</span>
                     <ArrowRight className="w-3.5 h-3.5" />
                   </button>
                 </motion.div>
               )}
            </div>
            
            {/* The core "Aktiv Boligforvaltning" Positioning Copy Blocks */}
            <div className="order-1 lg:order-2 text-left">
              <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">KONSEPT</span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight text-era-navy">
                Fra statisk perm til aktiv boligforvaltning
              </h2>
              <p className="text-lg text-era-navy/70 font-light leading-relaxed mb-10">
                En perm i skapet husker ingenting. ERA gjør dokumentasjon levende ved å forstå boligen din, følge opp vedlikehold og varsle før problemer oppstår.
              </p>
              
              <div className="space-y-8 mt-12">
                {/* 1. Intelligent dokumentforståelse */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-7 h-7 rounded-lg bg-era-navy/5 flex items-center justify-center flex-shrink-0 text-era-navy">
                    <FileSearch className="w-4 h-4 text-era-gold" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-era-navy mb-1">Intelligent dokumentforståelse</h3>
                    <p className="text-sm text-era-navy/65 font-light leading-relaxed">
                      Last opp FDV, bilder eller bruksanvisninger — ERA forstår automatisk hva boligen trenger, hvilke komponenter som finnes og hvilke vedlikeholdsrutiner som gjelder.
                    </p>
                  </div>
                </div>

                {/* 2. Levende digital boligprofil */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-7 h-7 rounded-lg bg-era-navy/5 flex items-center justify-center flex-shrink-0 text-era-navy">
                    <Database className="w-4 h-4 text-era-gold" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-era-navy mb-1">Levende digital boligprofil</h3>
                    <p className="text-sm text-era-navy/65 font-light leading-relaxed">
                      ERA kombinerer dokumentasjon, alder, materialer, historikk og løpende boligdata for å bygge en kontinuerlig oppdatert forståelse av eiendommen din.
                    </p>
                  </div>
                </div>

                {/* 3. Proaktiv oppfølging */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-7 h-7 rounded-lg bg-era-navy/5 flex items-center justify-center flex-shrink-0 text-era-navy">
                    <Zap className="w-4 h-4 text-era-gold" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-era-navy mb-1">Proaktiv oppfølging</h3>
                    <p className="text-sm text-era-navy/65 font-light leading-relaxed">
                      I stedet for å reagere etter skaden skjer, varsler ERA tidlig om slitasje, servicebehov og kommende tiltak — med forslag til kvalifiserte håndverkere klare i appen.
                    </p>
                  </div>
                </div>

                {/* 4. Automatisk historikk */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-7 h-7 rounded-lg bg-era-navy/5 flex items-center justify-center flex-shrink-0 text-era-navy">
                    <ShieldCheck className="w-4 h-4 text-era-gold" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-era-navy mb-1">Automatisk historikk</h3>
                    <p className="text-sm text-era-navy/65 font-light leading-relaxed">
                      Utført arbeid, bilder, kvitteringer, garantier og FDV lagres automatisk i boligens digitale Boligminne — alltid oppdatert og klart for salg, forsikring eller videre oppfølging.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
