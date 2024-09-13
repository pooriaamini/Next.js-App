import ForgotAnimation from "@/app/components/ForgotAnimation";
import ForgotForm from "@/app/components/ForgotForm";

export default function Page() {
 
  return (
    <div className="flex flex-col lg:flex-row items-stretch  lg:justify-normal   mt-[4rem] dark:bg-[#131b4dcc] bg-white p-4 gap-1 lg:gap-4  rounded-lg dark:z-30 z-30 shadow-md max-w-lg lg:max-w-5xl min-h-[30rem] ">
      <ForgotAnimation />
      <ForgotForm/>
  
    </div>
  );
}
