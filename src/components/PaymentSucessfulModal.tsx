import React, { useState } from "react";
import Modal from "react-modal";
import logo from "../assets/logo.png"
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


function PaymentSucessfulModal({paymentModal, setPaymentModal }) {

    // const [paymentModal, setPaymentModal] = useState(false);
    return (
        <div className="App">
            <button onClick={() => setPaymentModal(true)}>Check Out</button>
            <Modal
                isOpen={paymentModal}
                onRequestClose={() => setPaymentModal(false)}
                style={customStyles}
            >
                <div className="bg-white border rounded-lg">
                    <div className=''>
                        <div className="py-4 border-b">
                            <div className=" px-8 flex flex-row items-center  ">
                                <img src={logo} alt="logo"></img>
                                <p className=" flex justify-center items-center font-semibold text-[16px]">Succesful Order</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    );
}

export default PaymentSucessfulModal;
