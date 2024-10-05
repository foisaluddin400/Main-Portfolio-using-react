import pic from "../assets/bbbbb.png";
const MainHero = () => {
  return (
    <div>
      <div className="hero  md:h-[60vh]">
        <div className="hero-content grid md:grid-cols-2 ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">HI, I am <span className="text-orange-500">Momtaj</span></h1>
            <p className="py-6">
              
              <h1 className="text-xl">I'm a passionate web developer focused on creating amazing digital experiences.</h1>
            </p>
            <button className="bg-orange-600 py-2 px-4 rounded">Resume</button>
          </div>
          <div className="flex justify-center">
          <div className=" w-full max-w-sm shrink-0 ">
            <img src={pic} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
