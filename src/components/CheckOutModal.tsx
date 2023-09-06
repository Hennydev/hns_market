import React, { useState } from "react";
import Modal from "react-modal";
import RecentlyViewed from "./RecentlyViewed";
import { IoIosArrowBack } from "react-icons/io"
import { MdAdd, MdArrowBackIosNew, MdArrowForward, MdCheck, MdDelete, MdOutlineArrowForwardIos, MdOutlineEuro } from "react-icons/md";
import three from "../assets/three.png"
import { FiMinus } from "react-icons/fi";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import CountrySelector from "./CountrySelector";
const customStyles = {
  content: {
    top: "49%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "0",
    width: 1000,

  },
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState(false);
  const [savedInfo, setSavedInfo] = useState(false)
  return (
    <div className="App ">
      <button onClick={() => setModalOpen(true)}>Check Out</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div className="bg-white border rounded-lg">
          <div className=''>
            <div className="py-4 border-b">
              <div className="w-[60%] px-8 flex items-center justify-between ">
                <img src={logo} alt="logo"></img>
                <p className=" font-semibold text-[16px]">Complete your Checkout</p>
              </div>
            </div>

            <p className='py-3 text-[16px] px-8 font-semibold'>Check Out</p>
            <div className='px-8 flex  flex-row space-x-3 w-full py-2   '>
              <div className='flex flex-col w-[65%]    border rounded-lg '>
                <div className="border-b flex flex-row justify-between  ">
                  <div className=" flex flex-row  space-x-2 items-center my-3 px-3">
                    <p className="bg-[#009B30] flex  items-center h-4 w-4 text-xs text-center justify-center rounded-full text-[#fff]"><MdCheck /></p>
                    <p className="text-md">Choose delivery option</p>
                    
                  </div>
                  <div className=" flex flex-row  space-x-2 items-center my-3 px-3">
                  <p className="text-md">Change</p>
                    <p className=" flex flex-row items-center  text-sm text-center justify-center rounded-full "><MdOutlineArrowForwardIos/></p>
                    </div>
                </div>
                <div className=" flex flex-col   px-3 my-3 ">
                  <div>
                    <div className="mb-[0.125rem]  block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-4 w-4 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-black checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-black checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-black checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio"
                        name="flexRadioDefault"
                        id="radioDefault01"
                        onClick={() => setDeliveryDetails(true)} />

                      <label
                        className=" text-sm inline-block pl-[0.15rem]  hover:cursor-pointer"
                        htmlFor="radioDefault01">
                        Delivery

                      </label>
                    </div>
                    
                    {!deliveryDetails &&  <div className="border rounded-lg p-2 my-2">
                      <p className="text-[15px] font-normal">Hello John, click on Add Address to specify a delivery address</p>
                      <p className="text-[13px] font-normal tracking-tighter  text-[#7c7c7c] mt-1">You can expect your item to arrive within approximately 5 business days if you're located in Berlin or Hamburg. For destinations outside of Berlin and Hamburg, the delivery time will range from 7 to 14 days</p>
                      <button className="bg-[#009B30] text-sm py-1.5 w-[60%] rounded-lg text-white my-2">Add Address</button>
                    </div>}
                   
                  </div>


                 {!savedInfo ? <div>
                  {deliveryDetails ? 
                  <div className="w-[100%]"> 
                    <div className="flex md:flex-row flex-col w-[100%] md:space-x-3 ">
                    <div className="flex flex-col my-1 w-[50%] ">
                      <label className="text-sm text-[#7c7c7c] mt-4 mb-2">First Name</label>
                      <input className="placeholder:text-sm font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="John"></input>
                 
                      <label className="text-sm text-[#7c7c7c] mt-4 mb-2">Phone Number</label>

                      <input className="placeholder:text-sm  mb-1 placeholder:font-semibold placeholder:text-[black] font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="(4930)49 30 18 500-9525"></input>
                 
                      <label className="text-sm text-[#7c7c7c] mt-4 mb-2">Email </label>
                      <input className="placeholder:text-sm placeholder:font-semibold placeholder:text-[black]  font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="Johndoe@gmail.com"></input>
                 
                      <label className="text-sm text-[#7c7c7c] mt-4">Select City</label>
                       <div className=" border-t-0 border-r-0 border-l-0 border-b  w-[100%] px-0  border-[#7c7c7c] ">
                        <CountrySelector   />
                       </div>

                    </div>
                    <div className="flex flex-col my-1 w-[50%] ">
                      <label className="text-sm text-[#7c7c7c] mt-4 mb-2">Last Name</label>
                      <input className="placeholder:text-sm font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="Doe"></input>
                 
                      <label className="text-sm text-[#7c7c7c] mt-4 mb-2">Additional Phone Number</label>

                      <input className="placeholder:text-sm  mb-1 placeholder:font-semibold placeholder:text-[black] font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="(4930)49 30 18 500-9525"></input>
                 
                      <label className="text-sm text-[#7c7c7c] mt-4 mb-2">Delivery Address </label>
                      <input className="placeholder:text-sm placeholder:font-semibold placeholder:text-[black]  font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="Mohrenstrasse 37 10117"></input>
                 
                      <label className="text-sm text-[#7c7c7c] mt-4">Select State</label>
                       <div className=" border-t-0 border-r-0 border-l-0 border-b  w-[100%] px-0  border-[#7c7c7c] ">
                        <CountrySelector   />
                       </div>
                    </div>
                    
                  </div>
                  <div className="mt-2">

                    {
                     savedInfo ? <p className="text-[#3c3c43] text-xs">Mohrenstrasse 37 10117 Berlin | (49 30) 30 18 58 0 | (49 30) 49 30 18 580 - 9525 | Johndoe@gmail.com</p>
                    :
                    <div className="flex flex-row items-center">
                    <button onClick={()=>setSavedInfo(true)} className="hover:bg-[#009B30] hover:text-white text-[#009B30] rounded-lg px-5 py-1.5 text-sm">Save</button>
                      <button className="hover:bg-[#009B30] hover:text-white text-[#009B30] rounded-lg px-4 py-1.5 text-sm">Cancel</button>
                    </div>
                    }
                    
                     
                      </div>
                  </div>
                   :
                   <div>
                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        className="relative float-left -ml-[1.5rem] mr-1 mt-0.5  h-4 w-4 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-black checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-black checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-black checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio"
                        name="flexRadioDefault"
                        id="radioDefault02"
                        checked />
                      <label
                        className="mt-px inline-block pl-[0.15rem] text-[14px] hover:cursor-pointer"
                        htmlFor="radioDefault02">
                        Pick Up
                      </label>
                    </div>
                    <div className="border rounded-lg p-2 my-2">
                      <p className="text-[15px] font-normal">Choose a pickup point in your vicinity from our various nationwide locations</p>
                      <p className="text-[13px] font-normal tracking-tighter  text-[#7c7c7c] mt-1">Easily pick a convenient location for pickup from our extensive network of nationwide options.</p>
                      <button className="bg-[#dfdede] text-[#3c3c43] text-sm font-semibold py-1.5 w-[60%] rounded-lg  my-2">Select Pickup Location</button>
                    </div>
                  </div>}
                 </div> : <div>
                 <p className="text-[#3c3c43] text-sm">Mohrenstrasse 37 10117 Berlin | (49 30) 30 18 58 0 | (49 30) 49 30 18 580 - 9525 | Johndoe@gmail.com</p>
                 </div> } 

                </div>
              </div>
              <div className='w-[35%]'>
                <div className=' px-4 py-2 space-y-4 border rounded-lg'>
                  <p className='text-[18px] font-semibold'>
                    Summary
                  </p>
                  <div className='flex flex-row items-center border-b w-full pb-2 justify-between'>
                    <p className='text-[18px] font-semibold'>
                      Subtotal
                    </p>
                    <div className='flex flex-row items-center  text-[18px] font-semibold'>
                      <MdOutlineEuro /> <p>4.99</p>
                    </div>
                  </div>


                  <div className='flex flex-row items-center  justify-center my-3 space-x-4'>
                    <button className='py-1.5 text-sm flex items-center w-full justify-center rounded-md bg-[#dfdede] text-[#3c3c43] font-semibold'>Check Out</button>


                  </div>
                  <p className="text-[#dfdede] text-sm text-center">(Complete the steps in order to proceed)</p>
                </div>
                <p className='text-center px-2'>By proceeding, you're automatically accepting the <span className='text-[#009B30]'>Terms</span> & <span className='text-[#009B30]'>Condition</span> </p>
              </div>
            </div>
            <div className="px-8">


              <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <p className="bg-[#dfdede] flex  items-center h-4 w-4 text-xs text-center justify-center rounded-full text-[#fff]"><MdCheck /></p>
                </div>
                <input type="text" id="input-group-1" className="bg-gray-50 border w-[64%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block  pl-10 p-[6px]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Payment" />
              </div>


              <div className="relative my-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <p className="bg-[#dfdede] flex  items-center h-4 w-4 text-xs text-center justify-center rounded-full text-[#fff]"><MdCheck /></p>
                </div>
                <input type="text" id="input-group-1" className="bg-gray-50 border w-[64%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block  pl-10 p-[6px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Promo Code" />
              </div>

              <div className="pb-4 mt-2 text-[#009B30] text-md flex items-center">
                <p><MdArrowBackIosNew /></p>
                <Link to={"#"} className="text-[#009B30] text-sm ">Go back and continue shopping</Link>
              </div>
            </div>

          </div>
        </div>

        {/* <button onClick={() => setModalOpen(false)}>Close Modal</button> */}
      </Modal>
    </div>
  );
}

export default App;
