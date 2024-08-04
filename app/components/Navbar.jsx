"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import darkLogo from "@/public/logo-hidden.svg";
import { DrawerComponent } from "./Drawer";
import { SearchModal } from "./SearchModal";
import { IoIosArrowDown } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { useDark } from "../contexts/ModeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const {darkMode,toggleDark,toggleLight}=useDark()

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
    <nav className="navigation  relative  flex items-center justify-between px-4 lg:px-0 lg:justify-around py-4 z-50">
      <Link href="">
        <Image
          src={darkMode ? darkLogo : logo}
          width={150}
          height={150}
          alt="header logo"
        />
      </Link>

      <ul className=" hidden lg:flex list  gap-[3rem] text-[1.05rem] font-middle text-[#637381] dark:text-white ">
        <Link href="/#home">Home</Link>

        <Link href="/#features">Features</Link>

        <Link href="">Roadmap</Link>

        <div
          initial={{ rotate: 0 }}
          className="relative"
          onMouseEnter={handleHover}
        >
          <div className="page flex items-center    ">
            <Link href="">Pages</Link>
            <IoIosArrowDown
              className={`${
                isHover ? "rotate-180" : "rotate-0"
              }  transition-all `}
            />
          </div>

          <div
            onMouseLeave={HandleUnHover}
            className={`${
              isHover ? "fade-in h-auto" : "hidden h-0"
            }         flex flex-col gap-4 transition-all bg-white dark:bg-black dark:text-white text-[1rem] text-black absolute rounded-2xl shadow-lg px-6 py-5 w-[15rem]  top-[3rem] left-[50%] translate-x-[-50%] z-10  `}
          >
            <Link href=""> Blog Grid Page</Link>
            <Link href="">Token Sale Page</Link>
            <Link href="">Support Page</Link>
            <Link href="">Signin Page</Link>
            <Link href="">Signup Page</Link>
          </div>
        </div>

        <Link href="">Support</Link>
      </ul>

      <div className="flex justify-normal items-center gap-4">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-white dark:bg-black   p-2 hidden md:block  rounded-full "
        >
          <IoIosSearch className=" dark:text-white text-xl" />
        </button>
        <SearchModal openModal={openModal} setOpenModal={setOpenModal} />

        <div className="bg-[#f5f8ff] dark:bg-[#1e2763] p-2 rounded-full flex gap-1  items-center">
          <button
            onClick={toggleLight}
            className="dark:bg-white  bg-[#3e7dff] rounded-full p-1"
          >
            <IoSunny className="text-white dark:text-black" />
          </button>

          <button
            onClick={toggleDark}
            className="dark:bg-[#3e7dff] bg-white rounded-full p-1"
          >
            <IoMoon className="dark:text-white" />
          </button>
        </div>
        <Link
          href=""
          className=" hidden md:block  Sign-btn bg-transparent border border-solid py-2 px-8 text-[#637381] border-[#637381] dark:text-white dark:hover:bg-white dark:hover:text-[#3e7dff]  rounded-full "
        >
          Sign In
        </Link>

        <FaBars
          className="md:hidden  dark:text-white text-[1.5rem] transition-colors "
          onClick={() => setIsOpen(true)}
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
