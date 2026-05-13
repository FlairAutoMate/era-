import React from 'react';
import Logo from './Logo';
import { Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { ViewType } from '../App';

interface FooterProps {
  onViewChange?: (view: ViewType) => void;
}

export default function Footer({ onViewChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, view: ViewType) => {
    if (onViewChange) {
      e.preventDefault();
      onViewChange(view);
      scrollToTop();
    }
  };

  return (
    <footer className="bg-era-navy text-white py-32 px-6 relative overflow-hidden">
      {/* Huge subtle background text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden h-full w-full flex items-end justify-center">
        <motion.span 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.03 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[35vw] font-display font-bold leading-none -mb-[5vw] whitespace-nowrap tracking-tighter"
        >
          ERA
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          <div className="lg:col-span-4">
            <button onClick={(e) => handleLinkClick(e, 'homeowner')} className="text-white mb-10 block group text-left">
              <Logo className="h-7 md:h-8 transition-opacity" dotColor="#C8A96B" />
            </button>
            <p className="text-white/40 max-w-sm font-light leading-relaxed text-base mb-12">
              ERA bygger intelligent hukommelse for fremtidens eiendomsmarked. Vi sikrer boligens verdi og historikk gjennom moderne teknologi.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-era-gold hover:border-era-gold transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-era-gold hover:border-era-gold transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-era-gold hover:border-era-gold transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-10 text-era-gold">Produkt</h4>
            <ul className="space-y-5 text-white/60 font-light text-sm">
              <li><button onClick={(e) => handleLinkClick(e, 'homeowner')} className="hover:text-white transition-colors">Scan, Plan & Prosjekt</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'brl')} className="hover:text-white transition-colors">Sameie & BRL</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'contractor')} className="hover:text-white transition-colors">Håndverkere (ERA Pro)</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Veikart</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-10 text-era-gold">Selskapet</h4>
            <ul className="space-y-5 text-white/60 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Om oss</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personvern</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vilkår</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-4">
            <div className="p-8 bg-white/[0.03] border border-white/10">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-6">Hold deg oppdatert</h4>
              <p className="text-white/40 text-xs mb-8 leading-relaxed">Få innsikt i boligmarkedet og siste produktnyheter fra ERA.</p>
              <div className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="E-postadresse" 
                  className="bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-era-gold transition-colors w-full"
                />
                <button className="square-button-navy !bg-white !text-era-navy hover:!bg-era-ivory w-full">
                  Meld deg på
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span>© {currentYear} ERA TECHNOLOGIES AS. MADE IN OSLO.</span>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <span>Intelligent Property Management</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-4 text-white/40 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest group"
          >
            Til toppen
            <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
        
        <div className="mt-20">
          <p className="text-[10px] text-white/20 leading-relaxed font-light text-center max-w-4xl mx-auto">
            ERA bruker kunstig intelligens til å analysere eiendomsdata. Forslag og analyser er indikative og erstatter ikke profesjonell rådgivning. Vi anbefaler alltid befaring med fagperson for kritiske beslutninger.
          </p>
        </div>
      </div>
    </footer>
  );
}
