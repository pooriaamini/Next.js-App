

import HomeSection from "./components/HomeSection";
import NavImage from "./components/NavImage";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

export default function Home() {
  return (

    <div className="  pt-16   ">
     
   
        <NavImage />
        <HomeSection />
        <FeaturesSection />
        <TeamSection />

        <ScrollToTop />
        <Footer />
     

    </div>
  );
}
