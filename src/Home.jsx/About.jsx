import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import about from "../assets/about1.png";

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [0.8, 1], // Start slightly smaller and grow to full size
      transition: { duration: 0.5, ease: "easeOut" }
    }); 
  }, [controls]);

  return (
    <motion.div id="about" animate={controls}>
      <div className="grid md:grid-cols-2">
        <motion.div 
          className="flex justify-center items-center" 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <motion.div className="m-[100px] animate-rotate">
            <img className="w-full" src={about} alt="About Me" />
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex items-center" 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <div className="m-11">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="py-3">
              My name is Momtaj Uddin, and I'm a MERN stack developer from Bangladesh. 
              I'm passionate about web development, striving to create user-friendly features. 
              I'm dedicated to ensuring smooth functionality by diligently addressing bugs and errors, 
              aiming for perfection in every project. My goal is to craft engaging user experiences 
              through intuitive interfaces, focusing on usability and satisfaction.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
