import React, { useState } from "react";
import Modal from "react-modal";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { MdArrowBackIosNew, MdOutlineEuro } from "react-icons/md";
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


function PaymentSucessfulModal({ paymentModal, setPaymentModal }) {

    // const [paymentModal, setPaymentModal] = useState(false);
    return (
        <div className="App">
            <button onClick={() => setPaymentModal(true)}>Check Out</button>
            <Modal
                isOpen={paymentModal}
                onRequestClose={() => setPaymentModal(false)}
                style={customStyles}
            >
                <div className="bg-white border rounded-xl">
                    <div className="py-4 border-b">
                        <div className=" px-8 flex flex-row items-center justify-between w-[60%] ">
                            <img src={logo} alt="logo"></img>
                            <p className="  font-semibold text-[16px]">Successful Order</p>
                        </div>
                    </div>
                    <div className="py-3 mx-5 ">




                        <div className="bg-white border  rounded-lg">

                            <div className="flex items-center justify-center">
                                <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2497_688)">
                                        <path d="M61.9998 6.88867C51.0999 6.88867 40.4447 10.1209 31.3817 16.1766C22.3187 22.2323 15.255 30.8394 11.0838 40.9097C6.91255 50.9799 5.82117 62.0609 7.94764 72.7514C10.0741 83.4419 15.3229 93.2618 23.0304 100.969C30.7378 108.677 40.5577 113.925 51.2482 116.052C61.9387 118.178 73.0197 117.087 83.0899 112.916C93.1602 108.745 101.767 101.681 107.823 92.6179C113.879 83.5549 117.111 72.8997 117.111 61.9998C117.111 47.3834 111.305 33.3657 100.969 23.0303C90.6339 12.695 76.6162 6.88867 61.9998 6.88867ZM61.9998 110.222C52.4624 110.222 43.1391 107.394 35.209 102.095C27.2789 96.7964 21.0981 89.2651 17.4483 80.4536C13.7985 71.6422 12.8435 61.9463 14.7042 52.5921C16.5648 43.2379 21.1575 34.6455 27.9015 27.9015C34.6455 21.1575 43.2379 16.5648 52.5921 14.7041C61.9463 12.8435 71.6422 13.7984 80.4537 17.4483C89.2651 21.0981 96.7964 27.2788 102.095 35.209C107.394 43.1391 110.222 52.4623 110.222 61.9998C110.222 74.7891 105.141 87.0546 96.0981 96.098C87.0546 105.141 74.7891 110.222 61.9998 110.222Z" fill="#009B30" />
                                        <path d="M96.4474 41.6754C95.802 41.0339 94.929 40.6738 94.019 40.6738C93.1091 40.6738 92.2361 41.0339 91.5907 41.6754L53.3574 79.7366L32.6907 59.0699C32.0604 58.3893 31.1855 57.987 30.2586 57.9515C29.3316 57.916 28.4285 58.2501 27.7479 58.8804C27.0674 59.5108 26.665 60.3857 26.6295 61.3126C26.594 62.2396 26.9282 63.1427 27.5585 63.8232L53.3574 89.5532L96.4474 46.5666C96.7702 46.2464 97.0265 45.8654 97.2013 45.4457C97.3762 45.0259 97.4662 44.5757 97.4662 44.121C97.4662 43.6663 97.3762 43.2161 97.2013 42.7964C97.0265 42.3766 96.7702 41.9957 96.4474 41.6754Z" fill="#009B30" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2497_688">
                                            <rect width="124" height="124" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="flex flex-col text-center items-center mx-auto justify-center w-[40%]">
                                <p>Thank you for your purchase!</p>
                                <p className="text-sm text-[#7c7c7c]">Your items has been placed and is on it’s way to being processed
                                    Order ID: 2983hrdj
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="bg-[#009B30] text-sm py-1.5  w-[30%] rounded-lg text-white my-2">Track Order</button>
                            </div>
                            <Link className="flex items-center justify-center" to={"/"}>Back home</Link>
                        </div>
                    </div>
                    <div className="mx-5 rounded-lg border  text-[14px] mb-3">
                        <div className="border-b">
                            <p className="flex items-start px-3  text-[16px] py-2 justify-start">Delivery Details</p>
                        </div>


                        <div className="flex flex-row px-3 items-center my-2 justify-between">
                            <p className="flex items-center  justify-center">Name</p>
                            <p className="flex items-center  justify-center text-[#7c7c7c]">John Doe</p>
                        </div>
                        <div className="flex flex-row px-3 my-2 items-center justify-between">
                            <p className="flex items-center   justify-center">Address</p>
                            <p className="flex items-center  justify-center text-[#7c7c7c]">Mohrenstrasse 37 10117</p>
                        </div>
                        <div className="flex flex-row px-3 my-2 items-center justify-between">
                            <p className="flex items-center   justify-center">Mobile</p>
                            <p className="flex items-center  justify-center text-[#7c7c7c]">(49 30) 30 18 58 0</p>
                        </div>
                        <div className="flex my-2 flex-row px-3 items-center justify-between">
                            <p className="flex items-center   justify-center">Phone</p>
                            <p className="flex items-center  justify-center text-[#7c7c7c]">(49 30) 49 30 18 580 - 9525</p>
                        </div>
                        <div className="flex my-2 flex-row px-3 items-center justify-between">
                            <p className="flex items-center  justify-center ">Email</p>
                            <p className="flex items-center  justify-center text-[#7c7c7c]">Johndoe@gmail.com</p>
                        </div>
                    </div>
                    <div className="mx-5 rounded-lg border  text-[14px] mb-3">
                        <div className="border-b">
                            <p className="flex items-start px-3  text-[16px] py-2 justify-start">Order Details</p>
                        </div>


                        <div className="flex flex-row mx-3 border-b items-center py-5 justify-between">

                            <p className="flex items-center  justify-center">1x Apple</p>
                            <p className="flex items-center  justify-center text-[#7c7c7c]">7pcs</p>
                            <p className="flex items-center  justify-center">£4.99</p>
                        </div>
                        <div className="flex flex-row mx-3 border-b items-center py-5 justify-between">

                            <p className="flex items-center  justify-center">1x Apple</p>
                            <p className="flex items-center  justify-center text-[#7c7c7c]">7pcs</p>
                            <p className="flex items-center  justify-center">£4.99</p>
                        </div>
                        <div className="flex flex-row mx-3 border-b items-center py-5 justify-between">

                            <p className="flex items-center  justify-center">1x Apple</p>
                            <p className="flex items-center  justify-center text-[#7c7c7c]">7pcs</p>
                            <p className="flex items-center  justify-center">£4.99</p>
                        </div>
                        <div className="flex flex-row mx-3 border-b items-center py-5 justify-between">

                            <p className="flex items-center  justify-center">1x Apple</p>
                            <p className="flex items-center  justify-center text-[#7c7c7c]">7pcs</p>
                            <p className="flex items-center  justify-center">£4.99</p>
                        </div>
                        <div className="flex flex-row px-3  items-center py-5 justify-between">

                            <p className="flex items-center  justify-center">Total</p>

                            <p className="flex items-center  justify-center">£28.26</p>
                        </div>
                    </div>
                    <div className="pb-4 mt-2 text-[#009B30] text-md flex items-center">
                        <p><MdArrowBackIosNew /></p>
                        <Link to={"#"} className="text-[#009B30] text-sm ">Go back and continue shopping</Link>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default PaymentSucessfulModal;
