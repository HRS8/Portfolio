import { color, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[22vh] xl:ml-[5rem] z-[15] max-w-auto mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1
            className={`${styles.heroHeadText} text-white cursor-pointer pacifico`}
          >
            Hi
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
            <br />
            I'm{" "}
            <span className=" text-[#8472c5] md:text-[#6b4ae6d7] font-Andan font-thin">
              Harsha
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-[#ffffffb4] font-semibold`}
          >
            <Typewriter
              options={{
                strings: [
                  "Developer",
                  "Deep Learning Engineer",
                  "MERN Stack Developer",
                  "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </p>
          <div className="mt-16">
            <a
              href="https://github.com/HRS8/VitePort/raw/main/public/Harsha%20resume.pdf"
              download
            >
              <button className="bg-gradient-to-br from-[#252525] to-[#0f0f0f] py-3 px-6 text-[#ffffffd7] text-[18px] rounded-xl outline-none w-fit font-bold shadow-md shadow-primary hover:bg-black border border-[#ffffff25] hover:border-white-100 transition ease-in-out delay-100 duration-300 hover:scale-90">
                My resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="flex justify-end relative w-full h-screen z-[5]">
        <div className="duration-[50000ms] origin-[50%_50%] bg-transparent object-contain flex-wrap flex ">
          <div class="bg-blue-500 w-[40vh] h-[40vh] lg:w-[40vw] lg:h-[40vw] m-2 filter blur-xl animation-delay-6000 opacity-70 animate-blob mix-blend-multiply rounded-full absolute lg:top-[12vw] lg:-right-[5vw] top-[25vh] -right-[5vh]"></div>
          <div class="bg-green-500 w-[40vh] h-[40vh] lg:w-[40vw] lg:h-[40vw] m-2 animation-delay-3000 filter blur-xl opacity-70 animate-blob mix-blend-multiply rounded-full absolute lg:top-[5rem] lg:right-[15rem] top-[13vh] right-[10vh]"></div>
          <div class="bg-orange-600 w-[40vh] h-[40vh] lg:w-[40vw] lg:h-[40vw] m-2 filter blur-xl opacity-70 animate-blob mix-blend-multiply rounded-full absolute lg:-top-[6vw] lg:-right-[6vw] -top-[5vh] -right-[10vh]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
