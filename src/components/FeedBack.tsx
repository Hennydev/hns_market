import React, { useState } from "react";
import logo from "../assets/logo.png";
import review from "../assets/review.png";
import feedbackimg from "../assets/feedbackimg.png";
import { MdClose } from "react-icons/md";
import visual from "../assets/visual.png";
import { useNavigate } from "react-router";

const FeedBack = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="w-[100%] mx-auto py-10 relative">
      <div className="py-4 border-b">
        <div className=" px-8 flex flex-row items-center justify-between md:w-[60%] ">
          <img src={logo} alt="logo"></img>
          <p className="  font-semibold text-[16px] ">FeedBack Form</p>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col md:pt-0 pt-10 md:w-[90%] w-[95%] md:h-[80vh] md:space-x-14 md:items-center md:justify-center mx-auto  md:py-16">
        <div className="md:w-[50%] ">
          <img src={feedbackimg} alt="feedbackimg"></img>
        </div>
        <div className="flex flex-col md:items-start md:justify-start  items-center  pt-8 justify-center md:w-[30%] md:pt-16  ">
          <h1 className="text-center text-gray-900 text-2xl font-semibold font-['Inter']">
            Thanks for ordering!
          </h1>
          <p className="w-80 text-zinc-700 text-opacity-70 text-base font-medium font-['Lato'] py-6 leading-tight">
            Order delivered just as you wish. Please take a few minutes to leave
            a review
          </p>
          <p className="text-center text-zinc-900 text-lg font-semibold font-['Inter']">
            How was your expeience
          </p>
          <div className="py-6">
            <img src={review} alt="review" />
          </div>
          <p className="text-center text-zinc-900 text-lg font-semibold font-['Inter']">
            How was your expeience
          </p>

          <input
            placeholder="Give Feedback"
            className=" border-b  w-full placeholder:text-zinc-900  md:placeholder:text-start md:pt-6 placeholder:text-center  pt-4 focus:ring-0 outline-none text-zinc-900 text-lg font-medium font-['Lato'] leading-7"
          />

          <div className="pt-10 w-full">
            <button
              onClick={() => setModal(true)}
              className="px-6 w-full py-3 bg-green-600 rounded-lg text-center text-white text-sm font-bold font-['Lato']  justify-center items-center gap-2.5 inline-flex"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {modal && (
        <>
          {" "}
          <div className="w-[100%] h-full  absolute bg-[#003310] opacity-75 top-0"></div>
          <div className=" md:w-[28%] md:h-[450px] h-[420px] w-[90%]  absolute top-0 right-0 left-0 bottom-0 m-auto bg-white rounded-lg shadow border border-black border-opacity-20  ">
            <div className="flex items-end justify-end w-full p-4">
              <button onClick={() => setModal(false)} className="text-right ">
                {" "}
                <MdClose />
              </button>
            </div>

            <div className="w-[70%] h-full  mx-auto  flex flex-col md:pt-14 space-y-10">
              <div className="flex flex-col items-center justify-center">
                <img src={visual} alt="submitted-logo"></img>
              </div>
              <div className=" ">
                <div className=" text-center text-zinc-900 text-2xl font-semibold font-['Inter']">
                  Feedback Submitted
                </div>
                <div className="text-center text-neutral-500 text-base font-medium font-['Lato'] leading-tight">
                  Your feedback has been submitted successfully
                </div>
              </div>
              <div className="flex-col justify-center items-center gap-2 inline-flex w-full">
                <button
                  onClick={handleClick}
                  className="px-20 py-3 w-full text-center text-green-600 text-sm font-bold font-['Lato'] rounded-lg border border-green-600 "
                >
                  Back home
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeedBack;
