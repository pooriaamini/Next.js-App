import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

interface Inputs {
  fullName: string;
  email: string;
  password: string;
  terms: boolean;
}

function SignupPassword() {
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
      <div className="name flex flex-col gap-1 items-stretch justify-center">
        <label className="ms-2 text-[.9rem]">Full Name</label>
        <input
          {...register("fullName", {
            required: "Full name is required",
            minLength: {
              value: 3,
              message: "Full name must be at least 3 characters long",
            },
          })}
          className={`py-3 w-96 border border-gray-200 dark:border-[#637381] dark:bg-[#1e2763] placeholder:text-[#b5b3bc] px-5 rounded-full placeholder:text-[.9rem] ${
            errors.fullName ? "outline-red-500" : "outline-[#3e7dff]"
          }`}
          placeholder="First and last name"
          type="text"
          autoComplete="off"
        />
        {errors.fullName && (
          <span className="text-red-500 text-[.9rem] text-center">
            {errors.fullName.message}
          </span>
        )}
      </div>

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

      <div className="terms flex justify-between items-center mt-4 text-[.85rem]">
        <div className="flex flex-row-reverse justify-start items-center gap-3">
          <p className="text-[#637381] flex flex-col">
            <span>By creating an account, you agree to the Terms</span>
            <span>and Conditions, and our Privacy Policy</span>
          </p>
          <input
            {...register("terms", {
            })}
            className="bg-transparent border-[#b5b3bc] rounded-sm mt-2 w-4 h-4"
            type="checkbox"
          />
        </div>
      </div>
      <button className="bg-[#3e7dff] text-white font-middle hover:bg-[#3e7dffcc] p-4 rounded-full transition duration-500 mt-[1.5rem]">
        Sign up
      </button>

      <p className="signup flex justify-center items-center mt-2 text-[.9rem] gap-1 lg:text-[1rem]">
        <span className="text-[#637381] font-medium">
          Already using Startup?
        </span>
        <Link
          href="signin"
          className="text-[#3e7dff] hover:underline underline-offset-4 transition-all duration-1000"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}

export default SignupPassword;
