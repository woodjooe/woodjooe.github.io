import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { AchievementsSectionNational, AchievementsSectionInternational } from "./components/AchievementsSection";

export default function Home() {
  return (
    <body>
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSectionNational />
        <AchievementsSectionInternational />
        <AboutSection />
        <br/>
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
    </body>
  );
}
