import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";
import { useMediaQuery } from "@react-hook/media-query";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ skill, directionLeft }: Props) {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <div className="group relative flex cursor-pointer top-20">
      <motion.img
        initial={{
          x: isSmallScreen ? 0 : directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:brightness-90 h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full x-0"></div>
    </div>
  );
}

export default Skill;
