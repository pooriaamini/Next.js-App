import Image from "next/image";
import { ReusableTooltip } from "./ReusableTooltip";
import bitcoin from "@/public/bitcoin.svg";
import bitcoin1 from "@/public/bitcoin1.svg";
import bitcoin2 from "@/public/bitcoin2.svg";
import bitcoin3 from "@/public/bitcoin3.svg";
import bitcoin4 from "@/public/bitcoin4.svg";
import bitcoin5 from "@/public/bitcoin5.svg";

export default function TooltipIcon() {
  return (
    <>
      <ReusableTooltip>
        <button>
          <Image src={bitcoin} alt="bitocin" />
        </button>
      </ReusableTooltip>
      <ReusableTooltip>
        <button>
          <Image src={bitcoin1} alt="bitocin1" />
        </button>
      </ReusableTooltip>
      <ReusableTooltip>
        <button>
          <Image src={bitcoin2} alt="bitocin2" />
        </button>
      </ReusableTooltip>
      <ReusableTooltip>
        <button>
          <Image src={bitcoin3} alt="bitocin3" />
        </button>
      </ReusableTooltip>
      <ReusableTooltip>
        <button>
          <Image src={bitcoin4} alt="bitocin4" />
        </button>
      </ReusableTooltip>
      <ReusableTooltip>
        <button>
          <Image src={bitcoin5} alt="bitocin5" />
        </button>
      </ReusableTooltip>
    </>
  );
}
