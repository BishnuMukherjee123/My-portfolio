import React from "react";

function Button({btnText}) {
  return (
    <span className="rounded-3xl text-[14px] text-[#4B5563] dark:text-[#D1D5DB] font-medium pb-[5px] px-5 py-1 bg-[#E5E7EB] dark:bg-gray-500 justify-self-center transition-all duration-300 ease-in-out animate-fade-in [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&>*]:animate-fade-in">
      {btnText}
    </span>
  );
}

export default Button;
