import BRLHero from './BRLHero';
import BRLContent from './BRLContent';

interface BRLPageProps {
  onOpenWaitlist?: () => void;
}

export default function BRLPage({ onOpenWaitlist }: BRLPageProps) {
  return (
    <div className="bg-era-ivory min-h-screen">
      <BRLHero onOpenWaitlist={onOpenWaitlist} />
      <BRLContent />
      
      {/* Short CTA section for consistency */}
      <section className="py-40 px-6 bg-era-midnight text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Fremtidens drift og vedlikehold</span>
          <h2 className="text-4xl md:text-6xl font-medium mb-12 leading-[1.1]">
            ERA er utviklet for neste generasjon sameier og borettslag — hvor eiendommen ikke bare dokumenteres, men faktisk følges opp intelligent.
          </h2>
          <div className="mb-16">
            <h3 className="text-2xl font-bold font-display tracking-tight text-white mb-2">ERA</h3>
            <p className="text-white/60 uppercase tracking-widest text-xs font-bold">KI-agenten for drift <br className="md:hidden" /> og vedlikehold av eiendom.</p>
          </div>
          <button onClick={onOpenWaitlist} className="square-button-gold px-12 py-5 text-lg shadow-2xl">Meld interesse</button>
        </div>
      </section>
    </div>
  );
}
