import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative  h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-auto mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div>
          <h1 className={`${styles.heroHeadText} text-white cursor-pointer`}>
            Hi, I'm <span className='text-[#915EFF] font-Andan font-thin' >Harsha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Let's dwell into my space <br className='hidden sm:block' />
            console.log("le'ss gooo..")
          </p>
        </div>
      </div>


    </section>
  );
};

export default Hero;
