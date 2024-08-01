import Image from "next/image";
import Link from "next/link";
import TooltipIcon from "./TooltipIcon";
import uideck from "../../public/uideck.svg";
import tailgrid from "../../public/tailgrids.svg";
import lineicons from "../../public/lineicons.svg";
import ayroui from "../../public/ayroui.svg";
import plainadmin from "../../public/plainadmin.svg";

export default function HomeSection() {
  return (
    <section id="home" className="home  mt-[5rem] flex flex-col items-center gap-4 justify-center ">
      <p className="text-[1.8rem] w-[90%]  lg:w-[60vw] self-center   px-4 lg:px-0  lg:text-[2.25rem]  text-center font-bold">
        Next.js Template and Boilerplate for Crypto, ICO and Web3
      </p>
      <p className="text-center self-center w-[90%] lg:w-[60vw]  text-[#637381] px-0 lg:px-8 font-medium text-[1.125rem] ">
        A Next.js website template for Crypto Currency, Blockchain, ICO, and
        Web3, meticulously styled with Tailwind CSS. This boilerplate includes
        essential integrations, UI components, pages, and enabling you to launch
        a comprehensive website or landing page for anything related to Crypto,
        Blockchain, and Web3.
      </p>
      <div className="icon mt-4 self-center   flex justify-center gap-4">
        <TooltipIcon />
      </div>
      <button className="bg-[#3e7dff]  py-2 px-7 mt-4 rounded-full text-white font-middle self-center">
        <Link href="">Buy Tokens 47% Off</Link>
      </button>

      <p className="self-center mt-[4rem] text-[1.5rem] font-semibold ">
        Join the 20,000+ companies using the our platform
      </p>
      <div className="  mt-[1.5rem]  flex flex-wrap justify-center items-center gap-[2.5rem]  ">
        <Image width={130} alt="uideck" src={uideck} />
        <Image width={160}  alt="tailgrid" src={tailgrid} />
        <Image width={160} alt="lineicons" src={lineicons} />
        <Image width={150} alt="ayroui" src={ayroui} />
        <Image className="" width={160} alt="plainadmin" src={plainadmin} />
      </div>
    </section>
  );
}
