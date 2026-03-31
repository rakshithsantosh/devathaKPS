import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LegacyTransformation from "@/components/LegacyTransformation";
import Story from "@/components/Story";
import Sustainability from "@/components/Sustainability";
import AcademicExcellence from "@/components/AcademicExcellence";
import HolisticDevelopment from "@/components/HolisticDevelopment";
import CulturalValues from "@/components/CulturalValues";
import FoundationYears from "@/components/FoundationYears";
import Community from "@/components/Community";
import Admissions from "@/components/Admissions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <LegacyTransformation />
      <Story />
      <Sustainability />
      <AcademicExcellence />
      <HolisticDevelopment />
      <CulturalValues />
      <FoundationYears />
      <Community />
      <Admissions />
      <Footer />
    </main>
  );
}
