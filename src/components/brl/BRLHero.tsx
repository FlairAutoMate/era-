import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Sparkles, Building, Layers } from 'lucide-react';

interface BRLHeroProps {
  onOpenWaitlist?: () => void;
}

export default function BRLHero({ onOpenWaitlist }: BRLHeroProps) {
  return (
    <section className="pt-56 pb-36 px-6 bg-era-midnight text-white relative overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2200" 
          alt="Skandinavisk modern arkitektur" 
          className="w-full h-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-era-midnight/95 via-era-midnight/70 to-era-midnight" />
        
        {/* Subtle dot pattern layer */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(#C8A96B 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-era-gold/10 border border-era-gold/25 rounded-full mb-8">
            <Sparkles className="w-3 h-3 text-era-gold animate-pulse" />
            <span className="text-era-gold font-bold uppercase tracking-[0.25em] text-[8.5px]">
              ERA Enterprise for sameier og borettslag
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-[1.0] tracking-tight text-white max-w-5xl mx-auto">
            Fra reaktivt styrearbeid <br className="hidden md:block" />
            til <span className="bg-gradient-to-r from-era-gold via-amber-200 to-white bg-clip-text text-transparent">autonom verdisikring.</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/75 font-light mb-14 max-w-3xl mx-auto leading-relaxed">
            ERA er den intelligente KI-forvalteren for norske borettslag og sameier. Vi automatiserer beboerhenvendelser, genererer dynamiske 10-års vedlikeholdsplaner og sikrer kontinuitet gjennom digitalt boligminne – forutsigbart, transparent og tidsbesparende.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-lg mx-auto mb-16">
            <button 
              onClick={onOpenWaitlist} 
              className="square-button-gold px-12 py-5 text-xs uppercase tracking-widest font-bold w-full sm:w-auto shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              Få pristilbud til sameiet
            </button>
            <button 
              onClick={onOpenWaitlist} 
              className="text-white/80 hover:text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2.5 group transition-colors w-full sm:w-auto py-4"
            >
              Se plattformen i drift
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-era-gold" />
            </button>
          </div>

          {/* Quick core benefits row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-10 border-t border-white/10 text-left">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0 mt-0.5">
                <span className="text-emerald-400 text-xs font-bold">✓</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-white">70% tidsbesparelse</p>
                <p className="text-[10px] text-white/50 leading-relaxed font-light">Eliminerer repeterende henvendelser og admin.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0 mt-0.5">
                <span className="text-emerald-400 text-xs font-bold">✓</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Full styrekontinuitet</p>
                <p className="text-[10px] text-white/50 leading-relaxed font-light">Eiendomsminnet forblir i bygget når styret endres.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 col-span-2 md:col-span-1 border-t border-white/5 md:border-t-0 pt-4 md:pt-0">
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0 mt-0.5">
                <span className="text-emerald-400 text-xs font-bold">✓</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Optimalisert FDV</p>
                <p className="text-[10px] text-white/50 leading-relaxed font-light">Løpende analyser forebygger kostbare akutte skader.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elegant atmospheric background lights */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-1/4 -right-1/4 w-[900px] h-[900px] bg-era-gold/[0.04] rounded-full blur-[140px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[900px] h-[900px] bg-[#10b981]/[0.02] rounded-full blur-[140px]" />
        
        {/* Abstract structural grid line */}
        <div className="absolute right-10 bottom-0 top-0 w-[1px] bg-white/[0.03] hidden lg:block" />
        <div className="absolute left-10 bottom-0 top-0 w-[1px] bg-white/[0.03] hidden lg:block" />
      </div>
    </section>
  );
}
