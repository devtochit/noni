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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className=" flex  justify-between flex-col gap-10 lg:flex-row-reverse">
        {" "}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="lg:mt-20 mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          As a Cloud engineer and consultant, I assist customers who desire to
          adopt the latest cloud technologies in a sustainable and scalable way.
          Based on a long hands-on experience gained with customers operating in
          the Fintech, Insurtech, and Industrial sectors. My primary focus is on
          listening to understand needs and solve tangible problems.
          Specializing in Platform Engineering, I propose solutions that provide
          a solid foundation for a smooth user experience, optimizing the
          processes and making them more efficient and safe
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
