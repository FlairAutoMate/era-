import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Home, ShieldCheck, TrendingUp } from 'lucide-react';

interface ContractorHeroProps {
  onOpenWaitlist?: () => void;
}

export default function ContractorHero({ onOpenWaitlist }: ContractorHeroProps) {
  return (
    <section className="pt-40 pb-32 px-6 bg-[#0B0F19] text-white relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
      {/* Background Subtle Gradient Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-era-gold/10 rounded-full blur-[150px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-[10%] right-[10%] w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[150px] mix-blend-screen opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Headlines */}
        <div className="lg:pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
            <Sparkles className="w-3 h-3 text-era-gold" />
            <span className="text-[10px] text-white/70 uppercase tracking-widest font-mono">ERA for Håndverkere</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.05] tracking-tight">
            Flere oppdrag. <br />
            <span className="text-era-gold">Mindre administrasjon.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 font-light mb-12 max-w-xl leading-relaxed">
            ERA hjelper håndverkere å motta, håndtere og dokumentere oppdrag enklere.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button 
              onClick={onOpenWaitlist}
              className="bg-white text-era-navy px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-era-ivory transition-all shadow-xl shadow-white/5"
            >
              Meld interesse
            </button>
            <button className="text-white/60 hover:text-white text-xs font-semibold uppercase tracking-widest flex items-center gap-2 group transition-colors">
              Se hvordan det fungerer
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>

        {/* Right Side: Abstract Trust Illustration */}
        <div className="relative h-[500px] w-full hidden md:flex items-center justify-center p-12">
          {/* Core rotates on hover of the section matrix */}
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            className="relative w-80 h-80 rounded-full border border-white/5 flex items-center justify-center cursor-pointer"
          >
            {[0, 120, 240].map((rot, i) => (
              <div 
                key={i}
                style={{ transform: `rotate(${rot}deg)` }}
                className="absolute w-full h-full flex justify-center"
              >
                <div className="w-16 h-16 bg-[#0B0F19] border border-era-gold/20 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-[rot]">
                   {i === 0 && <Home className="w-6 h-6 text-white/70" />}
                   {i === 120 && <ShieldCheck className="w-6 h-6 text-era-gold" />}
                   {i === 240 && <TrendingUp className="w-6 h-6 text-blue-500" />}
                </div>
              </div>
            ))}
            
            <div className="w-24 h-24 bg-era-gold/5 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-era-gold/10 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
