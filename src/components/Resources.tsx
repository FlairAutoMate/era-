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
               <motion.div
                 key={item}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="bg-white border border-era-navy/5 p-6 flex items-center justify-between shadow-sm group hover:border-era-gold/20 hover:shadow-md transition-all"
               >
                 <span className="text-sm font-bold text-era-navy">{item}</span>
                 <div className="w-2 h-2 rounded-full bg-era-gold/50 group-hover:bg-era-gold transition-colors" />
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
