import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const controls = useAnimation();
  const contactRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before submitting

    // Client-side email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email address."); // Set error message for invalid email
      return;
    }

    try {
      const response = await fetch(
        "https://my-portfolio-contactform-server.vercel.app/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!data.success) {
        setError(data.error); // Set error message from the server
      } else {
        // Handle success case (e.g., show a success message or reset form)
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error("Error:", err);
    }
  };

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      id="contact"
      ref={contactRef}
      initial={{ opacity: 0, scale: 0.8 }} // Start smaller and transparent
      animate={controls} // Controlled animation
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div className="text-center py-[50px]">
        <span className="font-bold text-3xl text-yellow-500">_</span>
        <h1 className="font-bold text-2xl">
          My <span className="text-orange-600">Contact</span>
        </h1>
        <p className="text-slate-400">Some basic information about myself</p>
      </div>
      <div className="bg-[#1c1528] text-white flex flex-col items-center justify-center p-8">
        <div className="w-full mx-auto">
          <div className="text-left mb-8">
            <h2 className="text-5xl font-bold text-white">
              Contact <span className="text-orange-500">Us</span>
            </h2>
            <p className="text-lg text-gray-300 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
              commodi quidem! Veritatis delectus a et.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="md:grid gap-5 md:grid-cols-2 mb-6">
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Your Name"
                name="name"
                className="w-full p-4 bg-[#302738] text-gray-300 rounded-lg border-b border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 bg-[#302738] text-gray-300 rounded-lg border-b border-orange-500 focus:outline-none focus:ring-2 md:my-0 my-3 focus:ring-orange-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Send Your Message"
                className="w-full p-4 bg-[#302738] text-gray-300 rounded-lg border-b border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 col-span-2"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-start space-x-4">
              <div className="flex justify-center mt-8">
                <button type="submit" className="bg-orange-700 text-white btn">
                  Send a message
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}{" "}
                {/* Display error message */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
