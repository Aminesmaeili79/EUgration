// import Image from "next/image";
// import { CardDemo } from "@/components/CardDemo";
import { NavBar } from "@/components/NavBar";
import { HeroSectionOne } from "@/components/HeroSectionOne";
import { HeroHighlightOne } from "@/components/HeroHighlightOne";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Testimonial } from "@/components/Testimonial";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroHighlightOne />
      <HeroSectionOne />
      <FeaturesSection />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
}
