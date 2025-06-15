import React from "react";

function Testimonials({
  pic = "src/logo/icon-avatar.png",
  message,
  name,
  company,
  link
}) {
  return (
    <div
     onClick={() => window.open(`${link}`, "_blank")}
      className="max-w-[80%] lg:min-w-[353.33px] lg:max-w-[353.33px] rounded-xl py-10 px-8 justify-center items-center lg:h-[450px] bg-[#FFFFFF] dark:bg-[#1F2937] shadow-[0_4px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.06)] dark:drop-shadow-2xl 
  transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      <div className="mb-6">
        <img className="mx-auto rounded-full w-16 h-16" src={pic} alt="" />
      </div>
      <p className="text-[#4B5563] dark:text-[#D1D5DB] h-[58%] text-center font-normal text-[16px] before:content-['“'] after:content-['”'] italic mb-6">
        {message}
      </p>
      <div>
        <h3 className="font-bold text-center text-xl text-[#111827] dark:text-[#F9FAFB]">
          {name}
        </h3>
        <p className="text-center text-[14px] text-[#4B5563] dark:text-[#D1D5DB]">
          {company}
        </p>
      </div>
    </div>
  );
}

export default Testimonials;
