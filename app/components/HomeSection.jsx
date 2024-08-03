import Image from "next/image";
import Link from "next/link";
import TooltipIcon from "./TooltipIcon";
import uideck from "../../public/uideck.svg";
import tailgrid from "../../public/tailgrids.svg";
import lineicons from "../../public/lineicons.svg";
import ayroui from "../../public/ayroui.svg";
import plainadmin from "../../public/plainadmin.svg";
import uideckwhite from '../../public/uideck-white.svg'
import tailgridwhite from '../../public/TailGrids-white.svg'
import lineiconwhite from '../../public/LineIcons-white.svg'
import ayrouiwhite from '../../public/AyroUI-white.svg'
import plainadminwhite from '../../public/PlainAdmin-white.svg'
import { motion } from "framer-motion";



export default function HomeSection({darkMode}) {
  return (
    <motion.section initial={{opacity:0 ,y:10}}
    animate={  { opacity: 1 ,y:0}}
    transition={{ duration: 0.3 }}
    

    
    
    id="home" className="home   mt-[5rem] flex flex-col items-center gap-4 justify-center ">
      <p className="text-[1.8rem] text-black dark:text-white w-[90%]  lg:w-[60vw] self-center   px-4 lg:px-0  lg:text-[2.25rem]  text-center font-bold">
        Next.js Template and Boilerplate for Crypto, ICO and Web3
      </p>
      <p className="text-center self-center w-[90%] lg:w-[60vw]  text-[#637381] dark:text-white px-0 lg:px-8 font-medium text-[1.125rem] ">
        A Next.js website template for Crypto Currency, Blockchain, ICO, and
        Web3, meticulously styled with Tailwind CSS. This boilerplate includes
        essential integrations, UI components, pages, and enabling you to launch
        a comprehensive website or landing page for anything related to Crypto,
        Blockchain, and Web3.
      </p>
      <div className="icon mt-4 self-center   flex flex-wrap justify-center gap-4">
        <TooltipIcon />
      </div>
      <button className="bg-[#3e7dff]  py-2 px-7 mt-4 rounded-full text-white font-middle self-center hover:opacity-90 hover:transition-opacity">
        <Link href="">Buy Tokens 47% Off</Link>
      </button>

      <p className=" text-center mt-[4rem] text-[1.2rem] lg:text-[1.5rem]  text-black dark:text-white font-semibold ">
        Join the 20,000+ companies using the our platform
      </p>
      <div className="  mt-[1.5rem]  flex flex-wrap justify-center items-center gap-[2.5rem]  ">
        <Image width={130} alt="uideck" src={darkMode? uideckwhite : uideck} />
        <Image width={160}  alt="tailgrid" src={darkMode? tailgridwhite :tailgrid} />
        <Image width={160} alt="lineicons" src={darkMode? lineiconwhite :lineicons} />
        <Image width={150} alt="ayroui" src={darkMode? ayrouiwhite :ayroui} />
        <Image  width={160} alt="plainadmin" src={darkMode? plainadminwhite :plainadmin} />
      </div>
    </motion.section>
  );
}
