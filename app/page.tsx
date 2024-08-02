"use client";
import HomeSection from "./components/HomeSection";
import NavImage from "./components/NavImage";
import Navbar from "./components/Navbar";
import FeaturesSection from "./components/FeaturesSection";
import { useState } from "react";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className=" relative background dark:bg-dark-mode  ">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <NavImage  />

      <HomeSection darkMode={darkMode} />
      <FeaturesSection />
    </div>
  );
}
