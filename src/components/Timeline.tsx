import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Receipt, Home, ShieldAlert, CheckCircle2 } from 'lucide-react';

const journalEvents = [
  {
    date: "April 2026",
    title: "Tak-kontroll utført",
    description: "Periodisk tilstandssjekk gjennomført i tråd med Byggforsk-retningslinjer. Ingen kritiske avvik avdekket.",
    tag: "Vedlikehold",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: CheckCircle2,
    details: ["Mosefjerning utført", "Sjekket beslag og renner", "Tilstand karakterisert som TG1"]
  },
  {
    date: "Januar 2026",
    title: "Nye vinduer registrert",
    description: "ERA identifiserte oppgradering til 3-lags lavenergivinduer fra Nordan basert på skannet kvittering og FDV-vedlegg.",
    tag: "Forbedring",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: Home,
    details: ["U-verdi forbedret fra 1.4 til 0.8", "Automatisk rapport sendt til forsikringsselskap", "Estimert årlig energibesparelse: 850 kWh"]
  },
  {
    date: "Oktober 2025",
    title: "Fasade malt (Vestvegg)",
    description: "14 kvitteringer og produktkoder analysert og registrert automatisk under eiendommens utvendige vedlikehold.",
    tag: "Dokumentert",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    icon: Receipt,
    details: ["Jotun Drytech fargekode S2500-N benyttet", "Bilder før/etter låst til den digitale journalen", "Forventet neste beising: År 2035"]
  }
];

export default function Timeline() {
  return (
    <section className="py-32 px-6 bg-era-midnight text-white overflow-hidden relative">
      {/* Background ambient light overlay */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-era-gold/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header containing high-emotional wording */}
        <div className="max-w-3xl mb-24">
          <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
            Eiendomsjournalen
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight leading-tight">
            En levende tidslinje over boligens levetid
          </h2>
          <p className="text-lg text-white/60 font-light leading-relaxed">
            Når du bruker ERA, bygges en fullstendig, uforanderlig og intelligent vedlikeholdshistorikk automatisk. Ingen flere glemte malingskoder, tapte kvitteringer eller manglende dokumentasjon.
          </p>
        </div>

        {/* Timeline representation */}
        <div className="relative">
          {/* Vertical spine line */}
          <div className="absolute left-[24px] md:left-[50%] top-0 bottom-0 w-px bg-white/10 z-0" />

          <div className="space-y-20 relative z-10">
            {journalEvents.map((event, index) => {
              const SvgIcon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Event Meta Column */}
                  <div className={`flex-1 w-full pl-16 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-2xl font-semibold text-era-gold tracking-tight">
                      {event.date}
                    </span>
                    <div className={`flex flex-wrap gap-2 mt-2 justify-start ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className={`text-[9px] uppercase tracking-wider font-bold px-2.5 py-0.5 border rounded-md ${event.tagColor}`}>
                        {event.tag}
                      </span>
                    </div>
                  </div>

                  {/* Spine Node Marker */}
                  <div className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-8 h-8 rounded-full bg-era-midnight border border-white/20 flex items-center justify-center shadow-lg group-hover:border-era-gold transition-colors duration-300">
                      <SvgIcon className="w-4 h-4 text-era-gold" />
                    </div>
                  </div>

                  {/* Detailed Description Column */}
                  <div className="flex-1 w-full pl-16 md:pl-0">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300">
                      <h3 className="text-xl font-medium text-white mb-3">
                        {event.title}
                      </h3>
                      <p className="text-sm font-light text-white/70 leading-relaxed mb-6">
                        {event.description}
                      </p>

                      {/* Detailed Bullet Outcomes */}
                      <ul className="space-y-2.5">
                        {event.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs font-light text-white/50">
                            <span className="w-1 h-1 bg-era-gold rounded-full mt-2 shrink-0 animate-pulse" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Absolute bottom visual note */}
          <div className="mt-24 text-center border-t border-white/11 pt-12 max-w-2xl mx-auto">
            <span className="inline-block p-4 bg-white/[0.02] border border-white/5 text-xs text-white/60 font-medium">
              ⚡ ERA husker historikken — slik at du trygt kan overlevere en uforglemmelig digital boligmappe ved salg.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
