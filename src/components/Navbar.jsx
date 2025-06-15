import { useState } from "react";
import { MdSunny } from "react-icons/md";
import { TbMoonFilled } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import logo from '../logo/bl.png'

function Navbar({ val, fun1, fun2 }) {
  // console.log("hey this is side bar:", sideBar);

  const [isSpinning, setIsSpinning] = useState(false);
  const [icothe, setIcon] = useState(0);
  const [switchIcon, iconSet] = useState(0);
  // const [open, setOpen] = useState(false);
   const fileId = "1Lt5iHcMFRIHXkICmLxzmJusAn5Wy0URw";
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`


  

  let hideShow = () => {
    if (switchIcon == 0) {
      iconSet(1);
    } else {
      iconSet(0);
    }
  };

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
  fun2(switchIcon);

  return (
    <div className="top-banner bg-[#FFFFFF] dark:bg-[#030712] shadow-md top-0 w-full z-50 transition-all duration-300 ease-in-out animate-slide-down">
      <div className="container max-w-[1200px] mx-auto px-7">
        <header className="py-4 flex justify-between items-center max-w-7xl mx-auto text-[#4B5563] dark:text-[#D1D5DB]">
          {/* Logo */}
          <span  onClick={() => window.location.reload()} className="text-2xl font-bold text-[#111827] dark:text-[#F9FAFB] cursor-pointer">
            <img
              className="w-10 h-10 object-contain"
              src={logo}
              alt="Logo"
            />
          </span>

          {/* Navigation */}
          <nav className="space-x-6 hidden lg:flex items-center ">
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
            <button onClick={()=>window.open(downloadUrl, "_blank")} className="px-4 py-2 rounded-xl bg-[#111827] dark:bg-white text-[#F9FAFB] dark:text-black font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md">
              Download CV
            </button>
          </nav>
          <div className="md:hidden">
            <div
              onClick={hideShow}
              className="text-2xl cursor-pointer z-[9999]"
            >
              {switchIcon == 0 ? (
                <CiMenuBurger className="flex text-2xl transition-transform duration-300" />
              ) : (
                <RxCross2 className=" flex z-[9999] text-2xl transition-transform duration-300" />
              )}
            </div>
            <div
              onClick={hideShow}
              className={`
                w-[100%] cursor-auto h-full z-[9999] flex 
          fixed right-0
          transform transition-transform duration-500 ease-in-out
          ${switchIcon == 0 ? "translate-x-full" : "translate-x-0"}
        `}
            >
              <div className="w-[42%] cursor-auto h-full"></div>
              <div className="w-[58%] cursor-auto h-full bg-white py-7 dark:bg-[#050312]">
                <div className="w-full flex justify-end px-7 ">
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
                </div>
                <div className="h-full flex-col space-y-8 justify-end py-10">
                  <ul className="text-end w-full space-y-2">
                    <li
                      href="#about"
                      className="border-x-0 w-full border-b-2 dark:border-b-1 border-solid pr-8 dark:border-gray-500"
                    >
                      <a
                        href="#about"
                        className="py-2 block h-full w-full text-base font-medium "
                      >
                        About
                      </a>
                    </li>
                    <li className="border-x-0 w-full border-b-2 dark:border-b-1 border-solid pr-8 dark:border-gray-500">
                      <a
                        href="#work"
                        className="py-2 block h-full text-base w-full font-medium"
                      >
                        Work
                      </a>
                    </li>
                    <li className="border-x-0 w-full border-b-2 dark:border-b-1 border-solid pr-8 dark:border-gray-500">
                      <a
                        href="#projects"
                        className="text-base py-2 block h-full w-full font-medium "
                      >
                        Projects
                      </a>
                    </li>
                    <li className="border-x-0 w-full border-b-2 dark:border-b-1 border-solid pr-8 dark:border-gray-500">
                      <a
                        href="#testimonials"
                        className="py-2 block h-full text-base w-full font-medium "
                      >
                        Testimonials
                      </a>
                    </li>
                    <li className="border-x-0 w-full border-b-2 dark:border-b-1 border-solid pr-8 dark:border-gray-500">
                      <a
                        href="#contact"
                        className="py-2 block h-full text-base w-full font-medium"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="w-full flex justify-end pr-8 items-center">
                    <button onClick={()=>window.open(downloadUrl, "_blank")} href="src/other files/webresume.pdf" download="cv.pdf" className="text-[1rem] px-4 py-2 rounded-xl max-h-20 bg-[#111827] dark:bg-white text-[#F9FAFB] dark:text-black font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md">
                      Download CV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
