import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo.svg'

export default function Header() {
  return (
    <nav className="navigation  flex justify-between px-[3.5rem] pt-[1.5rem]   ">

      <Image
        src={logo}
        width={150}
        height={150}
        alt="header logo"
      />

      <ul className="list flex gap-[3rem] text-[1.1rem] font-semibold text-[#637381] ">
        <li className="item">
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">Features</Link>
        </li>
        <li>
          <Link href="">Roadmap</Link>
        </li>
        <li>
          <Link href="">Pages</Link>
        </li>
        <li>
          <Link href="">Support</Link>
        </li>
      </ul>

      <div className="box">box</div>
    </nav>
  );
}
