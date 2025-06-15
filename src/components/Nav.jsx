import { useState } from "react";
import { MdSunny } from "react-icons/md";
import { TbMoonFilled } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

function Navbar({ val, fun1, fun2 }) {
  // console.log("hey this is side bar:", sideBar);

  const [isSpinning, setIsSpinning] = useState(false);
  const [icothe, setIcon] = useState(0);
  const [switchIcon, iconSet] = useState(0);

  console.log("this is switch icon", switchIcon);

  let hideShow = () => {
    if (switchIcon == 0) {
      iconSet(1);
    } else {
      iconSet(0);
      console.log(switchIcon);
    }
  };
  fun2(switchIcon);

  let darkWhite = () => {
    if (val == "dark") {
      fun1("");
      setIcon(1);
    } else {
      fun1("dark");
      setIcon(0);
    }
    setIsSpinning(true);
    setIcon(icothe === 1 ? 0 : 1);

    setTimeout(() => setIsSpinning(false), 2200);
  };



  return (
    <div className="top-banner bg-[#FFFFFF] dark:bg-[#030712] shadow-md top-0 w-full z-50 transition-all duration-300 ease-in-out animate-slide-down">
      <div className="container max-w-[1200px] mx-auto px-7">
        <header className="py-4 flex justify-between items-center max-w-7xl mx-auto text-[#4B5563] dark:text-[#D1D5DB]">
          {/* Logo */}
          <span className="text-2xl font-bold text-[#111827] dark:text-[#F9FAFB] cursor-pointer">
            <img
              className="w-10 h-10 object-contain"
              src="src/logo/bl.png"
              alt="Logo"
            />
          </span>

          {/* Navigation */}
          <nav className="space-x-6 hidden md:flex items-center ">
            {["about", "work", "projects", "testimonials", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="relative text-base font-medium hover:text-black dark:hover:text-white transition duration-300 group"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="block h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}

            {/* Theme Toggle */}
            <span
              onClick={darkWhite}
              className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              {icothe == 0 ? (
                <MdSunny
                  className={`${
                    isSpinning ? "animate-smooth-spin" : ""
                  } text-yellow-500`}
                />
              ) : (
                <TbMoonFilled className="text-gray-900 dark:text-white" />
              )}
            </span>

            {/* CV Button */}
            <button className="px-4 py-2 rounded-xl bg-[#111827] dark:bg-white text-[#F9FAFB] dark:text-black font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md">
              Download CV
            </button>
          </nav>
          <div className="md:hidden block">
            <div
              onClick={hideShow}
              className="md:hidden sticky text-2xl cursor-pointer z-[9999]"
            >
              {switchIcon == 0 ? (
                <CiMenuBurger className="md:hidden flex text-2xl transition-transform duration-300" />
              ) : (
                <div >
                  <div className="relative z-[9999] w-17 flex flex-row-reverse justify-between"></div>
                  <div className="fixed inset-0 z-[999] h-screen w-screen flex overflow-hidden">
                    {/* Left 40% */}
                    <div className="w-[42%] cursor-auto h-full bg-[#111827] opacity-30"></div>

                    {/* Right 60% */}
                    <div className=" w-[58%] cursor-auto py-5 h-full bg-[#FFFFFF] dark:bg-[#030712]">
                      <div className="w-full flex justify-between px-10 ">
                        <div
                          onClick={darkWhite}
                          className="text-2xl relative z-[9999] cursor-pointer transition-transform duration-300 hover:scale-110"
                        >
                          {icothe == 0 ? (
                            <MdSunny
                              className={`${
                                isSpinning ? "animate-smooth-spin" : ""
                              } text-yellow-500`}
                            />
                          ) : (
                            <TbMoonFilled className="text-gray-900 dark:text-white" />
                          )}
                        </div>
                        <div>
                          <RxCross2 className="md:hidden relative z-[9999] cursor-pointer text-3xl transition-transform duration-300 text-red-300" />
                        </div>
                      </div>
                      <div className="h-full flex-col space-y-8 justify-end py-20">
                        <ul className="text-end w-full space-y-2">
                          <li
                            href="#about"
                            className="border-x-0 w-full border-b-2 dark:border-b-1 border-solid pr-9 dark:border-gray-500"
                          >
                            <a
                              href="#about"
                              className="py-2 block h-full w-full text-base font-medium "
                            >
                              About
                            </a>
                          </li>
                          <li className="border-x-0 w-full border-b-2 dark:border-b-1 border-solid pr-9 dark:border-gray-500">
                            <a
                              href="#work"
                              className="py-2 block h-full text-base w-full font-medium"
                            >
                              Work
                            </a>
                          </li>
                          <li className="border-x-0 w-full border-b-2 dark:border-b-1 border-solid pr-9 dark:border-gray-500">
                            <a
                              href="#projects"
                              className="text-base py-2 block h-full w-full font-medium "
                            >
                              Projects
                            </a>
                          </li>
                          <li className="border-x-0 w-full border-b-2 dark:border-b-1 border-solid pr-9 dark:border-gray-500">
                            <a
                              href="#testimonials"
                              className="py-2 block h-full text-base w-full font-medium "
                            >
                              Testimonials
                            </a>
                          </li>
                          <li className="border-x-0 w-full border-b-2 dark:border-b-1 border-solid pr-9 dark:border-gray-500">
                            <a
                              href="#contact"
                              className="py-2 block h-full text-base w-full font-medium"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                        <div className="w-full flex justify-end pr-9 items-center">
                          <button className="text-[1rem] px-4 py-2 rounded-xl max-h-20 bg-[#111827] dark:bg-white text-[#F9FAFB] dark:text-black font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md">
                            Download CV
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
