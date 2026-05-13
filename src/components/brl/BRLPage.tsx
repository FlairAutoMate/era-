import BRLHero from './BRLHero';
import BRLVisual from './BRLVisual';
import BRLDetails from './BRLDetails';

export default function BRLPage() {
  return (
    <div className="bg-era-ivory min-h-screen">
      <BRLHero />
      <BRLVisual />
      <BRLDetails />
      
      {/* Short CTA section for consistency */}
      <section className="py-40 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium mb-12">Sikre borettslagets <br /> fremtid med ERA.</h2>
          <button className="square-button-navy px-12 py-5 text-lg">Start dialogen</button>
        </div>
      </section>
    </div>
  );
}
