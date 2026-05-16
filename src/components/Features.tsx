import { motion } from 'motion/react';
import { Sparkles, Shield, ClipboardCheck, ArrowRight, MessageSquare } from 'lucide-react';

const features = [
  {
    title: 'Scan',
    description: 'Ta bilder og kjør KI-analyse. Identifiser risikoer og forstå boligens tilstand umiddelbart gjennom intelligent bildebehandling.',
    icon: Sparkles,
    color: 'bg-era-gold/10 text-era-gold'
  },
  {
    title: 'Plan',
    description: 'Anbefalinger og neste steg. Få en intelligent vedlikeholdsplan basert på boligens faktiske behov, alder og historikk.',
    icon: ClipboardCheck,
    color: 'bg-era-navy/5 text-era-navy'
  },
  {
    title: 'Prosjekt',
    description: 'Fra tilbud til gjennomføring. ERA hjelper deg med aktive jobber, oppfølging av håndverkere og sikrer at alt blir dokumentert riktig.',
    icon: MessageSquare,
    color: 'bg-era-navy/5 text-era-navy'
  },
  {
    title: 'Journal',
    description: 'Dokumentasjon og FDV. All historikk samlet i en uavbrutt tidslinje som følger eiendommen over generasjoner.',
    icon: Shield,
    color: 'bg-era-navy/5 text-era-navy'
  }
];

export default function Features() {
  return (
    <section className="py-60 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 items-center mb-32">
          <div className="lg:col-span-5">
            <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">For boligeiere</span>
            <h2 className="text-5xl md:text-7xl font-bold text-era-navy mb-8 leading-[0.95]">
              Forstå eiendommen bedre over tid.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-xl text-era-navy/50 font-light leading-relaxed">
              ERA hjelper boligeiere å forstå hva som bør følges opp, samle dokumentasjon og bygge historikk for eiendommen over tid.
            </p>
            <p className="text-sm font-bold text-era-gold uppercase tracking-[0.2em] mt-8">
              Mindre stress. Bedre oversikt.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 border border-era-navy/5 hover:border-era-gold/20 transition-all group"
            >
              <div className={`w-14 h-14 ${feature.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-era-navy mb-4">{feature.title}</h3>
              <p className="text-era-navy/50 font-light leading-relaxed mb-8">
                {feature.description}
              </p>
              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-era-navy hover:text-era-gold transition-colors">
                Les mer <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
