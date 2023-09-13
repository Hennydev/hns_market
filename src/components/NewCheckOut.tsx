import React, { useState } from "react";
import Modal from "react-modal";
import RecentlyViewed from "./RecentlyViewed";
import { IoIosArrowBack } from "react-icons/io"
import { MdAdd, MdArrowBackIosNew, MdArrowForward, MdCheck, MdDelete, MdEdit, MdOutlineArrowForwardIos, MdOutlineEuro } from "react-icons/md";
import three from "../assets/three.png"
import { FiMinus } from "react-icons/fi";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import CountrySelector from "./CountrySelector";
import Form from "./Form";
import EditForm from "./EditForm";
import AddNewAddress from "./AddNewAddress";
import PaymentMethod from "./paymentMethod";
import SelectCard from "./SelectCard";
import AddCard from "./AddCard";
import AddPromoCode from "./AddPromoCode";

import PaymentSucessfulModal from "./PaymentSucessfulModal";
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


function NewCheckOut() {
  const [firstName, setFirstName] = useState("John")
  const [lastName, setLastName] = useState("Doe")
  const [modalOpen, setModalOpen] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState(false);
  const [savedInfo, setSavedInfo] = useState(false)
  const [editSavedInfo, setEditSavedInfo] = useState(false)
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [AdditionalNumber, setAdditionalNumber] = useState("")
  const [displayEdit, setDisplayEdit] = useState(false)
  const [newAddress, setNewAddress] = useState(false)
  const [paymentType, setPaymentType] = useState(false)
  const [selectMethod, setSelectMethod] = useState(false)
  const [toggleNewCard, setToggleNewCard] = useState(false)
  const [ChangePaymentMethod, setChangePaymentMethod] = useState(false)
  const [showChangePaymentButton, setShowPaymentButton] = useState(false)
  const [showChangePromoButton, setShowPromoButton] = useState(false)
  const [promoCode, setPromoCode] = useState<string>("")
  const [promoCodeInfo, setPromoCodeInfo] = useState<string>("")
  const [paymentModal, setPaymentModal] = useState<boolean>(false)
  const [newCardDetails, setNewCardDetails] = useState<boolean>(false)
  const handleCheckOutModal = () => {
    setModalOpen(true)
    setPaymentModal(false)
  }
  const handlePaymentCheckout = () => {
    setPaymentModal(true)



  }
  return (

      
        <div className="bg-white border mx-3 md:mx-0 rounded-lg">
          <div className=''>
            <div className="py-4 border-b">
              <div className="md:w-[60%] px-8 flex items-center justify-between ">
                <img src={logo} alt="logo"></img>
                <p className=" font-semibold text-[16px]">Complete your Checkout</p>
              </div>
            </div>

            <p className='py-3 text-[16px] px-8 font-semibold'>Check Out</p>
            <div className='md:px-8 px-3 flex  md:flex-row md:space-y-0 space-y-3 flex-col md:space-x-3 w-full py-2   '>

              {displayEdit ? <div className='flex flex-col md:w-[65%]  md:px-3   border rounded-lg '> <EditForm /> </div> : <div className='flex flex-col md:w-[65%]    border rounded-lg '>
                <div className="border-b flex flex-row justify-between  ">
                  <div className=" flex flex-row  space-x-2 items-center my-3 px-3">
                    <p className="active:bg-[#009B30] bg-[#7c7c7c] flex  items-center h-4 w-4 text-xs text-center justify-center rounded-full text-[#fff]"><MdCheck /></p>
                    <p className="text-sm">Choose delivery option</p>

                  </div>

                  {
                    savedInfo && <div>{!editSavedInfo && <div onClick={() => setEditSavedInfo(true)} className=" cursor-pointer flex flex-row  space-x-2 items-center my-3 px-3">
                      <p className="text-sm">Change</p>
                      <p className=" flex flex-row items-center  text-sm text-center justify-center rounded-full "><MdOutlineArrowForwardIos /></p>
                    </div>}</div>
                  }

                </div>
                <div className=" flex flex-col   px-3 my-3 ">
                  <div >
                    <div className="">
                      {
                        !editSavedInfo &&
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
                      }
                      {editSavedInfo && !newAddress &&
                        <div className="border rounded-xl px-2 py-2"> <div onClick={() => setEditSavedInfo(true)} className="font-semibold flex flex-row items-center justify-end text-[#009b30] space-x-1  my-3 px-3">
                          <p onClick={() => setDisplayEdit(true)} className="text-sm">Edit</p>
                          <p className=" flex flex-row items-center  text-sm text-center justify-center rounded-full "><MdEdit /></p>
                        </div>
                          <div className="mb-[0.125rem]  block min-h-[1.5rem] pl-[1.5rem]">
                            <input
                              className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-4 w-4 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-[#009B30] checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.5rem] checked:after:w-[0.5rem] checked:after:rounded-full checked:after:border-[#009B30] checked:after:bg-[#009B30] checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-[#009B30] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="radio"
                              name="flexRadioDefault"
                              id="radioDefault01"
                              onClick={() => setDeliveryDetails(true)} />

                            <label
                              className=" text-sm inline-block pl-[0.12rem] font-semibold  hover:cursor-pointer"
                              htmlFor="radioDefault01">
                              {firstName} {lastName}

                            </label>
                            <p className="text-[#3c3c43] text-xs">Mohrenstrasse 37 10117 Berlin | (49 30) 30 18 58 0 | (49 30) 49 30 18 580 - 9525 | Johndoe@gmail.com</p>
                          </div>
                        </div>}


                    </div>
                    {!deliveryDetails && <div className="border rounded-lg p-2 my-2">
                      <p className="text-[15px] font-normal">Hello {firstName}, click on Add Address to specify a delivery address</p>
                      <p className="text-[13px] font-normal tracking-tighter  text-[#7c7c7c] mt-1">You can expect your item to arrive within approximately 5 business days if you're located in Berlin or Hamburg. For destinations outside of Berlin and Hamburg, the delivery time will range from 7 to 14 days</p>
                      <button className="bg-[#009B30] text-sm py-1.5 w-[60%] rounded-lg text-white my-2">Add Address</button>
                    </div>}

                  </div>


                  {!savedInfo ? <div>
                    {deliveryDetails ?
                      <div className="w-[100%]">
                        <Form />
                        <div className="mt-2">

                          {
                            !editSavedInfo && savedInfo ?
                              <p className="text-[#3c3c43] text-xs">{address}</p>
                              :
                              <div className="flex flex-row items-center">
                                <button onClick={() => setSavedInfo(true)} className="hover:bg-[#009B30] hover:text-white text-[#009B30] rounded-lg px-5 py-1.5 text-sm">Save</button>
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
                  </div> :
                    <div>{!editSavedInfo && <p className="text-[#3c3c43] text-sm">Mohrenstrasse 37 10117 Berlin | (49 30) 30 18 58 0 | (49 30) 49 30 18 580 - 9525 | Johndoe@gmail.com</p>}
                    </div>}

                </div>

                {
                  newAddress ? <div><AddNewAddress /></div> :
                    <div> {
                      editSavedInfo && <div onClick={() => setNewAddress(true)} className="font-semibold flex flex-row items-center justify-start text-[#009b30] space-x-1  my-1 px-3">
                        <p className=" flex flex-row items-center  text-sm text-center justify-center rounded-full "><MdAdd /></p>
                        <p className="text-sm">Add Address</p>

                      </div>
                    }</div>
                }

              </div>}

              <div className='md:w-[35%]'>
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


                  <div onClick={handlePaymentCheckout} className='flex flex-row items-center  justify-center my-3 space-x-4'>
                    <button className='py-1.5 text-sm flex items-center w-full justify-center rounded-md bg-[#dfdede] text-[#3c3c43] font-semibold'><PaymentSucessfulModal setPaymentModal={setPaymentModal} paymentModal={paymentModal} /></button>


                  </div>
                  <p className="text-[#dfdede] text-sm text-center">(Complete the steps in order to proceed)</p>
                </div>
                <p className='text-center px-2'>By proceeding, you're automatically accepting the <span className='text-[#009B30]'>Terms</span> & <span className='text-[#009B30]'>Condition</span> </p>
              </div>
            </div>
            <div className="px-8">



              <div className="border border-gray-300 rounded-lg md:w-[64%]">

                <div className="border-b flex flex-row justify-between  ">
                  <div onClick={() => setPaymentType(true)} className=" flex flex-row  space-x-2 items-center my-3 px-3">
                    <p className="active:bg-[#009B30] bg-[#7c7c7c] flex  items-center h-4 w-4 text-xs text-center justify-center rounded-full text-[#fff]"><MdCheck /></p>
                    <p className="text-sm">Payment</p>

                  </div>
                  {
                    showChangePaymentButton &&
                    <div className=" cursor-pointer flex flex-row  space-x-2 items-center my-3 px-3">
                      <p className="text-sm">Change</p>
                      <p className=" flex flex-row items-center  text-sm text-center justify-center rounded-full "><MdOutlineArrowForwardIos /></p>
                    </div>

                  }
                </div>
                <div>{toggleNewCard ? <div> {newCardDetails ? <div> <div className=" mx-3 my-2">
               
                    <div className=" flex flex-row  items-center  pointer-events-none">
                      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="card">
                          <path id="Vector" d="M20.6251 0H10.8036H0.982161C0.439742 0 0 0.43988 0 0.98247V15.0175C0 15.5601 0.439742 16 0.982161 16H10.8036H20.6251C21.1676 16 21.6073 15.5601 21.6073 15.0175V0.98247C21.6073 0.43988 21.1676 0 20.6251 0Z" fill="#5286F9" />
                          <path id="Vector_2" d="M11.5549 5.20371C11.7707 5.45109 11.9587 5.72338 12.1134 6.01602C12.4269 6.60876 12.6053 7.28356 12.6053 7.99953C12.6053 8.7155 12.4269 9.39022 12.1134 9.98305C11.9587 10.2757 11.7707 10.5479 11.5549 10.7953C11.3327 11.0499 11.0809 11.2777 10.8047 11.4736C11.4991 11.966 12.346 12.2568 13.2601 12.2568C15.6068 12.2568 17.5161 10.347 17.5161 7.99953C17.5161 5.65208 15.6068 3.74219 13.2601 3.74219C12.346 3.74219 11.4991 4.03288 10.8047 4.5254C11.0809 4.72137 11.3326 4.9492 11.5549 5.20371Z" fill="#FFB655" />
                          <path id="Vector_3" d="M12.1139 6.01593C11.9591 5.72321 11.7711 5.45101 11.5553 5.20363C11.333 4.94903 11.0813 4.72132 10.8051 4.5254C10.1108 4.03288 9.26376 3.74219 8.34971 3.74219C6.00296 3.74219 4.09375 5.65204 4.09375 7.99949C4.09375 10.3469 6.003 12.2568 8.34971 12.2568C9.26376 12.2568 10.1108 11.9661 10.8051 11.4736C11.0813 11.2777 11.333 11.0498 11.5553 10.7953C11.7711 10.5479 11.9591 10.2756 12.1139 9.98309C12.4273 9.39026 12.6057 8.71545 12.6057 7.99957C12.6057 7.28344 12.4273 6.60867 12.1139 6.01593Z" fill="#D8143A" />
                          <path id="Vector_4" d="M8.34827 12.2574C6.00151 12.2574 4.0923 10.3476 4.0923 8.00013C4.0923 5.65268 6.00155 3.74283 8.34827 3.74283C9.26231 3.74283 10.1093 4.03352 10.8036 4.52604V0H0.982161C0.439742 0 0 0.43988 0 0.98247V15.0175C0 15.5601 0.439742 16 0.982161 16H10.8036V11.4741C10.1093 11.9666 9.26231 12.2574 8.34827 12.2574Z" fill="#3D6DEB" />
                        </g>
                      </svg>
                      <p className="pl-1">6567 ***** ***** 8778</p>
                    </div>
                   
                
                </div></div> : <AddCard setToggleNewCard={setToggleNewCard} setNewCardDetails={setNewCardDetails} setChangePaymentMethod={setChangePaymentMethod} setShowPaymentButton={setShowPaymentButton} />}</div> :
                  <div>
                    {
                      selectMethod ? <div className="mx-3 my-2"><SelectCard setToggleNewCard={setToggleNewCard} /></div> : <div> {
                        paymentType && <div className="mx-3 my-2"><PaymentMethod setSelectMethod={setSelectMethod} /></div>
                      }</div>
                    }
                  </div>
                }</div>



              </div>



              <div className="border border-gray-300 rounded-lg md:w-[64%] mt-2">

                <div className="border-b flex flex-row justify-between  ">
                  <div onClick={() => setChangePaymentMethod(true)} className=" flex flex-row  space-x-2 items-center my-3 px-3">
                    <p className="active:bg-[#009B30] bg-[#7c7c7c] flex  items-center h-4 w-4 text-xs text-center justify-center rounded-full text-[#fff]"><MdCheck /></p>
                    <p className="text-sm">Promo Code</p>

                  </div>

                  {
                    showChangePromoButton && <div className=" cursor-pointer flex flex-row  space-x-2 items-center my-3 px-3">
                      <p className="text-sm">Change</p>
                      <p className=" flex flex-row items-center  text-sm text-center justify-center rounded-full "><MdOutlineArrowForwardIos /></p>
                    </div>
                  }


                </div>
                <div>{ChangePaymentMethod && <AddPromoCode setChangePaymentMethod={setChangePaymentMethod} setPromoCodeInfo={setPromoCodeInfo} promoCode={promoCode} setPromoCode={setPromoCode} />

                }</div>
                {
                  (promoCodeInfo.length > 0) && <div className="mx-9 my-2">
                    <p className="text-sm font-semibold">Utilized Promo Code</p>
                    <p className="text-sm font-[400] text-[#3c3c43]">{promoCodeInfo}</p>
                  </div>
                }

              </div>

              <div className="pb-4 mt-2 text-[#009B30] text-md flex items-center">
                <p><MdArrowBackIosNew /></p>
                <Link to={"#"} className="text-[#009B30] text-sm ">Go back and continue shopping</Link>
              </div>
            </div>

          </div>
        </div>

    
  );
}

export default NewCheckOut;
