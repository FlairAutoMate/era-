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
                Kvalifiserte oppdrag og ferdig grunnlag.
              </h2>
              <p className="text-era-navy/60 text-lg font-light leading-relaxed mb-12">
                Slipp uendelig tilbudsregning, telefonsamtaler og uklare kundeforventninger. ERA matcher deg automatisk med prosjekter som passer din kompetanse og ledige kapasitet.
              </p>
              
              <ul className="space-y-6">
                 {[
                   "Ferdig spesifiserte oppdrag og tiltak",
                   "Mindre tidsbruk på administrasjon og oppmøte",
                   "Automatisk generert dokumentasjon",
                   "Nå ut til de riktige kundene i ditt nærområde",
                   "Oppnå høyere tillit gjennom nøyaktig FDV-leveranse",
                   "Kontinuerlig oppdragsflyt uten markedsføringskostnader"
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
              <h3 className="text-2xl font-medium mb-8">Hvordan det fungerer</h3>
              <div className="space-y-6">
                <div className="bg-[#0b1426]/5 p-6 border-l-2 border-era-gold rounded-r-xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0b1426]/60">Trinn 1 — Intelligent Tildeling</p>
                  <p className="text-base font-medium mt-1">Automatisk matching basert på kompetanse og kapasitet.</p>
                </div>
                <div className="bg-[#0b1426]/5 p-6 border-l-2 border-era-gold rounded-r-xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0b1426]/60">Trinn 2 — Fastpris & Avtale</p>
                  <p className="text-base font-medium mt-1">Ingen lange forhandlinger. Oppdraget utføres til fastpris basert på reelle underlagsdata.</p>
                </div>
                <div className="bg-[#0b1426]/5 p-6 border-l-2 border-era-navy/20 rounded-r-xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0b1426]/60">Trinn 3 — FDV Oppdateres Automatisk</p>
                  <p className="text-base font-medium mt-1">Samsvarserklæringer, kvitteringer og bilder synkroniseres automatisk til boligens Boligminne.</p>
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
              <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">FDV / Boligminne</span>
              <h2 className="text-4xl md:text-6xl font-medium mb-10 leading-[1.05]">
                Dokumentasjon blir <br/>en del av jobben.
              </h2>
              <p className="text-era-navy/60 text-lg font-light leading-relaxed mb-12">
                Bilder, produkter, FDV og utført arbeid lagres automatisk der det tilhører: i boligens digitale Boligminne. Slik at verken du eller kunden trenger å lete etter kvitteringer i ettertid.
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
          
          <button onClick={onOpenWaitlist} className="square-button-gold px-12 py-5 text-sm uppercase tracking-wider font-bold shadow-2xl">Bli en del av ERA partnernettverk</button>
        </div>
      </section>
    </>
  );
}
