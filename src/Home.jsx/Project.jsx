import React, { useEffect, useRef } from 'react';
import { FaEye, FaCode } from "react-icons/fa";
import Shoping from "../assets/shoping.png";
import bistro from "../assets/bistro.png";
import searching from "../assets/searcing.png";
import ecommerce from "../assets/ecommerce.png";
import oldecomerce from "../assets/old-ecomerce.png";
import fahimbd from "../assets/bd-fahim.png";
import calculator from "../assets/calculator.png";
import light from "../assets/light.png";
import furniture from "../assets/furniture.png";
import { motion, useAnimation } from 'framer-motion';

const Project = () => {
  const controls = useAnimation();
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, scale: 1 });
        } else {
          controls.start({ opacity: 0, scale: 0.8 });
        }
      });
    });

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, [controls]);

  return (
    <div id="project" ref={projectRef}>
      <div className="text-center py-[50px]">
        <span className="font-bold text-3xl text-yellow-500">_</span>
        <h1 className="font-bold text-2xl">
          My <span className="text-orange-600">Project</span>
        </h1>
      
      </div>
      <div className="grid md:grid-cols-4 ">
        {[ // Create an array of projects to map through
          {
            image: Shoping,
            title: "Shopping Website",
            codeLink: "https://github.com/foisaluddin400/e-commerse-website-react",
            liveLink: "https://e-commerse-website-react.vercel.app/"
          },
          {
            image: bistro,
            title: "FoodShop Website",
            codeLink: "https://github.com/foisaluddin400/Front-end-bistro",
            liveLink: "https://bistro-final-website.web.app/"
          },
          {
            image: furniture,
            title: "Furniture Website",
            codeLink: "https://github.com/foisaluddin400/furniture-client-side",
            liveLink: "https://backhand-login.web.app/"
          },
          {
            image: searching,
            title: "E-Commerce Website",
            codeLink: "https://github.com/foisaluddin400/Searcing-product-next-js",
            liveLink: "https://searcing-product-next-js.vercel.app/Search"
          },
          {
            image: ecommerce,
            title: "Ecommerce Website",
            codeLink: "https://github.com/foisaluddin400/ecommarcce-website",
            liveLink: "https://ecommarcce-website.vercel.app/"
          },
          {
            image: oldecomerce,
            title: "Fast Food Project",
            codeLink: "https://github.com/foisaluddin400/responsive-food",
            liveLink: "https://responsive-food-khaki.vercel.app/"
          },
          {
            image: fahimbd,
            title: "Personal Website",
            codeLink: "https://github.com/foisaluddin400/resturent-bdcalling-react",
            liveLink: "https://resturent-bdcalling-react.vercel.app/"
          },
          {
            image: calculator,
            title: "Calculator",
            codeLink: "https://github.com/foisaluddin400/calculator-project-java",
            liveLink: "https://calculator-project-java.vercel.app/"
          },
          {
            image: light,
            title: "Light & Dark Mode",
            codeLink: "https://github.com/foisaluddin400/light-on-off",
            liveLink: "https://light-on-off-xi.vercel.app/"
          },
        ].map((project, index) => (
          <motion.div 
            key={index}
            className="relative shadow-2xl m-5 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <figure>
              <div className="w-full md:h-[300px] h-[400px] overflow-hidden">
                <img
                  className="border-[10px] border-[#201924] rounded-md"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </figure>
            <div className="">
              <h2 className="card-title p-3 bg-[#201924] text-[17px] rounded-b-md">{project.title}</h2>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ">
              <p className="text-2xl pt-2 pl-2 mr-11 cursor-pointer bg-orange-600 w-[40px] h-[40px] rounded-full">
                <a href={project.codeLink}><FaCode /></a>
              </p>
              <p className="text-2xl pt-2 pl-2 cursor-pointer bg-orange-600 w-[40px] h-[40px] rounded-full">
                <a href={project.liveLink}><FaEye /></a>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
