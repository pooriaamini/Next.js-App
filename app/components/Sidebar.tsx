"use client";
import { FaHome, FaUsers, FaInfoCircle, FaEnvelope, FaTools } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  {
    name: "Home",
    path: "/#home",
    icon: <FaHome />,
  },
  {
    name: "Features",
    path: "/#features",
    icon: <FaTools />,
  },
  {
    name: "Team",
    path: "/#team",
    icon: <FaUsers />,
  },
  {
    name: "Pages",
    path: "#/pages",
    icon: <FaInfoCircle />,
  },
  {
    name: "Support",
    path: "#support",
    icon: <FaEnvelope />,
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
        className={`fixed top-0 right-0 h-screen w-[60%] md:w-72 lg:w-80 bg-gradient-to-br from-blue-500 to-indigo-700 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 z-[1000] shadow-xl flex flex-col justify-start items-center rounded-tl-xl`}
        variants={sidebarVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="exit"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl  text-white flex self-stretch justify-end px-4 py-3"
        >
          <IoCloseSharp className="text-white" />
        </button>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-center gap-6 mt-12 text-lg font-semibold text-white self-stretch">
          {navItems.map((item, index) => (
            <li
              className="hoveranimation  hover:scale-105 transition-all  flex justify-center items-center px-6 py-3 rounded-xl w-full"
              key={index}
            >
              <Link href={item.path} onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
