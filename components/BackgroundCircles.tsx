import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%",]
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center item-center"
    >

      <div className=" absolute border border-[#33333] rounded-full h-[550px] w-[550px] mt-[-100px] animate-pulse opacity-20 " />
      <div className="absolute border border-[#f7ab0a] rounded-full h-[700px] w-[700px] mt-[-175px]  animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircles;
