import { motion } from "framer-motion";
function TimeLine() {
    return (  
      <motion.section

      initial={{opacity:0 ,y:5}}
      whileInView={{opacity:1,y:0}}
      viewport={{amount:.5,once:true}}
      transition={{duration:.5}}
      
      id="timeline" className="mt-[5rem] flex flex-col gap-4 items-center text-center pb-8">
        <p className="text-[#3e7dff] font-bold text-[1rem]">ROADMAP
        </p>
        <p className="text-[1.5rem] lg:text-[2.5rem] dark:text-white font-extrabold">
         
        The Timeline
        </p>
        <p className="text-[#637381]  dark:text-[#b5b3bc] text-[1.15rem] lg:text-[1.2rem] lg:w-[60%] w-[100%] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          congue arcu, In et dignissim quam condimentum vel.
        </p>
      </motion.section>
    );
}

export default TimeLine;