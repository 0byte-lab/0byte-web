import DeveloperSection from "@/components/DeveloperSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Newsletter from "@/components/Newsletter";
import Outro from "@/components/Outro";
import Usecase from "@/components/Usecase";

export default function Home() {
  return (
    <div className="">
      {/* <Header /> */}
      <Hero />
      <FeatureSection />
      <HowItWorks />
      <Usecase />
      <DeveloperSection />
      <Outro />
      <Newsletter />
      <Footer />
    </div>
  );
}
