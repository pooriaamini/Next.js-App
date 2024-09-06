import HomeSection from "./components/HomeSection";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";

export default function Home() {
  return (
    <div className="pt-16">
        <HomeSection />
        <FeaturesSection />
        <TeamSection />
    </div>
  )
}
