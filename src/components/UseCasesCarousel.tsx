import { motion } from 'motion/react';
import { ArrowRight, Droplets, Building, Wrench } from 'lucide-react';

const cases = [
  {
    icon: Droplets,
    title: "Slik forhindret ERA vannskaden før den skjedde",
    description: "Ved å analysere alder på rør-i-rør systemet og kryssjekke mot gjeldende SINTEF-anbefalinger, varslet ERA eieren 6 måneder før estimert levetid utløp. Arbeidet ble utført preventivt med 40% lavere kostnad enn en reell skade.",
    tags: ["Boligeier", "Prediktiv AI"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: Building,
    title: "Automatiserte hele FDV-håndteringen på én dag",
    description: "Et nyopprettet sameie lastet opp 4GB med usortert boligdokumentasjon fra utbygger. ERA AI sorterte, kategoriserte og genererte en komplett vedlikeholdsplan for alle 12 enheter automatisk.",
    tags: ["Sameie & BRL", "Dokumentasjon"],
    color: "bg-era-navy/10 text-era-navy"
  },
  {
    icon: Wrench,
    title: "Skalerte oppdrag for lokal håndverksbedrift",
    description: "Gjennom ERA-økosystemet mottok en rørleggerbedrift automatisk kvalifiserte serviceoppdrag for varmepumper i sitt nærområde – basert på maskinens faktiske vedlikeholdsbehov, ikke tilfeldige anbud.",
    tags: ["Håndverker", "Vekst"],
    color: "bg-era-gold/10 text-yellow-700"
  }
];

export default function UseCasesCarousel() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden border-t border-era-navy/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Use Cases</span>
            <h2 className="text-4xl md:text-5xl font-medium text-era-navy mb-6 leading-tight">
              Teori i praksis: <br/> Fra innsikt til handling
            </h2>
            <p className="text-lg text-era-navy/60 font-light leading-relaxed">
              Teknologi er bare verdifull hvis den løser virkelige problemer. Se hvordan vår plattform allerede endrer måten eiendom forvaltes på.
            </p>
          </div>
          <button className="flex items-center gap-2 text-era-navy text-xs font-bold uppercase tracking-widest hover:text-era-gold transition-colors shrink-0 pb-2">
            Les flere historier <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group p-10 border border-era-navy/5 bg-era-ivory/50 hover:bg-white hover:shadow-2xl hover:border-era-navy/10 transition-all duration-500 cursor-pointer flex flex-col h-full"
              >
                <div className="flex gap-2 mb-8">
                  {useCase.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white border border-era-navy/5 text-[9px] font-bold uppercase tracking-widest text-era-navy/60">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className={`w-12 h-12 flex items-center justify-center mb-8 ${useCase.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-medium text-era-navy mb-4 leading-tight group-hover:text-era-gold transition-colors">
                  {useCase.title}
                </h3>
                
                <p className="text-sm font-light text-era-navy/60 leading-relaxed mb-auto">
                  {useCase.description}
                </p>
                
                <div className="mt-8 pt-8 border-t border-era-navy/5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-era-navy group-hover:text-era-gold transition-colors">
                  Les hele caset <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
