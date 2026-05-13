import { motion } from 'motion/react';
import { CheckCircle2, Clock, Camera, FileText, Share2, History, ClipboardList, PenTool, MessageSquare, Shield, TrendingUp } from 'lucide-react';

export default function ContractorDetails() {
  return (
    <>
      {/* DETTE ER ERA */}
      <section className="py-32 px-6 bg-era-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Håndverkerens verktøy</span>
              <h2 className="text-4xl md:text-6xl font-medium mb-10 leading-[1.05]">
                Dette er ERA <br /> for håndverkere.
              </h2>
              <p className="text-era-navy/60 text-lg font-light leading-relaxed mb-12">
                ERA gjør det enklere å dokumentere arbeid, følge opp kunder, lage raskere tilbud og bygge langsiktige kundeforhold ved å samle historikk på eiendommen over tid.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  "Dokumentere arbeid",
                  "Følge opp kunder",
                  "Lage raskere tilbud",
                  "Bygge langsiktige forhold",
                  "Samle eiendomshistorikk"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-era-gold" />
                    <span className="text-sm font-medium text-era-navy/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-12 border border-era-navy/5 shadow-2xl relative">
                <div className="absolute top-0 right-0 p-8">
                  <div className="w-12 h-12 bg-era-gold/10 flex items-center justify-center text-era-gold">
                    <History className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-6">Eiendommens historikk</h3>
                <p className="text-era-navy/60 font-light leading-relaxed">
                  ERA hjelper eiendomsbesittere å ta vare på eiendom — og gjør det enklere for håndverkere å levere en bedre tjeneste.
                </p>
              </div>

              <div className="bg-era-navy p-12 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                  <TrendingUp className="w-6 h-6 text-era-gold" />
                </div>
                <h3 className="text-xl font-medium mb-4">Øk verdien på din bedrift</h3>
                <p className="text-white/60 font-light leading-relaxed text-sm">
                  Ved å bygge en digital kundeportefølje med full historikk, skaper du en dokumentert verdi i din egen bedrift som gir forutsigbarhet for fremtiden.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HVA ERA LØSER */}
      <section className="py-32 px-6 bg-white border-y border-era-navy/5">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Problemstilling</span>
          <h2 className="text-3xl md:text-5xl font-medium mb-8">Mye tid går bort til administrasjon</h2>
          <p className="text-era-navy/60 text-lg font-light">
            ERA samler alt i én flyt. Fra første bilde til ferdig dokumentasjon.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Camera className="w-5 h-5" />, label: "Befaringer & Bilder" },
            { icon: <FileText className="w-5 h-5" />, label: "Dokumentasjon" },
            { icon: <Share2 className="w-5 h-5" />, label: "Oppfølging" },
            { icon: <MessageSquare className="w-5 h-5" />, label: "Glemte meldinger" },
            { icon: <ClipboardList className="w-5 h-5" />, label: "Spredte systemer" },
            { icon: <PenTool className="w-5 h-5" />, label: "Manuelle tilbud" },
            { icon: <Clock className="w-5 h-5" />, label: "Manglende historikk" },
            { icon: <Shield className="w-5 h-5" />, label: "Kvalitetssikring" },
          ].map((item, i) => (
            <div key={i} className="p-8 border border-era-navy/5 bg-era-ivory/30 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div className="w-12 h-12 bg-white flex items-center justify-center text-era-navy/30 group-hover:text-era-gold transition-colors mb-6 shadow-sm">
                {item.icon}
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-era-navy/60 group-hover:text-era-navy transition-colors">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
