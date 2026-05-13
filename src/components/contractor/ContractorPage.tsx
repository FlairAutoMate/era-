import ContractorHero from './ContractorHero';
import ContractorVisual from './ContractorVisual';
import ContractorDetails from './ContractorDetails';
import ContractorSteps from './ContractorSteps';
import ContractorFeatures from './ContractorFeatures';

export default function ContractorPage() {
  return (
    <div className="bg-era-ivory min-h-screen">
      <ContractorHero />
      <ContractorVisual />
      <ContractorDetails />
      <ContractorSteps />
      <ContractorFeatures />
    </div>
  );
}
