import React from "react";
import work from '../logo/logo-upwork.png'

function Work() {
  return (
    <div className="lg:max-w-[70%] w-full mx-auto shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] dark:shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out animate-fade-in [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in transform hover:scale-105 hover:shadow-2xl">
      <div className="bg-[#FFFFFF] w-full dark:bg-[#1F2937] p-6 px-7 rounded-lg lg:flex lg:justify-between [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
        <img
          src={work}
          alt="Project"
          className="max-w-[102px] max-h-[28px] rounded mb-4"
        />
        <div className="lg:max-w-100 [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
          <h4 className="text-xl font-semibold text-[#111827] dark:text-[#F9FAFB] mb-2">
            Data Analyst Intern , Webel Fujisoft Vara COE
          </h4>
          <p className="text-[#4B5563] dark:text-[#D1D5DB] list-item text-sm">
            Processing, cleansing, and ensuring the integrity of data utilized
            for analysis.
          </p>
          <p className="text-[#4B5563] dark:text-[#D1D5DB] list-item text-sm">
            Conducting thorough analysis and presenting results in a clear and
            concise manner.
          </p>
          <p className="text-[#4B5563] dark:text-[#D1D5DB] list-item text-sm">
            Specializing in the development and optimization of cutting-edge
            machine learning and deep learning models.
          </p>
          <p className="text-[#4B5563] dark:text-[#D1D5DB] list-item text-sm">
            Developed impactful visualizations using Tableau to enhance the
            understanding of complex data sets for non-technical audiences.
          </p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-[#4B5563] dark:text-white/80 [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
            <span className="bg-[#E5E7EB] dark:bg-gray-600 px-2 py-1 rounded">
              Machine Learning
            </span>
            <span className="bg-[#E5E7EB] dark:bg-gray-600 px-2 py-1 rounded">Deep Learning</span>
            <span className="bg-[#E5E7EB] dark:bg-gray-600 px-2 py-1 rounded">NLP</span>
            <span className="bg-[#E5E7EB] dark:bg-gray-600 px-2 py-1 rounded">Numpy</span>
            <span className="bg-[#E5E7EB] dark:bg-gray-600 px-2 py-1 rounded">Pandas</span>
            <span className="bg-[#E5E7EB] dark:bg-gray-600 px-2 py-1 rounded">Matplotlib</span>
            <span className="bg-[#E5E7EB] dark:bg-gray-600 px-2 py-1 rounded">Statistics</span>
          </div>
        </div>
        <h4 className="text-[#374151] dark:text-[#E5E7EB] text-[16px] font-normal transition-all duration-300 ease-in-out animate-fade-in">
          06/2024 - 07/2024
        </h4>
      </div>
    </div>
  );
}

export default Work;
