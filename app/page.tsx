"use client";
import HomeSection from "./components/HomeSection";
import NavImage from "./components/NavImage";
import Navbar from "./components/Navbar";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";
import ScrollToTop from "./components/ScrollToTop";
import { ModeProvider } from "./contexts/ModeContext";
import Footer from './components/Footer'

export default function Home() {


  return (
    <ModeProvider>
      <div className=" background dark:bg-dark-mode relative   ">
        <Navbar   />

        

        <NavImage />

        <HomeSection />
        <FeaturesSection />
        <TeamSection />

        <ScrollToTop />
        <Footer/>
        
      </div>
    </ModeProvider>
  );
}
