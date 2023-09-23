import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[]
};

function WorkExperience({experiences}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative overflow-hidden flex flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center mt-20"
    >
      <h3 className="animate-pulse absolute  uppercase top-0 tracking-[15px] sm:tracking-[20px] text-gray-500 text-2xl w-[]">
        Experience
      </h3>

      <div className=" scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 w-full flex space-x-5 overflow-x-scroll  snap-x snap-mandatory md:mt-20 mt-24">
      {
        experiences?.map((experience, i) => (
          <ExperienceCard 
           key={experience._id} experience={experience} />
        ) )
      }
      </div>
    </motion.div>
  );
}

export default WorkExperience;
