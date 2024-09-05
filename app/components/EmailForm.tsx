import { useForm, SubmitHandler } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';


interface Inputs{
  email:string
}


function EmailForm() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    toast.success('Link sent successfully')
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 items-center mt-4 self-stretch justify-center">
      <input {...register('email',{required:{
      message:'Email address is required',
      value:true},pattern:{
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'Please enter a valid email address',
      }
    })}
        className={` border flex self-stretch  border-gray-200 dark:border-[#637381] py-3 px-4 rounded-full bg-white dark:bg-[#1e2763] mt-8 dark:placeholder:text-[#b5b3bc] placeholder:text-[.9rem] p-3 ${errors.email ? 'outline-red-500' :'outline-[#3e7dff]' } `}
        placeholder="Email"
        type="email"
        id=""
        autoComplete="off"
        />
        {
          errors.email && <span className="text-red-500 text-center" >{errors.email.message}</span>
        }
      <button className="bg-[#3e7dff] self-stretch text-white font-middle hover:bg-[#3e7dffcc]  p-4 rounded-full  transition duration-500 ">
        Send Magic Link
      </button>
      <Toaster position="bottom-center" />
    </form>
  );
}

export default EmailForm;
