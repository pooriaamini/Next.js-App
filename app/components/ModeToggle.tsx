"use client";

import * as React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const {theme, setTheme } = useTheme();

  
  

  return (
    <div className="bg-[#f5f8ff] dark:bg-[#1e2763] p-1 md:p-2 rounded-full flex gap-1  items-center">
      <button
        onClick={() => setTheme("light")}
        className="dark:bg-white  bg-[#3e7dff] rounded-full p-1"
      >
        <IoSunny className="text-white dark:text-black" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className="dark:bg-[#3e7dff] bg-white rounded-full p-1"
      >
        <IoMoon className="dark:text-white" />
      </button>
    </div>
  );
}
