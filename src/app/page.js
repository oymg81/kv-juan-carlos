import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import EditorialStatement from "@/components/sections/EditorialStatement";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import AboutKV from "@/components/sections/AboutKV";
import Testimonials from "@/components/sections/Testimonials";
import Showrooms from "@/components/sections/Showrooms";
import DestinationExperience from "@/components/sections/DestinationExperience";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <EditorialStatement />
      <Experience />
      <Services />
      <Process />
      <AboutKV />
      <Testimonials />
      <Showrooms />
      <DestinationExperience />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
