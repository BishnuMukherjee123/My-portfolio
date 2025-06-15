import React from "react";
import Button from "./Button";
import { CiMail } from "react-icons/ci";
import { LuCopy } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

function Footer() {
  const [Copied, setCopied] =useState(false)
  const handelCopy = ()=>{
    setCopied(true)
    setTimeout(()=>{
      setCopied(false);
    }, 2000)
  }

  const [mailCopied, mailsetCopied] =useState(false)
  const mailCopy = () =>{
    mailsetCopied(true);
    setTimeout(()=>{
      mailsetCopied(false);
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 text-center">
      <div className="mb-10">
        <div className="flex w-full justify-center items-center mb-4">
          <Button btnText={"Get in touch"} />
        </div>
        <p className="text-[#4B5563] dark:text-[#D1D5DB] font-normal lg:text-xl text-center max-w-[576px] mx-auto">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="space-y-10">
        <div className="mt-4 space-y-5 ">
          <div className="flex items-end gap-4 justify-center">
            <CiMail className="text-[#4B5563] dark:text-[#D1D5DB] text-3xl" />
            <h2 className="lg:text-4xl font-semibold text-[#111827] dark:text-[#F9FAFB]">
              jerry.bs12345@gmail.com
            </h2>
            <CopyToClipboard
            text="jerry.bs12345@gmail.com"
            onCopy={mailCopy}
            >
              <button className="text-white cursor-pointer">{mailCopied? <IoMdCheckmark className="text-[#4B5563] dark:text-[#D1D5DB] text-3xl"/> : <LuCopy className="text-[#4B5563] dark:text-[#D1D5DB] text-3xl" />}</button>
            </CopyToClipboard> 
          </div>
          <div className="flex items-end gap-4 justify-center">
            <BsTelephone className="text-[#4B5563] dark:text-[#D1D5DB] text-3xl" />
            <h2 className="lg:text-4xl font-semibold text-[#111827] dark:text-[#F9FAFB]">
              +91-9749421631
            </h2>
            <CopyToClipboard
            text="+91-9749421631"
            onCopy={handelCopy}
            >
              <button className="text-white cursor-pointer">{Copied? <IoMdCheckmark className="text-[#4B5563] dark:text-[#D1D5DB] text-3xl"/> : <LuCopy className="text-[#4B5563] dark:text-[#D1D5DB] text-3xl" />}</button>
            </CopyToClipboard>  
          </div>
        </div>
        <div className=" text-[#4B5563] dark:text-[#D1D5DB]">
          <p>You may also find me on these platforms!</p>
          <div className="mt-4 flex gap-4 justify-center items-center px-[8px] mx-auto">
            <a href="https://github.com/BishnuMukherjee123">
              <FaGithub />
            </a>
            <a href="https://x.com/BishnuMukherj11?t=J9IdnyHwSwqEVIfPpEt-2g&s=09">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/bishnu-mukherjee-a235a621a/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
