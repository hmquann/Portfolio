import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        About Me
      </motion.h1>
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <img className="rounded-lg" src={aboutImg} alt="" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex lg:justify-start justify-center"
          >
            <div className="py-6 max-w-xl my-2">{ABOUT_TEXT}</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
