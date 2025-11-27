import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import ProductGrid from "@/components/sections/ProductGrid";
import ProductTabs from "@/components/sections/ProductTabs";
import WhyPartner from "@/components/sections/WhyPartner";
import UseCases from "@/components/sections/UseCases";
import HowWeWork from "@/components/sections/HowWeWork";
import Proof from "@/components/sections/Proof";
import Team from "@/components/sections/Team";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <ProductGrid />
      <ProductTabs />
      <WhyPartner />
      <UseCases />
      <HowWeWork />
      <Proof />
      <Team />
      <ContactForm />
    </>
  );
}
