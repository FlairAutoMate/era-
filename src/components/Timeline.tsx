import { motion } from 'motion/react';
import { History, Sparkles, Clock } from 'lucide-react';

const events = [
  { year: '2024', title: 'Bad renovert', description: 'Dokumentasjon lagret.', type: 'maintenance' },
  { year: '2025', title: 'Tak inspisert', description: 'Ingen feil funnet.', type: 'inspection' },
  { year: '2026', title: 'Slitasje oppdaget', description: 'ERA fant tegn på slitasje på sørvegg.', type: 'observation', ai: true },
];

export default function Timeline() {
  return (
    <section className="py-40 px-6 bg-era-midnight text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-white" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-white" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-white" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32">
          <h2 className="text-5xl md:text-6xl font-medium mb-8 leading-[1.05]">
            Eiendommen får en hukommelse.
          </h2>
          <p className="text-white/50 max-w-lg text-lg font-light leading-relaxed">
            ERA bygger historikken til eiendommen over tid. Bilder, dokumentasjon, vedlikehold og tidligere arbeid lagres samlet — slik at du alltid har oversikt.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/5" />
          
          <div className="space-y-32">
            {events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 text-center md:text-right">
                  {index % 2 === 0 ? (
                    <div className="pr-0 md:pr-12">
                      <span className="text-era-gold font-display text-5xl font-bold block mb-4 tracking-tighter">{event.year}</span>
                      <h3 className="text-3xl font-medium mb-4">{event.title}</h3>
                      <p className="text-white/40 font-light text-base leading-relaxed">{event.description}</p>
                    </div>
                  ) : null}
                </div>

                <div className="relative z-20 flex flex-col items-center">
                  <div className={`w-16 h-16 flex items-center justify-center transition-all duration-700 ${event.ai ? 'bg-era-gold/20 border border-era-gold/50 text-era-gold shadow-[0_0_30px_rgba(200,169,107,0.3)]' : 'bg-white/5 border border-white/10 text-white'}`}>
                    <div>
                      {event.ai ? <Sparkles className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                    </div>
                  </div>
                  {event.ai && (
                    <motion.div 
                      animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-0 bg-era-gold/30 blur-[40px]"
                    />
                  )}
                </div>

                <div className="flex-1 text-center md:text-left">
                  {index % 2 !== 0 ? (
                    <div className="pl-0 md:pl-12">
                      <span className="text-era-gold font-display text-5xl font-bold block mb-4 tracking-tighter">{event.year}</span>
                      <h3 className="text-3xl font-medium mb-4">{event.title}</h3>
                      <p className="text-white/40 font-light text-base leading-relaxed">{event.description}</p>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-32 text-center">
            <p className="text-white/30 text-sm font-light">Alt samlet på ett sted.</p>
            <p className="text-white/60 text-lg font-light mt-2">Over tid blir ERA smartere på eiendommen din.</p>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 opacity-5 pointer-events-none">
        <History className="w-[800px] h-[800px] text-white" />
      </div>
    </section>
  );
}
