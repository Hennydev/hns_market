import React from "react";
import logo from "../assets/logo.png";
import review from "../assets/review.png";
import hnsContact from "../assets/hnsContact.png";
const Contact = () => {
  return (
    <div className="w-[100%] mx-auto py-10 ">
      <div className="py-4 border-b">
        <div className=" px-12 flex flex-row items-center justify-between md:w-[60%] ">
          <img src={logo} alt="logo"></img>
          <p className="  font-semibold text-[16px] ">Contact Us</p>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col md:space-y-0 space-y-5 md:pt-0 pt-10  items-center justify-center w-[95%] md:w-[90%] md:h-[70vh] md:space-x-10 mx-auto  ">
        <div className="md:w-[50%] w-full ">
          <img className="" src={hnsContact} alt="contact-illustration"></img>
        </div>
        <div className="flex flex-col items-start md:pt-0 pt-8  justify-start md:w-[30%] w-full   ">
          <h1 className="text-center text-gray-900 text-2xl font-semibold font-['Inter']">
            We’re here to help
          </h1>
          <p className=" text-zinc-700 text-opacity-70 text-base font-medium font-['Lato']  leading-tight">
            Send us a message and we'll get back to you
          </p>
          <label className="  text-zinc-700 text-opacity-70 py-6 text-base font-semibold font-['Lato'] leading-7">
            Title
          </label>
          <input
            placeholder="Lorem Ipsum"
            className=" border-b  w-full placeholder:text-zinc-900 focus:ring-0 outline-none text-zinc-900 text-lg font-medium font-['Lato'] leading-7"
          />

          <label className=" text-zinc-700 text-opacity-70 text-base font-semibold font-['Lato'] leading-7 py-7">
            Message
          </label>

          <textarea
            placeholder="Enter your message here..."
            className=" border-b  w-full placeholder:text-zinc-900 focus:ring-0 outline-none text-zinc-900 text-lg font-medium font-['Lato'] leading-relaxed"
          />
          <div className="pt-10 w-full">
            <button className="px-6 w-full py-3 bg-green-600 rounded-lg text-center text-white text-sm font-bold font-['Lato']  justify-center items-center gap-2.5 inline-flex">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
