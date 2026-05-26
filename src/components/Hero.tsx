import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Smartphone, 
  Wifi, 
  Battery, 
  User, 
  TrendingUp, 
  MapPin, 
  Shield, 
  FileText, 
  Clock,
  Briefcase,
  AlertTriangle,
  CheckCircle2,
  Hammer
} from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenWaitlist?: () => void;
  onOpenProductAI?: () => void;
}

export default function Hero({ onOpenWaitlist, onOpenProductAI }: HeroProps) {
  return (
    <section className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden bg-era-ivory border-b border-era-navy/5">
      {/* Background Subtle Graphic Wave Overlays */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#0E2341_1.2px,transparent_1.2px)] [background-size:32px_32px]" />
      
      {/* Cinematic Luxury Scandinavian ambient glow shifting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-era-gold/[0.04] blur-[140px] pointer-events-none rounded-full animate-pulse [animation-duration:10s]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/[0.015] blur-[120px] pointer-events-none rounded-full animate-pulse [animation-duration:14s]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center pt-40 pb-20 w-full">
        
        {/* Left Column: Original Elegant Editorial Typography with Cinematic reveals */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-8 text-era-navy"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.5, delay: 0.1 }}
            className="text-era-gold font-bold uppercase text-[10px] mb-6 block drop-shadow-sm font-sans"
          >
            KI-BASERT BOLIGOPPFØLGING
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.95] tracking-tight text-balance">
            KI-agenten som gjør vedlikehold like enkelt som Vipps.
          </h1>

          <p className="text-lg text-era-navy/70 font-light leading-relaxed max-w-xl">
            ERA analyserer boligdata, oppdager vedlikeholdsbehov og kobler deg direkte med kvalifiserte håndverkere — med automatisk dokumentasjon hele veien.
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <button 
              onClick={onOpenWaitlist}
              className="square-button bg-era-navy text-white hover:bg-era-midnight font-bold px-8 py-4 flex items-center gap-2 shadow-lg tracking-wider text-xs uppercase transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Prøv ERA Agent
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('how-it-works-title');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onOpenProductAI?.();
                }
              }}
              className="square-button border border-era-navy/20 bg-era-beige/30 text-era-navy hover:bg-era-beige font-bold px-8 py-4 flex items-center gap-2 group transition-all duration-300 hover:-translate-y-0.5 text-xs uppercase tracking-wider"
            >
              Se hvordan det fungerer
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-6">
            <div className="text-[10px] text-era-navy/80 font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="text-emerald-600 font-bold bg-emerald-500/10 px-2 py-1 rounded text-[9px] border border-emerald-500/20">Gratis for boligeiere.</span>
            </div>
            <div className="text-[10px] text-era-navy/50 font-semibold tracking-widest uppercase flex items-center gap-2">
              <span className="text-era-gold font-bold">✓</span> Norskutviklet for norske boligforhold
            </div>
          </div>
        </motion.div>

        {/* Right Column: Original Smartphone/Phone Mockup showing the Homeowner App */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex justify-center items-center relative"
        >
          
          {/* Subtle gold blurred aura behind phone to give depth */}
          <div className="absolute w-72 h-72 rounded-full bg-era-gold/5 blur-3xl -z-10" />

          {/* Interactive Floating Alert Left */}
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute left-[-20px] top-[140px] z-30 hidden sm:flex items-center gap-3 bg-white p-3 shadow-xl border border-era-navy/5 rounded-xl max-w-[200px] transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-era-navy">Malt fasade</p>
              <p className="text-[8px] text-era-navy/50 font-mono">Garanti registrert</p>
            </div>
          </motion.div>

          {/* Interactive Floating Alert Right */}
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute right-[-20px] bottom-[160px] z-30 hidden sm:flex items-center gap-3 bg-white p-3 shadow-xl border border-era-navy/5 rounded-xl max-w-[220px] transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-era-gold/10 flex items-center justify-center shrink-0">
              <Hammer className="w-4 h-4 text-era-gold" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-era-navy">Håndverker funnet</p>
              <p className="text-[8px] text-emerald-600 font-bold font-mono uppercase tracking-wider">Service bekreftet</p>
            </div>
          </motion.div>

          {/* Realistic iPhone Device Outline Wrapper */}
          <div className="relative mx-auto w-[310px] h-[640px] bg-era-navy border-[10px] border-era-navy rounded-[44px] shadow-[0_25px_60px_-15px_rgba(8,20,38,0.3)] overflow-hidden flex flex-col">
            
            {/* Top Ear Speaker & Camera Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-era-navy rounded-b-xl z-30 flex justify-center items-center">
              <div className="w-12 h-1 bg-white/20 rounded-full" />
            </div>

            {/* Simulated Mobile Status Indicators */}
            <div className="h-10 px-6 bg-era-ivory flex justify-between items-end text-[10px] font-bold text-era-navy/60 select-none z-20 pb-1 shrink-0">
              <span>12:45</span>
              <div className="flex items-center gap-1.5">
                <Wifi className="w-3 h-3" />
                <span className="text-[9px]">5G</span>
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Inner Phone Screen Canvas */}
            <div className="flex-1 bg-era-ivory flex flex-col justify-between overflow-hidden relative text-era-navy">
              
              {/* App Status Indicator Header */}
              <div className="px-5 py-4 border-b border-era-navy/5 flex justify-between items-center bg-white/50 backdrop-blur-md select-none shrink-0">
                <div className="font-display font-bold text-lg tracking-tight flex items-center gap-0.5">
                  era<span className="w-1.5 h-1.5 bg-era-gold block shrink-0" />
                </div>
                <div className="w-7 h-7 bg-era-beige rounded-full border border-era-navy/10 flex items-center justify-center text-era-navy/60">
                  <User className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Scrollable Mobile Feed Simulation */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                
                {/* Active Property Card with Image & Sweeping scan effect */}
                <div className="border border-era-navy/10 bg-white shadow-xs overflow-hidden rounded-xl relative">
                  <div className="h-28 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" 
                      alt="Myrerveien 46A" 
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute top-3 left-3 bg-era-navy/90 text-white text-[8px] font-bold uppercase tracking-wider px-2 py-0.5">
                      Min Bolig
                    </div>
                  </div>
                  <div className="p-3.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest text-era-navy/60 font-bold">Oversikt</h4>
                        <p className="text-sm font-semibold">Myrerveien 46A</p>
                      </div>
                      <div className="w-7 h-7 bg-era-gold/10 flex items-center justify-center text-era-gold">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Subtle live pulse inside phone layout */}
                    <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-era-navy/5">
                      <span className="relative flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[8px] uppercase font-mono tracking-wider text-emerald-600 font-bold block">
                        ERA system aktivt
                      </span>
                    </div>
                  </div>
                </div>

                {/* Simulated Notification / Analysis Box */}
                <div className="p-4 bg-era-beige border border-era-navy/10 text-xs flex flex-col justify-between rounded-xl">
                  <p className="font-bold text-[8px] tracking-wider text-era-gold uppercase mb-1 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-era-gold shrink-0" /> PROAKTIVT VARSEL
                  </p>
                  <p className="font-light leading-snug text-era-navy/80">
                    Sintef-standard: Røropplegg på badet runder 18 år. Planlegg sjekk for å unngå TG3-anmerkning.
                  </p>
                </div>

                {/* Quick Action Item */}
                <div className="p-3.5 border border-era-navy/10 bg-white flex items-center justify-between hover:bg-era-beige transition-colors duration-200 cursor-pointer rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-era-navy/5 flex items-center justify-center text-era-navy">
                      <FileText className="w-4 h-4 text-era-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold">Dokumenter</p>
                      <p className="text-[9px] text-era-navy/50 font-light">Utvid boligens hukommelse</p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-era-navy/40" />
                </div>

                {/* Real-time Status Card with continuous synced animation */}
                <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-between rounded-xl">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-600 font-bold">
                    Alt i orden — FDV oppdatert
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>

              </div>

              {/* Bottom Phone Bar with AppNav Navigation Links */}
              <div className="h-16 border-t border-era-navy/5 bg-white flex items-center justify-around px-2 text-era-navy select-none shrink-0">
                <div className="flex flex-col items-center gap-1 cursor-pointer">
                  <div className="w-4 h-4 rounded-full bg-era-navy/5 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-era-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-era-navy/80 scale-90">HJEM</span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5 text-era-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  <span className="text-[7px] font-bold uppercase tracking-widest scale-90">PROSJEKT</span>
                </div>
                <div className="relative -top-2">
                  <div className="w-10 h-10 bg-era-navy text-era-gold rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-era-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5 text-era-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                  <span className="text-[7px] font-bold uppercase tracking-widest scale-90">BOLIGMINNE</span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5 text-era-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                  <span className="text-[7px] font-bold uppercase tracking-widest scale-90">AGENT</span>
                </div>
              </div>

            </div>

            {/* Home indicator bar at bottom */}
            <div className="h-4 bg-white flex items-center justify-center shrink-0">
              <div className="w-24 h-1 bg-era-navy/30 rounded-full" />
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
