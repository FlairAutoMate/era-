import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function EraInsight() {
  return (
    <section className="py-20 px-6 bg-era-ivory">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-16 shadow-sm border border-era-navy/5 relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-10">
            <Sparkles className="w-5 h-5 text-era-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-era-navy/40">ERA observerer</span>
          </div>

          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">
              ERA anbefaler nye bilder <br /> av fasaden.
            </h2>
            <p className="text-era-navy/60 font-light text-lg mb-12">
              ERA har ikke sett nye bilder siden mai. Oppdaterte bilder hjelper oss å overvåke tilstand og gi bedre verdivurderinger.
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="square-button-navy px-8 py-4 text-sm">Legg til bilder</button>
              <button className="flex items-center gap-2 text-era-navy/60 hover:text-era-navy font-medium transition-colors text-sm group">
                Spør ERA
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Ambient KI Decoration */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-era-gold/5 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
