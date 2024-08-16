import Image from "next/image";
import {  Tooltip } from "flowbite-react";
import bitcoin from "../../public/icons/bitcoin.svg";
import bitcoin1 from "../../public/icons/bitcoin.svg";
import bitcoin2 from "../../public/icons/bitcoin2.svg";
import bitcoin3 from "../../public/icons/bitcoin3.svg";
import bitcoin4 from "../../public/icons/bitcoin4.svg";
import bitcoin5 from "../../public/icons/bitcoin5.svg";

const btn=[
  {
    src:bitcoin,
    alt:'bitcoin'
  },
  {
    src:bitcoin1,
    alt:'bitcoin1'
  },
  {
    src:bitcoin2,
    alt:'bitcoin2'
  },
  {
    src:bitcoin3,
    alt:'bitcoin3'
  }
  ,
  {
    src:bitcoin4,
    alt:'bitcoin5'
  },
  {
    src:bitcoin5,
    alt:'bitcoin5'
  }
]

export default function TooltipIcon() {
  return (
    <>
       {
        btn.map((item,index)=>{
          return <Tooltip className="rounded-full" key={index} content="Bitcoin (BTC)" >
            <button className="bg-white p-1 rounded-full">
              <Image src={item.src} alt={item.alt}/>
            </button>
             </Tooltip>
        })
       }
    </>
  );
}
