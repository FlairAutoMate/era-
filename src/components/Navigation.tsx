import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Sparkles, Shield, ClipboardCheck, Building2, Wrench, Home, MessageSquare, BookOpen, Users } from 'lucide-react';
import { ViewType } from '../App';
import Logo from './Logo';

interface NavigationProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const MENU_DATA = {
  homeowner: {
    headline: 'Forstå eiendommen bedre over tid.',
    description: 'Skann boligen, få en plan, gjennomfør prosjekter og bygg din boligjournal. Alt i ett intelligent system.',
    links: ['Scan BOLIG', 'Plan VEDLIKEHOLD', 'Prosjekt UTØVER', 'Journal FDV', 'Historikk & Verdi']
  },
  brl: {
    headline: 'Bedre oversikt over bygg og vedlikehold.',
    description: 'Samle bygg, vedlikehold og dokumentasjon i ett system for bedre styring og tryggere naboskap.',
    links: ['Scan BYGG', 'Vedlikeholdsplan', 'ProsjektSTYRING', 'BeboerJOURNAL', 'Styreportal']
  },
  contractor: {
    headline: 'Bedre dokumentasjon. Bedre kunder.',
    description: 'ERA hjelper håndverkere å dokumentere arbeid (Journal), befaringer (Scan) og tilbud (Prosjekt) over tid.',
    links: ['ERA Pro', 'Scan & Befaring', 'Tilbud & Prosjekt', 'Journal & FDV', 'Partnerprogram']
  },
  about: {
    headline: 'En enklere måte å følge opp eiendom.',
    description: 'ERA kombinerer AI, eiendomsdata og menneskelig trygghet i én sømløs opplevelse.',
    links: ['Vår filosofi', 'AI & Data', 'Sikkerhet', 'Kontakt oss', 'Om selskapet']
  }
};

export default function Navigation({ currentView, onViewChange }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<keyof typeof MENU_DATA | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHeroDark = currentView === 'brl' || currentView === 'contractor';
  const isTransparent = !scrolled;
  const useWhiteTheme = isTransparent && isHeroDark && !activeMenu;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] flex justify-center p-6 md:p-8 pointer-events-none">
      <nav 
        onMouseLeave={() => setActiveMenu(null)}
        className={`pointer-events-auto transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-between px-12 py-5 relative ${
          scrolled 
            ? 'bg-era-ivory/80 backdrop-blur-3xl w-full max-w-4xl scale-95 shadow-[0_30px_60px_-12px_rgba(14,35,65,0.1)]' 
            : activeMenu 
              ? 'bg-era-ivory w-full max-w-7xl'
              : 'bg-transparent w-full max-w-7xl'
        }`}
      >
        <div className="flex items-center gap-16">
          <button 
            onClick={() => {
              onViewChange('homeowner');
              setActiveMenu(null);
            }} 
            className={`flex items-center group transition-colors duration-500 ${useWhiteTheme ? 'text-white' : 'text-era-navy'}`}
          >
            <Logo className="h-6 md:h-8 transition-transform duration-700 group-hover:scale-105" />
          </button>
          
          <div className="hidden lg:flex items-center gap-10">
            {(Object.keys(MENU_DATA) as Array<keyof typeof MENU_DATA>).map((key) => (
              <div 
                key={key} 
                className="relative h-full flex items-center" 
                onMouseEnter={() => setActiveMenu(key)}
              >
                <button 
                  onClick={() => key !== 'about' && onViewChange(key as ViewType)}
                  className={`flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-500 uppercase tracking-widest ${
                    useWhiteTheme 
                      ? 'text-white/60 hover:text-white' 
                      : (currentView === key ? 'text-era-navy' : 'text-era-navy/60 hover:text-era-navy')
                  }`}
                >
                  {key === 'homeowner' ? 'Boligeier' : 
                   key === 'brl' ? 'Sameie & BRL' : 
                   key === 'contractor' ? 'Håndverker' : 
                   'Om ERA'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <button 
            className={`lg:hidden p-2 transition-colors ${useWhiteTheme ? 'text-white' : 'text-era-navy'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <button className={`text-[11px] font-bold uppercase tracking-widest transition-colors hidden sm:block ${
            useWhiteTheme ? 'text-white/60 hover:text-white' : 'text-era-navy/60 hover:text-era-navy'
          }`}>
            Logg inn
          </button>
          <button className={`${useWhiteTheme ? 'bg-era-gold text-era-navy' : 'bg-era-navy text-white'} py-3 px-10 text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap rounded-none hover:opacity-90 transition-all hidden sm:block`}>
            Start gratis
          </button>
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-era-ivory flex flex-col"
            >
              <div className="p-8 flex items-center justify-between border-b border-era-navy/5">
                <Logo className="h-7 text-era-navy" />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-era-navy"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-12">
                <div className="space-y-8">
                  {(Object.keys(MENU_DATA) as Array<keyof typeof MENU_DATA>).map((key) => (
                    <div key={key} className="space-y-4">
                      <button 
                        onClick={() => {
                          if (key !== 'about') {
                            onViewChange(key as ViewType);
                            setMobileMenuOpen(false);
                          }
                        }}
                        className="text-2xl font-bold text-era-navy flex items-center justify-between w-full group"
                      >
                        {key === 'homeowner' ? 'Boligeier' : 
                         key === 'brl' ? 'Sameie & BRL' : 
                         key === 'contractor' ? 'Håndverker' : 
                         'Om ERA'}
                        <ChevronDown className="w-5 h-5 -rotate-90 opacity-20 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="pt-12 border-t border-era-navy/5 space-y-4">
                  <button className="w-full py-6 border border-era-navy/10 text-era-navy font-bold uppercase tracking-widest text-[10px] rounded-none">
                    Logg inn
                  </button>
                  <button className="w-full py-6 bg-era-navy text-white font-bold uppercase tracking-widest text-[10px] rounded-none">
                    Start gratis
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dropdown content */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="absolute top-full left-0 right-0 p-12 bg-era-ivory border-t border-era-navy/5 shadow-[0_40px_80px_-20px_rgba(14,35,65,0.15)]"
              onMouseEnter={() => setActiveMenu(activeMenu)}
            >
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16">
                  <div className="lg:col-span-4">
                    <h3 className="text-3xl font-bold text-era-navy mb-4 leading-tight">
                      {MENU_DATA[activeMenu].headline}
                    </h3>
                    <p className="text-era-navy/40 text-sm font-light leading-relaxed">
                      {MENU_DATA[activeMenu].description}
                    </p>
                  </div>
                  <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12">
                    {MENU_DATA[activeMenu].links.map((link) => (
                      <button 
                        key={link} 
                        className="group text-left"
                        onClick={() => setActiveMenu(null)}
                      >
                        <span className="block text-xs font-bold uppercase tracking-widest text-era-navy/40 group-hover:text-era-gold transition-colors mb-1">
                          {link}
                        </span>
                        <div className="h-0.5 w-0 group-hover:w-full bg-era-gold transition-all duration-300" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
