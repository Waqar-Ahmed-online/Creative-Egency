import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import RightDock from "@/components/layout/RightDock";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CaseStudiesSection from "@/components/sections/case-studies/CaseStudiesSection";
import GrowthProcessSection from "@/components/sections/GrowthProcessSection";
import Hero from "@/components/sections/Hero";
import MarqueeBar from "@/components/sections/MarqueeBar";
import OurSolutionsSection from "@/components/sections/OurSolutionsSection";
import PricingSection from "@/components/sections/pricing/PricingSection";
import StatsMarquee from "@/components/sections/StatsMarquee";
import TeamSection from "@/components/sections/TeamSection";
import TrustedSection from "@/components/sections/trusted/TrustedSection";
import WhatWeDoSection from "@/components/sections/what-we-do/WhatWeDoSection";
import WorkProcessSection from "@/components/sections/WorkProcessSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white text-black">
      <Header />
      <Hero />
      {/* <RightDock /> */}
      <WhatsAppButton/>
      <MarqueeBar />
      <TrustedSection />
      <WhatWeDoSection />
      <StatsMarquee />
      <CaseStudiesSection />
      <OurSolutionsSection />
      <WorkProcessSection />
      <TeamSection />
      <GrowthProcessSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
