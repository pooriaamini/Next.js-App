import EmailForm from "@/app/components/EmailForm";
import SelectionForm from "@/app/components/SelectionForm";
import SigninHeader from "@/app/components/SigninHeader";


export default function Page() {
  return (
    <div className="min-h-screen flex  flex-col items-center  justify-center text-black dark:text-white ">
      <div className="form flex flex-col items-center mx-0 my-auto dark:bg-[#131b4dcc] bg-white p-4   lg:p-12 rounded-lg dark:z-30 z-30 shadow-md">
        <SigninHeader/>
        <SelectionForm/>
        <EmailForm/>
      </div>
      
    </div>
  );
}
