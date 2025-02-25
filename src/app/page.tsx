import CharitySection from "./components/CharitySection";
import DonorSection from "./components/DonorSection";
import HeroSection from "./components/HeroSection";
import ServiceCards from "./components/ServicesCards";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HeroSection />
        <ServiceCards />
        <CharitySection />
        <DonorSection />
      </main>
    </div>
  );
}
