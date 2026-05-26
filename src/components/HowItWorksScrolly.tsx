import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Database, 
  Camera, 
  TrendingUp, 
  FileText, 
  Users, 
  CheckCircle, 
  Clock, 
  Shield, 
  Sparkles, 
  Cpu,
  Bookmark
} from 'lucide-react';

interface HowItWorksScrollyProps {
  onOpenWaitlist?: () => void;
}

const FLOW_STEPS = [
  {
    id: "step-1",
    num: "01",
    label: "Boligdata & historikk",
    title: "Boligdata & historikk",
    sub: "Levende digital boligprofil",
    desc: "ERA samler boligdata, FDV, historikk og dokumentasjon for å bygge en levende digital boligprofil. Våre agenter skanner, rydder og strukturerer dine rådata automatisk.",
    visualType: "data_ingest",
    statusBadge: "Analyse aktiv",
    statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    signals: ["dokumentanalyse", "datauttrekk", "boligprofil bygges"]
  },
  {
    id: "step-2",
    num: "02",
    label: "Ta bilde & få KI-vurdering",
    title: "Ta bilde & få KI-vurdering",
    sub: "Agentbasert tilstandsanalyse",
    desc: "Ta bilde av et problem eller et område i boligen. ERA analyserer tilstand, risiko, restlevetid og foreslår forebyggende tiltak automatisk.",
    visualType: "ai_vision",
    statusBadge: "Tiltak anbefalt",
    statusColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    signals: ["KI-bildeanalyse", "risikovurdering", "vedlikeholdsstatus"]
  },
  {
    id: "step-3",
    num: "03",
    label: "Få prisoverslag",
    title: "Få raskt prisoverslag",
    sub: "Algoritmisk prisestimering",
    desc: "ERA genererer forslag til nøyaktig omfang, estimert kostnad og anbefalt utførelse basert på boligdata, historiske priser og grundig KI-analyse.",
    visualType: "price_estimation",
    statusBadge: "Kostnadsoverslag klart",
    statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    signals: ["smart prisestimering", "fastpris genereres", "oppdragsbeskrivelse"]
  },
  {
    id: "step-4",
    num: "04",
    label: "Kvalifiserte håndverkere",
    title: "Kobles til kvalifisert håndverker",
    sub: "Presisjon og riktig kapasitet",
    desc: "Ved godkjenning kobler ERA deg direkte med relevante lokale fagfolk som har akkurat den kompetansen, sertifiseringen og kapasiteten prosjektet krever.",
    visualType: "dispatch_match",
    statusBadge: "3 lokale fagfolk tilgjengelig",
    statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    signals: ["automatisk tildeling", "kompetansematching", "direkte kobling"]
  },
  {
    id: "step-5",
    num: "05",
    label: "Utførelse & FDV",
    title: "Utførelse & automatisk FDV",
    sub: "Verdisikring og overføring",
    desc: "Arbeidet utføres og dokumenteres automatisk i boligens digitale journal med bilder, kvitteringer og produktkoder. Klar i henhold til avhendingsloven.",
    visualType: "fdv_updating",
    statusBadge: "Historikk oppdatert",
    statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    signals: ["sanntids historikk", "FDV-synkronisering", "garantiregistrering"]
  }
];

