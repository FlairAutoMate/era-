import { motion } from 'motion/react';
import { ShieldCheck, History, Users, BarChart3, Clock, FileCheck } from 'lucide-react';

export default function BRLDetails() {
  return (
    <section className="py-32 px-6 bg-era-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">For Styret & Beboere</span>
            <h2 className="text-4xl md:text-6xl font-medium mb-10 leading-[1.05]">
              Bedre oversikt. <br /> Lavere felleskostnader.
            </h2>
            <p className="text-era-navy/60 text-lg font-light leading-relaxed mb-12">
              ERA hjelper borettslag og sameier med å ta vare på fellesverdiene gjennom dokumentert vedlikehold, automatisert FDV og en levende historikk som aldri forsvinner når styret skifter.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: <History className="w-5 h-5 text-era-gold" />, text: "Dokumentert historikk" },
                { icon: <Clock className="w-5 h-5 text-era-gold" />, text: "Langsiktig planlegging" },
                { icon: <FileCheck className="w-5 h-5 text-era-gold" />, text: "Automatisert FDV" },
                { icon: <ShieldCheck className="w-5 h-5 text-era-gold" />, text: "Enklere forsikring" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  {item.icon}
                  <span className="text-sm font-medium text-era-navy/80">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-white p-10 border border-era-navy/5 shadow-xl">
               <Users className="w-8 h-8 text-era-gold mb-6" />
               <h4 className="text-lg font-medium mb-4">Trygghet for beboere</h4>
               <p className="text-sm text-era-navy/60 font-light">Beboerne får tilgang til dokumentasjon for sin egen enhet, integrert i sameiets totale historikk.</p>
             </div>
             <div className="bg-era-navy p-10 text-white shadow-2xl">
               <BarChart3 className="w-8 h-8 text-era-gold mb-6" />
               <h4 className="text-lg font-medium mb-4">Bedre beslutninger</h4>
               <p className="text-sm text-white/60 font-light">Baser vedlikeholdsbudsjettet på reelle data og KI-analyser fremfor antakelser.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
