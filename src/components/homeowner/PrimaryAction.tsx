import { motion } from 'motion/react';
import { Plus, Camera } from 'lucide-react';

export default function PrimaryAction() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5 }}
          className="bg-era-navy p-12 md:p-24 text-white text-center relative overflow-hidden cursor-pointer group"
        >
          {/* Background Highlight */}
          <div className="absolute inset-0 bg-era-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-12 transition-transform duration-700 group-hover:scale-110">
              <Plus className="w-10 h-10 text-era-gold" />
            </div>

            <h2 className="text-3xl md:text-5xl font-medium mb-6">Hva vil du gjøre?</h2>
            <p className="text-white/60 text-lg font-light mb-12 max-w-md mx-auto">
              Beskriv arbeidet, problemet eller prosjektet du tenker på.
            </p>

            <div className="flex items-center gap-3 text-era-gold font-bold uppercase tracking-[0.3em] text-xs">
              <Camera className="w-4 h-4" />
              Start med bilde
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
