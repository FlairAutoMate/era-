import React from 'react';
import { motion } from 'motion/react';
import { Blocks, Layers, ShieldCheck, Activity } from 'lucide-react';

interface PartnersPageProps {
  onOpenWaitlist?: () => void;
}

export default function PartnersPage({ onOpenWaitlist }: PartnersPageProps) {
  return (
    <div className="bg-era-ivory text-era-navy min-h-screen">
      {/* Hero */}
      <section className="pt-52 pb-32 px-6 bg-era-midnight text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">ERA for partnere</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-10 leading-[1.0] tracking-tight">
              Infrastruktur for fremtidens vedlikehold og verdisikring
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              ERA kobler sammen eiendom, vedlikehold, data og utførelse i én intelligent plattform.
            </p>
            <button onClick={onOpenWaitlist} className="square-button-gold px-12 py-5 text-sm">Meld interesse</button>
          </motion.div>
        </div>
      </section>

      {/* For kjeder og banker */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Integrasjon</span>
            <h2 className="text-4xl md:text-5xl font-medium mb-8">Et distribuert nettverk av eiendomsaktører</h2>
            <p className="text-xl text-era-navy/60 font-light">
              ERA bygges for å kunne integreres sømløst mot de aktørene som allerede samarbeider med eiere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
               { title: "Håndverkerkjeder", desc: "Integrer ERA i deres salgs- og prosessflyt for økt lojalitet." },
               { title: "Boligorganisasjoner", desc: "Tilby medlemmene en proaktiv vedlikeholdsagent." },
               { title: "Banker", desc: "Forstå verdien og tilstanden i den pantesikrede porteføljen bedre." },
               { title: "Forsikring", desc: "Reduser risiko gjennom forebygging fremfor skadeoppgjør." },
               { title: "Eiendomsmeglere", desc: "Gi boligkjøpere og selgere merverdi ved å tilby en fullverdig boligjournal." }
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 border border-era-navy/5 text-center rounded-xl">
                <Blocks className="w-8 h-8 text-era-gold mx-auto mb-6" />
                <h3 className="font-bold text-lg mb-4">{p.title}</h3>
                <p className="text-sm text-era-navy/60 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 bg-white border-t border-era-navy/5">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
           <div>
             <h2 className="text-4xl md:text-6xl font-medium mb-8">Et nytt distribusjonslag for eiendomstjenester</h2>
             <p className="text-xl text-era-navy/60 font-light leading-relaxed mb-12">
               ERA er mer enn software — det er et distribuert lag av innsikt som lar aktører jobbe proaktivt sammen med boligeier.
             </p>
             <ul className="space-y-6">
               {[
                 "Aktivere kunder tidligere",
                 "Følge opp eiendom kontinuerlig",
                 "Øke livstidsverdi og lojalitet",
                 "Redusere lekkasje",
                 "Skape nye, proaktive tjenester"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-4">
                   <div className="w-1.5 h-1.5 bg-era-gold" />
                   <span className="text-lg font-medium">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
           <div className="relative h-[400px] flex items-center justify-center p-10 bg-era-midnight border-8 border-white shadow-xl overflow-hidden rounded-2xl">
             
             {/* Animated Node Diagram Map */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
               <motion.path 
                 d="M 100 200 C 150 200, 200 200, 250 200" 
                 stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" fill="none"
               />
               <motion.circle r="3" fill="#D4AF37"
                 initial={{ offsetDistance: "0%" }}
                 animate={{ offsetDistance: "100%" }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                 style={{ offsetPath: 'path("M 100 200 C 150 200, 200 200, 250 200")' } as React.CSSProperties}
               />

               <motion.path 
                 d="M 250 200 C 350 100, 400 100, 450 100" 
                 stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" fill="none"
               />
               <motion.circle r="3" fill="#D4AF37"
                 initial={{ offsetDistance: "0%" }}
                 animate={{ offsetDistance: "100%" }}
                 transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
                 style={{ offsetPath: 'path("M 250 200 C 350 100, 400 100, 450 100")' } as React.CSSProperties}
               />

               <motion.path 
                 d="M 250 200 C 350 300, 400 300, 450 300" 
                 stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" fill="none"
               />
               <motion.circle r="3" fill="#D4AF37"
                 initial={{ offsetDistance: "0%" }}
                 animate={{ offsetDistance: "100%" }}
                 transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                 style={{ offsetPath: 'path("M 250 200 C 350 300, 400 300, 450 300")' } as React.CSSProperties}
               />
             </svg>

             {/* Eier */}
             <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white mb-3 backdrop-blur-sm relative z-10">
                 <ShieldCheck className="w-6 h-6" />
               </div>
               <span className="text-[10px] uppercase tracking-widest font-bold text-white/70">Eier</span>
             </div>

             {/* ERA OS */}
             <div className="absolute left-[40%] top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
               <div className="w-24 h-24 bg-era-gold flex items-center justify-center text-era-midnight mb-3 shadow-[0_0_30px_rgba(212,175,55,0.3)] rounded-2xl">
                 <Activity className="w-8 h-8" />
               </div>
               <span className="text-[10px] uppercase tracking-widest font-bold text-era-gold">ERA OS</span>
             </div>

             {/* Partnere */}
             <div className="absolute right-[10%] top-[25%] flex flex-col items-center z-10">
               <div className="w-12 h-12 bg-white/5 border border-white/20 flex items-center justify-center text-white mb-3 backdrop-blur-sm">
                 <Layers className="w-5 h-5" />
               </div>
               <span className="text-[10px] uppercase tracking-widest font-bold text-white/70">Håndverker</span>
             </div>

             <div className="absolute right-[10%] bottom-[25%] flex flex-col items-center z-10">
               <div className="w-12 h-12 bg-white/5 border border-white/20 flex items-center justify-center text-white mb-3 backdrop-blur-sm">
                 <Blocks className="w-5 h-5" />
               </div>
               <span className="text-[10px] uppercase tracking-widest font-bold text-white/70">Bank / Forsikring</span>
             </div>

           </div>
         </div>
      </section>
    </div>
  );
}
