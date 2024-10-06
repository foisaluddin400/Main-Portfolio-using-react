import { useState, useEffect } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if user has scrolled more than 20% of window height
      if (scrollY > windowHeight * 0.2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`navbar flex justify-between transition-all duration-500 ${
          isScrolled ? "fixed top-0 max-w-screen-xl m-auto  bg-[#141125ab]  shadow-lg z-50" : ""
        }`}
      >
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">FOISAL</a>
        </div>
        <div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#skill">Skill</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <details className="dropdown">
              <summary className="btn m-1 bg-[#ffffff00] border-none text-white">
                <HiOutlineBars3BottomRight className="text-white text-4xl" />
              </summary>
              <ul className="menu dropdown-content bg-[#0e083c] rounded-sm z-[1] right-0 w-52 p-2 shadow">
                <li>
                  <a href="#home">HOME</a>
                </li>
                <li>
                  <a href="#about">ABOUT</a>
                </li>
                <li>
                  <a href="#skill">Skill</a>
                </li>
                <li>
                  <a href="#project">Project</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
