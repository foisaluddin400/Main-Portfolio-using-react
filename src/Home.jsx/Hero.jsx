import { useState, useEffect } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import logo from '../assets/logo.png'
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
          <a className="text-[12px] ml-4 lg:m-0" href="#"><img className="w-[40px]" src={logo} alt="" />FOISAL</a>
        </div>
        <div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="hover:bg-orange-700">
                <a href="#home">HOME</a>
              </li>
              <li className="hover:bg-orange-700">
                <a href="#about">ABOUT</a>
              </li>
              <li className="hover:bg-orange-700">
                <a href="#skill">SKILL</a>
              </li>
              <li className="hover:bg-orange-700">
                <a href="#project">PROJECT</a>
              </li>
              <li className="hover:bg-orange-700">
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <details className="dropdown">
              <summary className="btn hover:bg-[#00000000]  bg-[#ffffff00] border-none text-white">
                <HiOutlineBars3BottomRight className="text-white text-4xl" />
              </summary>
              <ul className="menu dropdown-content bg-[#110041] rounded-sm z-[1] right-0 w-52 p-2 shadow">
                <li className="hover:bg-orange-700">
                  <a href="#home">HOME</a>
                </li>
                <li className="hover:bg-orange-700">
                  <a href="#about">ABOUT</a>
                </li>
                <li className="hover:bg-orange-700">
                  <a href="#skill">SKILL</a>
                </li>
                <li className="hover:bg-orange-700">
                  <a href="#project">PROJECTS</a>
                </li>
                <li className="hover:bg-orange-700">
                  <a href="#contact">CONTACT</a>
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
