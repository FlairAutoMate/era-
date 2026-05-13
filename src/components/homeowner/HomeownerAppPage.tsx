import HomeHero from './HomeHero';
import EraInsight from './EraInsight';
import PrimaryAction from './PrimaryAction';
import PropertyHistory from './PropertyHistory';
import PropertyProfile from './PropertyProfile';
import AppNav from './AppNav';

export default function HomeownerAppPage() {
  return (
    <div className="bg-white min-h-screen pb-40">
      <HomeHero />
      <EraInsight />
      <PrimaryAction />
      <PropertyHistory />
      <PropertyProfile />
      <AppNav />
    </div>
  );
}
