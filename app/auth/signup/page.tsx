import ActiveButton from "@/app/components/ActiveButtonInForm";
import SelectionForm from "@/app/components/SelectionForm";
import SignupHeader from "@/app/components/SignupHeader";
import { ActiveProvider } from "@/app/contexts/activeContext";

export default function Page() {
  return (
    <ActiveProvider>
      <div className="min-h-screen flex  flex-col items-center  justify-center text-black dark:text-white ">
        <div className="form flex flex-col items-center mx-auto max-w-xl mt-[4rem] dark:bg-[#131b4dcc] bg-white p-4  lg:p-14 rounded-lg dark:z-30 z-30 shadow-md">
          <SignupHeader />
          <SelectionForm />
          <ActiveButton/>
        </div>
      </div>
    </ActiveProvider>
  );
}
