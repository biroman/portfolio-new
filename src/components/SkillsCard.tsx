import htmlcss from "../assets/skills/htmlcss.png";
import figma from "../assets/skills/figma.png";
import reactjs from "../assets/skills/reactjs.png";
import nextjs from "../assets/skills/nextjs.png";
import javascript from "../assets/skills/javascript.png";
import nodejs from "../assets/skills/nodejs.png";
import mongodb from "../assets/skills/mongodb.png";
import firebase from "../assets/skills/firebase.png";
import mysql from "../assets/skills/mysql.png";
import python from "../assets/skills/python.png";

const skills = [
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "HTML & CSS",
    icon: htmlcss,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Python",
    icon: python,
  },
];
function SkillsCard() {
  const listSkills = skills.map((skill) => (
    <div
      key={skill.name}
      className="flex mt-4 bg-[#F5F5F8] rounded-lg items-center justify-center flex-col p-4"
    >
      <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
        <img
          className="max-w-full max-h-full object-contain"
          src={skill.icon}
          alt={skill.name}
        />
      </div>
      <div className="mt-2 md:mt-4">
        <h5 className="text-lg md:text-xl font-semibold tracking-tight text-center">
          {skill.name}
        </h5>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
      {listSkills}
    </div>
  );
}

export default SkillsCard;
