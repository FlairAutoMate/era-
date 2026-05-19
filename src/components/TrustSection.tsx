import { motion } from 'motion/react';
import { Shield, Lock, Eye, Clock } from 'lucide-react';

const trustItems = [
  { 
    title: "Oppdage behov tidligere", 
    desc: "ERA ser tegn på slitasje og skader lenge før de utvikler seg.",
    icon: Eye 
  },
  { 
    title: "Redusere risiko", 
    desc: "Unngå store skader gjennom proaktivt, ikke reaktivt, vedlikehold.",
    icon: Shield 
  },
  { 
    title: "Dokumentere arbeid", 
    desc: "Sikre at alt som gjøres på boligen kan dokumenteres og overleveres.",
    icon: Lock 
  },
  { 
    title: "Følge opp smartere", 
    desc: "Mer oversikt og trygghet betyr at du tar vare på verdiene i boligen.",
    icon: Clock 
  }
];

export default function TrustSection() {
  return (
    <section className="py-60 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Ekte verdi</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.95] text-era-navy">
            Bedre oversikt. <br className="md:hidden" /> Bedre beslutninger. <br className="md:hidden" /> Bedre vedlikehold.
          </h2>
          <p className="text-era-navy/70 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            I stedet for teoretiske verdiøkninger, gir ERA deg de verktøyene du trenger for å sikre at boligens verdi opprettholdes og vokser trygt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {trustItems.map((item, i) => (
            <div key={i} className="space-y-6">
              <div className="w-12 h-12 bg-era-ivory flex items-center justify-center text-era-navy/60">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-era-navy">{item.title}</h3>
              <p className="text-era-navy/60 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-40 pt-20 border-t border-era-navy/5 text-center">
          <p className="text-era-navy/70 text-[10px] uppercase tracking-[0.3em] font-bold">
            Sikkerhet og infrastruktur i bunn
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 mt-12 opacity-30">
             <div className="flex items-center gap-3">
               <Shield className="w-5 h-5" />
               <span className="font-bold text-sm uppercase tracking-widest">Norsk Personvern</span>
             </div>
             <div className="flex items-center gap-3">
               <Lock className="w-5 h-5" />
               <span className="font-bold text-sm uppercase tracking-widest">Bank-grad Kryptering</span>
             </div>
             <div className="flex items-center gap-3">
               <Clock className="w-5 h-5" />
               <span className="font-bold text-sm uppercase tracking-widest">Skybasert Dokumentasjon</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
