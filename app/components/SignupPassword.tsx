import Link from "next/link";

function SignupPassword() {
  return (
    <form className="mt-12 flex flex-col gap-4" action="">

<div className="password flex flex-col gap-1 items-stretch justify-center">
        <label className="ms-2 text-[.9rem]">Full Name</label>
        <input
          className="py-3 w-96 border border-gray-200 dark:border-[#637381]  dark:bg-[#1e2763] placeholder:text-[#b5b3bc] px-5 rounded-full placeholder:text-[.9rem]"
          placeholder="First and last name"
          type="text"
          name=""
          id=""
        />
      </div>

      <div className="email flex flex-col  gap-1 items-stretch justify-center">
        <label className="ms-2 text-[.9rem]">Your Email</label>
        <input
          className="py-3 w-96 border border-gray-200 dark:border-[#637381] dark:bg-[#1e2763] placeholder:text-[#b5b3bc] px-5 rounded-full  placeholder:text-[.9rem]"
          placeholder="Enter Your Email"
          type="text"
          name=""
          id=""
        />
      </div>

      <div className="password flex flex-col gap-1 items-stretch justify-center">
        <label className="ms-2 text-[.9rem]">Your Password</label>
        <input
          className="py-3 w-96 border border-gray-200 dark:border-[#637381]  dark:bg-[#1e2763] placeholder:text-[#b5b3bc] px-5 rounded-full placeholder:text-[.9rem]"
          placeholder="Enter Your Password"
          type="text"
          name=""
          id=""
        />
      </div>

      <p className="forgot flex justify-between items-center mt-4 text-[.85rem]">
        <p className="flex flex-row-reverse justify-start items-center gap-3">
          <span className="text-[#637381]">Keep me signed in</span>
          <input
            className="bg-transparent border-[#b5b3bc] rounded-sm p-2 "
            type="checkbox"
          />
        </p>
        <span className="text-[#3e7dff] decoration-[#3e7dff] hover:underline underline-offset-4  transition-all duration-1000   ">
          Forgot Password?
        </span>
      </p>

      <button className="bg-[#3e7dff] text-white font-middle hover:bg-[#3e7dffcc]  p-4 rounded-full  transition duration-500 mt-[1.5rem] ">
        Sign up
      </button>

      <p className="singup flex justify-center items-center mt-2 text-[.9rem] gap-1 lg:text-[1rem]">
        <span className="text-[#637381] font-medium">Already using Startup?</span>
        <Link href='signin' className="text-[#3e7dff] hover:underline underline-offset-4  transition-all duration-1000">
        Sign in
        </Link>
      </p>
    </form>
  );
}

export default SignupPassword;
