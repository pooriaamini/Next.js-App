"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import dropdown from "@/public/dropdown.svg";
import search from "@/public/search.svg";
import light from "@/public/light.svg";
import dark from "@/public/dark.svg";
import bar from "@/public/bar.svg";
import { useState } from "react";
import {DrawerComponent} from './Drawer'







export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);


  return (
    <nav className="navigation  flex items-center justify-between px-4 lg:px-0 lg:justify-around py-4    ">
      <Image src={logo} width={150} height={150} alt="header logo" />

      <ul className=" hidden lg:flex list  gap-[3rem] text-[1.05rem] font-weight text-[#637381] ">
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
          <div className="flex ">
            <p>Page</p>

            <Image className=""  src={dropdown} alt="dropicon" />

              {/* <Link href="">efwa</Link>
              <Link href="">aefw</Link>
              <Link href="">afew</Link> */}
           
          </div>
        </li>
        <li>
          <Link href="">Support</Link>
        </li>
      </ul>

      <div className="flex justify-normal items-center gap-4">
        <button className="bg-white p-2 hidden md:block  rounded-full ">
          <Image className="" src={search} alt='searchicon'/>
        </button>
        
        <div className="bg-[#f5f8ff] p-2 rounded-full flex gap-1  items-center">
        <button className="bg-[#3e7dff] rounded-full p-1" >
          <Image className="" src={light} alt='light'/>
        </button>

        <button className="bg-[#3e7dff] rounded-full p-1">
          <Image className=" " src={dark} alt='dark'/>
        </button>  
              </div>
        <div className=" hidden md:block  Sign-btn bg-transparent border border-solid py-2 px-8 text-[#637381] border-[#637381] rounded-full ">Sign In</div>
        <Image onClick={()=>setIsOpen(true)} width={35} height={30} className="md:hidden text-[2rem]" src={bar} alt="toggle"/>
        
      </div>
<DrawerComponent handleClose={handleClose} isOpen={isOpen} setIsOpen={setIsOpen} />
      
    </nav>
  );
}
