"use client";
import HomeSection from "./components/HomeSection";
import NavImage from "./components/NavImage";
import Navbar from "./components/Navbar";
import FeaturesSection from "./components/FeaturesSection";
import { useState } from "react";
import TimeLine from "./components/TimeLine";
import { ModeProvider, useDark } from "./contexts/ModeContext";


export default function Home() {


  return (
    <ModeProvider>
      <div className=" background dark:bg-dark-mode   ">
        <Navbar  />

        <NavImage />

        <HomeSection  />
        <FeaturesSection />

        <TimeLine />
      </div>
    </ModeProvider>
  );
}

