"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import darkLogo from "../../public/icons/logo-hidden.svg";
import { FaBars } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/ModeToggle";

const navItems = [
  {
    name: "Home",
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

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  
  const { theme,setTheme } = useTheme()


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
          src={theme=='dark' ? darkLogo : logo}
          width={150}
          height={150}
          alt="header logo"
        />
      </div>

      <ul className=" hidden lg:flex list  gap-[3rem] text-[1.05rem] font-middle text-[#637381] dark:text-white ">
        {navItems.map((item, index) => {
          return (
            <li className="hover:text-[#3e7dff] transition-colors" key={index}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-normal items-center gap-4  ">
       <ModeToggle/>


        <Link
          href="/auth/signin"
          className=" hidden md:block  Sign-btn bg-transparent border border-solid py-2 px-8 text-[#637381] hover:border-transparent border-[#637381] dark:text-white dark:hover:bg-white dark:hover:text-[#3e7dff]  rounded-full "
        >
          Sign In
        </Link>
        <FaBars className="md:hidden  dark:text-white text-[1.5rem] transition-colors " />
      </div>
    </header>
  );
}
