import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import WhyChooseUs from "@/components/WhyChooseUs";
import JourneyStats from "@/components/JourneyStats";
import PremiumServices from "@/components/PremiumServices";
import Pricing from "@/components/Pricing";
import GlobalPresence from "@/components/GlobalPresence";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--bg-primary)" }}>
      <Navbar />
      <Hero />
      <Ticker />
      <WhyChooseUs />
      <JourneyStats />
      <PremiumServices />
      <Pricing />
      <GlobalPresence />
      <Footer />
    </main>
  );
}
