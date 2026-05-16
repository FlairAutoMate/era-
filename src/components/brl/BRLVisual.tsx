import { motion } from 'motion/react';
import { Layout, Building2, Calendar, FileText, Shield, PieChart, Sparkles, TrendingUp, AlertTriangle } from 'lucide-react';

export default function BRLVisual() {
  return (
    <section className="bg-era-navy py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.4/1]">
          {/* BOARD DASHBOARD MOCKUP */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-0 bottom-0 bg-era-midnight border border-white/10 shadow-2xl rounded-xl p-6 overflow-hidden"
          >
            {/* Sidebar */}
            <div className="absolute left-0 top-0 bottom-0 w-64 border-r border-white/5 bg-era-midnight p-6 hidden lg:block">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-8 border border-era-gold flex items-center justify-center" >
                  <div className="w-4 h-4 bg-era-gold" />
                </div>
                <span className="font-display font-medium text-white text-lg tracking-tight">ERA BOARD</span>
              </div>
              
              <div className="space-y-2">
                {[
                  { icon: <Layout className="w-4 h-4" />, label: 'Oversikt', active: true },
                  { icon: <Building2 className="w-4 h-4" />, label: 'Bygningsmasse' },
                  { icon: <Calendar className="w-4 h-4" />, label: 'Vedlikeholdsplan' },
                  { icon: <FileText className="w-4 h-4" />, label: 'Dokumentarkiv' },
                  { icon: <PieChart className="w-4 h-4" />, label: 'Økonomi' },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      item.active ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60 hover:bg-white/5'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:ml-64 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                <h2 className="text-xl font-medium text-white">Styrets Dashboard</h2>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Alt i rute</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                {/* Main Maintenance Focus */}
                <div className="md:col-span-2 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">Tilstandsscore</p>
                      <p className="text-3xl font-bold text-white">8.4<span className="text-white/20 text-sm font-light">/10</span></p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">Planlagt vedlikehold</p>
                      <p className="text-3xl font-bold text-white">3<span className="text-white/20 text-sm font-light"> prosjekter</span></p>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 rounded-xl overflow-hidden relative group">
                    <h4 className="text-white font-medium mb-6">Vedlikeholdsprognose 2026-2030</h4>
                    <div className="h-32 flex items-end gap-2">
                       {[40, 25, 85, 30, 45].map((h, i) => (
                         <div key={i} className="flex-1 flex flex-col items-center gap-2">
                           <motion.div 
                             initial={{ height: 0 }}
                             whileInView={{ height: `${h}%` }}
                             transition={{ duration: 1, delay: i * 0.1 }}
                             className={`w-full ${i === 2 ? 'bg-era-gold' : 'bg-white/10'} rounded-t-sm`} 
                           />
                           <span className="text-[9px] text-white/30">{2026 + i}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>

                {/* KI Insights & Alerts */}
                <div className="space-y-4">
                  <div className="bg-era-gold/10 border border-era-gold/20 p-6 rounded-xl relative">
                    <Sparkles className="w-4 h-4 text-era-gold mb-3" />
                    <p className="text-white text-sm leading-relaxed font-light mb-4">
                      ERA anbefaler å fremskynde kontroll av takterrasser etter unormalt mye nedbør i april.
                    </p>
                    <button className="text-era-gold text-xs font-bold hover:underline">Se tiltaksplan</button>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-4 h-4 text-white/40" />
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Neste frist</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg">
                      <p className="text-white text-sm mb-1">Brannvernkontroll</p>
                      <p className="text-white/40 text-[10px]">14. juni 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
