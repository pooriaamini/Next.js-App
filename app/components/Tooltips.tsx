import bitcoin from "../../public/icons/bitcoin.svg";
import bitcoin1 from "../../public/icons/bitcoin1.svg";
import bitcoin2 from "../../public/icons/bitcoin2.svg";
import bitcoin3 from "../../public/icons/bitcoin3.svg";
import bitcoin4 from "../../public/icons/bitcoin4.svg";
import bitcoin5 from "../../public/icons/bitcoin5.svg";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import React from "react";

interface btnType {
  src: string;
  alt: string;
}

const btn: btnType[] = [
  {
    src: bitcoin,
    alt: "bitcoin",
  },
  {
    src: bitcoin1,
    alt: "bitcoin1",
  },
  {
    src: bitcoin2,
    alt: "bitcoin2",
  },
  {
    src: bitcoin3,
    alt: "bitcoin3",
  },
  {
    src: bitcoin4,
    alt: "bitcoin5",
  },
  {
    src: bitcoin5,
    alt: "bitcoin5",
  },
];

function Tooltips() {
  return (
    <>
      {btn.map((item, index) => {
        return (
          <>
            <TooltipProvider  key={index}>
              <Tooltip>
                <TooltipTrigger className="bg-white p-1 rounded-full">
                  <Image src={item.src} alt={item.alt} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Bitcoin (BTC)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </>
        );
      })}
    </>
  );
}

export default Tooltips;
