import { motion } from 'motion/react';
import { ShieldCheck, ArrowUpRight, Camera, Users, History, ClipboardCheck } from 'lucide-react';

export default function Contractors() {
  return (
    <section className="py-60 px-6 bg-white overflow-hidden" id="contractors">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Håndverkere</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.95] text-era-navy">
              Bestill håndverkere direkte i ERA.
            </h2>
            <p className="text-era-navy/60 text-xl font-light leading-relaxed mb-10 pr-12">
              Fra KI-analyse til utført arbeid i én samlet flyt.
            </p>
            
            <div className="flex flex-col gap-6 mb-12">
              {[
                { title: "Ta bilde", icon: <Camera className="w-5 h-5 flex-shrink-0" /> },
                { title: "Få vurdering", icon: <ClipboardCheck className="w-5 h-5 flex-shrink-0" /> },
                { title: "Motta tilbud", icon: <Users className="w-5 h-5 flex-shrink-0" /> },
                { title: "Utfør arbeid", icon: <ShieldCheck className="w-5 h-5 flex-shrink-0" /> },
                { title: "Dokumentasjon lagres automatisk", icon: <History className="w-5 h-5 flex-shrink-0" /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-era-navy/80">
                  <div className="w-10 h-10 bg-era-gold/10 flex items-center justify-center text-era-gold">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest">{item.title}</span>
                </div>
              ))}
            </div>

            <button className="square-button-navy">
              Se hvordan ERA hjelper deg finne riktig håndverker
            </button>
          </div>

          <div className="grid gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-era-ivory/50 blur-[100px] z-0" />
            
            <div className="relative z-10 p-12 bg-era-navy text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-era-gold">En enklere reise.</h3>
              <p className="text-white/60 font-light leading-relaxed mb-10 text-sm">
                Når et problem oppstår, trenger du ikke lete etter ledige og kompetente hender. ERA kobler vedlikeholdsbehovet direkte sammen med kvalitetssikrede aktører i ditt nærområde.
              </p>
              <div className="h-40 bg-white/5 border border-white/10 flex flex-col items-center justify-center space-y-4 p-6 text-center">
                <Users className="w-8 h-8 text-era-gold opacity-50" />
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Direkte chat & tilbud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
