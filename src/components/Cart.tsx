import React, { useState } from 'react'
import heroApple from "../assets/heroApple.png"
import { MdAdd, MdDelete, MdOutlineEuro, MdOutlineFavoriteBorder } from 'react-icons/md'

import { FiMinus } from 'react-icons/fi'
import { useTabs } from 'react-headless-tabs'
import three from "../assets/three.png"
import RecentlyViewed from './RecentlyViewed'
import CheckOutModal from './CheckOutModal'
import { Link } from 'react-router-dom'
const Cart = () => {
 const [modal, setShowModal] = useState(false)

// const Check = ()=>{
    
//     <CheckOutModal />
// }

    return (
        <div className='w-[90%] mx-auto'>
            <p className='py-4 text-[20px] font-semibold'>Cart(4)</p>
            <div className=' flex md:flex-row flex-col   md:space-x-4 w-full py-4 px-2  mb-6'>
                <div className='flex md:flex-col md:w-[70%] md:mb-0 mb-4 w-full border rounded-2xl md:px-5'>

                    <div className='flex md:flex-row flex-col w-full  items-center md:justify-between my-2'>
                        <div className='flex md:flex-row  md:space-x-3  w-full items-center justify-between'>
                            <img  src={three} alt={"Product"} />
                            <div className=' md:text-[18px] text-[16px] flex flex-col  text'>
                                <p className='text-[#1B1B1B] font-semibold'>Apples(700mg)</p>
                                <p className='text-[#3c3c43] md:text-[16px] text-[14px]'>7pcs</p>
                                <span className='text-[#FE0002] md:text-[16px] text-[14px] flex flex-row items-center'><p><MdDelete /></p><p>Remove</p></span>
                            </div>
                        </div>

                        <div className='flex flex-col md:items-end md:justify-end items-start justify-start w-full md:mx-0 px-5 '>
                            <div className='flex flex-row items-center md:text-[18px] text-[16px] font-semibold'>
                                <MdOutlineEuro /> <p>4.99</p>
                            </div>

                            <div className='flex flex-row items-center space-x-2'>
                                <button className='h-5 w-5 rounded-full flex items-center justify-center bg-[#009B30] text-center  text-sm text-[white]'><FiMinus /></button>
                                <p>
                                    1
                                </p>

                                <button className='h-5 w-5 rounded-full flex items-center justify-center bg-[#009B30] text-center  text-sm  text-[white]'><MdAdd /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='30%'>
                    <div className=' px-4 py-2 space-y-4 border rounded-2xl'>
                        <p className='md:text-[16px] text-[14px] font-semibold'>
                            Summary
                        </p>
                        <div className='flex flex-row items-center justify-between'>
                            <p className='md:text-[16px] text-[14px] font-semibold'>
                                Subtotal
                            </p>
                            <div className='flex flex-row items-center  md:text-[16px] text-[14px] font-semibold'>
                                <MdOutlineEuro /> <p>4.99</p>
                            </div>
                        </div>


                        <div className='flex flex-row items-center pb-2 justify-center my-4 space-x-4'>
                            <button className='py-[7px] text-sm flex items-center w-full justify-center rounded-lg  bg-[#009B30] text-[white]'><CheckOutModal/></button>


                        </div>
                        
                    </div>
                    <p className='text-center px-4'>By proceeding, you're automatically accepting the <span className='text-[#009B30]'>Terms</span> & <span className='text-[#009B30]'>Condition</span> </p>
                </div>
            </div>
            <RecentlyViewed/>
        </div>




    )
}

export default Cart
