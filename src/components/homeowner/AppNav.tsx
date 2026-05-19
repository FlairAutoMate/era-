import { motion } from 'motion/react';
import { Home, Calendar, Camera, Sparkles } from 'lucide-react';

export default function AppNav() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-6">
      <div className="bg-era-navy/90 backdrop-blur-2xl border border-white/10 h-20 flex items-center justify-around px-8 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] rounded-full border-b-0">
        
        <button className="flex flex-col items-center gap-1.5 group">
          <Home className="w-5 h-5 text-white" />
          <span className="text-[9px] uppercase font-bold tracking-widest text-white/60 group-hover:text-white transition-colors">Hjem</span>
        </button>

        <button className="flex flex-col items-center gap-1.5 group">
          <Calendar className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
          <span className="text-[9px] uppercase font-bold tracking-widest text-white/60 group-hover:text-white transition-colors">Tiltak</span>
        </button>

        {/* Floating Camera Centerpiece */}
        <div className="relative -top-10">
          <motion.button 
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-20 h-20 bg-era-midnight text-era-gold shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center border-4 border-era-navy rounded-full relative z-10"
          >
            <Camera className="w-8 h-8" />
            <div className="absolute inset-0 bg-white/5 rounded-full animate-pulse opacity-50" />
          </motion.button>
          
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-era-gold/20 blur-2xl rounded-full -z-10" />
        </div>

        <button className="flex flex-col items-center gap-1.5 group">
          <Sparkles className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
          <span className="text-[9px] uppercase font-bold tracking-widest text-white/60 group-hover:text-white transition-colors">ERA</span>
        </button>

        <div className="w-10" /> {/* Spacer for symmetry if needed, but flex justify-around handles it */}
      </div>
    </div>
  );
}
