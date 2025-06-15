import Button from "./Button";
import Logo from "./Logo";
import java from '../logo/icons8-java-96.png'
import python from '../logo/icons8-python-96.png'
import js from '../logo/icons8-javascript-96.png'
import html from '../logo/icons8-html-96.png'
import react from '../logo/icons8-react-96.png'
import tailwind from '../logo/icons8-tailwindcss-96.png'
import numpy from '../logo/icons8-numpy-96.png'
import pandas from '../logo/icons8-pandas-96.png'
import matplot from '../logo/icons8-matplotlib-96.png'
import MySQL from '../logo/icons8-mysql-96.png'
import git from '../logo/icons8-git-96.png'
import figma from '../logo/icons8-figma-96.png'

function Skills() {
  return (
    <div className="w-full py-20">
      <div className="mb-10">
        <div className="flex w-full justify-center items-center mb-4">
          <Button btnText={"Skills"} />
        </div>
        <p className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-xl text-center">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-y-6 lg:gap-x-[87px] text-center">
        <Logo loc={java} pname={"Java"} />
        <Logo loc={python} pname={"Python"} />
        <Logo loc={js} pname={"JavaScript"} />
        <Logo loc={html} pname={"HTML"} />
        <Logo loc={react} pname={"React"} />
        <Logo loc={tailwind} pname={"Tailwind"} />
        <Logo loc={numpy} pname={"Numpy"} />
        <Logo loc={pandas} pname={"Pandas"} />
        <Logo loc={matplot} pname={"Matplotlib"} />
        <Logo loc={MySQL} pname={"MySQL"} />
        <Logo loc={git} pname={"Git"} />
        <Logo loc={figma} pname={"Figma"} />
      </div>
    </div>
  );
}

export default Skills;
