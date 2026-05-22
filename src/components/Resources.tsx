import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Resources() {
  return (
    <section className="py-40 px-6 bg-era-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">FDV / Journal</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-[0.95] text-era-navy">
              ERA husker alt om boligen.
            </h2>
            <p className="text-era-navy/60 text-xl font-light leading-relaxed mb-10">
              Samle alt på ett sted, knyttet direkte til boligens adresse. Ingen flere permer, ingen glemte detaljer.
            </p>
            <div className="flex gap-4">
              <button className="square-button-navy px-10 py-4 text-sm">Utforsk journalen</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             {[
               "Dokumentasjon",
               "Kvitteringer",
               "Bilder",
               "FDV",
               "Arbeid utført",
               "Garantier",
               "Produkter brukt"
             ].map((item, i) => (
               <div
                 key={item}
                 className="bg-era-beige border border-era-navy/10 p-6 flex items-center justify-between group hover:border-era-gold transition-all duration-300 cursor-pointer"
               >
                 <span className="text-sm font-bold text-era-navy transition-colors">{item}</span>
                 <div className="w-2 h-2 rounded-full bg-era-navy/20 group-hover:bg-era-gold transition-colors" />
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
