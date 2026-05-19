import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Database, FileText, LayoutDashboard, Home, Zap, ShieldCheck } from 'lucide-react';

export default function HowItWorksScrolly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate opacity/transform for the 4 steps based on scroll progress
  // 0 to 0.25: Step 1 (Physical House)
  // 0.25 to 0.5: Step 2 (Data Overlay)
  // 0.5 to 0.75: Step 3 (Documentation & FDV)
  // 0.75 to 1.0: Step 4 (ERA Dashboard)

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-era-ivory text-era-navy">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
        
        <div className="text-center absolute top-24 z-20 px-6 max-w-4xl w-full">
          <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Hvordan det fungerer
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Fra fysisk bygg til digital autonomi
          </h2>
        </div>

        {/* Visualization Canvas */}
        <div className="relative w-full max-w-5xl aspect-[16/9] mx-auto mt-20 md:mt-10 perspective-1000">
          
          {/* Step 1: The House */}
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]),
              scale: useTransform(scrollYProgress, [0, 0.3], [1, 0.95]),
            }}
            className="absolute inset-0 flex items-center justify-center flex-col z-10"
          >
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-white border border-era-navy/10 shadow-2xl flex flex-col items-center justify-center p-8">
              <Home className="w-32 h-32 text-era-navy/60 mb-8" strokeWidth={1} />
              <h3 className="text-xl font-bold uppercase tracking-widest text-era-navy/80">Den Fysiske Boligen</h3>
              <p className="text-era-navy/60 font-light text-center mt-4">Kjent og kjær, men utilgjengelig som en digital enhet.</p>
            </div>
          </motion.div>

          {/* Step 2: Data Extraction */}
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0.15, 0.3, 0.45, 0.6], [0, 1, 1, 0]),
              scale: useTransform(scrollYProgress, [0.15, 0.3], [0.95, 1]),
            }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            <div className="w-full h-full max-w-3xl flex items-center justify-center relative">
              {/* Nodes and Grid */}
              <div className="absolute inset-0 border border-era-gold/20 flex items-center justify-center">
                 <div className="grid grid-cols-4 grid-rows-4 w-full h-full absolute inset-0 opacity-20">
                   {Array.from({length: 16}).map((_, i) => (
                     <div key={i} className="border border-era-gold/40" />
                   ))}
                 </div>
                 <div className="bg-white p-8 border border-era-gold shadow-2xl relative z-10 rotate-3">
                    <Database className="w-16 h-16 text-era-gold mb-6 mx-auto" />
                    <h3 className="text-lg font-bold uppercase tracking-widest text-era-navy text-center">Datastrukturering</h3>
                    <p className="text-era-navy/60 font-light text-center mt-2 text-sm max-w-xs">Bygningsdeler plukkes fra hverandre til semantisk data.</p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3: Documents and AI */}
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0.4, 0.6, 0.7, 0.85], [0, 1, 1, 0]),
              y: useTransform(scrollYProgress, [0.4, 0.6], [50, 0]),
            }}
            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
          >
             <div className="flex gap-6">
                <div className="bg-white p-6 shadow-xl border border-era-navy/10 w-64 -rotate-6 transform translate-y-10">
                   <div className="w-8 h-8 bg-era-navy/5 flex items-center justify-center mb-4 text-era-navy/60"><FileText size={16} /></div>
                   <div className="h-2 bg-era-navy/10 w-full mb-2"></div>
                   <div className="h-2 bg-era-navy/10 w-3/4 mb-2"></div>
                   <div className="h-2 bg-era-navy/10 w-5/6"></div>
                   <div className="mt-8 text-xs font-bold text-era-navy/60 uppercase">Gammel FDV PDF</div>
                </div>
                
                <div className="bg-era-midnight text-white p-6 shadow-2xl border-4 border-era-gold w-72 z-10">
                   <Zap className="w-8 h-8 text-era-gold mb-4" />
                   <h3 className="font-bold mb-2">AI-Agent Analyserer</h3>
                   <div className="space-y-2 font-mono text-[10px] text-white/70">
                     <p>{">"} Leser 420 sider PDF...</p>
                     <p>{">"} Finner service-intervaller...</p>
                     <p className="text-era-gold">{">"} Konverterer til varsler.</p>
                   </div>
                </div>
                
                <div className="bg-white p-6 shadow-xl border border-era-navy/10 w-64 rotate-6 transform translate-y-10">
                   <div className="w-8 h-8 bg-era-navy/5 flex items-center justify-center mb-4 text-era-navy/60"><ShieldCheck size={16} /></div>
                   <div className="h-2 bg-era-navy/10 w-full mb-2"></div>
                   <div className="h-2 bg-era-navy/10 w-3/4 mb-2"></div>
                   <div className="h-2 bg-era-navy/10 w-5/6"></div>
                   <div className="mt-8 text-xs font-bold text-era-navy/60 uppercase">Forsikringsavtale</div>
                </div>
             </div>
          </motion.div>

          {/* Step 4: The Dashboard */}
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0.75, 0.9], [0, 1]),
              scale: useTransform(scrollYProgress, [0.75, 0.9], [0.9, 1]),
            }}
            className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
          >
            <div className="w-full max-w-4xl bg-[#081426] border border-white/10 shadow-[0_30px_100px_rgba(8,20,38,0.4)] rounded-xl overflow-hidden flex flex-col h-[500px]">
               <div className="h-12 border-b border-white/5 flex items-center px-6 gap-4 bg-white/5">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                 </div>
                 <div className="text-white/60 text-[10px] font-mono tracking-widest uppercase">ERA Operating System</div>
               </div>
               
               <div className="flex-1 flex p-6 gap-6">
                 {/* Sidebar */}
                 <div className="w-48 space-y-4">
                   <div className="h-8 bg-white/5 rounded"></div>
                   <div className="h-8 bg-white/5 rounded"></div>
                   <div className="h-8 bg-era-gold/20 rounded border border-era-gold/50"></div>
                   <div className="h-8 bg-white/5 rounded"></div>
                 </div>
                 
                 {/* Main Content */}
                 <div className="flex-1 space-y-6">
                   <div className="flex justify-between items-end">
                     <div>
                       <h2 className="text-2xl text-white font-medium mb-2">Hei, Eier</h2>
                       <p className="text-white/60 font-light text-sm">Alt ser bra ut. 1 oppgave krever din oppmerksomhet.</p>
                     </div>
                     <LayoutDashboard className="text-era-gold w-8 h-8" />
                   </div>
                   
                   <div className="grid grid-cols-3 gap-4">
                     <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                       <p className="text-white/60 uppercase tracking-widest text-[9px] font-bold mb-2">Estimert verdi</p>
                       <p className="text-xl text-white font-mono">14.5M NOK</p>
                     </div>
                     <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                       <p className="text-white/60 uppercase tracking-widest text-[9px] font-bold mb-2">Neste Service</p>
                       <p className="text-xl text-white font-mono text-era-gold">Om 14 dager</p>
                     </div>
                     <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                       <p className="text-white/60 uppercase tracking-widest text-[9px] font-bold mb-2">Tilstandsgrad</p>
                       <p className="text-xl text-white font-mono">TG 1</p>
                     </div>
                   </div>

                   <div className="bg-white/5 p-6 rounded-lg border border-white/5 mt-4">
                      <div className="flex justify-between items-start">
                         <div>
                           <p className="text-era-gold uppercase tracking-widest text-[9px] font-bold mb-1">Anbefalt Tiltak</p>
                           <h4 className="text-white font-medium mb-2">Rens av ventilasjon</h4>
                           <p className="text-white/70 text-sm">Basert på levetid og støvnivå anbefaler vi å rense ventilasjonen. Vi har funnet 3 ledige partnere.</p>
                         </div>
                         <button className="bg-white text-[#081426] px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
                           Se tilbud
                         </button>
                      </div>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>
        
        </div>

        {/* Text descriptions below visual matching current step */}
        <div className="relative mt-8 h-32 w-full max-w-xl mx-auto z-50 text-center flex items-center justify-center">
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]) }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <p className="text-xl text-era-navy/60 font-light">Å forvalte bygg i dag er fragmentert. Informasjonen er spredt, utilgjengelig eller i fysiske permer.</p>
          </motion.div>
          
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.2, 0.35, 0.45, 0.6], [0, 1, 1, 0]) }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <p className="text-xl text-era-navy/60 font-light">Vi starter med å dekonstruere bygget ditt til tusenvis av datapunkter — et digitalt speilbilde.</p>
          </motion.div>

          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.45, 0.6, 0.7, 0.85], [0, 1, 1, 0]) }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <p className="text-xl text-era-navy/60 font-light">Vår AI analyserer all historikk og FDV-dokumentasjon og skaper handlingsregler automatisk.</p>
          </motion.div>

          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 1]) }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <p className="text-xl text-era-navy/60 font-light">Resultatet er et autonomt styringssystem som vet hva som må gjøres — før det blir et problem.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
