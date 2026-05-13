import { motion } from 'motion/react';
import { Shield, Lock, Eye, Clock } from 'lucide-react';

const trustItems = [
  { 
    title: "GDPR", 
    desc: "Full kontroll over egne data i tråd med europeiske personvernsregler.",
    icon: Shield 
  },
  { 
    title: "Datasikkerhet", 
    desc: "Bank-grad kryptering for all din verdifulle boligdokumentasjon.",
    icon: Lock 
  },
  { 
    title: "AI med kontroll", 
    desc: "Kunstig intelligens som støtter, ikke erstatter, menneskelig vurdering.",
    icon: Eye 
  },
  { 
    title: "Kontinuitet", 
    desc: "Dokumentasjon som følger eiendommen, ikke bare eieren, over årtier.",
    icon: Clock 
  }
];

export default function TrustSection() {
  return (
    <section className="py-60 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Trygghet i sentrum</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.95] text-era-navy">
            Bygget for norske eiendommer.
          </h2>
          <p className="text-era-navy/50 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            ERA utvikles sammen med aktører i norsk byggenæring, håndverk og eiendom for å sikre at systemet fungerer i den virkelige verden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {trustItems.map((item, i) => (
            <div key={i} className="space-y-6">
              <div className="w-12 h-12 bg-era-ivory flex items-center justify-center text-era-navy/20">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-era-navy">{item.title}</h3>
              <p className="text-era-navy/40 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-40 pt-20 border-t border-era-navy/5 text-center">
          <p className="text-era-navy/30 text-[10px] uppercase tracking-[0.3em] font-bold">
            Samarbeidspartnere og Standarder
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 mt-12 opacity-30 grayscale contrast-125">
             <div className="font-bold text-xl tracking-tighter">SINTEF</div>
             <div className="font-bold text-xl tracking-tighter">BNL</div>
             <div className="font-bold text-xl tracking-tighter">Standard Norge</div>
             <div className="font-bold text-xl tracking-tighter">Digital Norway</div>
          </div>
        </div>
      </div>
    </section>
  );
}
