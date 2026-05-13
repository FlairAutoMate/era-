import { motion } from 'motion/react';
import { Info, Database } from 'lucide-react';

export default function PropertyProfile() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-8 text-era-navy/20">
          <Database className="w-5 h-5" />
          <h2 className="text-lg font-medium">Om eiendommen</h2>
        </div>
        
        <div className="max-w-lg mb-16">
          <p className="text-era-navy/40 font-light leading-relaxed text-sm italic">
            Data hentet fra Kartverket, SSB og tilgjengelige offentlige registre. 
            ERA lærer eiendommen din å kjenne gjennom kombinasjonen av offentlige data og din historikk.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-widest text-era-navy/20">
          <div className="flex flex-col gap-2">
            <span className="text-era-gold/40">Gnr / Bnr</span>
            <span>123 / 456</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-era-gold/40">Byggeår</span>
            <span>1984</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-era-gold/40">Areal P-ROM</span>
            <span>135 m²</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-era-gold/40">Sist omsatt</span>
            <span>2019</span>
          </div>
        </div>
      </div>
    </section>
  );
}
