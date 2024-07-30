import Image from "next/image";
import here1 from '../public/hero-shape-1.svg'
import here2 from '../public/hero-shape-2.svg'


export default function Home() {
  return (
    <>
    <Image className="absolute left-0 top-0 -z-10" src={here1} alt="shape" width={411} height={276}/>
    <Image className="absolute right-0 top-0 -z-10" src={here2} alt="shape" width={820} height={692}/>

      <div className="home">

        

        {/* <div className="main1">
          <p>Next.js Template and Boilerplate for Crypto, ICO and Web3</p>
          <p>
            A Next.js website template for Crypto Currency, Blockchain, ICO, and
            Web3, meticulously styled with Tailwind CSS. This boilerplate
            includes essential integrations, UI components, pages, and enabling
            you to launch a comprehensive website or landing page for anything
            related to Crypto, Blockchain, and Web3.
          </p>

          <div className="icon"></div>
          <button>by tocken</button>
        </div> */}
      </div>
    </>
  );
}
