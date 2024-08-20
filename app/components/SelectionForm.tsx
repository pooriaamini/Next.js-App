'use client'

import { useActive } from "../contexts/activeContext";


function SelectionForm() {

  const {isActive,setIsActive}=useActive()
  

    return (  
        <div className=" p-1 mt-8   flex flex-col lg:flex-row justify-center gap-1 lg:gap-2  self-stretch lg:self-auto  items-center border-[1px] dark:border-[#637381] rounded-lg ">

        <button onClick={()=>setIsActive(false)}

          className={` ${isActive ? 'bg-transparent text-[#b5b3bc] dark:bg-[#2c303b] '  :  'text-[#3e7dff]  bg-[#3e7dff0d]'}   px-10 py-3 rounded-lg    -bg self-stretch lg:self-auto   `}
        >
          Magic Link
        </button>

        <button onClick={()=>setIsActive(true)}
          
          className={` ${isActive ? 'text-[#3e7dff] bg-[#3e7dff0d]' : 'bg-transparent text-[#b5b3bc] dark:bg-[#2c303b]'} rounded-lg  px-10 py-3     self-stretch lg:self-auto `}
        >
          Password
        </button>
      </div>
    );
}

export default SelectionForm;