import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="bg-[#fdf7f2] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HeroSection />
      </main>
    </div>
  );
}
