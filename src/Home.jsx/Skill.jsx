import css from '../assets/css-3.png'
import html from '../assets/html-5.png'
import js from '../assets/js.png'
import git from '../assets/github.png'
import react from '../assets/react2.png'
import next from '../assets/next.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'
import fire from '../assets/firebase.png'
import express from '../assets/express.png'
import tail from '../assets/tail.png'
import figma from '../assets/figma.png'

const SkillProgress = ({ skillName, percentage, logo }) => {
  return (
    <div className="flex items-center mb-4">
      <img src={logo} alt={`${skillName} logo`} className="w-10 h-10 mr-2" />
      <div className="flex-1">
        <div className="text-gray-300">{skillName}</div>
        <div className="relative">
          <div className="bg-gray-600 h-2 rounded-full">
            <div
              className="bg-orange-500 h-2 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
      <span className="ml-2 text-gray-300">{percentage}%</span>
    </div>
  );
};

const Skill = () => {
  const programmingSkills = [
    { name: 'HTML', percentage: 85, logo: html},
    { name: 'CSS', percentage: 80, logo: css },
    { name: 'Tailwind', percentage: 80, logo: tail },
    { name: 'Javascript', percentage: 70, logo: js },
    { name: 'React Js', percentage: 65, logo: react },
    { name: 'Next Js', percentage: 40, logo: next },
    { name: 'Mongo DB', percentage: 50, logo: mongo },
    { name: 'Express Js', percentage: 60, logo: express},
    { name: 'Node Js', percentage: 45, logo: node },
    { name: 'Firebase', percentage: 75, logo: fire },
    { name: 'Github', percentage: 70, logo: git },
    { name: 'Figma', percentage: 80, logo: figma },
  ];

  const personalSkills = [
    { name: 'Creativity', percentage: 85 },
    { name: 'Workability', percentage: 90 },
    { name: 'Teamwork', percentage: 80 },
    { name: 'Organizing', percentage: 75 },
    { name: 'Concentration', percentage: 70 },
    { name: 'Communication', percentage: 85 },
  ];

  return (
    <div className='-mt-[100px]'>
        <div className="text-center py-[50px]">
            <span className="font-bold text-3xl text-yellow-500 ">_</span>
            <h1 className="font-bold text-2xl">My <span className="text-orange-600">Skill</span></h1>
            <p className="text-slate-400">Some basic information about myself</p>
        </div>
        <div className="bg-[#1c1528] text-white p-8">
      
      <h3 className="text-xl mb-4">Programming Skills</h3>
      <div className="flex flex-col sm:flex-row sm:flex-wrap mb-8">
        {programmingSkills.map((skill) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={skill.name}>
            <SkillProgress skillName={skill.name} percentage={skill.percentage} logo={skill.logo} />
          </div>
        ))}
      </div>
      <h3 className="text-xl mb-4">Personal Skills</h3>
      <div className="flex flex-col sm:flex-row justify-between">
        {personalSkills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center mb-4 sm:w-1/3">
            <div className="text-gray-300">{skill.name}</div>
            <div className="bg-gray-600 h-20 w-20 rounded-full flex items-center justify-center">
              <span className="text-orange-500 text-2xl">{skill.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skill;
