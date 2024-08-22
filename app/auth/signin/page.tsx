import ActiveButton from "@/app/components/ActiveButtonInForm";
import SelectionForm from "@/app/components/SelectionForm";
import SigninHeader from "@/app/components/SigninHeader";
import { ActiveProvider } from "@/app/contexts/activeContext";

export default function Page() {
  return (
    <ActiveProvider>
      <div className="min-h-screen flex  flex-col items-center  justify-center text-black dark:text-white ">
        <div className="form flex flex-col items-center mx-auto mt-[4rem]  dark:bg-[#131b4dcc] bg-white p-8   lg:p-14 rounded-lg dark:z-30 z-30 shadow-md">
          <SigninHeader />
          <SelectionForm />
          <ActiveButton />
        </div>
      </div>
    </ActiveProvider>
  );
}
