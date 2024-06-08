import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Noni } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}></h2>
      </motion.div>

      <div className=" flex  justify-between flex-col gap-10 lg:flex-row-reverse">
        {" "}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="lg:mt-20 mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          Well-trained IT professional with 3 years of hands-on experience in
          cloud engineering and a strong background in cybersecurity. Proficient
          in cloud computing and AWS architecture, with a solid foundation in
          designing and developing three-tier architectures. I am skilled in
          various software development tools, scripting languages, and
          technologies. I quickly adapt to new environments and systems and am
          known for exceptional teamwork, communication, and collaborative
          skills. I thrive in dynamic and fast-paced settings, consistently
          delivering high-quality results.
        </motion.p>
        <img src={Noni} className=" w-full h-[500px]" />
      </div>

      <div className="mt-40 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
