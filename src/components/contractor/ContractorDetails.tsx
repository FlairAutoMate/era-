import { motion } from 'motion/react';
import { Cog, Zap, UserCheck, TrendingUp, RefreshCcw, Activity } from 'lucide-react';

export default function ContractorDetails() {
  return (
    <>
      {/* KI AGENTS & AUTOMATISERT SALGSFLYT */}
      <section className="py-32 px-6 bg-era-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Autonome Agenter</span>
              <h2 className="text-4xl md:text-6xl font-medium mb-10 leading-[1.05]">
                Din nye KI-salgsavdeling.
              </h2>
              <p className="text-era-navy/60 text-lg font-light leading-relaxed mb-12">
                ERA gjør oppsøkende salg unødvendig. Våre spesialiserte agenter analyserer kundenes boligdata, oppdager vedlikeholdsbehov før de blir akutte, og presenterer ferdige tilbudsutkast direkte i ditt dashboard.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: <Cog className="w-5 h-5" />, title: "Vision Agent", desc: "Overvåker boligbilder og oppdager avvik (f.eks. slitasje på tak, fuktproblemer)." },
                  { icon: <Zap className="w-5 h-5" />, title: "Pricing Agent", desc: "Genererer nøyaktige overslag automatisk basert på historiske priser og materialvalg." },
                  { icon: <UserCheck className="w-5 h-5" />, title: "Matching Agent", desc: "Sikrer at riktig oppdrag går til riktig ERA-partner basert på kapasitet og rating." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 mt-1 rounded bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-era-navy border border-era-navy/5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-era-navy mb-1">{item.title}</h4>
                      <p className="text-sm text-era-navy/60 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-12 shadow-2xl relative border border-era-navy/5">
                <div className="absolute top-0 right-0 p-8">
                  <div className="w-12 h-12 bg-era-gold/10 flex items-center justify-center text-era-gold">
                    <Activity className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-6">Fra oppdagelse til ordre</h3>
                <div className="space-y-6">
                  <div className="pl-6 border-l-2 border-era-gold relative">
                    <div className="absolute w-3 h-3 bg-era-gold rounded-full -left-[7px] top-1" />
                    <p className="text-xs font-bold uppercase tracking-widest text-era-navy/40">Trinn 1</p>
                    <p className="text-sm font-medium mt-1">ERA oppdager behov hos boligeier</p>
                  </div>
                  <div className="pl-6 border-l-2 border-era-gold relative">
                    <div className="absolute w-3 h-3 bg-era-gold rounded-full -left-[7px] top-1" />
                    <p className="text-xs font-bold uppercase tracking-widest text-era-navy/40">Trinn 2</p>
                    <p className="text-sm font-medium mt-1">KI priser og strukturerer jobben</p>
                  </div>
                  <div className="pl-6 border-l-2 border-era-navy/10 relative">
                    <div className="absolute w-3 h-3 bg-white border-2 border-era-gold rounded-full -left-[7px] top-1" />
                    <p className="text-xs font-bold uppercase tracking-widest text-era-navy/40">Trinn 3</p>
                    <p className="text-sm font-medium mt-1">Du godkjenner og utfører</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GJENKJØP OG LIVSTIDSVERDI */}
      <section className="py-32 px-6 bg-era-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=80&w=2000')] opacity-5 object-cover" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Langsiktig Verdi</span>
          <h2 className="text-4xl md:text-6xl font-medium mb-8 leading-tight">
            Fra kalde leads til livstidsverdi.
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
            Glem jaget etter neste anbud. ERA forvandler engangsjobber til abonnement-lignende relasjoner. Vi varsler deg når det er tid for årlig vedlikehold eller inspeksjon, slik at kunden alltid returnerer til deg.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Gjenkjøp", desc: "Automatiske påminnelser for årlig VVS-sjekk, takinspeksjon eller malingsvedlikehold.", icon: <RefreshCcw /> },
              { title: "Prediktivt", desc: "Vit hva kunden trenger før de vet det selv, basert på produktlevetid i boligjournalen.", icon: <Activity /> },
              { title: "Verdiøkning", desc: "Bygg en solid, dokumentert kundeportefølje som øker verdien på håndverkerbedriften din.", icon: <TrendingUp /> }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-era-gold/20 text-era-gold flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
