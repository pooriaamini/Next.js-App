"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import darkLogo from "../../public/icons/logo-hidden.svg";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/app/components/ModeToggle";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

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
    path: "#/page",
  },
  {
    name: "Support",
    path: "#support",
  },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    setIsSticky(offset > 50);
  }, []);

  useEffect(() => {
    // چک کردن وضعیت اسکرول هنگام بارگذاری صفحه
    const offset = window.scrollY;
    setIsSticky(offset > 50);

    // اضافه کردن event listener برای اسکرول
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <header
        className={`sticky top-0 w-full flex items-center justify-between px-4 py-4 z-50
          ${
            isSticky
              ? "bg-white dark:bg-[#131b4dcc] bg-opacity-80 backdrop-blur-sm dark:bg-dark dark:bg-opacity-80"
              : "bg-transparent dark:bg-transparent"
          }`}
      >
        <div className="">
          <Image  className="w-40" src={theme == "dark" ? darkLogo : logo} alt="header logo" />
        </div>
        <ul className="hidden lg:flex gap-[3rem] text-[1.05rem] font-medium text-[#637381] dark:text-white">
          {navItems.map((item, index) => (
            <li className="hover:text-[#3e7dff] transition-colors" key={index}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link
            href="/auth/signin"
            className="hidden md:block bg-transparent border border-solid py-2 px-8 text-[#637381] hover:border-transparent border-[#637381] dark:text-white dark:hover:bg-white dark:hover:text-[#3e7dff] rounded-full"
          >
            Sign In
          </Link>
          <button onClick={() => setIsOpen(true)} className="text-black dark:text-white md:hidden">
            <FaBars className="text-lg" />
          </button>
        </div>
      </header>

      {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
