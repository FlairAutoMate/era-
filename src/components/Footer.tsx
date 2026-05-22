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
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-32">
          <div className="lg:col-span-3">
            <button onClick={(e) => handleLinkClick(e, 'homeowner')} className="text-white mb-10 block group text-left">
              <Logo className="h-7 md:h-8 transition-opacity" dotColor="#C8A96B" />
            </button>
            <h3 className="text-white font-medium text-lg mb-4 pr-4">ERA bygger den intelligente infrastrukturen for eiendom</h3>
            <p className="text-white/60 font-light leading-relaxed text-sm mb-12 pr-4">
              KI-agenter, automatisering og kontinuerlig eiendomsinnsikt — koblet sammen i én plattform for å ta vare på boligen og beskytte verdiene.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/60 hover:text-era-gold hover:border-era-gold transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/60 hover:text-era-gold hover:border-era-gold transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/60 hover:text-era-gold hover:border-era-gold transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-10 text-era-gold">Løsninger</h4>
            <ul className="space-y-5 text-white/60 font-light text-sm">
              <li><button onClick={(e) => handleLinkClick(e, 'homeowner')} className="hover:text-white transition-colors">Boligeier</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'brl')} className="hover:text-white transition-colors">Sameie & BRL</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'contractor')} className="hover:text-white transition-colors">Håndverker</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'partners')} className="hover:text-white transition-colors">Partnere</button></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-10 text-era-gold">Produkt</h4>
            <ul className="space-y-5 text-white/60 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Hvordan det fungerer</a></li>
              <li><button onClick={(e) => handleLinkClick(e, 'product-ai')} className="hover:text-white transition-colors text-left w-full">KI-agenten</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Drift & vedlikehold</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dokumentasjon & FDV</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-10 text-era-gold">Selskap</h4>
            <ul className="space-y-5 text-white/60 font-light text-sm">
              <li><button onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-white transition-colors">Om ERA</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personvern</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vilkår</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <div className="p-8 bg-white/[0.02] border border-white/5 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-white font-medium text-lg tracking-tight mb-4 text-era-gold">Innsikt om fremtidens eiendomsdrift</h4>
                <p className="text-white/60 text-sm mb-8 leading-relaxed font-light">Få produktnyheter, KI-oppdateringer og innsikt om intelligent vedlikehold og eiendomsteknologi.</p>
              </div>
              <div className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Din e-postadresse" 
                  className="bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-era-gold transition-colors w-full font-light"
                />
                <button className="square-button-navy !bg-white !text-era-navy hover:!bg-era-ivory w-full font-medium">
                  Meld deg på
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-white/70 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span>© {currentYear} ERA TECHNOLOGIES AS. MADE IN OSLO.</span>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <span>Intelligent Property Management</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-4 text-white/60 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest group"
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
