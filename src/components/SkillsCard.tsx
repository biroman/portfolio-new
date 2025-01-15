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
    <div className="flex mt-4 bg-[#F5F5F8] rounded-lg items-center justify-center flex-col">
      <a>
        <img
          className="p-6 rounded-t-lg"
          src={skill.icon}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight">{skill.name}</h5>
      </div>
    </div>
  ));
  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-x-4">
      {listSkills}
    </div>
  );
}

export default SkillsCard;
