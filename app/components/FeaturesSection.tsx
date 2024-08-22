"use client";

import CardItems from "./CardItems";
import { motion } from "framer-motion";
export default function FeaturesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.1, once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="features mt-[5rem] flex flex-col gap-4 items-center"
    >
      <div className="text-center flex flex-col items-center gap-2 px-4  ">
        <p className="text-[#3e7dff] font-bold text-[1rem]">CRYPTO FEATURE</p>
        <p className="text-[1.5rem] lg:text-[2.5rem] dark:text-white font-extrabold">
          Best Features
        </p>
        <p className="text-[#637381] dark:text-[#b5b3bc] text-[1.15rem] px-8 lg:text-[1.2rem]  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          congue arcu, In et dignissim quam condimentum vel.
        </p>
      </div>

      <CardItems />
    </motion.section>
  );
}
