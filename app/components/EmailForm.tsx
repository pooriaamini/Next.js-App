function EmailForm() {
  return (
    <form
      className="flex flex-col gap-6 items-center mt-4 self-stretch justify-center"
      action=""
    >
      <input
        className=" border flex self-stretch border-gray-200 dark:border-[#637381] py-3 px-4 rounded-full bg-white dark:bg-[#1e2763] mt-8 dark:placeholder:text-[#b5b3bc] placeholder:text-[.9rem] p-3"
        placeholder="Email"
        type="text"
        name=""
        id=""
      />
      <button className="bg-[#3e7dff] self-stretch text-white font-middle hover:bg-[#3e7dffcc]  p-4 rounded-full  transition duration-500 ">
        Send Magic Link
      </button>
    </form>
  );
}

export default EmailForm;
