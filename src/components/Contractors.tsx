import { motion } from 'motion/react';
import { ShieldCheck, ArrowUpRight, Camera, Users, History, ClipboardCheck } from 'lucide-react';

export default function Contractors() {
  return (
    <section className="py-60 px-6 bg-white overflow-hidden" id="contractors">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">For Proffen</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.95] text-era-navy">
              Prosjekt: Fra plan til ferdigstillelse.
            </h2>
            <p className="text-era-navy/60 text-xl font-light leading-relaxed mb-10 pr-12">
              ERA Prosjekt hjelper deg å innhente tilbud, dokumentere arbeid og følge opp håndverkere i en sømløs prosess.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              {[
                { title: "Scan & Befaring", icon: <Camera className="w-4 h-4" /> },
                { title: "Plan & Vedlikehold", icon: <ClipboardCheck className="w-4 h-4" /> },
                { title: "Prosjekt & FDV", icon: <ShieldCheck className="w-4 h-4" /> },
                { title: "Journal & Oppfølging", icon: <History className="w-4 h-4" /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-era-navy/80">
                  <div className="w-8 h-8 bg-era-gold/10 flex items-center justify-center text-era-gold">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">{item.title}</span>
                </div>
              ))}
            </div>

            <p className="text-sm font-bold text-era-gold uppercase tracking-[0.2em] mb-10">
              Mindre administrasjon. Bedre flyt.
            </p>

            <button className="square-button-navy">
              Bli ERA-partner
            </button>
          </div>

          <div className="grid gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-era-ivory/50 blur-[100px] z-0" />
            
            <div className="relative z-10 p-12 bg-era-navy text-white">
              <h3 className="text-2xl font-bold mb-6">Digital FDV på sekunder.</h3>
              <p className="text-white/40 font-light leading-relaxed mb-10 text-sm">
                Når jobben er gjort, sender du dokumentasjonen rett til kundens ERA-boligmappe. Profesjonelt, enkelt og alltid tilgjengelig.
              </p>
              <div className="h-40 bg-white/5 border border-white/10 flex items-center justify-center">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Visual product concept</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
