import { motion } from 'motion/react';
import { Database, Image as ImageIcon, History, FileText, Sparkles, Wrench, MessageSquare, Smartphone, Monitor, CheckCircle, ArrowDown } from 'lucide-react';

export default function BRLContent() {
  return (
    <div className="bg-era-ivory text-era-navy">
      
      {/* Fra reaktiv drift til intelligent oppfølging */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Kjernen i systemet</span>
            <h2 className="text-4xl md:text-6xl font-medium mb-8 leading-[1.05]">Fra reaktiv drift til intelligent oppfølging.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white border border-era-navy/5 p-12">
              <h3 className="text-xl font-medium mb-6 text-era-navy/60">De fleste sameier jobber fortsatt:</h3>
              <ul className="space-y-4">
                {["manuelt", "fragmentert", "personavhengig", "reaktivt"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-era-navy/20" />
                    <span className="text-lg font-light text-era-navy/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-era-navy text-white p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <Sparkles className="w-16 h-16 text-era-gold" />
              </div>
              <h3 className="text-xl font-medium mb-6 text-era-gold relative z-10">ERA gjør drift og vedlikehold:</h3>
              <ul className="space-y-6 relative z-10">
                {["proaktivt", "intelligent", "automatisert", "dokumentert"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-era-gold" />
                    <span className="text-xl font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* To apper. Ett samlet system. */}
      <section className="py-32 px-6 bg-era-midnight text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium mb-6">To apper. Ett samlet system.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Beboer App */}
            <div className="bg-white/5 border border-white/10 p-12 relative overflow-hidden">
              <Smartphone className="absolute -right-8 -bottom-8 w-64 h-64 text-white/5" />
              <div className="relative z-10">
                <h3 className="text-3xl font-medium mb-10 text-era-gold">Beboer-app</h3>
                <ul className="space-y-4 mb-12">
                  {[
                    "meld inn saker",
                    "last opp bilder",
                    "følg status",
                    "chat med ERA",
                    "motta oppdateringer"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-era-gold shrink-0 mt-0.5" />
                      <span className="text-base font-light text-white/80">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Styreplattformbruk */}
            <div className="bg-era-navy p-12 border border-white/10 relative overflow-hidden">
               <Monitor className="absolute -right-8 -bottom-8 w-64 h-64 text-white/5" />
               <div className="relative z-10">
                <h3 className="text-3xl font-medium mb-10 text-era-gold">Styreplattform</h3>
                <ul className="space-y-4 mb-12">
                  {[
                    "oversikt over eiendommen",
                    "KI-anbefalinger",
                    "vedlikeholdsplan",
                    "FDV og historikk",
                    "tilbud og håndverkerdialog"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-era-gold shrink-0 mt-0.5" />
                      <span className="text-base font-light text-white/80">{feat}</span>
                    </li>
                  ))}
                </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Prosessen</span>
            <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-[1.05]">En sømløs flyt</h2>
            
            <div className="mt-16 flex flex-col items-center space-y-4">
              {[
                "Beboer melder fra",
                "ERA analyserer sak og bilder",
                "Styret får anbefaling",
                "Tiltak prioriteres",
                "Håndverker bestilles",
                "Arbeid dokumenteres automatisk"
              ].map((step, i, arr) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`px-8 py-5 text-sm font-bold uppercase tracking-widest ${i === 1 ? 'bg-era-navy text-white shadow-xl' : 'bg-white border border-era-navy/10 text-era-navy'}`}>
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="h-10 flex flex-col items-center justify-center my-2 text-era-navy/60">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Value Props & Conclusion */}
      <section className="py-32 px-6 bg-white border-t border-era-navy/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div>
              <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Kontinuitet</span>
              <h3 className="text-4xl md:text-5xl font-medium mb-6">ERA bygger kunnskap om bygget over tid</h3>
              <p className="text-era-navy/60 font-light leading-relaxed mb-10 text-lg">
                Når styret byttes ut, forsvinner ofte historikk og innsikt. ERA bygger en kontinuerlig forståelse av:
              </p>
              <ul className="space-y-4 mb-6">
                {["byggets tilstand", "tidligere tiltak", "kommende vedlikehold", "dokumentasjon", "risiko og oppfølging"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-era-gold" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-era-ivory p-12 border border-era-navy/5">
              <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Faktisk verdi</span>
              <h3 className="text-4xl md:text-5xl font-medium mb-6">Ikke bare FDV.<br/>Faktisk oppfølging.</h3>
              <p className="text-era-navy/60 font-light leading-relaxed mb-6 text-xl">
                Tradisjonelle systemer lagrer historikk.
              </p>
              <p className="text-era-navy font-medium leading-relaxed mb-6 text-xl">
                ERA hjelper eiendommen å bli fulgt opp intelligent over tid.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
