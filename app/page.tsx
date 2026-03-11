import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { AppDownload } from "@/components/sections/AppDownload";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <AppDownload />
      <ContactCTA />
    </>
  );
}
