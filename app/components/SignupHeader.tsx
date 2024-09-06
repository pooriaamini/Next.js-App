import googleSvg from "@/public/icons/google.svg";
import Image from "next/image";

function SignupHeader() {
  return (
    <form className="flex flex-col gap-4 items-center">
      <h1 className="font-bold text-[1.75rem]">Create your account</h1>
      <h2 className="dark:text-[#637381] text-[#b5b3bc]">
        It&apos;s totally free and super easy
      </h2>
      <button className="flex flex-row-reverse gap-4 items-center justify-center text-center w-80 border border-gray-200 dark:border-[#637381] py-3 px-4 rounded-full bg-white dark:bg-[#1e2763] mt-8">
        <p>Sign up with Google</p>
        <Image src={googleSvg} alt="google" />
      </button>
      <div className="flex justify-center items-center gap-4 mt-4 text-center">
        <p className="w-20 border-solid border-b-2"></p>
        <p>Or, register with your email</p>
        <p className="w-20 border-solid border-b-2"></p>
      </div>
    </form>
  );
}

export default SignupHeader;
