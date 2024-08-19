import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
function SelectionForm() {
    return (  
        <div className=" p-1 mt-8   flex justify-center gap-2  items-center border-[1px] dark:border-[#637381] rounded-lg ">
        <button
          className="  p-1 rounded-lg text-[#3e7dff] bg-[#3e7dff0d] dark:bg-sky-950 px-10 py-3 "
        >
          Magic Link
        </button>

        <button
          
          className=" rounded-lg  p-1 bg-[#2c303b] text-[#b5b3bc] px-10 py-3"
        >
          Password
        </button>
      </div>
    );
}

export default SelectionForm;