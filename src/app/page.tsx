import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Sustainability from "@/components/Sustainability";
import AcademicExcellence from "@/components/AcademicExcellence";
import HolisticDevelopment from "@/components/HolisticDevelopment";
import FoundationYears from "@/components/FoundationYears";
import Community from "@/components/Community";
import Admissions from "@/components/Admissions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Sustainability />
      <AcademicExcellence />
      <HolisticDevelopment />
      <FoundationYears />
      <Community />
      <Admissions />
      <Footer />
    </main>
  );
}
