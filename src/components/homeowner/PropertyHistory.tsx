import { motion } from 'motion/react';
import { History, CheckCircle2, Image as ImageIcon, FileText, AlertCircle } from 'lucide-react';

const historyItems = [
  { icon: <FileText className="w-4 h-4" />, text: "Dokumentasjon oppdatert", date: "mai 2026" },
  { icon: <ImageIcon className="w-4 h-4" />, text: "8 bilder lagt til", date: "mai 2026" },
  { icon: <FileText className="w-4 h-4" />, text: "1 dokument analysert", date: "mai 2026" },
  { icon: <AlertCircle className="w-4 h-4 text-era-navy/60" />, text: "Ingen kontrakter registrert", date: "" },
];

export default function PropertyHistory() {
  return (
    <section className="py-20 px-6 bg-era-ivory/50 border-y border-era-navy/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <History className="w-5 h-5 text-era-navy/60" />
          <h2 className="text-xl font-medium">Eiendomshistorikk</h2>
        </div>

        <div className="grid gap-4">
          {historyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between p-6 bg-white border border-era-navy/5 group hover:border-era-gold transition-colors duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="text-era-navy/70 group-hover:text-era-gold transition-colors">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-era-navy/80">{item.text}</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-era-navy/70 italic">
                {item.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
