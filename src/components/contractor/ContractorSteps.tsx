import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Inviter kunden til ERA.",
    description: "Kunden legger inn bilder, dokumentasjon og informasjon om eiendommen."
  },
  {
    number: "02",
    title: "ERA bygger oversikt.",
    description: "Bilder, historikk og eiendomsdata samles automatisk i samme system."
  },
  {
    number: "03",
    title: "Gjennomfør befaring raskere.",
    description: "Bruk ERA-appen til å ta bilder, registrere observasjoner, dokumentere arbeid og samle FDV direkte ute på oppdrag."
  },
  {
    number: "04",
    title: "ERA hjelper med kalkyle.",
    description: "KI hjelper med å forstå omfang, foreslå tiltak og strukturere informasjon. Håndverkeren godkjenner alltid selv."
  },
  {
    number: "05",
    title: "Dokumentasjon lagres automatisk.",
    description: "Bilder, arbeid og historikk blir en del av eiendommens samlede historikk i ERA."
  }
];

export default function ContractorSteps() {
  return (
    <section className="py-32 px-6 bg-era-navy text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Prosessen</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Hvordan det fungerer</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-6xl font-display font-black text-white/5 absolute -top-8 -left-4">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-era-gold text-era-navy flex items-center justify-center font-bold mb-6">
                  {step.number}
                </div>
                <h4 className="text-lg font-medium mb-4 pr-4">{step.title}</h4>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
