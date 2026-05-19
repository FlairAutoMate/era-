import ContractorHero from './ContractorHero';
import ContractorDetails from './ContractorDetails';

interface ContractorPageProps {
  onOpenWaitlist?: () => void;
}

export default function ContractorPage({ onOpenWaitlist }: ContractorPageProps) {
  return (
    <div className="bg-era-ivory min-h-screen">
      <ContractorHero onOpenWaitlist={onOpenWaitlist} />
      <ContractorDetails onOpenWaitlist={onOpenWaitlist} />
    </div>
  );
}
