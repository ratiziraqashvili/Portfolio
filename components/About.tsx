import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { url } from "inspector";
import { urlFor } from "@/sanity";


type Props = {
};

function About({}: Props) {
  const backgroundInfo = "Hello there! I'm a front-end developer who enjoys making websites look cool and work smoothly. I know HTML, CSS, and JavaScript, and I'm good at making things with React.js. I can also do some stuff with Tailwind CSS to make things pretty, and I can add fun animations with Framer Motion.  I've used Material-UI and Firebase to make websites do more things, and I've even tried out Next.js to make sites load faster. I've also played around with Sanity to make websites that are easy to update.  I like turning ideas into websites that people can use and enjoy. I'm always excited to learn new things and make websites that look good and work well. Let's create some awesome web experiences together!"
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
        src="https://i.imgur.com/aWdOWUJ.png"
        className="mb-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover mb:rounded-lg md:w-34 md:h-95 xl:w-[300px] xl:h-[300px] mt-30"
      />

      <div className="space-y-10  p-0 md:px-10">
        <h4 className="text-4xl font-semibold ml-3">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm ml-3">
          {backgroundInfo}
        </p>
      </div>
    </motion.div>
    
  );
}

export default About;
