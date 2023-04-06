import React from "react";
import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { services } from "../constants";
import { move,textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Skill=({name,x,y})=>{
  return(
    <motion.div className="xs:text-xs xs:p-2 flex absolute px-2 py-1.5 items-center justify-center rounded-full font-semibold bg-white text-black"
     whileHover={{scale:1.5}}
     variants={move(x,y)}
    >{name}</motion.div>
  )
}

const About = () => {
  return (
    <>
    <h2 className="font-bold text-2xl mt-1 w-full text-center md:text-6xl">About</h2>
    <div className="w-full h-[60vh] md:h-screen relative flex items-center justify-center rounded-full bg-circularLightSm  lg:bg-circularLightLg md:bg-circularLightMd xl:bg-circularLight">
      <motion.div className="flex items-center  justify-center rounded-full font-semibold bg-white text-black p-3" whileHover={{scale:1.05}}>Web</motion.div>
      <Skill name="CSS" x="-5vw" y="-13vw" />
      <Skill name="HTML" x="-20vw" y="2vw" />
      <Skill name="ReactJS" x="0vw" y="13vw" />
      <Skill name="NextJS" x="-20vw" y="-12vw" />
      <Skill name="Django" x="19vw" y="-12vw" />
      <Skill name="SpringBoot" x="32vw" y="-5vw" />
      <Skill name="GCP" x="2vw" y="-23vw" />
      <Skill name="ThreeJS" x="-25vw" y="16vw" />
      <Skill name="Tailwind" x="18vw" y="18vw" />
      <Skill name="DevOps" x="19vw" y="6vw" />
      <Skill name="AWS" x="-10vw" y="6vw" />
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")