import React from 'react';
import { ShieldCheck, Lock, Landmark, FileCheck } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden border-t border-era-navy/5" id="sikkerhet-data">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Bold Statement of Ownership */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] block font-sans">
              TRYGGHET & EIERSKAP
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] text-era-navy tracking-tight">
              Eiendomsdataene er dine. 100% eierskap.
            </h2>
            <p className="text-era-navy/70 text-base font-light leading-relaxed max-w-lg">
              ERA verken selger eller deler dine opplysninger med tredjeparter. Du beholder fullt eierskap til ditt Boligminne, som enkelt følger eiendommen og kan overføres til ny eier ved salg.
            </p>
          </div>

          {/* Right Block: Three Pillars of Integrity */}
          <div className="lg:col-span-7 grid md:grid-cols-3 gap-8">
            
            {/* Pillar 1: BankID */}
            <div className="space-y-4">
              <div className="w-10 h-10 bg-era-ivory flex items-center justify-center text-era-navy rounded-xl">
                <Lock className="w-5 h-5 text-era-navy" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-era-navy">BankID-sikkert</h3>
              <p className="text-xs text-era-navy/60 font-light leading-relaxed">
                Vi verifiserer eierskap til eiendommen mot tinglyste data og BankID, slik at ingen uvedkommende får innsyn.
              </p>
            </div>

            {/* Pillar 2: Compliant with Norwegian standards */}
            <div className="space-y-4">
              <div className="w-10 h-10 bg-era-ivory flex items-center justify-center text-era-navy rounded-xl">
                <FileCheck className="w-5 h-5 text-era-navy" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-era-navy">Forskriftsmessig</h3>
              <p className="text-xs text-era-navy/60 font-light leading-relaxed">
                All dokumentasjon oppfyller lovpålagte standarder (f.eks. avhendingsloven), noe som gir deg fulle rettigheter ved forsikringssaker.
              </p>
            </div>

            {/* Pillar 3: Hosting and GDPR */}
            <div className="space-y-4">
              <div className="w-10 h-10 bg-era-ivory flex items-center justify-center text-era-navy rounded-xl">
                <Landmark className="w-5 h-5 text-era-navy" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-era-navy">Sikker Lagring</h3>
              <p className="text-xs text-era-navy/60 font-light leading-relaxed">
                Kryptert og lagret etter de strengeste europeiske kravene for personvern (GDPR). Dine data er trygge hos oss.
              </p>
            </div>

          </div>

        </div>

        {/* Dynamic bottom subtle security indicator */}
        <div className="mt-20 pt-10 border-t border-era-navy/5 flex flex-wrap gap-8 justify-between items-center text-[10px] text-era-navy/40 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>KRYPTERT MED TLS 1.3 & AES-256</span>
          </div>
          <span>GDPR-SAMSVAR & DATASIKKERHET</span>
        </div>
      </div>
    </section>
  );
}
