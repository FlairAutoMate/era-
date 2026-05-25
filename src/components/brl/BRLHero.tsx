import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface BRLHeroProps {
  onOpenWaitlist?: () => void;
}

export default function BRLHero({ onOpenWaitlist }: BRLHeroProps) {
  return (
    <section className="pt-52 pb-32 px-6 bg-era-midnight text-white relative overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000" 
          alt="Skandinavisk arkitektur" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-era-midnight/80 via-era-midnight/60 to-era-midnight" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">
            ERA for sameier og borettslag
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-10 leading-[1.0] tracking-tight">
            KI-agent for drift <br className="hidden md:block" /> og vedlikehold <br className="hidden md:block" /> av eiendom
          </h1>
          <div className="text-lg md:text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            <p>
              ERA kobler sammen styret, beboerne, håndverkerne og dokumentasjonen i én intelligent vedlikeholdsflyt.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
            <button onClick={onOpenWaitlist} className="square-button-gold px-12 py-5 text-sm uppercase tracking-wider font-bold w-full sm:w-auto shadow-2xl">Få pristilbud til sameiet</button>
            <button onClick={onOpenWaitlist} className="text-white/80 hover:text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2 group transition-colors">
              Se plattformen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-era-gold/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-era-gold/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
