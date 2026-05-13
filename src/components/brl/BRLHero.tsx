import { motion } from 'motion/react';

export default function BRLHero() {
  return (
    <section className="pt-52 pb-20 px-6 bg-era-midnight text-white relative overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000" 
          alt="Skandinavisk arkitektur" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-era-midnight/80 via-era-midnight/40 to-era-midnight" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">ERA for Sameier & BRL</span>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
            Full kontroll på <br /> fellesverdien.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            ERA samler vedlikeholdsplaner, dokumentasjon og historikk for hele bygningsmassen i én intelligent flyt for styret og beboere.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button className="square-button-gold px-12 py-5 text-lg w-full sm:w-auto">Start for vårt sameie</button>
            <button className="text-white/80 hover:text-white font-medium flex items-center gap-2 group transition-colors">
              Bestill gratis befaring
              <motion.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="px-4 py-2 bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest">
              Gjør styrearbeidet enklere og mer verdifullt.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-era-gold/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-era-gold/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
