import Image from "next/image";
import image1 from "@/public/image-01.webp";
import image2 from "@/public/image-02.webp";
import image3 from "@/public/image-03.webp";
import image4 from "@/public/image-04.webp";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const cardItem = [
  {
    src: image1,
    name: "Matheus Ferrero",
    job: "Marketing Expert",
  },
  { src: image2, name: "Eva Hudson", job: "Blockchain Developer" },
  {
    src: image3,
    name: "Jackie Sanders",
    job: "Creative Designer",
  },
  {
    src: image4,
    name: "Jackie Sanders",
    job: "SEO Expert",
  },
];

function TeamSection() {
  

  return (
    <section id="team" className="mt-12 flex flex-col gap-12">
      <div className="flex flex-col gap-3 items-center justify-center text-center  ">
        <p className="text-[#3e7dff] font-bold text-[1.2rem]">OUT TEAM</p>
        <p className="text-2xll  lg:text-[2.5rem] font-extrabold text-black dark:text-white">
          Meet out Team
        </p>
        <p className="text-[1rem] lg:text-xl text-[#637381] dark:text-[#b5b3bc] self-center px-8 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>

      <div className="flex flex-wrap gap-8   items-center justify-center">
        {cardItem.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center gap-4 h-auto bg-sky-100 dark:bg-[#131b4dcc] p-6 rounded-2xl transition duration-400 ease-in-out border-b-4 border-transparent	 hover:border-b-4 hover:border-[#0070f3] ">
              <Image src={item.src} alt={item.job} />
              <p className="text-xl text-black dark:text-white">{item.name}</p>
              <p className="text-[#637381] dark:text-[#b5b3bc]">{item.job}</p>
              <div className="flex flex-row gap-4">
                <FaFacebook  className="text-[#637381] dark:text-white  transition-all hover:text-[#0070f3] " />
                <FaTwitter className="text-[#637381] dark:text-white transition-all hover:text-[#0070f3]" />
                <FaLinkedin className="text-[#637381] dark:text-white transition-all hover:text-[#0070f3]" />
                <FaYoutube className="text-[#637381] dark:text-white transition-all hover:text-[#0070f3]" />
              </div>
            </div>
          );
        })}
        
      </div>
    </section>
  );
}

export default TeamSection;
