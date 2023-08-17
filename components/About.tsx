import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { url } from "inspector";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center mt-20 md:mt-0"
    >
      <h3 className=" animate-pulse top-[-60px] absolute md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="mb-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover mb:rounded-lg md:w-34 md:h-95 xl:w-[300px] xl:h-[300px] mt-30"
      />

      <div className="space-y-10  p-0 md:px-10">
        <h4 className="text-4xl font-semibold ml-3">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm ml-3">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
    
  );
}

export default About;
