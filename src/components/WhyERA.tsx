import { motion } from 'motion/react';

export default function WhyERA() {
  return (
    <section className="py-60 px-6 bg-era-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Kontinuerlig oppfølging</span>
            <h2 className="text-5xl md:text-7xl font-bold text-era-navy mb-12 leading-[0.9]">
              ERA lærer boligen å kjenne.
            </h2>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 pt-4">
            <div className="space-y-12">
              <p className="text-2xl md:text-3xl font-light text-era-navy/60 leading-relaxed">
                Jo mer boligen brukes i ERA, desto smartere blir oppfølgingen.
              </p>
              
              <div className="h-px w-24 bg-era-gold" />
              
              <div className="space-y-8">
                <p className="text-xs font-bold text-era-navy leading-relaxed uppercase tracking-widest">
                  ERA husker:
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {['Hva som er gjort', 'Produkter som er brukt', 'Tidligere bilder', 'Vedlikeholdshistorikk', 'Kommende tiltak', 'Dokumentasjon og kvitteringer'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-era-gold" />
                      <span className="text-era-navy/70 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 pt-12 border-t border-era-navy/10 mt-12">
                <p className="text-2xl font-bold text-era-navy leading-tight">
                  Tilhørighet over tid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
