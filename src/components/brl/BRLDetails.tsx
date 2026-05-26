import { motion } from 'motion/react';
import { ShieldCheck, History, Users, BarChart3, Clock, FileCheck, ArrowUpRight } from 'lucide-react';

interface BRLDetailsProps {
  onOpenWaitlist?: () => void;
}

export default function BRLDetails({ onOpenWaitlist }: BRLDetailsProps) {
  return (
    <section className="py-36 px-6 bg-era-ivory text-era-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Main Copy Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] block font-mono">// FOR STYRET OG BEBOERNE</span>
            
            <h2 className="text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight">
              Langsiktig trygghet <br />
              og lavere felleskostnader.
            </h2>
            
            <p className="text-era-navy/70 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Når et styremedlem takker for seg, forsvinner ofte viktig kunnskap ut døren. ERA løser dette ved å bygge et institusjonelt minne for bygget ditt. Vi digitaliserer alt fra vaktmesteravtaler til rørleggerhistorikk, og oversetter dype rapporter til enkle, preventive oppgaver.
            </p>
            
            {/* Key benefits split grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {[
                { 
                  icon: <History className="w-5 h-5 text-era-gold" />, 
                  title: "Dokumentert historikk", 
                  desc: "Alt som utføres lagres automatisk på byggets profil." 
                },
                { 
                  icon: <Clock className="w-5 h-5 text-era-gold" />, 
                  title: "Optimalisert 10-årsplan", 
                  desc: "Planlegging som tar høyde for slitasje, ikke bare kalenderen." 
                },
                { 
                  icon: <FileCheck className="w-5 h-5 text-era-gold" />, 
                  title: "Automatisert FDV", 
                  desc: "Rapporter og dokumentasjon oppdateres kontinuerlig i bakgrunnen." 
                },
                { 
                  icon: <ShieldCheck className="w-5 h-5 text-era-gold" />, 
                  title: "Enklere forsikring", 
                  desc: "Dokumentert systematisk vedlikehold gir mulighet for redusert premie." 
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white/40 border border-era-navy/5 rounded-xl">
                  <div className="mt-1 p-2 bg-white rounded-lg border border-era-navy/5 shadow-sm text-era-gold">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-era-navy">{item.title}</h4>
                    <p className="text-xs text-era-navy/60 leading-relaxed font-light mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button 
                onClick={onOpenWaitlist}
                className="inline-flex items-center gap-2 border border-era-navy/20 hover:border-era-navy/80 hover:bg-era-navy hover:text-white text-era-navy px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xl transition-all"
              >
                Uforpliktende kartlegging for styret
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Interactive Feature Cards */}
          <div className="lg:col-span-5 grid gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 border border-era-navy/5 shadow-xl shadow-era-navy/[0.02] rounded-2xl relative group hover:border-[#C8A96B]/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-era-gold/5 flex items-center justify-center text-era-gold mb-6 border border-era-gold/15">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-era-navy">Problemfri beboerdialog</h4>
              <p className="text-sm text-era-navy/60 leading-relaxed font-light">
                Reduser henvendelsene til styreleders private e-post. Beboere melder inn feil direkte i appen, laster opp bilder, og mottar automatiske statusoppdateringer underveis.
              </p>
              <div className="absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-mono text-era-gold font-bold">// BEBOER_APP</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0E2341] p-10 text-white shadow-2xl rounded-2xl relative overflow-hidden group border border-white/5"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BarChart3 className="w-40 h-40 text-white" />
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-era-gold mb-6 border border-white/10 relative z-10">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white relative z-10">Datadrevet budsjettering</h4>
              <p className="text-sm text-white/70 leading-relaxed font-light relative z-10">
                Gjør slutt på gjeting av felleskostnader. ERA analyserer byggets faktiske tilstand og simulerer økonomiske scenarier over 10, 20 og 30 år slik at styret kan planlegge trygt og rettferdig.
              </p>
              <div className="absolute right-6 top-6 text-white/30 text-xs font-mono font-bold uppercase tracking-widest relative z-10">
                // DATA_DRIVEN
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
