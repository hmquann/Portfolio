import { PROJECTS } from "../constants";
import { motion } from "motion/react";

const Project = () => {
  return (
    <section id="project">
    <div className="border-b border-neutral-800 pb-4 ">
      <motion.h1
        whileInView={{ opacity: 1.5, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center mt-12 text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1.5, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4 mt-4"
            >
              <img
                className="mb-6 rounded"
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1.5, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl text-neutral-400 mt-4 lg:w'3/4"
            >
              <h6 className="font-semibold text-neutral-300">
                {project.title}
              </h6>
              <p className="mb-2">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 mt-4 text-purple-800 bg-neutral-800 font-medium text-sm rounded px-2 py-1"
                  key={index}
                >
                  {tech}
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

export default Project;
