import Image from "next/image";
import Link from "next/link";
import here1 from "../public/hero-shape-1.svg";
import here2 from "../public/hero-shape-2.svg";
import TooltipIcon from './ui/Landing/TooltipIcon'



export default function page() {
  return (
    <>
      <div className="home ">
        <Image
          className="absolute left-0 top-0 -z-10"
          src={here1}
          alt="shape"
          width={411}
          height={276}
        />
        <Image
          className="absolute right-0 top-0 -z-10"
          src={here2}
          alt="shape"
          width={820}
          height={692}
        />

        <div className="main absolute mt-[6rem] lg:left-[50%] lg:translate-x-[-50%]   flex flex-col gap-4 justify-center ">
          <p className="text-[1.8rem] px-4 lg:px-0  lg:text-[2.25rem]  text-center font-bold">
            Next.js Template and Boilerplate for Crypto, ICO and Web3
          </p>
          <p className="text-center text-[#637381] px-0 lg:px-8 font-medium text-[1.125rem] ">
            A Next.js website template for Crypto Currency, Blockchain, ICO, and
            Web3, meticulously styled with Tailwind CSS. This boilerplate
            includes essential integrations, UI components, pages, and enabling
            you to launch a comprehensive website or landing page for anything
            related to Crypto, Blockchain, and Web3.
          </p>

          <div className="icon mt-4 flex justify-center gap-4">
            <TooltipIcon/>
          </div>

          <button  className="bg-[#3e7dff] py-2 px-7 mt-4 rounded-full text-white font-middle self-center">
            <Link href="">Buy Tokens 47% Off</Link>
          </button>
        </div>
      </div>
    </>
  );
}
