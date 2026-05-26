import BRLHero from './BRLHero';
import BRLDetails from './BRLDetails';
import BRLVisual from './BRLVisual';
import BRLContent from './BRLContent';

interface BRLPageProps {
  onOpenWaitlist?: () => void;
}

export default function BRLPage({ onOpenWaitlist }: BRLPageProps) {
  return (
    <div className="bg-era-ivory min-h-screen">
      <BRLHero onOpenWaitlist={onOpenWaitlist} />
      
      {/* Detaljert verdi-introduksjon for styret */}
      <BRLDetails onOpenWaitlist={onOpenWaitlist} />
      
      {/* Visuell dashboard mocking / interaktivt sentralledd */}
      <BRLVisual />
      
      {/* Saker, flyt og applikasjonsoversikt */}
      <BRLContent onOpenWaitlist={onOpenWaitlist} />
      
      {/* Short CTA section for consistency */}
      <section className="py-40 px-6 bg-era-midnight text-white text-center relative overflow-hidden">
        {/* Background mesh elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-era-gold/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">// FREMTIDENS EIENDOMSFORVALTNING</span>
          <h2 className="text-4xl md:text-6xl font-medium mb-12 leading-[1.1] tracking-tight">
            ERA er utviklet for neste generasjon sameier og borettslag — hvor eiendommen ikke bare dokumenteres, men faktisk følges opp intelligent.
          </h2>
          <div className="mb-16">
            <h3 className="text-2xl font-bold font-display tracking-tight text-white mb-2">ERA</h3>
            <p className="text-white/60 uppercase tracking-widest text-xs font-bold">KI-agenten for drift <br className="md:hidden" /> og vedlikehold av fellesverdier.</p>
          </div>
          <button onClick={onOpenWaitlist} className="square-button-gold px-12 py-5 text-sm uppercase tracking-wider font-bold shadow-2xl transition-transform hover:scale-[1.02]">
            Få 10-års vedlikeholdsplan for styret
          </button>
        </div>
      </section>
    </div>
  );
}
