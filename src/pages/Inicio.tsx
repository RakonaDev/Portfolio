import AboutSection from "../components/sections/AboutSection";
import BannerSection from "../components/sections/BannerSection";
import PortfolioSections from "../components/sections/PortafolioSection";
import TechSection from "../components/sections/TechSection";

export default function Inicio () {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <TechSection />
      <PortfolioSections />
    </>
  )
}