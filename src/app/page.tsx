import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import TechStack from "@/components/home/TechStack";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CertificationsPreview from "@/components/home/CertificationsPreview";
import MemoriesGallery from "@/components/home/MemoriesGallery";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <TechStack />
      <FeaturedProjects />
      <CertificationsPreview />
      <MemoriesGallery />
      <ContactCTA />
    </>
  );
}
