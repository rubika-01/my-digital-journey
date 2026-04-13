import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import IEEESection from "@/components/portfolio/IEEESection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SocialActivitiesSection from "@/components/portfolio/SocialActivitiesSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <AchievementsSection />
      <IEEESection />
      <CertificationsSection />
      <ExperienceSection />
      <SocialActivitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
