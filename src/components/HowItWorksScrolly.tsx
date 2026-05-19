import React from 'react';
import { FileText, Sparkles, Home } from 'lucide-react';
import { motion } from 'motion/react';

export default function HowItWorksScrolly() {
  return (
    <section className="py-32 px-6 bg-era-ivory text-era-navy border-t border-era-navy/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
            Hvordan det fungerer
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Fra fysisk bygg til digital autonomi
          </h2>
          <p className="text-lg md:text-xl text-era-navy/60 font-light leading-relaxed">
            Vi gjør din bolig smidigere å forvalte. Fra uoversiktlige permer og glemte dokumenter, 
            til et levende system som forstår boligen din og hjelper deg å ta vare på den.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-era-navy/10 z-0" />

          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 flex flex-col items-center text-center group"
          >
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border border-era-navy/10 shadow-sm mb-8 group-hover:border-era-gold/40 group-hover:shadow-md transition-all duration-500">
              <FileText className="w-10 h-10 text-era-navy/40 group-hover:text-era-gold transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-medium mb-4">1. Vi samler alt</h3>
            <p className="text-era-navy/60 font-light leading-relaxed">
              I stedet for fysiske permer og glemte e-poster, samles all dokumentasjon og historikk om boligen din sikkert på ett sted.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center text-center group"
          >
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border border-era-navy/10 shadow-sm mb-8 group-hover:border-era-gold/40 group-hover:shadow-md transition-all duration-500">
              <Sparkles className="w-10 h-10 text-era-navy/40 group-hover:text-era-gold transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-medium mb-4">2. Vi skaper oversikt</h3>
            <p className="text-era-navy/60 font-light leading-relaxed">
              Systemet går gjennom dokumentasjonen automatisk og forstår hva boligen trenger, slik at du slipper å bekymre deg.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative z-10 flex flex-col items-center text-center group"
          >
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border border-era-navy/10 shadow-sm mb-8 group-hover:border-era-gold/40 group-hover:shadow-md transition-all duration-500">
              <Home className="w-10 h-10 text-era-navy/40 group-hover:text-era-gold transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-medium mb-4">3. Du har kontroll</h3>
            <p className="text-era-navy/60 font-light leading-relaxed">
              Du får beskjed i god tid før noe må vedlikeholdes, med ferdige forslag til løsninger som bevarer boligens verdi.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
