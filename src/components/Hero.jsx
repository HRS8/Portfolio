import { color, motion } from "framer-motion";
import Typewriter from 'typewriter-effect'
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative  h-screen mx-auto overflow-hidden  `}>
      <div
        className={`absolute inset-0 top-[22vh] xl:ml-[5rem] z-[15] max-w-auto mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white cursor-pointer`}>
            Hi
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
            <br />
            I'm{" "}
            <span className="text-[#915EFF] font-Andan font-thin">Harsha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter
              options={{
                strings: [
                  "Developer",
                  "DevOps Engineer",
                  "Full Stack Developer",
                  "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </p>
          <div className="mt-4 flex">
            <a href="mailto:harshithvallabaneni3824@gmail.com"><button class="rounded-md text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-black text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-l-full font-semibold flex items-center justify-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[17px] h-[17px]"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>Get In Touch</button></a>
            <a href="https://drive.google.com/uc?export=download&id=1j4bsKMiQXUac5ab4l9GXONTRNY2l-bGm"><button class="rounded-md text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-r-full text-black font-semibold flex items-center justify-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>Resume</button></a>
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
