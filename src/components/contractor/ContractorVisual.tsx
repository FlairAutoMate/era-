import { motion } from 'motion/react';
import { Layout, Camera, BarChart3, FileText, Users, MessageSquare, ClipboardCheck, Sparkles, TrendingUp, Shield } from 'lucide-react';

export default function ContractorVisual() {
  return (
    <section className="bg-era-navy py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.4/1]">
          {/* DESKTOP DASHBOARD MOCKUP */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-0 bottom-0 bg-era-midnight border border-white/10 shadow-2xl rounded-xl p-6 overflow-hidden"
          >
            {/* Sidebar */}
            <div className="absolute left-0 top-0 bottom-0 w-64 border-r border-white/5 bg-era-midnight p-6 hidden lg:block">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-8 bg-era-gold rounded-sm" />
                <span className="font-display font-medium text-white text-lg">ERA PRO</span>
              </div>
              
              <div className="space-y-2">
                {[
                  { icon: <Layout className="w-4 h-4" />, label: 'Dashboard', active: true },
                  { icon: <Users className="w-4 h-4" />, label: 'Kunder' },
                  { icon: <ClipboardCheck className="w-4 h-4" />, label: 'Oppdrag' },
                  { icon: <FileText className="w-4 h-4" />, label: 'Dokumentasjon' },
                  { icon: <MessageSquare className="w-4 h-4" />, label: 'Meldinger' },
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
                <h2 className="text-xl font-medium text-white">Aktive Oppdrag</h2>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-[10px] text-white/40 font-bold">JD</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                {/* Active Projects List */}
                <div className="md:col-span-2 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                  {[
                    { address: 'Myrerveien 46A', client: 'Lars Sand', status: 'KI-kalkyle klar', amount: '11 500 000 kr', progress: 75 },
                    { address: 'Thorvald Meiers gt 5', client: 'Anne Holte', status: 'Befaring utført', amount: '8 200 000 kr', progress: 40 },
                    { address: 'Skovveien 12', client: 'Erik Berg', status: 'Tilbud sendt', amount: '15 400 000 kr', progress: 60 },
                  ].map((job, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/[0.07] transition-colors group cursor-pointer">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-white font-medium mb-1">{job.address}</h4>
                          <p className="text-white/40 text-xs">{job.client}</p>
                        </div>
                        <span className="text-[10px] bg-era-gold/20 text-era-gold px-2 py-1 rounded font-bold uppercase tracking-widest">{job.status}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 mr-8">
                          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${job.progress}%` }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                              className="h-full bg-era-gold"
                            />
                          </div>
                        </div>
                        <span className="text-white/60 text-xs font-medium">{job.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Insights Sidebar */}
                <div className="space-y-6">
                  <div className="bg-era-gold/10 border border-era-gold/20 p-6 rounded-xl relative overflow-hidden">
                    <Sparkles className="absolute -right-4 -top-4 w-24 h-24 text-era-gold/10" />
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-era-gold" />
                      <span className="text-era-gold text-[10px] font-bold uppercase tracking-widest">ERA Oppdaget</span>
                    </div>
                    <p className="text-white text-sm leading-relaxed font-light mb-4">
                      AI har analysert bildene fra Myrerveien 46A og identifisert begynnende fuktskade bak kledning.
                    </p>
                    <button className="text-era-gold text-xs font-bold hover:underline">Se detaljer</button>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-4 h-4 text-white/40" />
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">KI-kalkyle</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between text-xs">
                        <span className="text-white/60">Estimert omfang</span>
                        <span className="text-white">45.000 - 60.000 kr</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-white/60">Tidbruk estimat</span>
                        <span className="text-white">12-16 timer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MOBILE APP MOCKUP */}
          <motion.div 
            initial={{ opacity: 0, x: 100, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute -right-12 -bottom-12 w-[300px] hidden xl:block"
          >
            <div className="bg-era-midnight border-4 border-white/20 rounded-[3rem] aspect-[9/19.5] shadow-2xl p-4 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-era-midnight rounded-b-2xl z-20" />
              
              <div className="h-full w-full bg-era-navy rounded-[2.2rem] overflow-hidden flex flex-col">
                <div className="p-6 pt-12 flex-1">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-white/40 text-[10px] font-bold">BEFARING</p>
                      <h3 className="text-white font-medium">Myrerveien 46A</h3>
                    </div>
                    <Camera className="w-5 h-5 text-white/60" />
                  </div>

                  <div className="space-y-4">
                    <div className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white/20">
                      <Camera className="w-12 h-12" />
                    </div>
                    <div className="bg-era-gold p-4 rounded-xl">
                      <p className="text-era-midnight text-[10px] font-bold uppercase tracking-widest mb-1">KI Lesing...</p>
                      <p className="text-era-midnight text-sm font-medium">Sprekk i grunnmur identifisert. Dokumentasjon foreslått.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 border-t border-white/5">
                  <button className="w-full bg-white text-era-navy py-4 rounded-xl font-bold text-xs uppercase tracking-widest">
                    Registrer arbeid
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
