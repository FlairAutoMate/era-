import { motion } from 'motion/react';
import { Cog, Zap, UserCheck, TrendingUp, RefreshCcw, Activity, ShieldCheck, Inbox, FileCheck, ArrowRight, FolderKanban, Images } from 'lucide-react';

interface ContractorDetailsProps {
  onOpenWaitlist?: () => void;
}

export default function ContractorDetails({ onOpenWaitlist }: ContractorDetailsProps) {
  return (
    <>
      <section className="py-32 px-6 bg-era-ivory">
        <div className="max-w-7xl mx-auto">
          {/* Direkte koblet til boligeiere og sameier */}
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Plattform</span>
              <h2 className="text-4xl md:text-6xl font-medium mb-10 leading-[1.05]">
                Direkte koblet til boligeiere og sameier.
              </h2>
              <p className="text-era-navy/60 text-lg font-light leading-relaxed mb-12">
                ERA gjør det enklere å styre prosesser, levere arbeid av høy kvalitet, og sikre at alt ligger trygt forvaltet hos kunden fra dag én.
              </p>
              
              <ul className="space-y-6">
                 {[
                   "Motta forespørsler automatisk",
                   "Gi strukturerte tilbud enklere",
                   "Dokumentere arbeid fortløpende",
                   "Følge opp kunder profesjonelt",
                   "Bygge langsiktige relasjoner"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-4">
                     <ArrowRight className="w-4 h-4 text-era-gold flex-shrink-0" />
                     <span className="text-era-navy font-medium text-lg">{item}</span>
                   </li>
                 ))}
               </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-12 shadow-2xl relative border border-era-navy/5"
            >
              <div className="absolute top-0 right-0 p-8">
                <div className="w-12 h-12 bg-era-gold/10 flex items-center justify-center text-era-gold">
                  <Inbox className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-8">Et enklere prosjekt</h3>
              <div className="space-y-6">
                <div className="bg-era-navy/5 p-6 border-l-2 border-era-gold">
                  <p className="text-xs font-bold uppercase tracking-widest text-era-navy/60">Trinn 1</p>
                  <p className="text-base font-medium mt-1">Motta ferdig analyserte behov</p>
                </div>
                <div className="bg-era-navy/5 p-6 border-l-2 border-era-gold">
                  <p className="text-xs font-bold uppercase tracking-widest text-era-navy/60">Trinn 2</p>
                  <p className="text-base font-medium mt-1">Pristilbud og gjennomføring</p>
                </div>
                <div className="bg-era-navy/5 p-6 border-l-2 border-era-navy/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-era-navy/60">Trinn 3</p>
                  <p className="text-base font-medium mt-1">Dokumentasjon er automatisk sikret</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Dokumentasjon blir en del av jobben */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 order-2 lg:order-1"
            >
               {[
                 { title: "Bilder", icon: <Images /> },
                 { title: "Produkter", icon: <FolderKanban /> },
                 { title: "FDV", icon: <FileCheck /> },
                 { title: "Utført arbeid", icon: <ShieldCheck /> }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 border border-era-navy/5 text-center flex flex-col items-center">
                   <div className="w-12 h-12 bg-era-gold/10 text-era-gold flex items-center justify-center mb-4">
                     {item.icon}
                   </div>
                   <h4 className="font-bold text-sm text-era-navy">{item.title}</h4>
                 </div>
               ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">FDV / Journal</span>
              <h2 className="text-4xl md:text-6xl font-medium mb-10 leading-[1.05]">
                Dokumentasjon blir <br/>en del av jobben.
              </h2>
              <p className="text-era-navy/60 text-lg font-light leading-relaxed mb-12">
                Bilder, produkter, FDV og utført arbeid lagres automatisk der det tilhører: i boligens journal. Slik at verken du eller kunden trenger å lete etter kvitteringer i ettertid.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ERA skaper gjentakende oppdrag */}
      <section className="py-32 px-6 bg-era-midnight text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-era-midnight to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Kontinuitet</span>
          <h2 className="text-4xl md:text-6xl font-medium mb-8 leading-tight">
            ERA skaper gjentakende oppdrag.
          </h2>
          <p className="text-white/60 text-xl font-light leading-relaxed mb-16 max-w-2xl mx-auto">
            Vedlikehold stopper ikke etter én jobb. ERA hjelper håndverkere å bli en integrert del av eiendommens langsiktige vedlikeholdsreise.
          </p>
          
          <button onClick={onOpenWaitlist} className="square-button-gold px-12 py-5 text-lg shadow-2xl">Meld interesse</button>
        </div>
      </section>
    </>
  );
}
