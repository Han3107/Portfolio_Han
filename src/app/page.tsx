import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import TechStack from "@/components/home/TechStack";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import GitHubActivity from "@/components/home/GitHubActivity";
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
      <GitHubActivity />
      <CertificationsPreview />
      <MemoriesGallery />
      <ContactCTA />
    </>
  );
}
