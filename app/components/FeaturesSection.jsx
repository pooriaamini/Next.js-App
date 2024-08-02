import CardItems from "./CardItems";
export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="features mt-[5rem] flex flex-col gap-4 items-center"
    >
      <div className="text-center flex flex-col items-center gap-2 px-4  ">
        <p className="text-[#3e7dff] font-bold text-[1rem]">CRYPTO FEATURE</p>
        <p className="text-[1.5rem] lg:text-[2.5rem] dark:text-white font-extrabold">
         
          Best Features
        </p>
        <p className="text-[#637381] dark:text-[#b5b3bc] text-[1.15rem] lg:text-[1.2rem] lg:w-[60%] w-[100%] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>

      <CardItems />
    </section>
  );
}

