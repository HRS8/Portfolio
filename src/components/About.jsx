import React from "react";
import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { services } from "../constants";
import { move,textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";



const Skill=({name,x,y})=>{
  return(
    <motion.div className="text-xs xs:text-sm px-[0.15rem] py-[0.11rem]  flex absolute xs:px-2 xs:py-1.5 items-center justify-center rounded-full font-semibold bg-white text-black"
     whileHover={{scale:1.5}}
     variants={move(x,y)}
    >{name}</motion.div>
  )
}

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
    <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
    <div className="w-full h-[60vh] mt-8 md:mt-5 md:h-screen relative flex items-center justify-center rounded-full bg-circularLightSm  lg:bg-circularLightLg md:bg-circularLightMd xl:bg-circularLight">
      <motion.div className="flex items-center  justify-center rounded-full font-semibold bg-white text-black p-3" whileHover={{scale:1.05}}>Web</motion.div>
      <Skill name="CSS" x={isMobile? "-33vw":"-5vw"} y={isMobile?"-11vh":"-13vw"} />
      <Skill name="HTML" x={isMobile?"-40vw":"-20vw"} y="2vw" />
      <Skill name="ReactJS" x={isMobile?"0vw":"0vw"} y={isMobile? "25vh":"13vw"} />
      <Skill name="NextJS" x={isMobile?"-30vw":"-20vw"} y={isMobile?"-19vh":"-12vw"} />
      <Skill name="Django" x={isMobile?"20vw":"19vw"} y={isMobile?"-11vh":"-12vw"} />
      <Skill name="SpringBoot" x="33vw" y="-5vw" />
      <Skill name="GCP" x="2vw" y={isMobile?"-23vh":"-23vw"} />
      <Skill name="ThreeJS" x="-25vw" y={isMobile?"20vh":"16vw"} />
      <Skill name="Tailwind" x={isMobile?"22vw":"18vw"} y={isMobile?"-18vh":"18vw"} />
      <Skill name="DevOps" x={isMobile?"23vw":"19vw"} y={isMobile?"14vh":"6vw"} />
      <Skill name="AWS" x={isMobile?"-15vw":"-10vw" }y={isMobile?"10vh":"6vw"} />
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")