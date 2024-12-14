import AreLandlord from "@/components/Home/AreLandlord";
import Hero from "@/components/Home/Hero";
import HowItWork from "@/components/Home/HowItWork";
import PropertyDemand from "@/components/Home/PropertyDemand";
import TrustPilot from "@/components/Shared/TrustPilot";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustPilot showGrow={true} showTrustPilot={true} />
      <HowItWork />
      <PropertyDemand />
      <AreLandlord />
    </>
  );
}
