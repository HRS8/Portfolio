import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      className={`relative  h-screen mx-auto overflow-hidden  `}
    >
      <div
        className={`absolute inset-0 top-[120px] xl:ml-[5rem]  max-w-auto mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
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
        </div>
      </div>
      <div class="flex justify-end relative w-full h-screen">
        <div class="bg-blue-500 w-[40vw] h-[40vw] m-2 filter blur-xl delay-[2s] opacity-70 animate-blob mix-blend-multiply rounded-full absolute top-[12vw] -right-[5vw]"></div>
        <div class="bg-green-500 w-[40vw] h-[40vw] m-2 delay-[4s] filter blur-xl opacity-70 animate-blob mix-blend-multiply rounded-full absolute top-[5rem] right-[15rem]"></div>
        <div class="bg-orange-600 w-[40vw] h-[40vw] m-2 filter blur-xl opacity-70 animate-blob mix-blend-multiply rounded-full absolute -top-[6vw] -right-[6vw]"></div>
      </div>
    </section>
  );
};

export default Hero;
