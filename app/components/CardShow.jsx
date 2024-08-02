import Image from "next/image";

function CardShow({ item }) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-3 px-8 ">
      <div className="bg-[#3e7dff] p-4 rounded-full">
          <Image className="" src={item.img} alt={item.subject} />
      </div>
      <p className="font-bold text-[1.2rem] xl:text-[1.5rem] "> {item.subject}</p>
      <p className="text-[#637381] text-[1rem]">{item.text}</p>
    </div>
  );
}

export default CardShow;