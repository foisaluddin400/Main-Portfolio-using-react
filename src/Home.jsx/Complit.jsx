import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Complit = () => {
    const [projectCount, setProjectCount] = useState(0);
    const [clientCount, setClientCount] = useState(0);
    const [feedbackCount, setFeedbackCount] = useState(0);

    useEffect(() => {
        const projectInterval = setInterval(() => {
            setProjectCount((prev) => (prev < 20 ? prev + 1 : prev));
        }, 100); // Increment every 100 milliseconds

        const clientInterval = setInterval(() => {
            setClientCount((prev) => (prev < 2 ? prev + 1 : prev));
        }, 500); // Increment every 500 milliseconds

        const feedbackInterval = setInterval(() => {
            setFeedbackCount((prev) => (prev < 98 ? prev + 1 : prev));
        }, 50); // Increment every 50 milliseconds

        return () => {
            clearInterval(projectInterval);
            clearInterval(clientInterval);
            clearInterval(feedbackInterval);
        };
    }, []);

    return (
        <motion.div
            className="md:flex md:justify-around items-center bg-[#1c1528] text-white py-8 mt-6"
            initial={{ opacity: 0, scale: 0.5 }} // Start smaller and transparent
            animate={{ opacity: 1, scale: 1 }} // Scale to normal and fully visible
            transition={{ duration: 0.5 }} // Animation duration
        >
            <div className="text-center">
                <motion.div 
                    className="text-4xl font-bold" 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ duration: 0.5 }} // Adjust duration as needed
                >
                    {projectCount}
                </motion.div>
                <div className="text-xl mt-2">Project Completed</div>
            </div>
            <div className="md:border-l border-dotted border-gray-600 h-24 mx-4"></div>
            <div className="text-center">
                <motion.div 
                    className="text-4xl font-bold" 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ duration: 0.5 }} // Adjust duration as needed
                >
                    {clientCount}
                </motion.div>
                <div className="text-xl mt-2">Satisfied Clients</div>
            </div>
            <div className="md:border-l border-dotted border-gray-600 h-24 mx-4"></div>
            <div className="text-center">
                <motion.div 
                    className="text-4xl font-bold" 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ duration: 0.5 }} // Adjust duration as needed
                >
                    {feedbackCount}%
                </motion.div>
                <div className="text-xl mt-2">Positive Feedback</div>
            </div>
        </motion.div>
    );
};

export default Complit;
