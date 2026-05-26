import { motion } from 'motion/react';
import { Layout, Building2, Calendar, FileText, PieChart, Sparkles, AlertTriangle, ArrowRight, Gauge, Activity, Cpu, FileCheck } from 'lucide-react';

export default function BRLVisual() {
  return (
    <section className="bg-era-navy py-28 px-6 overflow-hidden relative">
      {/* Background ambient accents */}
      <div className="absolute top-[10%] left-[30%] w-[500px] h-[500px] bg-era-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-era-gold font-bold uppercase tracking-[0.3em] font-mono text-[10px] mb-4 block">// INTERAKTIV DEMO</span>
          <h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight">Eiendomsportalen for styret</h3>
          <p className="text-white/60 text-sm font-light mt-4 max-w-xl mx-auto">
            Se hvordan ERA samler vedlikeholdsbehov, historikk og KI-anbefalinger i ett oversiktlig grensesnitt.
          </p>
        </div>

        {/* BOARD DASHBOARD MOCKUP */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full bg-era-midnight border border-white/10 shadow-2xl rounded-2xl flex flex-col lg:flex-row overflow-hidden min-h-[580px]"
        >
          {/* Sidebar */}
          <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-white/5 bg-era-midnight p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 border border-era-gold flex items-center justify-center rounded-lg" >
                  <div className="w-3.5 h-3.5 bg-era-gold rounded-sm" />
                </div>
                <div>
                  <span className="font-display font-medium text-white text-base tracking-tight block">ERA Styreplattform</span>
                  <span className="text-[8px] font-mono text-white/40 block tracking-widest uppercase">ID: BRL_OASEN</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-1 gap-2">
                {[
                  { icon: <Layout className="w-4 h-4" />, label: 'Oversikt', active: true },
                  { icon: <Building2 className="w-4 h-4" />, label: 'Bygningsmasse' },
                  { icon: <Calendar className="w-4 h-4" />, label: 'Vedlikeholdsplan' },
                  { icon: <FileCheck className="w-4 h-4 text-emerald-400" />, label: 'FDV-Dokumenter' },
                  { icon: <PieChart className="w-4 h-4" />, label: 'Økonomi & Budsjett' },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      item.active ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white/90 hover:bg-white/5'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daemon Status Panel */}
            <div className="mt-8 pt-6 border-t border-white/5 hidden lg:block">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-3.5 h-3.5 text-era-gold animate-pulse" />
                <span className="text-[9px] font-mono text-white/50 tracking-wider">ERA_DAEMON_V2.4</span>
              </div>
              <p className="text-[10px] text-white/40 leading-normal font-mono">
                Logg: Våtromstaksering ferdigstilt automatisk. Ingen uoverensstemmelser funnet.
              </p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
            {/* Header section in dashboard */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
              <div>
                <h4 className="text-xl font-medium text-white">Styrets Dashboard</h4>
                <p className="text-xs text-white/50 font-light mt-1">Oasen Sameie • 42 boenheter • Organisert vedlikeholdsplan</p>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full self-start">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">Alt i rute (Ingen akutte avvik)</span>
              </div>
            </div>

            {/* Core KPI metrics row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white/45 text-[10px] font-bold uppercase tracking-widest font-mono">Tilstandsscore</span>
                  <Gauge className="w-4 h-4 text-era-gold" />
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-white">8.6</p>
                  <p className="text-white/30 text-xs font-light">av 10 (Svært bra)</p>
                </div>
                <div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
                  <div className="bg-era-gold h-full w-[86%]" />
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white/45 text-[10px] font-bold uppercase tracking-widest font-mono">Planlagte tiltak 12 mnd</span>
                  <Calendar className="w-4 h-4 text-white/55" />
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-white">2</p>
                  <p className="text-white/30 text-xs font-light">prosjekter (Balkong, Tak)</p>
                </div>
                <p className="text-[9px] text-emerald-400 font-mono mt-3">✓ Anbud pågående via ERA nettverk</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white/45 text-[10px] font-bold uppercase tracking-widest font-mono">Anslått felleskostnad-effekt</span>
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-emerald-400">-12%</p>
                  <p className="text-white/30 text-xs font-light">forventet kostnadsreduksjon</p>
                </div>
                <p className="text-[9px] text-white/50 leading-relaxed font-light mt-3">Sparing gjennom optimalisert preventative tiltak.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Progonsis block */}
              <div className="md:col-span-8 bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <h5 className="text-white text-sm font-medium mb-1">Vedlikeholdsprognose (KPI-estimat 2026 - 2030)</h5>
                  <p className="text-[11px] text-white/50 font-light mb-6">Investeringsbehov fordelt på år (TNOK)</p>
                </div>
                <div className="h-36 flex items-end gap-3 md:gap-4 border-b border-white/5 pb-2">
                   {[
                     { year: 2026, val: 180, label: "Kontroll tak", highlighted: false },
                     { year: 2027, val: 95, label: "FDV oppfølg.", highlighted: false },
                     { year: 2028, val: 420, label: "Fasadespyling", highlighted: true },
                     { year: 2029, val: 120, label: "Heisservice", highlighted: false },
                     { year: 2030, val: 195, label: "Brannkontroll", highlighted: false }
                   ].map((item, i) => (
                     <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative">
                       {/* Tooltip on hover */}
                       <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-era-midnight border border-white/15 px-2 py-1 rounded text-[10px] font-mono text-white whitespace-nowrap z-20 shadow-xl">
                         {item.label}: <strong className="text-era-gold">{item.val} TNOK</strong>
                       </div>
                       
                       <div className="w-full bg-white/5 rounded-t-lg h-28 flex items-end overflow-hidden">
                         <motion.div 
                           initial={{ height: 0 }}
                           whileInView={{ height: `${(item.val / 420) * 100}%` }}
                           transition={{ duration: 1, delay: i * 0.1 }}
                           viewport={{ once: true }}
                           className={`w-full ${item.highlighted ? 'bg-gradient-to-t from-era-gold to-amber-200' : 'bg-white/15 group-hover:bg-white/25'} transition-all`} 
                         />
                       </div>
                       <span className="text-[10px] text-white/50 font-mono">{item.year}</span>
                     </div>
                   ))}
                </div>
              </div>

              {/* Insights and intelligence alerts block */}
              <div className="md:col-span-4 flex flex-col justify-between gap-4">
                <div className="bg-era-gold/10 border border-era-gold/25 p-5 rounded-xl flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-era-gold animate-bounce" />
                      <span className="text-[9px] font-mono text-era-gold font-bold uppercase tracking-widest">KI AI_INSIGHT API</span>
                    </div>
                    <p className="text-white text-xs leading-relaxed font-light mb-4">
                      ERA anbefaler å fremskynde kontroll av takterrasser etter unormalt mye nedbør i Oslo-området i april. Dette forebygger potensiell fuktinfiltrasjon.
                    </p>
                  </div>
                  <button className="text-era-gold text-xs font-semibold hover:underline flex items-center gap-1.5 self-start group">
                    Generer anbud nå
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="bg-white/5 border border-white/15 p-5 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-3.5 h-3.5 text-white/45" />
                    <span className="text-white/45 text-[9px] font-mono font-bold uppercase tracking-wider">Automatisert Logghistorikk</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <p className="text-white/85 font-medium leading-none">VVS årsavtale fornyet</p>
                    <p className="text-white/45 text-[10px]">Autodokumentert 12. mai 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
