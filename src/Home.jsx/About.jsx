
import about from "../assets/about1.png"
const About = () => {
    return (
        <div className="grid md:grid-cols-2">
            <div>
                <div className="m-[100px]">
                    <img className="w-full" src={about} alt="" />
                </div>
            </div>
            <div className="flex items-center">
                <div className="m-11">
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <p className="py-3">My name is Momtaj Uddin, and I'm a MERN stack developer from Bangladesh. I'm passionate about web development, striving to create user-friendly features. I'm dedicated to ensuring smooth functionality by diligently addressing bugs and errors, aiming for perfection in every project. My goal is to craft engaging user experiences through intuitive interfaces, focusing on usability and satisfaction.</p>
                </div>
            </div>
        </div>
    );
};

export default About;