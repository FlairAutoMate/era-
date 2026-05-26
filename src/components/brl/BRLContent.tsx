import { motion } from 'motion/react';
import { Database, Image as ImageIcon, History, FileText, Sparkles, Wrench, MessageSquare, Smartphone, Monitor, CheckCircle, ArrowRight, ArrowDown, ClipboardList, ShieldAlert, Award, ChevronRight } from 'lucide-react';

interface BRLContentProps {
  onOpenWaitlist?: () => void;
}

export default function BRLContent({ onOpenWaitlist }: BRLContentProps) {
  return (
    <div className="bg-era-ivory text-era-navy">
      
      {/* 1. Kjernen i systemet: Problemløsning og Operativ drift */}
      <section className="py-36 px-6 relative border-b border-era-navy/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block font-mono">// VERDIOPTIMALISERING</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-[#0E2341]">
              Levende eiendomsminne og smart oppfølging.
            </h2>
            <p className="text-era-navy/60 text-base md:text-lg font-light mt-6 leading-relaxed">
              Tradisjonell eiendomsdrift er preget av uforutsigbarhet, tapt dokumentasjon, og unødvendig dyre hastetiltak. ERA organiserer hele økosystemet i én digital flyt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Red / Pain Column */}
            <div className="bg-white border border-era-navy/5 p-8 md:p-12 rounded-2xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/5 border border-red-500/10 rounded-full mb-8">
                  <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
                  <span className="text-red-500 text-[9px] font-bold uppercase tracking-wider font-mono">Dagens reaktive drift</span>
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-[#0E2341]">Tidkrevende dugnadsarbeid for styret:</h3>
                
                <ul className="space-y-5">
                  {[
                    { title: "Telefoner og mailkaos", desc: "Beboere melder alt fra lyspærer til vannlekkasjer til styremedlemmer privat på e-post, kveldstid og SMS." },
                    { title: "Kunnskapen forsvinner ved valg", desc: "Historiske vedtak, fargekoder, gamle saksdokumenter og servicenøkler blir liggende i private permer." },
                    { title: "Leverandører uten system", desc: "Du leier inn rørleggere og elektrikere som skriver vage fakturaer uten at detaljene settes inn i en FDV-plan." },
                    { title: "Reaktiv brannslukking", desc: "Vedlikehold gjøres først når noe går galt, noe som unødvendig øker fellesutgiftene med inntil 40%." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="text-red-500 font-bold text-sm shrink-0 mt-0.5">✕</span>
                      <div>
                        <h4 className="text-sm font-semibold text-era-navy">{item.title}</h4>
                        <p className="text-xs text-era-navy/55 leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Gold / Gain Column */}
            <div className="bg-[#0E2341] text-white p-8 md:p-12 shadow-2xl relative overflow-hidden rounded-2xl flex flex-col justify-between border border-white/5">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Sparkles className="w-48 h-48 text-era-gold" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-era-gold/15 border border-era-gold/25 rounded-full mb-8">
                  <Sparkles className="w-3.5 h-3.5 text-era-gold animate-pulse" />
                  <span className="text-era-gold text-[9px] font-bold uppercase tracking-wider font-mono">ERA INTELLIGENS</span>
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-white text-gradient-gold">En enklere styrehverdag med ERA:</h3>
                
                <ul className="space-y-5">
                  {[
                    { title: "Enkel innsending – strukturert sortering", desc: "Beboere bruker egen app. ERA kategoriserer saker, innhenter bilder og analyserer skadeomfang automatisk." },
                    { title: "Eget digitalt boligminne", desc: "All historikk, garantier, saksdokumenter og FDV låses til eiendommen over tid, og arves automatisk av neste styre." },
                    { title: "Intelligent vedlikeholdskontroll", desc: "ERA analyserer fukt, takslitasje, dreneringsbehov og rør, og foreslår forebyggende tiltak før skader inntreffer." },
                    { title: "Full anbudskontroll", desc: "Vårt system innhenter og oversetter tilbud fra sertifiserte håndverkere, ferdig sortert etter pris, vurdering og kapasitet." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start relative z-10">
                      <span className="text-emerald-400 font-bold text-sm shrink-0 mt-0.5">✓</span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                        <p className="text-xs text-white/70 leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. To apper. Ett samlet system. (The Ecosystem interface) */}
      <section className="py-36 px-6 bg-era-midnight text-white relative overflow-hidden">
        {/* Decorative layout grid line */}
        <div className="absolute right-12 bottom-0 top-0 w-[1px] bg-white/[0.02]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block font-mono">// FULL DEKNING</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">To apper. Én komplett flyt.</h2>
            <p className="text-white/60 text-sm font-light mt-4">
              Vi kobler beboernes meldekanal sammen med styrets administrative portal for fullstendig oversikt.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Resident App Frame */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-era-gold/30 transition-all">
              <Smartphone className="absolute -right-16 -bottom-16 w-80 h-80 text-white/[0.02] pointer-events-none group-hover:scale-105 transition-transform duration-700" />
              
              <div className="relative z-10">
                <span className="text-era-gold text-[10px] font-mono font-bold tracking-[0.2em] block mb-4 uppercase">// I LOMMA PÅ BEBOERNE</span>
                <h3 className="text-3xl font-medium text-white mb-4">1. Beboer-appen</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-10 max-w-md">
                  Gjør det lekende lett for beboeren å opptre ansvarsfullt. En feil meldes på under ett minutt – rett fra mobilen.
                </p>

                <div className="space-y-4 mb-12">
                  {[
                    "Kjapp og guidet avviksrapportering med smart bildeopplasting",
                    "I-app dialog direkte med ERA (ingen støy for styret)",
                    "Live oppdateringer på saksgang fra tildeling til ferdigstillelse",
                    "Oversikt over egne felleskostnader og eierdokumenter",
                    "Push-varsler ved planlagte vannavstengninger eller feiing"
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <div className="w-5 h-5 rounded-full bg-era-gold/10 flex items-center justify-center text-era-gold border border-era-gold/20 flex-shrink-0">
                        <CheckCircle className="w-3 h-3" />
                      </div>
                      <span className="text-sm font-light text-white/80">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Simulated App Notification Snippet */}
                <div className="bg-white/[0.05] border border-white/10 p-4 rounded-xl flex items-center gap-4 max-w-md">
                  <div className="w-10 h-10 bg-era-gold/10 rounded-lg flex items-center justify-center text-era-gold border border-era-gold/20 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/40 block">VARSEL FRA ERA STYRE • AKKURAT NÅ</span>
                    <span className="text-xs text-white/90 block font-semibold">"Søknad om dyrehold godkjent." Svar sendt til beboer i #302.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Board Platform Frame */}
            <div className="bg-era-navy border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-era-gold/30 transition-all">
              <Monitor className="absolute -right-16 -bottom-16 w-80 h-80 text-white/[0.02] pointer-events-none group-hover:scale-105 transition-transform duration-700" />
              
              <div className="relative z-10">
                <span className="text-era-gold text-[10px] font-mono font-bold tracking-[0.2em] block mb-4 uppercase">// VERKTØYET FOR STYRELEDER</span>
                <h3 className="text-3xl font-medium text-white mb-4">2. Styreplattformen</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-10 max-w-md">
                  Et kontrollrom som frigjør tid. ERA automatiserer saksbehandlingen og gir styret kvalifiserte beslutningsgrunnlag på 10 sekunder.
                </p>

                <div className="space-y-4 mb-12">
                  {[
                    "Sentralisert innboks som automatisk sorterer beboerhenvendelser",
                    "Systematisert FDV som samler og verifiserer lovpålagte dokumenter",
                    "KI-drevet forslag til anbudstekst og rørlegger/VVS-valg",
                    "10-års vedlikeholdsplan med dynamisk kostnadsprognose",
                    "Sømløs eksport av årsrapporter og økonomisk historikk"
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <div className="w-5 h-5 rounded-full bg-era-gold/10 flex items-center justify-center text-era-gold border border-era-gold/20 flex-shrink-0">
                        <CheckCircle className="w-3 h-3" />
                      </div>
                      <span className="text-sm font-light text-white/80">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Simulated Portal Metrics Snippet */}
                <div className="bg-white/[0.05] border border-white/10 p-4 rounded-xl flex items-center gap-4 max-w-md">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 border border-emerald-500/20 shrink-0">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/40 block">VEDLIKEHOLDSLOGG</span>
                    <span className="text-xs text-white/90 block font-semibold">94% av alle lovpålagte kontroller er utført for 2026.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Den Sømløse prosessflyten */}
      <section className="py-36 px-6 bg-era-ivory border-b border-era-navy/5">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-era-gold font-bold uppercase tracking-[0.3em] font-mono text-[10px] mb-4 block">// SØMLØS PROSESS</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Hvordan fungerer det i praksis?</h2>
          <p className="text-era-navy/60 text-base font-light max-w-2xl mx-auto mb-20">
            Fra beboeren oppdager et avvik til oppgaven er utført, godkjent og dokumentert i boligens levende historikk. En prosess som før krevde uker med e-poster, tar nå minutter.
          </p>
          
          {/* Timeline steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left relative">
            
            {[
              { 
                step: "01", 
                title: "Beboer melder i appen", 
                desc: "Legger inn beskrivelse og laster opp bilder på sekunder i applikasjonen." 
              },
              { 
                step: "02", 
                title: "ERA analyserer saken", 
                desc: "Sjekker alvorlighetsgrad, henter historiske data og foreslår tiltak." 
              },
              { 
                step: "03", 
                title: "Styret godkjenner i portalen", 
                desc: "Styret får ferdig sortert anbud med estimat, og aksepterer med ett klikk." 
              },
              { 
                step: "04", 
                title: "Håndverker rykker ut", 
                desc: "Sertifisert partner løser problemet og merker oppgaven som utført." 
              },
              { 
                step: "05", 
                title: "Autodokumentering i FDV", 
                desc: "ERA arkiverer faktura, garantier og bilder på byggets profil for alltid." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-era-navy/5 p-6 rounded-xl flex flex-col justify-between shadow-sm relative group hover:border-era-gold/30 transition-all">
                <div>
                  <span className="text-xs font-mono font-bold text-era-gold mb-3 block">{item.step} // STAGE</span>
                  <h4 className="text-sm font-semibold text-era-navy mb-2 leading-snug">{item.title}</h4>
                  <p className="text-[11px] text-era-navy/60 leading-relaxed font-light">{item.desc}</p>
                </div>
                {i < 4 && (
                  <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 hidden md:block text-era-gold/40 z-10">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Value Props & Continuous Learning Bento Grid */}
      <section className="py-36 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-6 space-y-8">
              <span className="text-era-gold font-bold uppercase tracking-[0.3em] font-mono text-[10px] block">// INSTITUSJONELT MINNE</span>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0E2341]">
                En intelligent database som vokser med bygget.
              </h3>
              <p className="text-era-navy/70 text-base md:text-lg font-light leading-relaxed">
                Bygget ditt "husker" alt som skjer. Hver gang en lyspære skiftes, en heis inspiseres, eller taket vaskes, akkumulerer ERA kunnskap om slitasjemønsteret. Dette gjør at vi kan forutsi fremtidige vedlikeholdskostnader med kirurgisk presisjon.
              </p>

              <div className="space-y-3 pt-4">
                {[
                  "Løpende overvåking av fellesarealer og klimaslitasje",
                  "Automatisert deteksjon av repeterende rør- eller ventilasjonsproblemer",
                  "Minst mulig administrasjon ved overdragelse til ny styreledelse",
                  "Sertifisert, sikker og GDPR-samsvarende datalagring i Norge"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-era-gold rounded-full shrink-0" />
                    <span className="text-sm font-semibold text-era-navy/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side bento box */}
            <div className="lg:col-span-6 bg-era-ivory p-8 md:p-12 border border-era-navy/5 rounded-2xl flex flex-col justify-between h-[420px] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-era-navy">
                <Award className="w-48 h-48" />
              </div>

              <div>
                <span className="text-era-gold font-bold uppercase tracking-[0.3em] font-mono text-[10px] block mb-4">// MERVERDI</span>
                <h4 className="text-3xl font-medium text-era-navy mb-4 leading-tight">Ikke bare dokumenthaug.<br/>Faktisk forebygging.</h4>
                <p className="text-era-navy/60 font-light leading-relaxed text-sm md:text-base max-w-md">
                  Tradisjonelle systemer lagrer passive PDF-rapporter i en glemt skymappe. 
                  ERA konverterer disse rapportene til aktive, preventive oppgaver, verifiserer utførelse, og beskytter de samlede millionverdiene til seksjonseierne.
                </p>
              </div>

              <div className="pt-6 border-t border-era-navy/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-era-navy">Spørsmål om din eiendom?</p>
                  <p className="text-[11px] text-era-navy/55">Snakk med en rådgiver i dag.</p>
                </div>
                <button 
                  onClick={onOpenWaitlist}
                  className="bg-era-navy text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-era-navy/80 transition-colors shrink-0"
                >
                  Kontakt rådgiver
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
