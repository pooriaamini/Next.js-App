"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type emailInput = {
  email: string;
};
function ForgotForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<emailInput>();

  const onSubmithandle: SubmitHandler<emailInput> = (data) => {
    toast.success(`Link sent successfully to ${data.email.toString()}`,{
      style:{
        minWidth: '400px',
        textAlign:'center'

      }
    });

  };
  return (
    <form
      onSubmit={handleSubmit(onSubmithandle)}
      className="flex flex-col w-auto lg:max-w-[50%]  gap-2 items-center lg:my-auto mt-8 self-start   justify-center"
    >
      <h2 className="text-black dark:text-white font-bold text-2xl">
        Forgot Password
      </h2>
      <p className="text-center">
        Enter the email address associated with your account and we will send
        you a link to reset your password.
      </p>
      <input
        {...register("email", {
          required: {
            value: true,
            message: "Email is required for reset your password.",
          },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Please enter a valid Email address",
          },
        })}
        placeholder="Enter your Email"
        autoComplete="off"
        className={` border flex self-stretch  border-gray-200 dark:border-[#637381] py-3 px-4 rounded-full bg-white dark:bg-[#1e2763] mt-8 dark:placeholder:text-[#b5b3bc] placeholder:text-[.9rem] p-3 ${
          errors.email ? "outline-red-500" : "outline-[#3e7dff]"
        } `}
      />
      {errors.email && (
        <span className="text-red-500 text-[.9rem] text-center">
          {errors.email.message?.toString()}
        </span>
      )}
      <button className="bg-[#3e7dff] self-stretch   text-white font-middle hover:bg-[#3e7dffcc]  p-4 rounded-full  transition duration-500 ">
        Send Reset Link
      </button>
      <Toaster position="bottom-center" />
    </form>
  );
}

export default ForgotForm;
