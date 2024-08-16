

import HomeSection from "./components/HomeSection";
import NavImage from "./components/NavImage";
import Navbar from "./components/Navbar";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";
import ScrollToTop from "./components/ScrollToTop";
import { ModeProvider } from "./contexts/ModeContext";
import Footer from "./components/Footer";

export default function Home() {
  return (

    <div className=" background dark:bg-dark-mode relative   ">
      <ModeProvider>
        <Navbar />

        <NavImage />

        <HomeSection />
        <FeaturesSection />
        <TeamSection />

        <ScrollToTop />
        <Footer />
      </ModeProvider>

    </div>
  );
}
