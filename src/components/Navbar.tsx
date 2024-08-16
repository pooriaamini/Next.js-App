"use client";
import { useState, useEffect, useCallback } from "react";
import { useDark } from "../contexts/ModeContext";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import darkLogo from "../../public/icons/logo-hidden.svg";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

const navItems = [
  {
    name : "Home",
    path: "/#home",
  },
  {
    name: "Features",
    path: "/#features",
  },
  {
    name: "Team",
    path: "/#team",
  },
  {
    name: "Pages",
    path: "#/roadmap",
  },
  {
    name: "Support",
    path: "#support",
  },
];


export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const { darkMode, toggleDark, toggleLight } = useDark();

  // dark moode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    setIsSticky(offset > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);


  return (
    <header
      className={` sticky top-0 bg-transparent dark:bg-transparent w-full    flex items-center justify-between  px-4   py-4 z-50 ${
        isSticky
          ? " bg-white  dark:bg-[#131b4dcc] bg-opacity-80 backdrop-blur-sm dark:bg-dark dark:bg-opacity-80"
          : "  "
      }  `}
    >
      <div className="">
        <Image
          src={darkMode ? darkLogo : logo}
          width={150}
          height={150}
          alt="header logo"
        />
      </div>

      
        <ul className=" hidden lg:flex list  gap-[3rem] text-[1.05rem] font-middle text-[#637381] dark:text-white ">
          {navItems.map((item, index) => {
            return (
              <li
                className="hover:text-[#3e7dff] transition-colors"
                key={index}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-normal items-center gap-4  ">
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
            className=" hidden md:block  Sign-btn bg-transparent border border-solid py-2 px-8 text-[#637381] hover:border-transparent border-[#637381] dark:text-white dark:hover:bg-white dark:hover:text-[#3e7dff]  rounded-full "
          >
            Sign In
          </Link>
          <FaBars 
          className="md:hidden  dark:text-white text-[1.5rem] transition-colors "
        />

        </div>
      
    


    
    </header>
  );
}
