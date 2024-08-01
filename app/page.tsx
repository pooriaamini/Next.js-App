import HomeSection from "./components/HomeSection";
import NavImage from "./components/NavImage";
import Navbar from "./components/Navbar";
import FeaturesSection from "./components/FeaturesSection";

export default function Home() {
  return (
    <div className="background relative ">
      <Navbar />

      <NavImage />

      <HomeSection />
      <FeaturesSection />
    </div>
  );
}
