import React from "react";
import Probtn from "./Probtn";
import { RiExternalLinkLine } from "react-icons/ri";

function Projects({proDetail}) {
  if (!proDetail) return <p>No project data</p>;
  const { proLink, proName, imageLink, describe, describe2, tooles } = proDetail;

  console.log(proLink);

  console.log(proDetail);
  return (
    <>
      <div onClick={()=>{window.open(`${proLink}`)}} className="cursor-pointer bg-[#FFFFFF] dark:bg-[#1F2937] rounded-lg flex flex-col md:flex-row gap-6 max-w-5xl mx-auto shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] dark:shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)] transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="md:w-1/2 p-[48px] bg-[#F9FAFB] dark:bg-[#374151] flex justify-center items-center rounded-lg">
          <img
            src={imageLink}
            alt="Project Preview"
            className="max-w-full max-h-full rounded-lg object-cover shadow-[0px_4px_3px_0px_rgba(0,0,0,0.10),0px_10px_8px_0px_rgba(0,0,0,0.04)] hover:shadow-6xl transition-shadow duration-300"
          />
        </div>

        <div className="md:w-1/2 text-[#111827] dark:text-white p-[48px]">
          <h3 className="text-2xl font-semibold mb-4">{proName}</h3>
          <p className="text-[#4B5563] dark:text-gray-300 mb-4">
            {describe}
            <br />
            {describe2}
          </p>
          <div
            style={{
              width: "70%",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {tooles}
          </div>
          <div className="mt-2">
            <a className="inline-block cursor-pointer text-gray-400 hover:text-white">
              <RiExternalLinkLine />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
