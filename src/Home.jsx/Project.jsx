import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Project = () => {
  return (
    <div>
      <div className="text-center py-[50px]">
        <span className="font-bold text-3xl text-yellow-500">_</span>
        <h1 className="font-bold text-2xl">
          My <span className="text-orange-600">Project</span>
        </h1>
        <p className="text-slate-400">Some basic information about myself</p>
      </div>
      <div className="grid md:grid-cols-4 mx-11">
        {/* Card 1 */}
        <div className="relative shadow-2xl m-5 overflow-hidden">
          <figure>
            <div className="w-full md:h-[300px] h-[400px] overflow-hidden">
              <img
                className="border-[10px] border-[#34293a] rounded-md"
                src="https://i.ibb.co.com/pxWP1zm/screencapture-file-G-e-commarce-website-2-index-html-2024-01-11-12-54-18.png"
                alt="Shoes"
              />
            </div>
          </figure>
          <div className="p-3">
            <h2 className="card-title">Shoes!</h2>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ">
            <p className="text-2xl pt-2 pl-2 mr-11 cursor-pointer bg-orange-600 w-[40px] h-[40px] rounded-full"><FaCode /></p>
            <p className="text-2xl pt-2 pl-2 cursor-pointer bg-orange-600 w-[40px] h-[40px] rounded-full"><FaEye /></p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative shadow-xl m-5 overflow-hidden">
          <figure>
            <div className="w-full md:h-[300px] h-[400px] overflow-hidden">
              <img
                className="border-[10px] border-[#34293a] rounded-md"
                src="https://i.ibb.co.com/pxWP1zm/screencapture-file-G-e-commarce-website-2-index-html-2024-01-11-12-54-18.png"
                alt="Shoes"
              />
            </div>
          </figure>
          <div className="p-3">
            <h2 className="card-title">Shoes!</h2>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-2xl pt-2 pl-2 mr-11 cursor-pointer bg-orange-600 w-[40px] h-[40px] rounded-full"><FaCode /></p>
          <p className="text-2xl pt-2 pl-2 cursor-pointer bg-orange-600 w-[40px] h-[40px] rounded-full"><FaEye /></p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative shadow-xl m-5 overflow-hidden">
          <figure>
            <div className="w-full md:h-[300px] h-[400px] overflow-hidden">
              <img
                className="border-[10px] border-[#34293a] rounded-md"
                src="https://i.ibb.co.com/pxWP1zm/screencapture-file-G-e-commarce-website-2-index-html-2024-01-11-12-54-18.png"
                alt="Shoes"
              />
            </div>
          </figure>
          <div className="p-3">
            <h2 className="card-title">Shoes!</h2>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-2xl pt-2 pl-2 mr-11 cursor-pointer bg-orange-600 w-[40px] h-[40px] rounded-full"><FaCode /></p>
          <p className="text-2xl pt-2 pl-2 cursor-pointer bg-orange-600 w-[40px] h-[40px] rounded-full"><FaEye /></p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative shadow-xl m-5 overflow-hidden">
          <figure>
            <div className="w-full md:h-[300px] h-[400px] overflow-hidden">
              <a href="https://i.ibb.co.com/nzMLpWg/screencapture-localhost-5175-2024-10-05-22-04-19.png"><img
                className="border-[10px] border-[#34293a] rounded-md"
                src="https://i.ibb.co.com/pxWP1zm/screencapture-file-G-e-commarce-website-2-index-html-2024-01-11-12-54-18.png"
                alt="Shoes"
              /></a>
            </div>
          </figure>
          <div className="p-3">
            <h2 className="card-title">Shoes!</h2>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-2xl pt-2 pl-2 mr-11 cursor-pointer bg-orange-600 w-[40px] h-[40px] rounded-full"><FaCode /></p>
          <p className="text-2xl pt-2 pl-2 cursor-pointer bg-orange-600 w-[40px] h-[40px] rounded-full"><FaEye /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
