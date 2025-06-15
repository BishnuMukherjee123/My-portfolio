import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

function Intro() {
  return (
    <section className="max-w-7xl mx-auto py-20 flex flex-col lg:flex-row items-center gap-10 transition-all duration-300 ease-in-out animate-fade-in">
      <div className="flex-1 transition-all duration-300 ease-in-out animate-fade-in [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
        <h2 className="text-6xl font-bold mb-2 text-[#111827] dark:text-[#F9FAFB]">
          Hi, I'm Bishnu 👋
        </h2>
        <p className="text-[#4B5563] dark:text-[#D1D5DB] mb-2">
          A full stack developer based in India who loves to design scalable web
          apps.
        </p>
        <div className="flex items-center space-x-2">
          <div className="w-8 mr-0">
            <CiLocationOn className="text-2xl transition-all duration-300 ease-in-out animate-fade-in text-[#4B5563] dark:text-[#D1D5DB] font-extrabold mx-auto" />
          </div>
          <p className="text-[#4B5563] dark:text-[#D1D5DB] transition-all duration-300 ease-in-out animate-fade-in">
            Durgapur, West Bengal
          </p>
        </div>
        <div className="flex items-center space-x-2 [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
          <div className="w-8 mr-0">
            <div className="rounded-full h-2 w-2 bg-green-700 dark:bg-green-700 mx-auto"></div>
          </div>
          <p className="text-[#4B5563] dark:text-[#D1D5DB]">
            Available for new projects
          </p>
        </div>
        <div className="mt-4 flex gap-4 px-[8px] text-[#4B5563] dark:text-[#D1D5DB]">
          <a
            href="https://github.com/BishnuMukherjee123"
            className="dark:hover:text-yellow-500 hover:text-gray-400 duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/BishnuMukherj11?t=J9IdnyHwSwqEVIfPpEt-2g&s=09"
            className="dark:hover:text-yellow-500 hover:text-gray-400 duration-300"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/bishnu-mukherjee-a235a621a/"
            className="dark:hover:text-yellow-500 hover:text-gray-400 duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="grid w-60 lg:w-60 min-h-60 grid-cols-[1fr_2fr_2fr_2fr_1fr] grid-rows-[1fr_2fr_2fr_2fr_1fr] place-content-center transition-all duration-300 ease-in-out animate-fade-in">
        <div className="border-[#FFFFFF] dark:border-[#030712] bg-[url('src/logo/me2.jpg')] bg-cover bg-center rounded-lg border-5 row-start-1 row-end-5 col-start-1 col-end-5 z-[1] transition-all duration-300 ease-in-out animate-fade-in"></div>
        <div className="bg-[#E5E7EB] dark:bg-[#374151]  rounded-lg row-start-2 row-end-6 col-start-2 col-end-6 transition-all duration-300 ease-in-out animate-fade-in"></div>
      </div>
    </section>
  );
}

export default Intro;
