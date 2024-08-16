import cast from "../../public/icons/cast.svg";
import bonus from "../../public/icons/bonus.svg";
import access from "../../public/icons/access.svg";
import storage from "../../public/icons/storage.svg";
import profit from "../../public/icons/profit.svg";
import safe from "../../public/icons/safe.svg";
import CardShow from "./CardShow";

interface CardItems{
  img:string,
  subject:string,
  text:string
}

const cardItem : CardItems[] = [
  {
    img: safe,
    subject: "Safe & Secure",
    text: "Lorem ipsum dolor sit amet consectetur elit,sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    img: bonus,
    subject: "Early Bonus",
    text: "Lorem ipsum dolor sit amet consectetur elit,sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    img: access,
    subject: "Universal Access",
    text: "Lorem ipsum dolor sit amet consectetur elit,sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    img: storage,
    subject: "Secure Storage",
    text: "Lorem ipsum dolor sit amet consectetur elit,sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    img: cast,
    subject: "Low Cost",
    text: "Lorem ipsum dolor sit amet consectetur elit,sed do eiusmod tempor labore labore labore et dolor .",
  },
  {
    img: profit,
    subject: "Several Profit",
    text: "Lorem ipsum dolor sit amet consectetur elit,sed do eiusmod tempor labore labore labore et dolor .",
  },
];

export default function cardItems() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 mt-5   " >
      {cardItem.map((item, index) => {
        return <CardShow item={item} key={index} />;
      })}
    </div>
  );
}
