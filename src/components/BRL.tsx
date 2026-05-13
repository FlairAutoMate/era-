import { motion } from 'motion/react';
import { Building2, Activity, History, Users, ShieldCheck, Sparkles, ClipboardCheck } from 'lucide-react';

export default function BRL() {
  return (
    <section className="py-60 px-6 bg-era-beige" id="associations">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Sameie & BRL</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.95] text-era-navy">
            Bedre oversikt over bygg og vedlikehold.
          </h2>
          <p className="text-era-navy/60 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            ERA hjelper sameier og borettslag med å samle dokumentasjon, historikk og vedlikehold i ett intelligent system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-32">
          {[
            { icon: <Sparkles className="w-5 h-5" />, title: "Scan Bygg" },
            { icon: <ClipboardCheck className="w-5 h-5" />, title: "Plan" },
            { icon: <Activity className="w-5 h-5" />, title: "Prosjekt" },
            { icon: <History className="w-5 h-5" />, title: "Journal" },
            { icon: <ShieldCheck className="w-5 h-5" />, title: "Verdi" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-era-navy/5 flex flex-col items-start gap-6 hover:shadow-xl transition-all"
            >
              <div className="w-10 h-10 bg-era-navy text-white flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-era-navy">{item.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm font-bold text-era-gold uppercase tracking-[0.2em] mb-12">
            Mindre usikkerhet. Mer kontroll.
          </p>
          <button className="square-button-navy">
            Se alle løsninger
          </button>
        </div>
      </div>
    </section>
  );
}
