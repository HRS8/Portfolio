import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative  h-screen mx-auto overflow-hidden  `}>
      <div
        className={`absolute inset-0 top-[120px] xl:ml-[5rem] z-20 max-w-auto mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white cursor-pointer`}>
            Hi, I'm{" "}
            <span className="text-[#915EFF] font-Andan font-thin">Harsha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Let's dwell into my space <br className="hidden sm:block" />
            console.log("le'ss gooo..")
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/HRS8/VitePort/raw/main/public/Harsha%20resume.pdf"
              download
            >
              <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-black border-2 border-transparent hover:border-white-100 transition ease-in-out delay-100 duration-300 hover:scale-90">
                My resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="flex justify-end relative w-full h-screen z-10">
        <div class="bg-blue-500 w-[40vw] h-[40vw] m-2 filter blur-xl delay-[2s] opacity-70 animate-blob mix-blend-multiply rounded-full absolute top-[12vw] -right-[5vw]"></div>
        <div class="bg-green-500 w-[40vw] h-[40vw] m-2 delay-[4s] filter blur-xl opacity-70 animate-blob mix-blend-multiply rounded-full absolute top-[5rem] right-[15rem]"></div>
        <div class="bg-orange-600 w-[40vw] h-[40vw] m-2 filter blur-xl opacity-70 animate-blob mix-blend-multiply rounded-full absolute -top-[6vw] -right-[6vw]"></div>
      </div>
    </section>
  );
};

export default Hero;
