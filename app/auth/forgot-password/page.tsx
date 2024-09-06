import ForgotAnimation from "@/app/components/ForgotAnimation";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch  lg:justify-normal   mt-[4rem] dark:bg-[#131b4dcc] bg-white p-4 gap-1 lg:gap-4  rounded-lg dark:z-30 z-30 shadow-md max-w-lg lg:max-w-5xl min-h-[30rem] ">
      <ForgotAnimation />
      <form className="flex flex-col w-auto lg:max-w-[50%]  gap-2 items-center lg:my-auto mt-8 self-start   justify-center">
      <h2 className="text-black dark:text-white font-bold text-2xl">Forgot Password</h2>
        <p className="text-center">
          Enter the email address associated with your account and we'll send
          you a link to reset your password.
        </p>
        <input
          className={` border flex  self-stretch  border-gray-200 dark:border-[#637381] py-3 px-4 rounded-full bg-white dark:bg-[#1e2763] mt-8 dark:placeholder:text-[#b5b3bc] placeholder:text-[.9rem] p-3`}
          placeholder="Enter your email"
          type="email"
          id=""
          autoComplete="off"
        />

        <button type="button" className="bg-[#3e7dff] self-stretch   text-white font-middle hover:bg-[#3e7dffcc]  p-4 rounded-full  transition duration-500 ">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
