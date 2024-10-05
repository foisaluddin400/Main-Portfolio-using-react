import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <div>
      <div className="navbar flex justify-between">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">FOISAL</a>
        </div>
        <div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li>
                  <a>HOME</a>
                </li>
                <li>
                  <a>ABOUT</a>
                </li>
                <li>
                  <a>Skill</a>
                </li>
                <li>
                  <a>Project</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <details className="dropdown">
              <summary className="btn m-1 bg-[#ffffff00] border-none text-white "><HiOutlineBars3BottomRight className="text-white text-4xl"/></summary>
              <ul className="menu dropdown-content bg-[#0e083c] rounded-sm  z-[1] right-0 w-52 p-2 shadow">
                <li>
                  <a>HOME</a>
                </li>
                <li>
                  <a>ABOUT</a>
                </li>
                <li>
                  <a>Skill</a>
                </li>
                <li>
                  <a>Project</a>
                </li>
                <li>
                  <a>Contact</a>
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
