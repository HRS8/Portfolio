import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="from-[#242625b7] to-[#223352b7] hover:shadow-xl duration-00 shadow-2xl shadow-[#4b4a4a] hover:shadow-cyan-500/50 border border-[#2d2c38] bg-gradient-to-br p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="mooli ml-2 mb-6 underline decoration-1 underline-offset-4 decoration-double text-[#ddfdffd8] tracking-wider font-bold text-[24px]">{name}</h3>
          <p className="mt-2 mx-1 tech tracking-wide text-secondary text-[16px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map ((tag) => (
            <div className="border-t border-b border-[#75747a]">
            <p
              key={`${name}-${tag.name}`}
              className={`text-[17px] ${tag.color}`}
            >
              #{tag.name}
            </p>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[18px] text-center peralta`}>
          My Projects
        </p>
        <p className={`${styles.sectionHeadText} text-center lobster tracking-widest text-8xl my-8`}>
          Projects
        </p>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-center text-[18px] w-full leading-[30px]'>
          <div className="mx-[8vw] mono tracking-wider">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
          </div>
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"");