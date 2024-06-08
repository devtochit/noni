import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, link, name, date, details, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    onClick={() => window.open(link, "_blank")}
  >
    <div className="mt-1">
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-full h-full rounded-full object-cover"
      />
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient"></span> {details}
          </p>
          <p className="mt-1 text-secondary text-[12px]">{date}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <div className=" mb-4">
          <p className={styles.sectionSubText}> Education</p>
          <h2 className=" text-xl font-black">
            Master in computing University of Roehampton <br />
            London
          </h2>
        </div>
        <motion.div variants={textVariant()} className="mb-10">
          <p className={styles.sectionSubText}> Certification</p>
          <h2 className={styles.sectionHeadText}>
            {" "}
            Professional Certification
          </h2>
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
