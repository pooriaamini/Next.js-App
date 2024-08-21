function SigninPassword() {
  return (
    <form className="mt-12 flex flex-col gap-4" action="">
      <div className="email flex flex-col  gap-3 items-stretch justify-center">
        <label htmlFor="">Your Email</label>
        <input className="py-3 w-96 border border-gray-200 dark:border-[#637381] dark:bg-[#1e2763] placeholder:text-[#b5b3bc] px-5 rounded-full" placeholder="Enter Your Email" type="text" name="" id="" />
      </div>

      <div className="password flex flex-col gap-3 items-stretch justify-center">
        <label htmlFor="">Your Password</label>
        <input   className="py-3 w-96 border border-gray-200 dark:border-[#637381]  dark:bg-[#1e2763] placeholder:text-[#b5b3bc] px-5 rounded-full" placeholder="Enter Your Password" type="text" name="" id="" />
      </div>

      <p className="forgot flex justify-between items-center mt-4">
        <p className="flex flex-row-reverse justify-start items-center gap-3">
          <span className="text-[#b5b3bc]">Keep me signed in</span>
          <input   className="bg-transparent border-[#b5b3bc] rounded-sm" type="checkbox" />
        </p>
        <span className="text-[#3e7dff] ">Forgot Password?</span>
      </p>

      <button>sign in</button>

      <p className="singup flex justify-center items-center">
        <span>Don't you have an account?</span>
        <span>Sign up</span>
      </p>
    </form>
  );
}

export default SigninPassword;
