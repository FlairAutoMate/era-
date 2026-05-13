import { motion } from 'motion/react';

export default function WhyERA() {
  return (
    <section className="py-60 px-6 bg-era-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Filosofien bak</span>
            <h2 className="text-5xl md:text-8xl font-bold text-era-navy mb-12 leading-[0.9]">
              Ikke bare enda et system.
            </h2>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 pt-4">
            <div className="space-y-12">
              <p className="text-2xl md:text-3xl font-light text-era-navy/60 leading-relaxed">
                Mange løsninger lagrer dokumentasjon. <br />
                Andre hjelper deg å finne håndverkere.
              </p>
              
              <div className="h-px w-24 bg-era-gold" />
              
              <p className="text-2xl md:text-3xl font-bold text-era-navy leading-relaxed">
                <span className="text-era-gold">ERA</span> samler historikk, vedlikehold, dokumentasjon og oppfølging i én sammenhengende opplevelse over tid.
              </p>

              <div className="space-y-6 pt-12">
                <p className="text-xl text-era-navy/40 font-light italic leading-relaxed">
                  ERA hjelper deg ikke bare å forstå vedlikehold.
                </p>
                <p className="text-3xl font-bold text-era-navy leading-tight">
                  ERA hjelper deg å følge opp eiendommen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
