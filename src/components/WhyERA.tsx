import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, Paintbrush, Activity, HardDrive, CheckCircle } from 'lucide-react';

const memories = [
  {
    icon: Activity,
    title: "Varmepumpe installert",
    time: "August 2024",
    detail: "Toshiba Daiseikai 9 • Dokumentasjon og sjekkliste godkjent",
    status: "Operativ",
    syncState: "Låst til FDV",
    statusColor: "text-emerald-500 bg-emerald-500/10",
  },
  {
    icon: Paintbrush,
    title: "Fasade malt",
    time: "Juni 2022",
    detail: "Jotun Drytech • Fargekode: S2500-N (Klassisk hvit)",
    status: "Bra tilstand",
    syncState: "Historikk verifisert",
    statusColor: "text-blue-500 bg-blue-500/10",
  },
  {
    icon: Clock,
    title: "Tak kontroll anbefalt",
    time: "Om 11 måneder",
    detail: "Fremtidig tilstandsvurdering (5-års intervall etter standard)",
    status: "Planlagt",
    syncState: "Synkronisert",
    statusColor: "text-amber-500 bg-amber-500/10",
  },
  {
    icon: HardDrive,
    title: "Eiendomsdata strukturert",
    time: "Nylig oppdatert",
    detail: "12 kvitteringer, FDV, plantegninger og skjøte arkivert",
    status: "Synkronisert",
    syncState: "Aktiv kilde",
    statusColor: "text-emerald-500 bg-emerald-500/10",
  }
];

export default function WhyERA() {
  return (
    <section className="py-32 px-6 bg-era-ivory overflow-hidden border-t border-era-navy/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Typography Column */}
          <div className="lg:col-span-5">
            <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block font-sans">
              AUTOMATISERT MINNE
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-era-navy mb-8 leading-tight tracking-tight">
              ERA husker alt om boligen <br className="hidden md:inline"/> — så du slipper
            </h2>
            <p className="text-lg text-era-navy/60 font-light leading-relaxed mb-8">
              Jo mer informasjon du legger inn, desto enklere blir det å ta vare på boligen. ERA husker fargekoder, levetid på rør, servicer på varmepumpe og alle kvitteringene dine automatisk for å beskytte dens virkelige verdi.
            </p>
            
            <div className="flex items-center gap-3 p-4 bg-white/40 border border-era-navy/5 rounded-xl">
              <Sparkles className="w-5 h-5 text-era-gold animate-pulse" />
              <p className="text-xs font-semibold text-era-navy/80">
                Dataene dine er kryptert og brukes kun til din boligforvaltning.
              </p>
            </div>
          </div>
          
          {/* Right Column: Interactive Living Memory Cards */}
          <div className="lg:col-span-7 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-era-gold/20 to-transparent blur-xs pointer-events-none" />
            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              {memories.map((memory, mIdx) => {
                const Icon = memory.icon;
                return (
                  <div
                    key={mIdx}
                    className="p-6 bg-white border border-era-navy/10 transition-all duration-300 relative group cursor-pointer hover:border-era-gold shadow-xs hover:shadow-md rounded-xl"
                  >
                    {/* Status badge and Live Sync badge */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-9 h-9 bg-era-navy/5 rounded-lg flex items-center justify-center text-era-navy group-hover:bg-era-navy/10 transition-colors">
                        <Icon className="w-4 h-4 text-era-gold" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-[8px] font-mono tracking-wider font-bold uppercase text-era-navy/50">
                          {memory.syncState}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-md font-bold text-era-navy mb-1 leading-snug">
                      {memory.title}
                    </h3>
                    
                    <p className="text-xs text-era-gold font-bold mb-3">
                      {memory.time}
                    </p>

                    <p className="text-xs text-era-navy/60 font-light leading-relaxed">
                      {memory.detail}
                    </p>

                    <div className="mt-4 pt-3 border-t border-era-navy/5 flex justify-between items-center text-[8px] font-bold font-mono tracking-widest text-[#10b981]">
                      <span>✓ FDV KLART</span>
                      <span className="text-[7.5px] uppercase tracking-wider text-era-navy/40">ID: #40{mIdx}A</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
