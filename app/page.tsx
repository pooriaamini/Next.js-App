"use client";
import HomeSection from "./components/HomeSection";
import NavImage from "./components/NavImage";
import Navbar from "./components/Navbar";
import FeaturesSection from "./components/FeaturesSection";
import { useState } from "react";
import TimeLine from './components/TimeLine'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className=" background dark:bg-dark-mode   ">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <NavImage  />

      <HomeSection darkMode={darkMode} />
      <FeaturesSection />

      <TimeLine/>


      

    </div>
  );
}

