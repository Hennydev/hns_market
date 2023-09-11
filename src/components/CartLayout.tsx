import React from 'react'
import logo from "../assets/logo.png"
const CartLayout = () => {
  return (
    <div>
       <div className="py-4 border-b">
              <div className="w-[60%] px-8 flex items-center justify-between ">
                <img src={logo} alt="logo"></img>
                <p className=" font-semibold text-[16px]">Complete your Checkout</p>
              </div>
            </div>
    </div>
  )
}

export default CartLayout
