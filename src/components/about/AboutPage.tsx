import { motion } from 'motion/react';
import { Sparkles, Shield, Compass, CheckCircle2, RefreshCw, Layers, ArrowUpRight, Cpu } from 'lucide-react';

export default function AboutPage() {
  const continuousSteps = [
    {
      number: "01",
      title: "Syntetisk og løpende overvåking",
      desc: "Eiendommen analyseres kontinuerlig mot mikroklimatiske endringer, materialtretthet og offentlige registre. Autonome agenter kalkulerer restlevetid i sanntid."
    },
    {
      number: "02",
      title: "Semantisk datatolkning",
      desc: "Ustrukturerte dokumenter, FDV-filer, bilder og takster tolkes med nevrale nettverk og struktureres inn i en felles, levende boligmodell i samsvar med avhendingsloven."
    },
    {
      number: "03",
      title: "Autonom planlegging",
      desc: "Proaktiv og prediktiv forebygning er programmert direkte inn i systemet. Vedlikeholdsruting planlegges og optimaliseres automatisk før uforutsette kriser oppstår."
    },
    {
      number: "04",
      title: "Verifisert historikkbygning",
      desc: "Hvert eneste inngrep, fargekode og produkt lagres og låses i boligens digitale journal – ferdig formatert og indeksert for en friksjonsfri fremtidig overdragelse."
    },
    {
      number: "05",
      title: "Automatisert tildeling og oppfølging",
      desc: "ERA spesifiserer oppdraget, gjør maskinell priskalkulering og ruter oppgaven direkte til sertifiserte partnere uten mellomledd, med automatisk FDV-oppdatering ved fullførelse."
    }
  ];

  return (
    <div className="bg-era-ivory text-era-navy min-h-screen font-sans" id="about-page-root">
      
      {/* Editorial Hero: The Manifesto */}
      <section className="pt-48 pb-28 px-6 bg-[#0E2341] text-white relative overflow-hidden" id="about-hero">
        {/* Architectural backdrop line work */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] block font-sans">
              STRATEGISK INFRASTRUKTUR
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.05] font-sans">
              Intelligent infrastruktur for <br className="hidden sm:block" />
              <span className="text-white/60">automatisk boligforvaltning.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#a3b8cc] font-light leading-relaxed max-w-2xl pt-2">
              ERA bygger broen mellom passive eiendomsdata, kunstig intelligens og fysisk utførelse. Vi gjør passive dokumenter interaktive og ruter kvalifiserte oppdrag direkte til sertifiserte fagfolk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Core Shift Feature grid */}
      <section className="py-24 md:py-36 px-6" id="about-narrative">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            
            {/* Column 1: Core thesis statement */}
            <div className="md:col-span-12 space-y-12 mb-8">
              <div className="h-[2px] w-12 bg-era-gold" />
              <p className="text-2xl md:text-3xl text-[#0E2341] font-light leading-relaxed tracking-tight">
                Vi gjør passive dokumenter, glemte FDV-permer og fragmenterte vedlikeholdsprosesser om til en <span className="font-normal text-era-navy border-b border-era-gold/40">levende ontologi</span> og autonome arbeidsflyter for alle involverte parter.
              </p>
            </div>

            {/* Column 2: The Loop process description */}
            <div className="md:col-span-8 space-y-6">
              <p className="text-base text-[#0E2341]/80 font-light leading-relaxed">
                ERA forener Computer Vision, maskinlæring og dyp fagkunnskap i ett integrert system. Fra det øyeblikket du tar et bilde av et problem eller laster opp en FDV-rapport, analyserer vi behovene, estimerer kostnadene og sikrer at sertifiserte fagfolk utfører oppdraget i tråd med gjeldende regelverk under full kontroll.
              </p>
              <p className="text-base text-[#0E2341]/80 font-light leading-relaxed">
                Dette er fremtidens eiendomsintelligens – der eiendommen selv oppdager slitasje, forebygger alvorlige fuktskader, og overleverer et feilfritt digitalt Boligminne ved eierskifte.
              </p>
            </div>

            <div className="md:col-span-4 bg-white p-6 border border-era-navy/5 rounded-xl space-y-4 shadow-sm">
              <Cpu className="w-5 h-5 text-era-gold" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0E2341]">INTELLIGENT SYSTEM</h3>
              <p className="text-xs text-[#0E2341]/70 font-light leading-relaxed">
                Maskinell strukturering. Våre agenter vasker, rydder og normaliserer rådata i sanntid fra det øyeblikket du kobler til huset.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The Continuous Future Loop (5 steps list) */}
      <section className="py-24 md:py-32 px-6 bg-white border-y border-era-navy/5" id="continuous-loop">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-left mb-16 space-y-4">
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] block">
              SYSTEMARKITEKTUR
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0E2341]">
              Den kontinuerlige, lukkede verdikjeden:
            </h2>
          </div>

          <div className="divide-y divide-era-navy/10">
            {continuousSteps.map((step, idx) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="py-12 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 group hover:bg-era-ivory/20 px-4 -mx-4 rounded-xl transition-all duration-300"
                id={`loop-step-${step.number}`}
              >
                {/* Step number in typewriter code look */}
                <span className="text-xs font-mono font-bold tracking-widest text-era-gold pt-1">
                  // {step.number}
                </span>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-medium text-[#0E2341]">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#0E2341]/70 font-light leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>

                <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  <span>KONTINUERLIG</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* The Vipps Metaphor block */}
      <section className="py-24 md:py-36 px-6 bg-era-ivory relative overflow-hidden" id="about-quote">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          
          <div className="flex justify-center">
            <div className="p-4 bg-white rounded-full border border-era-navy/5 shadow-md">
              <Sparkles className="w-6 h-6 text-era-gold animate-pulse" />
            </div>
          </div>

          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-[#0E2341] font-light font-sans tracking-tight leading-relaxed max-w-2xl mx-auto">
            &ldquo;Fremtidens boligoppfølging skal utføres av intelligente, autonome systemer – like enkelt som Vipps forvandlet betalingsflyten.&rdquo;
          </blockquote>

          <div className="pt-4">
            <p className="text-xs font-mono tracking-widest uppercase text-era-navy/50">
              ERA PROPERTY INFRASTRUCTURE • ETABLERT 2026
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
