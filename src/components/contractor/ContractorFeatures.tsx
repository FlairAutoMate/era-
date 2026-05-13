import { motion } from 'motion/react';
import { Zap, Sparkles, Heart, Landmark, CheckCircle, Shield } from 'lucide-react';

export default function ContractorFeatures() {
  return (
    <>
      {/* RASKERE TILBUD & KI-KALKYLE */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="p-12 bg-era-ivory/50 border border-era-navy/5 relative group hover:bg-white transition-colors duration-700">
               <Zap className="w-8 h-8 text-era-gold mb-8" />
               <h3 className="text-3xl font-medium mb-8">Raskere tilbud</h3>
               <p className="text-era-navy/60 font-light leading-relaxed mb-8">
                 Bruk mindre tid på administrasjon. ERA hjelper håndverkere med å samle bilder automatisk, få bedre dokumenterte forespørsler og følge opp kunder over tid.
               </p>
               <ul className="space-y-4 text-sm text-era-navy/80 font-medium">
                 <li>• Samle bilder automatisk</li>
                 <li>• Bedre dokumenterte forespørsler</li>
                 <li>• Forstå eiendommen raskere</li>
                 <li>• Gjør tilbudsprosessen enklere</li>
                 <li>• Følg opp kunder over tid</li>
               </ul>
            </div>

            <div className="p-12 bg-era-navy text-white relative group">
               <Sparkles className="w-8 h-8 text-era-gold mb-8" />
               <h3 className="text-3xl font-medium mb-8">KI-kalkyle</h3>
               <p className="text-white/60 font-light leading-relaxed mb-8">
                 ERA hjelper med å strukturere tilbud og omfang basert på bilder, tidligere historikk og eiendomsdata.
               </p>
               <div className="space-y-6">
                 <div className="p-6 bg-white/5 border border-white/10">
                   <p className="text-xs text-era-gold font-bold uppercase tracking-widest mb-2">Viktig opplysning</p>
                   <p className="text-white/40 text-sm italic">"ERA erstatter ikke faglig vurdering. Håndverkeren har alltid kontroll og godkjenner alltid selv."</p>
                 </div>
                 <ul className="space-y-3 text-sm text-white/80">
                   <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-era-gold" /> Forstå prosjektet raskere</li>
                   <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-era-gold" /> Foreslå relevante tiltak</li>
                   <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-era-gold" /> Forenkle kalkylearbeid</li>
                   <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-era-gold" /> Samle dokumentasjon</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEDRE KUNDER OVER TID & HISTORIKK */}
      <section className="py-32 px-6 bg-era-ivory border-y border-era-navy/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <Heart className="w-8 h-8 text-era-gold mb-8" />
              <h2 className="text-4xl md:text-6xl font-medium mb-10 leading-[1.05]">
                Bedre kunder <br /> over tid.
              </h2>
              <p className="text-era-navy/60 text-lg font-light leading-relaxed mb-10">
                ERA er laget for langsiktig oppfølging — ikke tilfeldige oppdrag. Når eiendommen følges opp over tid, blir kunden tryggere og lojaliteten sterkere.
              </p>
            </div>
            <div className="bg-white p-12 shadow-2xl relative" id="history">
              <Landmark className="w-8 h-8 text-era-gold mb-8" />
              <h3 className="text-2xl font-medium mb-8">Eiendommen får en historikk</h3>
              <p className="text-era-navy/60 font-light mb-8 italic">"Når eiendommen skifter eier, kan historikken følge videre. Det gir tryggere eiendomshistorikk og mer verdi for kunden."</p>
              <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-era-navy/40">
                <span>• Bilder fra befaring</span>
                <span>• Materialvalg</span>
                <span>• FDV-dokumentasjon</span>
                <span>• Historikk over tid</span>
                <span>• Utført arbeid</span>
                <span>• Tryggere overlevering</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center" id="partners">
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">Vårt Nettverk</span>
            <h2 className="text-3xl md:text-5xl font-medium mb-10">Verifiserte Partnere</h2>
            <p className="text-era-navy/60 text-lg font-light mb-12">
              ERA samarbeider med kvalifiserte håndverkere og fagmiljøer for å sikre bedre kvalitet, dokumentasjon og kundeopplevelse.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA & JURIDISK */}
      <section className="py-60 px-6 bg-white text-center relative overflow-hidden">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-5xl md:text-8xl font-bold mb-16 text-era-navy leading-[0.95]">
            Bygg fremtiden <br /> med ERA.
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
            <button className="square-button-navy px-12 py-5 text-lg">Bli partner</button>
            <button className="square-button-gold px-12 py-5 text-lg">Bestill demo</button>
          </div>

          <div className="max-w-xl mx-auto pt-16 border-t border-era-navy/5">
            <div className="flex items-center justify-center gap-3 mb-6 text-era-navy/30">
              <Shield className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Juridisk Informasjon</span>
            </div>
            <p className="text-[11px] text-era-navy/40 leading-relaxed text-justify px-8">
              ERA bruker kunstig intelligens og eiendomsdata som støtte for strukturering, analyse og forslag til tiltak. ERA gir ikke faglige garantier eller automatiske beslutninger. Håndverkeren har alltid ansvar for egne vurderinger, tilbud og utført arbeid.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
