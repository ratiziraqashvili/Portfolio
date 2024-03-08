import React from "react";
import { motion } from 'framer-motion';
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import { useMediaQuery } from "@react-hook/media-query";

type Props = {
  projects: Project[];
};

function Projects({projects}: Props) {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[1000px] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className=" animate-pulse top-[-60px] absolute md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl mt-40">
        Projects
      </h3>

      <div className="scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-proximity z-20 pt-40 ">
        {projects?.map((project, i) => (
          <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: isSmallScreen ? 0 : -300,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-96"
              src= {urlFor(project?.image).url()}
              alt=""
            />

            <div className="space-y-10 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  {" "}
                  Case Study {i + 1} of {projects.length}:{" "}
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
              {project?.technologies.map((technology) => (
                <img className="h-10 w-10" key={technology._id} src={urlFor(technology.image).url()} alt="" />
              ))}
              </div>
              <div className="flex items-center justify-center m-0">
                <a href={project?.linkToBuild} target="_blank">See Website</a>
              </div>

              <p className="text-md text-center">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
