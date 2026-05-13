import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Eirik Hansen',
    role: 'Boligeier, Oslo',
    quote: 'ERA ga meg full oversikt over alt som ble gjort under oppussingen. Da jeg solgte boligen, var dokumentasjonen alene med på å trygge kjøper og øke prisen.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Berit Lind',
    role: 'Styreleder, Solli BRL',
    quote: 'Som styreleder har ERA forenklet hverdagen min betraktelig. Vi har nå en digital hukommelse som ikke forsvinner når styret byttes ut.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Resources() {
  return (
    <section className="py-40 px-6 bg-era-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Erfaringer & Innsikt</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-[0.95]">
              Hvorfor ledende eiendomsaktører velger ERA.
            </h2>
            <div className="flex gap-4">
              <button className="square-button-gold px-10 py-4 text-sm">Les alle historier</button>
              <button className="px-10 py-4 text-sm font-bold uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-colors">ERA Guide</button>
            </div>
          </div>

          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-10 relative"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 italic" />
                <p className="text-xl font-light leading-relaxed mb-10 text-white/80 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full grayscale" />
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-[11px] text-white/40 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
