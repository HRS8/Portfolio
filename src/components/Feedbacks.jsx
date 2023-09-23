import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className=" bg-gradient-to-br border hover:cursor-default hover:to-[#1d1d1d] hover:from-[#0a1331] border-[#2e2e2e] from-[#181818fa] shadow-lg shadow-[#929cfa60] to-[#09112cf1] p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]"></p>

    <div className="">
      <p className="text-[#dad6ff] tracking-wide spice text-[18px]">{testimonial}</p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`bg-[#1a1918] rounded-[16px] border  border-[#2c2c2c]`}>
      <div
        className={`border-b-2 border-[#303030] bg-gradient-to-r from-[#2d1358bb] to-[#193161b6] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}><p className="lobster text-[#a098cf] text-4xl underline">Things I'm proud of</p></p>
          <h2 className={styles.sectionHeadText}><p className="text-[30px] tracking-tight underline underline-offset-4 decoration-dashed decoration-2 mt-6 peralta text-[#7aa03d]">Achievements  ~‣</p></h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
