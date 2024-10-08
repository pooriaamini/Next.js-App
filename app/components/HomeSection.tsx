"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Tooltips from "./Tooltips";
import uideck from "../../public/icons/uideck.svg";
import tailgrid from "../../public/icons/tailgrids.svg";
import lineicons from "../../public/icons/lineicons.svg";
import ayroui from "../../public/icons/ayroui.svg";
import plainadmin from "../../public/icons/plainadmin.svg";

export default function HomeSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.1, once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="home   flex flex-col items-center gap-4 justify-center  "
    >
      <div className="title max-w-4xl px-5 lg:px-0 ">
        <p className="text-[1.6rem] text-black dark:text-white     lg:text-[2.25rem]  text-center font-bold">
          Next.js Template and Boilerplate for Crypto, ICO and Web3
        </p>
        <p className="text-center  mt-3  text-[#637381] dark:text-white  font-medium text-[1.105rem] px-2 ">
          A Next.js website template for Crypto Currency, Blockchain, ICO, and
          Web3, meticulously styled with Tailwind CSS. This boilerplate includes
          essential integrations, UI components, pages, and enabling you to
          launch a comprehensive website or landing page for anything related to
          Crypto, Blockchain, and Web3.
        </p>
      </div>
      <div className=" mt-4 self-center   flex flex-wrap justify-center gap-4">
        <Tooltips />
      </div>
      <button className="bg-[#3e7dff]   py-2 px-7 mt-4 rounded-full  text-white font-middle self-center hover:opacity-90 hover:transition-opacity">
        <Link href="">Buy Tokens 47% Off</Link>
      </button>

      <p className=" text-center mt-3 text-[1.15rem] px-4 lg:px-0 lg:text-[1.5rem]  text-black dark:text-white font-semibold ">
        Join the 20,000+ companies using the our platform
      </p>
      <div
        className={`  mt-[1.5rem]  flex flex-wrap justify-center items-stretch gap-[2.5rem]  `}
      >
        <Image
          className="bg-blue-400 self-stretch rounded-full icon-bg-hover py-2 px-4"
          width={130}
          alt="uideck"
          src={uideck}
        />
        <Image
          className="bg-violet-400 self-stretch rounded-full icon-bg-hover py-2 px-4"
          width={160}
          alt="tailgrid"
          src={tailgrid}
        />
        <Image
          className="bg-indigo-500 self-stretch rounded-full icon-bg-hover py-2 px-4"
          width={160}
          alt="lineicons"
          src={lineicons}
        />
        <Image
          className="bg-fuchsia-400 self-stretch rounded-full icon-bg-hover py-2 px-4"
          width={150}
          alt="ayroui"
          src={ayroui}
        />
        <Image
          className="bg-[#DC4298] self-stretch rounded-full icon-bg-hover py-2 px-4"
          width={160}
          alt="plainadmin"
          src={plainadmin}
        />
      </div>
    </motion.section>
  );
}
