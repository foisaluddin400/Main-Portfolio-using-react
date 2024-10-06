import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import pic from "../assets/bbbbb.png";

const MainHero = () => {
  const texts = [
    "Full-Stack MERN Developer",
    "Passionate Web Developer & Problem Solver",
    "I build web Applications",
  ];
  const typingSpeed = 60;
  const delayBetweenTexts = 1000;

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), delayBetweenTexts);
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    } else {
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index, isDeleting]);

  useEffect(() => {
    setText(texts[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <div id="home">
      <div className="hero md:h-[60vh]">
        <div className="hero-content grid md:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-xl font-bold">
              <h1 className="pb-2">
                HI, <span className="text-orange-500 text-2xl animate-grow-shrink">I am Momtaj</span>
              </h1>
            </h1>
            <h1 className="text-4xl font-bold">
              <span className="animate-grow-shrink">{text}</span>
            </h1>
            <p className="py-3">
              <h1 className="text-xl text-slate-400">
                I'm a passionate web developer focused on creating amazing digital experiences.
              </h1>
            </p>
            <button className="bg-orange-600 py-2 px-4 rounded">Resume</button>
          </div>
          <div className="flex justify-center">
            <motion.div 
              className="max-w-sm shrink-0" 
              initial={{ scale: 0 }} // Start with scale 0
              animate={{ scale: 1 }} // Animate to scale 1
              transition={{ duration: 0.5 }} // Duration of animation
            >
              <img className="w-[80]" src={pic} alt="About Me" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
