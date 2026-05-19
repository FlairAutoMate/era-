import { motion } from 'motion/react';
import { Sparkles, Layout, Layers, Zap } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-medium mb-8 leading-[1.05]">
            Ikke bare enda et system.
          </h2>
          <p className="text-era-navy/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Mange løsninger lagrer dokumentasjon. Andre hjelper deg å finne håndverkere. ERA samler alt i én sammenhengende flyt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 bg-era-ivory/50 border border-era-navy/5 relative"
          >
            <div className="text-[120px] font-bold text-era-navy/[0.03] absolute -top-10 -left-4 leading-none select-none">
              01
            </div>
            <h3 className="text-xl font-medium mb-4 relative z-10">Alt samlet på ett sted.</h3>
            <p className="text-era-navy/60 font-light leading-relaxed text-sm relative z-10">
              Ikke mer mapper, gamle e-poster og dokumentasjon spredt flere steder. Bare bedre oversikt over eiendommen over tid.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-10 bg-era-ivory/50 border border-era-navy/5 relative"
          >
            <div className="text-[120px] font-bold text-era-navy/[0.03] absolute -top-10 -left-4 leading-none select-none">
              02
            </div>
            <h3 className="text-xl font-medium mb-4 relative z-10">Intelligent oppfølging.</h3>
            <p className="text-era-navy/60 font-light leading-relaxed text-sm relative z-10">
              Systemet bruker kunstig intelligens og eiendomsdata for å hjelpe deg å forstå hva som bør følges opp — før små ting blir store problemer.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-10 bg-era-ivory/50 border border-era-navy/5 relative"
          >
            <div className="text-[120px] font-bold text-era-navy/[0.03] absolute -top-10 -left-4 leading-none select-none">
              03
            </div>
            <h3 className="text-xl font-medium mb-4 relative z-10">Én sammenhengende flyt.</h3>
            <p className="text-era-navy/60 font-light leading-relaxed text-sm relative z-10">
              ERA samler historikk, vedlikehold, dokumentasjon og oppfølging i én flyt. Det kjedelige blir viktig, og det kompliserte blir forståelig.
            </p>
          </motion.div>
        </div>

        <div className="mt-32 flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-bold uppercase tracking-[0.3em] text-era-navy/60">
          <span>Enkel</span>
          <span>Menneskelig</span>
          <span>Emosjonell</span>
          <span>Tydelig</span>
        </div>

        <div className="mt-32 p-12 bg-era-midnight text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-medium mb-6">Det blir stadig mer å holde oversikt over.</h3>
            <p className="text-white/60 font-light text-lg leading-relaxed mb-8">
              Dokumentasjon, vedlikehold, energi, oppgraderinger og historikk blir viktigere for hvert year som går. ERA gjør det enklere å forstå hva som faktisk bør følges opp.
            </p>
            <div className="flex items-center gap-4 text-era-gold font-medium">
              <div className="w-10 h-10 bg-era-gold/20 flex items-center justify-center">
                <Layout className="w-5 h-5" />
              </div>
              <span>Én sammenhengende flyt.</span>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
