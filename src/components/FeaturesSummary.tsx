import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, FolderHeart, Hammer, Check } from 'lucide-react';

const bentoItems = [
  {
    icon: ShieldAlert,
    title: "Oppdag problemer tidlig",
    description: "ERA overvåker boligens tilstand og varsler før små problemer blir store.",
    bullets: ["Tidlige varsler", "Redusert risiko"],
    badge: "Overvåkning",
  },
  {
    icon: FolderHeart,
    title: "Alt samlet automatisk",
    description: "FDV, bilder og historikk oppdateres kontinuerlig i boligens digitale journal.",
    bullets: ["Full oversikt", "Klar for salg og forsikring"],
    badge: "Journal",
  },
  {
    icon: Hammer,
    title: "Utfør arbeid enklere",
    description: "ERA kobler deg direkte med kvalifiserte håndverkere uten telefonrunder eller stress.",
    bullets: ["Riktig fagperson", "Ferdig spesifisert oppdrag"],
    badge: "Utførelse",
  }
];

export default function FeaturesSummary() {
  return (
    <section className="py-32 px-6 bg-era-ivory border-t border-era-navy/5">
      <div className="max-w-7xl mx-auto">
        {/* Header content targeting emotional value */}
        <div className="max-w-3xl mb-20">
          <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Hvorfor ERA
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-era-navy leading-tight mb-6 tracking-tight">
            Ta vare på boligen – like enkelt som Vipps
          </h2>
          <p className="text-lg text-era-navy/60 font-light max-w-2xl">
            Glem lange telefonrunder og uoversiktlige permer. ERA gjør det å vedlikeholde, beskytte verdier og ta vare på boligen din like raskt og ukomplisert som å sende penger med mobilen.
          </p>
        </div>

        {/* 3 Core Value Blocks */}
        <div className="grid md:grid-cols-3 gap-8">
          {bentoItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 border border-era-navy/10 bg-era-beige text-era-navy flex flex-col justify-between transition-all duration-300 rounded-xl cursor-pointer hover:border-era-gold group relative"
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-era-navy/50 bg-era-navy/5 px-2.5 py-1">
                      {item.badge}
                    </span>
                    <Icon className="w-5 h-5 text-era-gold" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-era-navy">
                    {item.title}
                  </h3>

                  <p className="text-sm font-light text-era-navy/70 leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <ul className="space-y-3">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2.5 text-xs text-era-navy/80 font-medium">
                        <Check className="w-3.5 h-3.5 text-era-gold shrink-0 stroke-[3]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-era-navy/10 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-era-navy/40 uppercase tracking-widest">
                    Aktiv agent
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
