import { motion } from 'motion/react';
import { TrendingUp, MapPin } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex flex-col justify-end px-6 pb-20 overflow-hidden">
      {/* Background with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Scandinavian Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-era-midnight via-era-midnight/40 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 text-white">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-white/60 font-light mb-2">God ettermiddag, Lars-Henrik.</p>
          <div className="flex items-center gap-2 mb-8">
            <MapPin className="w-4 h-4 text-era-gold" />
            <h1 className="text-2xl md:text-3xl font-medium tracking-tight">Myrerveien 46A</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-2">Estimert verdi</p>
              <p className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">11 500 000 kr</p>
              <div className="flex items-center gap-3 text-green-400 bg-white/5 border border-white/10 w-fit px-3 py-1.5 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">+2.4% POTENSIAL</span>
              </div>
            </div>

            <div className="pb-2">
              <p className="text-white/60 font-light leading-relaxed max-w-xs">
                ERA ser potensial for høyere verdi over tid ved anbefalte tiltak.
              </p>
              <div className="mt-6 flex gap-6 text-[11px] font-bold uppercase tracking-widest text-white/40">
                <span>Rekkehus</span>
                <span>135 m²</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
