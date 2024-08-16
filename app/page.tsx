"use client";

import HomeSection from "../src/components/HomeSection";
import NavImage from "../src/components/NavImage";
import Navbar from "../src/components/Navbar";
import FeaturesSection from "../src/components/FeaturesSection";
import TeamSection from "../src/components/TeamSection";
import ScrollToTop from "../src/components/ScrollToTop";
import { ModeProvider } from "../src/contexts/ModeContext";
import Footer from '../src/components/Footer'

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
