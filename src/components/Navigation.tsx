import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewType } from '../App';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const SOLUTIONS = [
  { id: 'homeowner', label: 'Boligeier' },
  { id: 'brl', label: 'Sameie & BRL' },
  { id: 'contractor', label: 'Håndverker' },
  { id: 'partners', label: 'Partnere' },
] as const;

const PRODUCT = [
  { id: 'product-ai', label: 'KI-agenten' },
] as const;

const COMPANY = [
  { id: 'about', label: 'Om ERA' }
] as const;

export default function Navigation({ currentView, onViewChange }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHeroDark = currentView === 'brl' || currentView === 'contractor' || currentView === 'partners' || currentView === 'about' || currentView === 'product-ai';
  const isTransparent = !scrolled && !mobileMenuOpen;
  const textColor = isTransparent && isHeroDark ? 'text-white' : 'text-era-navy';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
      scrolled || mobileMenuOpen 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-era-navy/10'
        : isHeroDark
          ? 'bg-transparent border-white/10'
          : 'bg-transparent border-era-navy/5'
    }`}>
      <nav 
        className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
      >
        {/* Left: Logo */}
        <button 
          onClick={() => {
            onViewChange('homeowner');
            setMobileMenuOpen(false);
          }}
          className={`font-display font-bold text-2xl tracking-tighter transition-colors ${
            mobileMenuOpen ? 'text-era-navy' : textColor
          }`}
        >
          era.
        </button>

        {/* Center: Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          
          {/* Løsninger Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 py-4 ${
                SOLUTIONS.some(s => s.id === currentView)
                  ? (textColor === 'text-white' ? 'text-white' : 'text-era-navy')
                  : (textColor === 'text-white' ? 'text-white/60 hover:text-white' : 'text-era-navy/60 hover:text-era-navy')
              }`}>
              Løsninger
            </button>
            <AnimatePresence>
              {activeDropdown === 'solutions' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full left-0 w-48 bg-white border border-era-navy/5 shadow-2xl py-2 flex flex-col z-50"
                >
                  {SOLUTIONS.map(item => (
                    <button 
                      key={item.id}
                      onClick={() => {
                        onViewChange(item.id as ViewType);
                        setActiveDropdown(null);
                      }}
                      className="text-left px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-era-navy/60 hover:text-era-navy hover:bg-era-navy/5 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Produkt Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('product')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 py-4 ${
                PRODUCT.some(s => s.id === currentView)
                  ? (textColor === 'text-white' ? 'text-white' : 'text-era-navy')
                  : (textColor === 'text-white' ? 'text-white/60 hover:text-white' : 'text-era-navy/60 hover:text-era-navy')
              }`}>
              Produkt
            </button>
            <AnimatePresence>
              {activeDropdown === 'product' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full left-0 w-48 bg-white border border-era-navy/5 shadow-2xl py-2 flex flex-col z-50"
                >
                  {PRODUCT.map(item => (
                    <button 
                      key={item.id}
                      onClick={() => {
                        onViewChange(item.id as ViewType);
                        setActiveDropdown(null);
                      }}
                      className="text-left px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-era-navy/60 hover:text-era-navy hover:bg-era-navy/5 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Selskap Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 py-4 ${
                COMPANY.some(s => s.id === currentView)
                  ? (textColor === 'text-white' ? 'text-white' : 'text-era-navy')
                  : (textColor === 'text-white' ? 'text-white/60 hover:text-white' : 'text-era-navy/60 hover:text-era-navy')
              }`}>
              Selskap
            </button>
            <AnimatePresence>
              {activeDropdown === 'company' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full left-0 w-48 bg-white border border-era-navy/5 shadow-2xl py-2 flex flex-col z-50"
                >
                  {COMPANY.map(item => (
                    <button 
                      key={item.id}
                      onClick={() => {
                        onViewChange(item.id as ViewType);
                        setActiveDropdown(null);
                      }}
                      className="text-left px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-era-navy/60 hover:text-era-navy hover:bg-era-navy/5 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className={`text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] transition-colors ${
            textColor === 'text-white' ? 'text-white/80 hover:text-white' : 'text-era-navy/70 hover:text-era-navy'
          }`}>
            Logg inn
          </button>
          <button className={`px-6 md:px-8 py-3 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-xl rounded-none ${
            textColor === 'text-white' 
              ? 'bg-white text-era-navy hover:bg-era-ivory' 
              : 'bg-era-navy text-white hover:bg-era-midnight'
          }`}>
            Start gratis
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className={`md:hidden p-2 -mr-2 transition-colors ${mobileMenuOpen ? 'text-era-navy' : textColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 bg-white border-b border-era-navy/10 shadow-2xl overflow-hidden md:hidden origin-top"
            >
              <div className="flex flex-col p-6 space-y-6 max-h-[80vh] overflow-y-auto">
                {/* Løsninger Group */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-era-navy/60 mb-3 block">Løsninger</span>
                  <div className="flex flex-col space-y-2">
                    {SOLUTIONS.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onViewChange(item.id as ViewType);
                          setMobileMenuOpen(false);
                        }}
                        className={`text-left text-lg font-medium tracking-wide p-3 rounded-none transition-colors ${
                          currentView === item.id ? 'bg-era-gold/10 text-era-navy' : 'text-era-navy/80 hover:bg-era-navy/5'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Produkt Group */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-era-navy/60 mb-3 block">Produkt</span>
                  <div className="flex flex-col space-y-2">
                    {PRODUCT.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onViewChange(item.id as ViewType);
                          setMobileMenuOpen(false);
                        }}
                        className={`text-left text-lg font-medium tracking-wide p-3 rounded-none transition-colors ${
                          currentView === item.id ? 'bg-era-gold/10 text-era-navy' : 'text-era-navy/80 hover:bg-era-navy/5'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selskap Group */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-era-navy/60 mb-3 block">Selskap</span>
                  <div className="flex flex-col space-y-2">
                    {COMPANY.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onViewChange(item.id as ViewType);
                          setMobileMenuOpen(false);
                        }}
                        className={`text-left text-lg font-medium tracking-wide p-3 rounded-none transition-colors ${
                          currentView === item.id ? 'bg-era-gold/10 text-era-navy' : 'text-era-navy/80 hover:bg-era-navy/5'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 mt-2 border-t border-era-navy/10 flex flex-col gap-3">
                  <button className="text-center py-4 text-sm font-bold uppercase tracking-[0.15em] text-era-navy rounded-none hover:bg-era-navy/5 transition-colors">
                    Logg inn
                  </button>
                  <button className="bg-era-navy text-white text-center py-4 text-sm font-bold uppercase tracking-[0.15em] shadow-xl rounded-none hover:bg-era-midnight transition-colors">
                    Start gratis
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
