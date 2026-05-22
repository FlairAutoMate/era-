import { motion } from 'motion/react';
import { Maximize, Sparkles, Compass, Shield } from 'lucide-react';

const steps = [
  {
    icon: <Maximize className="w-6 h-6 outline-none" />,
    title: "Vis ERA hva du trenger hjelp med.",
    description: "Ta bilde av det du lurer på — et rom, en skade eller et prosjekt — og få direkte kobling til kvalifisert håndverker.",
    step: "01"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "ERA analyserer eiendommen.",
    description: "ERA kombinerer bilder, dokumentasjon og eiendomsdata for å forstå tilstand og behov, med automatisk kobling til kvalifisert håndverker.",
    step: "02"
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Forstå hva som bør gjøres.",
    description: "Få en enkel oversikt over vedlikehold, risiko og verdi over tid, inkludert sikker kobling til kvalifisert håndverker.",
    step: "03"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Ta neste steg.",
    description: "Be om tilbud fra kvalifiserte håndverkere og lagre dokumentasjonen samlet i ERA med sømløs kobling til kvalifisert håndverker.",
    step: "04"
  }
];

export default function StepFlow() {
  return (
    <section className="py-40 px-6 bg-era-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-era-navy mb-6">
            Hvordan det fungerer
          </h2>
          <p className="text-era-navy/60 text-lg font-light max-w-xl">
            Fra behov til bekreftelse — like raskt og enkelt som å sende penger med Vipps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          {steps.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="text-era-navy/10 font-display text-[120px] font-bold absolute -top-20 -left-4 pointer-events-none group-hover:text-era-gold/20 transition-colors duration-700">
                {item.step}
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white flex items-center justify-center mb-8 text-era-navy shadow-sm border border-era-navy/5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 pr-12 leading-tight">{item.title}</h3>
                <p className="text-era-navy/60 font-light leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