export default function HowItWorksScrolly({ onOpenWaitlist }: HowItWorksScrollyProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-28 md:py-36 px-6 bg-white text-era-navy relative overflow-hidden border-t border-era-navy/5" id="hvordan-det-fungerer">
      
      {/* Background Subtle Lines Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none">
        <div 
          className="absolute inset-x-0 top-0 bottom-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #0E2341 1px, transparent 1px)`,
            backgroundSize: '80px 100%'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" id="how-it-works-title">
        
        {/* Section Header based on requirements */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block font-sans">
            HVORDAN DET FUNGERER
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0E2341] leading-[1.1] mb-5">
            Fra boligdata til utført arbeid — automatisk.
          </h2>
          <p className="text-base md:text-lg text-[#0E2341]/70 font-light leading-relaxed">
            ERA kombinerer boligdata, bilder og dokumentasjon for å oppdage vedlikeholdsbehov, foreslå tiltak og koble deg direkte med kvalifiserte håndverkere.
          </p>
        </div>

        {/* Immersive connected workflow timeline selector */}
        <div className="flex border-b border-[#0E2341]/10 mb-16 overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
          {FLOW_STEPS.map((step, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveTab(idx)}
                className={`pb-4 px-2 md:px-5 font-sans text-xs uppercase tracking-widest font-bold border-b-2 transition-all duration-300 mr-4 md:mr-6 relative outline-none flex items-center gap-2 ${
                  isSelected 
                    ? "border-era-navy text-era-navy" 
                    : "border-transparent text-era-navy/40 hover:text-era-navy/70"
                }`}
              >
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-era-navy text-white' : 'bg-era-navy/5 text-era-navy/40'
                }`}>
                  {step.num}
                </span>
                {step.label}
              </button>
            );
          })}
        </div>

        {/* Cinematic Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Dynamic Explainer Panel */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-era-gold uppercase font-bold">
                      {FLOW_STEPS[activeTab].sub}
                    </span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full border bg-white font-mono scale-95 font-bold">
                      TRINN {FLOW_STEPS[activeTab].num}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-medium tracking-tight text-[#0E2341] mt-3 mb-4 leading-tight">
                    {FLOW_STEPS[activeTab].title}
                  </h3>
                  
                  <p className="text-base text-[#0E2341]/75 leading-relaxed font-light">
                    {FLOW_STEPS[activeTab].desc}
                  </p>
                </div>

                {/* Living system features for this specific stage */}
                <div className="p-5 bg-era-ivory/50 border border-era-navy/5 rounded-xl space-y-3">
                  <span className="text-[8px] font-mono tracking-widest text-era-navy/50 font-bold block uppercase">SYSTEMPROSESSER</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {FLOW_STEPS[activeTab].signals.map((signal) => (
                      <div key={signal} className="flex items-center gap-2 text-xs font-mono text-era-navy/80">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0" />
                        <span>{signal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vipps design cue */}
                <div className="flex items-center gap-3 text-xs text-era-navy/60 font-mono">
                  <span className="w-2.5 h-2.5 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center">
                    <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                  </span>
                  <span>Ingen app-tvang eller skjemaer. Alt styres sømløst via mobilen.</span>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={onOpenWaitlist}
                    className="square-button bg-era-navy text-white hover:bg-era-midnight font-bold px-8 py-4 flex items-center gap-2 shadow-lg tracking-wider text-xs uppercase transition-colors"
                  >
                    <span>Kom i gang med ERA</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Immersive Scandinavian System Visualizations */}
          <div className="lg:col-span-6 flex justify-center">
            
            <div className="w-full max-w-[420px] bg-[#FAF9F5] rounded-3xl p-6 shadow-[0_25px_60px_rgba(14,35,65,0.06)] border border-[#0E2341]/5 relative overflow-hidden text-left min-h-[420px] flex flex-col justify-between">
              
              {/* Soft visual radar mesh in background */}
              <div 
                className="absolute inset-0 opacity-[0.2]" 
                style={{
                  backgroundImage: `radial-gradient(#C8A96B 0.8px, transparent 0.8px)`,
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-era-gold/5 rounded-full blur-2xl pointer-events-none" />

              {/* Connected Header showing Micro Status Signals */}
              <div className="relative z-10 flex justify-between items-center pb-4 border-b border-[#0E2341]/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#0E2341] uppercase">
                    ERA PROSESSKONTROLL
                  </span>
                </div>
                
                {/* Active step state badge requested */}
                <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${FLOW_STEPS[activeTab].statusColor}`}>
                  ● {FLOW_STEPS[activeTab].statusBadge}
                </span>
              </div>

              {/* Immersive System Display Content */}
              <div className="relative z-10 flex-1 flex items-center justify-center py-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.97, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full"
                  >
                    
                    {/* VISUAL 1: Data Ingest & extraction */}
                    {FLOW_STEPS[activeTab].visualType === "data_ingest" && (
                      <div className="space-y-4">
                        <div className="bg-white border border-[#0E2341]/5 rounded-xl p-4 shadow-sm space-y-3 relative">
                          <div className="absolute top-3 right-3 text-[8px] font-mono text-emerald-600 bg-emerald-50 bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/10">
                            99.4% SAMSVAR
                          </div>

                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#0E2341]/5 flex items-center justify-center text-era-gold">
                              <FileText className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold font-sans text-era-navy">takstrapport-villa.pdf</p>
                              <p className="text-[9px] text-[#a19a90] font-mono">Lastet opp av bruker</p>
                            </div>
                          </div>

                          <div className="space-y-1.5 bg-era-ivory/50 p-2.5 rounded-lg border border-[#0E2341]/5">
                            <div className="flex justify-between text-[9px] font-mono">
                              <span className="text-era-navy/50">UTLEDET: Bad (2. etasje)</span>
                              <span className="font-bold text-era-navy">Byggeår: 2012</span>
                            </div>
                            <div className="flex justify-between text-[9px] font-mono">
                              <span className="text-era-navy/50">UTLEDET: Sluktype</span>
                              <span className="font-bold text-era-navy">Sintef-godkjent joti</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-[8px] font-mono tracking-wider uppercase text-emerald-600 font-bold">
                              Boligprofil trygt etablert i skyen
                            </span>
                          </div>
                        </div>

                        {/* Secondary status queue in the margins */}
                        <div className="flex justify-between items-center text-[8px] font-mono text-era-navy/40 px-1">
                          <span>BEHANDLET: 25.05.2026</span>
                          <span>DOK_ID: ERA-99210-NO</span>
                        </div>
                      </div>
                    )}

                    {/* VISUAL 2: AI image analysis & risk metric */}
                    {FLOW_STEPS[activeTab].visualType === "ai_vision" && (
                      <div className="space-y-4">
                        <div className="border border-era-navy/10 bg-white overflow-hidden rounded-xl relative shadow-sm">
                          <div className="h-32 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400')" }}>
                            {/* Visual tracking crosshair overlays */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <div className="w-20 h-20 border-2 border-dashed border-era-gold/60 rounded-full animate-spin [animation-duration:15s]" />
                              <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                            </div>
                            <div className="absolute bottom-2 left-2 bg-red-500 text-white text-[8px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded">
                              RISIKOSONE ID-44
                            </div>
                          </div>
                          
                          <div className="p-3.5 space-y-1">
                            <h4 className="text-[10px] uppercase font-mono tracking-wider text-era-navy/50 font-bold">ANALYSERAPPORT</h4>
                            <p className="text-xs text-era-navy font-semibold leading-relaxed">
                              Overflateslitasje på fuger og hjørnesone registrert. Sprekk i fuge funnet.
                            </p>
                            <div className="flex items-center gap-2 pt-1">
                              <span className="text-[9px] font-bold text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded">
                                Tiltak: Fugemasse ettersyn
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* VISUAL 3: intelligent estimation */}
                    {FLOW_STEPS[activeTab].visualType === "price_estimation" && (
                      <div className="space-y-4">
                        <div className="bg-white border border-[#0E2341]/5 rounded-xl p-4 shadow-sm space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[8px] font-mono tracking-widest text-[#a19a90] uppercase font-bold">KONTRAKTSOMFANG</span>
                            <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-500/5 px-2 py-0.5 rounded">FASTPRISSJEKK</span>
                          </div>

                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between items-center pb-2 border-b border-era-navy/5">
                              <span className="text-era-navy/60 font-light">Utbedring av fugebad</span>
                              <span className="font-semibold text-era-navy">kr 1 900,-</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-era-navy/5">
                              <span className="text-era-navy/60 font-light">Spesialmateriell & lakk</span>
                              <span className="font-semibold text-era-navy">Inkludert</span>
                            </div>
                            <div className="flex justify-between items-center text-sm font-bold text-era-navy mt-1">
                              <span>Totalberegnet kostnad</span>
                              <span className="text-era-navy">kr 1 900,-</span>
                            </div>
                          </div>

                          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-2.5 text-center text-[9px] font-mono font-medium text-emerald-700">
                            🛡️ Garantert mot prisavvik over 10%
                          </div>
                        </div>
                      </div>
                    )}

                    {/* VISUAL 4: Matching dispatch */}
                    {FLOW_STEPS[activeTab].visualType === "dispatch_match" && (
                      <div className="space-y-4">
                        <div className="bg-white border border-[#0E2341]/5 rounded-xl p-4 shadow-sm space-y-3">
                          <span className="text-[8px] font-mono text-era-gold font-bold block uppercase tracking-wider">MATCHEDE LOKALE BEDRIFTER</span>
                          
                          <div className="divide-y divide-[#0E2341]/5">
                            <div className="py-2.5 flex items-center justify-between first:pt-0">
                              <div className="space-y-0.5">
                                <p className="text-xs font-bold text-[#0E2341]">Oslo VVS AS</p>
                                <p className="text-[9px] text-[#a19a90] font-light font-mono">★★★★★ 4.9 • 3.2km unna</p>
                              </div>
                              <span className="text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded">
                                TILGJENGELIG NÅ
                              </span>
                            </div>

                            <div className="py-2.5 flex items-center justify-between">
                              <div className="space-y-0.5">
                                <p className="text-xs font-bold text-[#0E2341]">Våtromseksperten Viken</p>
                                <p className="text-[9px] text-[#a19a90] font-light font-mono">★★★★★ 4.8 • Sentralt godkjent</p>
                              </div>
                              <span className="text-[9px] font-mono font-bold bg-era-navy/5 text-era-navy/50 px-2 py-0.5 rounded">
                                LEDIG ONSDAG
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* VISUAL 5: FDV Sync */}
                    {FLOW_STEPS[activeTab].visualType === "fdv_updating" && (
                      <div className="space-y-4">
                        <div className="bg-white border border-emerald-500/20 rounded-xl p-4 shadow-sm space-y-3">
                          <div className="flex justify-between items-center bg-emerald-500/5 p-2 rounded-lg border border-emerald-500/10">
                            <div className="flex items-center gap-1.5">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">
                                PROSESS FULLFØRT
                              </span>
                            </div>
                            <span className="text-[9px] text-[#a19a90] font-mono">Bank-ID signert</span>
                          </div>

                          <div className="p-2.5 bg-era-ivory/30 space-y-1.5 rounded-lg border border-[#0E2341]/5">
                            <p className="text-[11px] font-semibold text-era-navy">Garanti og FDV låst til Boligminnet:</p>
                            <ul className="text-[9px] font-mono text-era-navy/70 space-y-1">
                              <li>• Produkt fargenøkkel: S2500-N Jotun</li>
                              <li>• Tetthetssertifikat bad registrert</li>
                              <li>• Trygg overdragelse ved ev. boligsalg</li>
                            </ul>
                          </div>

                          <div className="text-[9px] text-[#a19a90] text-center font-sans tracking-tight">
                            Oppdatert i henhold til kravene i avhendingsloven av 2022.
                          </div>
                        </div>
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Connected bottom micro live status loop - displaying the user-requested indicators */}
              <div className="relative z-10 p-3 bg-white border border-[#0E2341]/10 rounded-xl space-y-2 font-mono">
                <span className="text-[8px] font-bold text-[#a19a90] block uppercase tracking-wider">AKTIV STATUSSTRØM</span>
                <div className="grid grid-cols-2 gap-2 text-[9px]">
                  <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                    <span>Analyse aktiv</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 font-medium opacity-80">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span>Fastpris generert</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 font-medium opacity-80">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span>FDV synkronisert</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-500 font-medium">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    <span>Kontroll innen 11 mnd</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
