import Image from "next/image";
import here1 from "../../public/icons/hero-shape-1.svg";
import here2 from "../../public/icons/hero-shape-2.svg";

export default function NavImage() {
  return (
    <>
      <Image
        className="absolute left-0 top-0 -z-10 dark:z-0"
        src={here1}
        alt="shape"
        width={411}
        height={276}
      />
      <Image
        className="absolute right-0 top-0 -z-10 dark:z-0"
        src={here2}
        alt="shape"
        width={820}
        height={692}
      />
    </>
  );
}
