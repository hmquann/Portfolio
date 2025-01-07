import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";
const Experience = () => {
  return (
    <section id="experience">
    <div className="border-b border-neutral-800 pb-4 ">
      <motion.h1
       whileInView={{ opacity: 1.5, y: 0 }}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 1.5 }}
      className="text-4xl my-20 text-center">Experience</motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1.5, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div 
             whileInView={{ opacity: 1.5, x: 0 }}
             initial={{ opacity: 0, x: 100 }}
             transition={{ duration: 1.5 }}
             className="w-full max-w-lg lg:w-3/4">
              <h6 className="mb-2 font-semibold  text-neutral-400">
                {experience.role} -{" "}
                <span className="text-sm text-purple-300">
                  {experience.company}
                </span>
              </h6>
              <p className="font-thin">{experience.description}</p>
              {experience.technologies.map((technologie, index) => (
                <span
                  className="mr-2 mt-4 bg-neutral-800 text-purple-700 px-2 py-1 text-sm font-medium rounded "
                  key={index}
                >
                  {technologie}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Experience;
