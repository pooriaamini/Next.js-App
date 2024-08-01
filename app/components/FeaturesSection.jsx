import Image from "next/image";
import cast from "../../public/cast.svg";
import bonus from '../../public/bonus.svg'
import access from '../../public/access.svg'
import storage from '../../public/storage.svg'
import profit from '../../public/profit.svg'
import safe from '../../public/safe.svg'


export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="features mt-[5rem] flex flex-col gap-4 items-center"
    >
      <div className="text-center self-center w-[70%] ">
        <p className="text-[#3e7dff] font-bold text-xl">CRYPTO FEATURE</p>
        <p className="text-[1.5rem] lg:text-[2.5rem] font-extrabold"> Best Features</p>
        <p className="text-[#637381] text-[1.15rem] text-xl  mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>
      <div className="card grid grid-cols-1 gap-y-[3rem] px-[3rem] md:grid-cols-2 xl:grid-cols-3 items-center justify-items-center gap-8 mt-5">
        <div className="flex flex-col justify-center w-[100%] lg:w-[80%]  justify-items-center  items-center gap-3">
          <div className="bg-[#3e7dff] self-center p-4 rounded-full">
            <Image src={safe} alt="cast" />
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <p className="font-bold text-[1.2rem] xl:text-[1.5rem]">
              Safe & Secure
            </p>
            <p className="text-[#637381] text-[1rem]">
              Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor
              labore labore labore et dolor .
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center w-[100%] lg:w-[80%]  justify-items-center  items-center gap-3">
          <div className="bg-[#3e7dff] self-center p-4 rounded-full">
            <Image src={bonus} alt="cast" />
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <p className="font-bold text-[1.2rem] xl:text-[1.5rem]">
            Early Bonus

            </p>
            <p className="text-[#637381] text-[1rem]">
              Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor
              labore labore labore et dolor .
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[100%] lg:w-[80%] justify-items-center items-center gap-3">
          <div className="bg-[#3e7dff] self-center p-4 rounded-full">
            <Image src={access} alt="cast" />
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <p className="font-bold text-[1.2rem] xl:text-[1.5rem]">
            Universal Access

            </p>
            <p className="text-[#637381] text-[1rem]">
              Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor
              labore labore labore et dolor .
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[100%] lg:w-[80%] justify-items-center items-center gap-3">
          <div className="bg-[#3e7dff] self-center p-4 rounded-full">
            <Image src={storage} alt="cast" />
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <p className="font-bold text-[1.2rem] xl:text-[1.5rem]">
            Secure Storage

            </p>
            <p className="text-[#637381] text-[1rem]">
              Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor
              labore labore labore et dolor .
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[100%] lg:w-[80%] justify-items-center items-center gap-3">
          <div className="bg-[#3e7dff] self-center p-4 rounded-full">
            <Image src={cast} alt="cast" />
          </div>

          <div className="flex flex-col gap-2 items-center text-center">
            <p className="font-bold text-[1.2rem] xl:text-[1.5rem]">
            Low Cost

            </p>
            <p className="text-[#637381] text-[1rem]">
              Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor
              labore labore labore et dolor .
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[100%] lg:w-[80%] justify-items-center items-center gap-3">
          <div className="bg-[#3e7dff] self-center p-4 rounded-full">
            <Image src={profit} alt="cast" />
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <p className="font-bold text-[1.2rem] xl:text-[1.5rem]">
            Several Profit

            </p>
            <p className="text-[#637381] text-[1rem]">
              Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor
              labore labore labore et dolor .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
