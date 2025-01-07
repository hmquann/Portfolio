import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/kevinRushLogo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";

const Navbar = () => {
  const clickToSection = (e, content) => {
    e.preventDefault();
    let a = document.getElementById(content);
    a && a.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>
      <div className="flex justify-center gap-4 items-center">
        <a href="/" onClick={(e) => clickToSection(e, "about")}>
          About
        </a>
        <a href="/" onClick={(e) => clickToSection(e, "experience")}>
          Experience
        </a>
        <a href="/" onClick={(e) => clickToSection(e, "project")}>
          Project
        </a>
        <a href="/" onClick={(e) => clickToSection(e, "technology")}>
          Technology
        </a>
        <a href="/" onClick={(e) => clickToSection(e, "contact")}>
          Contact
        </a>
      </div>
      <motion.div
        whileInView={{ opacity: 1.5, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        className="m-8 flex items-center justify-center gap-4"
      >
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </motion.div>
    </nav>
  );
};

export default Navbar;
