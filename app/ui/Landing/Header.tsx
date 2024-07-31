"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import dropdown from "@/public/dropdown.svg";
import search from "@/public/search.svg";
import light from "@/public/light.svg";
import dark from "@/public/dark.svg";
import bar from "@/public/bar.svg";
import { useState, useEffect } from "react";
import { DrawerComponent } from "./Drawer";
import { SearchModal } from "./SearchModal";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [openModal, setOpenModal] = useState(false);


  // dark moode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // dropdown toggle

  const handleHover = () => {
    setIsHover(true);
    
  };

  const HandleUnHover = () => {
    setIsHover(false);
  };

  // drawer toogle
  const handleClose = () => setIsOpen(false);


  return (
    <nav className="navigation  flex items-center justify-between px-4 lg:px-0 lg:justify-around py-4    ">
      <Image src={logo} width={150} height={150} alt="header logo" />

      <ul className=" hidden lg:flex list  gap-[3rem] text-[1.05rem] font-middle text-[#637381] ">
        <li className="item">
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">Features</Link>
        </li>
        <li>
          <Link href="">Roadmap</Link>
        </li>

        <li  onMouseEnter={handleHover} className="relative">
          <div className="page flex    ">
            <Link href="">Pages</Link>
            <Image className="" src={dropdown} alt="dropicon" />
          </div>
          <div
            onMouseLeave={HandleUnHover}
            className={`${
              isHover ? "flex flex-col gap-4" : "hidden"
            }         bg-white text-[1rem] text-black absolute rounded-2xl shadow-lg px-6 py-5 w-[15rem]  top-[3rem] left-[50%] translate-x-[-50%] z-10  `}
          >
            <Link  href=''> Blog Grid Page</Link>
            <Link href=''>Token Sale Page</Link>
            <Link href=''>Support Page</Link>
            <Link href=''>Signin Page</Link>
            <Link href=''>Signup Page</Link>
          </div>
        </li>

        <li>
          <Link href="">Support</Link>
        </li>
      </ul>

      <div className="flex justify-normal items-center gap-4">
        <button onClick={() => setOpenModal(true)} className="bg-white p-2 hidden md:block  rounded-full ">
          <Image className="" src={search} alt="searchicon" />
        </button>
        <SearchModal openModal={openModal} setOpenModal={setOpenModal} />

        <div className="bg-[#f5f8ff] p-2 rounded-full flex gap-1  items-center">
          <button
            onClick={() => setDarkMode(false)}
            className="bg-[#3e7dff] rounded-full p-1"
          >
            <Image className="" src={light} alt="light" />

          </button>

          <button
            onClick={() => setDarkMode(true)}
            className="bg-[#3e7dff] rounded-full p-1"
          >
            <Image className=" " src={dark} alt="dark" />
          </button>
        </div>
        <div className=" hidden md:block  Sign-btn bg-transparent border border-solid py-2 px-8 text-[#637381] border-[#637381] rounded-full ">
          Sign In
        </div>
        <Image
          onClick={() => setIsOpen(true)}
          width={35}
          height={30}
          className="md:hidden text-[2rem]"
          src={bar}
          alt="toggle"
        />
      </div>
      <DrawerComponent
        handleClose={handleClose}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </nav>
  );
}
