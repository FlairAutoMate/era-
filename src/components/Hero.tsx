import React from 'react';
import { motion } from 'motion/react';
import { Camera, ArrowRight, ShieldCheck, MapPin, TrendingUp, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenWaitlist?: () => void;
  onOpenProductAI?: () => void;
}

export default function Hero({ onOpenWaitlist, onOpenProductAI }: HeroProps) {
  return (
    <section className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden bg-era-ivory">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop" 
          alt="Scandinavian Home" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-era-ivory via-era-ivory/80 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-era-ivory/60 md:hidden block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-52 pb-32">
        {/* Subtle KI Infrastructure Lines connecting text to mockup */}
        <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block overflow-hidden">
          {/* Main flow line */}
          <svg className="absolute w-full h-full" style={{ left: 0, top: 0 }}>
             {/* Data flow from Homeowner to ERA Core */}
            <motion.path
              d="M 400 400 C 600 400, 700 500, 900 450"
              stroke="#081426"
              strokeWidth="1"
              strokeOpacity="0.1"
              fill="none"
              strokeDasharray="4 4"
            />
            {/* Animated particle along path */}
            <motion.circle
              r="2"
              fill="#D4AF37"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: 'path("M 400 400 C 600 400, 700 500, 900 450")' } as React.CSSProperties}
            />
            
            {/* ERA Core Node */}
            <circle cx="900" cy="450" r="4" fill="#081426" opacity="0.3" />
            <circle cx="900" cy="450" r="16" fill="#081426" opacity="0.05" />

            {/* ERA Core to Contractor */}
            <motion.path
              d="M 900 450 C 1100 400, 1200 600, 1400 550"
              stroke="#081426"
              strokeWidth="1"
              strokeOpacity="0.1"
              fill="none"
              strokeDasharray="4 4"
            />
             <motion.circle
              r="2"
              fill="#D4AF37"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: 'path("M 900 450 C 1100 400, 1200 600, 1400 550")' } as React.CSSProperties}
            />
            <circle cx="1400" cy="550" r="4" fill="#081426" opacity="0.3" />
            <circle cx="1400" cy="550" r="16" fill="#081426" opacity="0.05" />
          </svg>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-era-navy relative z-10"
        >
          <span className="text-era-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block drop-shadow-sm">
            Fremtidens boligoppfølging er her
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 max-w-2xl leading-[0.95]">
            Boligen din får sin egen KI-agent
          </h1>
          <p className="text-xl md:text-2xl text-era-navy/60 font-light mb-12 max-w-xl leading-relaxed">
            ERA analyserer bilder, dokumentasjon og boligdata for å hjelpe deg å følge opp vedlikehold, oppdage problemer tidligere og bestille håndverkere enkelt.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <button 
              onClick={onOpenWaitlist}
              className="square-button-navy flex items-center gap-2 pr-8 group"
            >
              Be om tilgang
            </button>
            <button 
              onClick={onOpenProductAI}
              className="square-button border border-era-navy/20 text-era-navy hover:bg-white flex items-center gap-2 pr-6 group shadow-sm"
            >
              Se hvordan det fungerer
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          
          <p className="text-xs text-era-gold font-bold uppercase tracking-widest mt-10 flex items-center gap-2 drop-shadow-sm">
            <span className="w-1.5 h-1.5 bg-era-gold animate-pulse" />
            Early Access Alpha
          </p>
        </motion.div>

        {/* iPhone Mockup Mock / Hero Product Visual */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateY: -10 }}
          animate={{ opacity: 1, y: 0, rotateY: -5 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative lg:block flex justify-center perspective-[2000px] lg:translate-x-24"
        >
          {/* Main Visual: Stylized iPhone Mockup */}
          <div className="relative w-[260px] h-[520px] bg-era-midnight rounded-[2.5rem] border-[6px] border-era-midnight shadow-[0_50px_100px_-20px_rgba(8,20,38,0.5)] overflow-hidden">
            {/* iPhone Top Bar Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-era-midnight z-20" />
            
            {/* App UI Concept inside Phone */}
            <div className="h-full w-full bg-era-ivory p-6 pt-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-era-navy/60 font-bold">Oversikt</h4>
                  <p className="text-lg font-bold">Min Eiendom</p>
                </div>
                <div className="w-8 h-8 bg-era-gold/10 flex items-center justify-center text-era-gold">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <div className="bg-white p-5 shadow-sm border border-era-navy/5 mb-6">
                <p className="text-[10px] uppercase tracking-widest text-era-navy/60 font-semibold mb-1">Estimert verdi</p>
                <p className="text-2xl font-bold">11 500 000 kr</p>
                <div className="mt-4 flex items-center gap-2 text-[10px] text-green-600 font-bold bg-green-50 w-fit px-2 py-1">
                  <TrendingUp className="w-3 h-3" />
                  +2.4% POTENSIAL
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold text-era-navy/60">ERA OPPDAGET</p>
                <div className="bg-white/50 p-4 border border-era-navy/5 flex gap-3">
                  <div className="w-8 h-8 bg-era-gold/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 text-era-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold">Mangler dokumentasjon</p>
                    <p className="text-[10px] text-era-navy/70 leading-tight mt-1">Sjekk din innboks for bad.</p>
                  </div>
                </div>
              </div>
              
              {/* Camera FAB in App Mockup */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 bg-era-navy shadow-xl flex items-center justify-center text-white">
                  <Camera className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Floating Property Card Overlaying the mockup */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: -100 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute top-1/4 left-0 glass-dark p-6 shadow-2xl z-30 w-[240px] hidden md:block"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-white font-medium text-sm">Myrerveien 46A</h3>
                <p className="text-white/60 text-[10px]">Oslo, Norge</p>
              </div>
              <MapPin className="w-4 h-4 text-era-gold" />
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-[9px] uppercase tracking-widest">Estimert verdi</p>
                <p className="text-lg font-display font-medium text-white">11 500 000 kr</p>
              </div>
              
              <div className="bg-white/5 p-4 border border-white/10">
                <p className="text-[11px] text-white/90 leading-snug">
                  ERA ser potensial for høyere verdi dersom anbefalte tiltak fullføres.
                </p>
              </div>
              
              <p className="text-[9px] text-white/70 italic">
                ERA har fulgt eiendommen siden mai 2026
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
