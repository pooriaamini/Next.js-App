"use client";

import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";

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

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (active: boolean) => void;
  
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const sidebarVariants = {
    hidden: {
      x: "100%", 
      opacity: 0,
    },
    visible: {
      x: 0, 
      opacity: 1,
      transition: {
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%", 
      opacity: 0,
      transition: {
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)} 
        />
      )}

      <motion.div
        className={`fixed top-0 right-0 h-screen w-[60%] md:w-72 lg:w-96  bg-white dark:bg-slate-900   z-[1000] shadow-xl flex flex-col justify-start items-center rounded-tl-xl`}
        variants={sidebarVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="exit"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl text-white  flex self-stretch justify-end pe-2  py-3 bg-[#3e7dff]"
        >
          <IoCloseSharp className=" text-white rounded-full  self-end" />
        </button>

        {/* Sidebar Links */}
        <ul className="flex  items-center flex-col gap-8 mt-12 text-lg font-semibold text-black dark:text-white self-stretch justify-center ">
          {navItems.map((item, index) => (
            <li className="hoveranimation flex  justify-center px-4 py-3 rounded-xl self-stretch" key={index}>
              <Link
                href={item.path}
                onClick={() => setIsOpen(false)} 
                className=""
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
       
      </motion.div>
    </>
  );
}
