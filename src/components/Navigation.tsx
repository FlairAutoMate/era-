import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { ViewType } from '../App';
import Logo from './Logo';

interface NavigationProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const MENU_DATA = {
  homeowner: {
    headline: 'Forstå eiendommen bedre over tid.',
    description: 'ERA kombinerer bilder, dokumentasjon og eiendomsdata for å hjelpe deg å forstå hva som bør følges opp.',
    values: ['Vedlikehold', 'Historikk', 'Dokumentasjon', 'Verdi'],
    links: ['Oversikt', 'Vedlikehold', 'Dokumentasjon', 'Historikk', 'Verdi og innsikt']
  },
  brl: {
    headline: 'Bedre oversikt over bygg og vedlikehold.',
    description: 'ERA hjelper sameier og borettslag med dokumentasjon, historikk og oppfølging av bygg over tid.',
    values: ['Vedlikeholdsplan', 'Dokumentasjon', 'Styreportal', 'Historikk'],
    links: ['Oversikt', 'Vedlikeholdsplan', 'Dokumentasjon', 'Styreportal', 'Historikk']
  },
  contractor: {
    headline: 'Bedre dokumentasjon. Bedre kunder.',
    description: 'ERA hjelper håndverkere med befaring, dokumentasjon og kundeoppfølging gjennom hele prosjektløpet.',
    values: ['Befaring', 'Tilbud', 'FDV', 'Kundeoppfølging'],
    links: ['ERA Pro', 'Befaring', 'Tilbud', 'FDV', 'Partnerprogram']
  },
  about: {
    headline: 'En ny måte å følge opp eiendom.',
    description: 'ERA kombinerer bilder, dokumentasjon og eiendomsdata i én sammenhengende opplevelse over tid.',
    values: ['KI og eiendomsdata', 'Datasikkerhet', 'Historikk', 'Kontinuitet'],
    links: ['Hvordan det fungerer', 'KI og eiendomsdata', 'Datasikkerhet', 'GDPR', 'Om selskapet']
  }
};

export default function Navigation({ currentView, onViewChange }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<keyof typeof MENU_DATA | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHeroDark = currentView === 'brl' || currentView === 'contractor';
  const isTransparent = !scrolled && !activeMenu;
  const textColor = isTransparent && isHeroDark ? 'text-white' : 'text-era-navy';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-300">
      <nav 
        className={`w-full max-w-7xl flex items-center justify-between px-6 py-4 rounded-none transition-all duration-500 ${
          scrolled || activeMenu
            ? 'bg-era-ivory/80 backdrop-blur-md shadow-sm border border-era-navy/5'
            : 'bg-transparent'
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* Left: Logo */}
        <button 
          onClick={() => onViewChange('homeowner')}
          className={`font-display font-bold text-2xl tracking-tighter transition-colors ${textColor}`}
        >
          era.
        </button>

        {/* Center: Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {(Object.keys(MENU_DATA) as Array<keyof typeof MENU_DATA>).map((key) => (
            <button 
              key={key}
              onMouseEnter={() => setActiveMenu(key)}
              className={`text-[12px] font-medium uppercase tracking-[0.1em] transition-colors ${
                textColor === 'text-white' ? 'text-white/80 hover:text-white' : 'text-era-navy/70 hover:text-era-navy'
              }`}
            >
              {key === 'homeowner' ? 'Boligeier' : 
               key === 'brl' ? 'Sameie & BRL' : 
               key === 'contractor' ? 'Håndverker' : 
               'Om ERA'}
            </button>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className={`text-[12px] font-medium uppercase tracking-[0.1em] transition-colors ${
            textColor === 'text-white' ? 'text-white/80 hover:text-white' : 'text-era-navy/70 hover:text-era-navy'
          }`}>
            Logg inn
          </button>
          <button className={`px-8 py-3 text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
            textColor === 'text-white' 
              ? 'bg-white text-era-navy hover:bg-era-ivory' 
              : 'bg-era-navy text-white hover:bg-era-midnight'
          }`}>
            Start gratis
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className={`md:hidden ${textColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Dropdown content */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 right-0 w-full bg-era-ivory border-b border-era-navy/10 shadow-xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto p-16">
                <div className="grid grid-cols-12 gap-24">
                  <div className="col-span-5 flex flex-col justify-between h-full">
                    <div className="space-y-6">
                      <h3 className="font-display text-5xl font-semibold text-era-navy leading-[1.1] tracking-tight">
                        {MENU_DATA[activeMenu].headline}
                      </h3>
                      <p className="text-era-navy/60 text-lg font-light leading-relaxed max-w-sm">
                        {MENU_DATA[activeMenu].description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mt-12">
                      {MENU_DATA[activeMenu].values.map((val) => (
                        <span key={val} className="px-3 py-1 bg-era-navy/5 text-era-navy/60 text-[10px] font-bold uppercase tracking-widest rounded-none">
                          • {val}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="col-span-7">
                    <div className="grid grid-cols-1 gap-1">
                      {MENU_DATA[activeMenu].links.map((link, idx) => (
                        <button key={link} className="flex items-center justify-between group py-6 border-b border-era-navy/5 transition-all duration-300">
                          <span className={`text-lg font-medium text-era-navy transition-all duration-300 ${idx === 0 ? 'text-2xl font-semibold' : 'group-hover:text-era-gold'}`}>
                            {link}
                          </span>
                          <ChevronRight className="w-5 h-5 text-era-navy/10 group-hover:text-era-gold transition-colors opacity-0 group-hover:opacity-100" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
