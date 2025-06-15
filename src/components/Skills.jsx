import Button from "./Button";
import Logo from "./Logo";

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
        <Logo loc={"src/logo/icons8-java-96.png"} pname={"Java"} />
        <Logo loc={"src/logo/icons8-python-96.png"} pname={"Python"} />
        <Logo loc={"src/logo/icons8-javascript-96.png"} pname={"JavaScript"} />
        <Logo loc={"src/logo/icons8-html-96.png"} pname={"HTML"} />
        <Logo loc={"src/logo/icons8-react-96.png"} pname={"React"} />
        <Logo loc={"src/logo/icons8-tailwindcss-96.png"} pname={"Tailwind"} />
        <Logo loc={"src/logo/icons8-numpy-96.png"} pname={"Numpy"} />
        <Logo loc={"src/logo/icons8-pandas-96.png"} pname={"Pandas"} />
        <Logo loc={"src/logo/icons8-matplotlib-96.png"} pname={"Matplotlib"} />
        <Logo loc={"src/logo/icons8-mysql-96.png"} pname={"MySQL"} />
        <Logo loc={"src/logo/icons8-git-96.png"} pname={"Git"} />
        <Logo loc={"src/logo/icons8-figma-96.png"} pname={"Figma"} />
      </div>
    </div>
  );
}

export default Skills;
