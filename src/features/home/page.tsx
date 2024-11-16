import AboutSection from "@/features/home/components/AboutSection";
import HeroSection from "./components/Jumbotron";
import TestiSection from "../../components/TestiSection";
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TestiSection />
    </div>
  );
};

export default HomePage;
