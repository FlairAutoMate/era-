import { motion } from 'motion/react';

const partners = [
  { name: "Malorama", logo: "MALORAMA" },
  { name: "Mal Proff", logo: "MAL PROFF" },
  { name: "Mesterfarge", logo: "MESTERFARGE" },
  { name: "Jotun", logo: "JOTUN" },
  { name: "Kartverket", logo: "KARTVERKET" },
];

export default function Partners() {
  return (
    <section className="bg-era-ivory/30 py-16 border-b border-era-navy/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <span className="text-era-gold font-semibold uppercase tracking-[0.2em] text-[10px] block mb-2">
          Samarbeidspartnere
        </span>
        <h2 className="text-era-navy/40 text-sm font-medium">Brukt av de ledende aktørene i bransjen</h2>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex items-center gap-24 whitespace-nowrap py-4"
            animate={{ 
              x: [0, -1000] 
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100"
              >
                <span className="text-xl md:text-2xl font-display font-black tracking-tighter text-era-navy/20">
                  {partner.logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
