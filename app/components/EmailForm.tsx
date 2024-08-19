function EmailForm() {
    return ( 
        <form className="flex flex-col gap-6 items-center self-stretch justify-center" action="">
            <input className="w-80 border flex  border-gray-200 dark:border-[#637381] py-3 px-4 rounded-full bg-white dark:bg-[#1e2763] mt-8 dark:placeholder:text-white p-3" placeholder="Email" type="text" name="" id="" />
            <button className="bg-[#3e7dff] text-white font-middle hover:bg-[#3e7dffcc]  py-3 px-4 rounded-full w-80 transition duration-500 " >Send Magic Link</button>
        </form>
     );
}

export default EmailForm;