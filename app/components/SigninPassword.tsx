import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

interface Inputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

function SigninPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 flex flex-col gap-4"
    >
      <div className="email flex flex-col gap-1 items-stretch justify-center">
        <label className="ms-2 text-[.9rem]">Your Email</label>
        <input
          {...register("email", {
            required: "Email address is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Please enter a valid Email address",
            },
          })}
          className={`py-3 w-96 border border-gray-200 dark:border-[#637381] dark:bg-[#1e2763] placeholder:text-[#b5b3bc] px-5 rounded-full placeholder:text-[.9rem] ${
            errors.email ? "outline-red-500" : "outline-[#3e7dff]"
          }`}
          placeholder="Enter Your Email"
          type="email"
          autoComplete="off"
        />
        {errors.email && (
          <span className="text-red-500 text-[.9rem] text-center">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="password flex flex-col gap-1 items-stretch justify-center">
        <label className="ms-2 text-[.9rem]">Your Password</label>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          className={`py-3 w-96 border border-gray-200 dark:border-[#637381] dark:bg-[#1e2763] placeholder:text-[#b5b3bc] px-5 rounded-full placeholder:text-[.9rem] ${
            errors.password ? "outline-red-500" : "outline-[#3e7dff]"
          }`}
          placeholder="Enter Your Password"
          type="password"
          autoComplete="off"
        />
        {errors.password && (
          <span className="text-red-500 text-[.9rem] text-center">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="forgot flex justify-between items-center mt-4 text-[.85rem]">
        <label className="flex flex-row-reverse justify-start items-center gap-3">
          <span className="text-[#637381]">Keep me signed in</span>
          <input
            {...register("rememberMe")}
            className="bg-transparent border-[#b5b3bc] rounded-sm p-2"
            type="checkbox"
          />
        </label>
        <Link
          href="forgot-password"
          className="text-[#3e7dff] hover:underline underline-offset-4 transition-all duration-1000"
        >
          Forgot Password?
        </Link>
      </div>

      <button className="bg-[#3e7dff] text-white font-middle hover:bg-[#3e7dffcc] p-4 rounded-full transition duration-500 mt-[1.5rem]">
        Sign in
      </button>

      <p className="signup flex justify-center items-center mt-2 text-[.9rem] gap-1 lg:text-[1rem]">
        <span className="text-[#637381]">Don’t have an account?</span>
        <Link
          href="signup"
          className="text-[#3e7dff] hover:underline underline-offset-4 transition-all duration-1000"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}

export default SigninPassword;
