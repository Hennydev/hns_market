import React from 'react'
import heroApple from "../assets/heroApple.png"
import { MdAdd, MdOutlineEuro, MdOutlineFavoriteBorder } from 'react-icons/md'
import Suggestions from "./Suggestions"
import { FiMinus } from 'react-icons/fi'
import { useTabs } from 'react-headless-tabs'
import smApple from "../assets/smApple.png"
const ProductDetails = () => {
    // const {
    //     activeTab,
    //     setActiveTab,
    //     TabPanel,
    //   } = useTabs(tabs, defaultTab?)

    //   tabs: string[]

    return (
        <div className='w-[90%] mx-auto'>
            <p className='py-4 text-[20px] font-semibold'>Apple</p>
            <div className=' flex flex-row w-full py-4 px-2 rounded-3xl shadow-xl mb-6'>
                <div className='flex flex-col w-[50%] '>
                    <img src={heroApple} alt={"Product"} />
                    <div className='flex flex-row space-x-2 justify-center items-center my-2'>
                        <img src={smApple} alt={"Product"} />
                        <img src={smApple} alt={"Product"} />
                        <img src={smApple} alt={"Product"} />
                        <img src={smApple} alt={"Product"} />
                    </div>
                </div>

                <div className='w-[50%] space-y-4'>
                    <p className='text-[24px] font-semibold'>
                        Apple (700g)
                    </p>
                    <p className='fontfamily-lato text-[20px] text-[#6f6f72]'>
                        7pcs
                    </p>
                    <div className='flex flex-row items-center text-[24px] font-semibold'>
                        <MdOutlineEuro /> <p>4.99</p>
                    </div>

                    <div className='flex flex-row items-center space-x-2'>
                        <button className='h-5 w-5 rounded-full flex items-center justify-center bg-[#009B30] text-center  text-sm text-[white]'><FiMinus /></button>
                        <p>
                            1
                        </p>

                        <button className='h-5 w-5 rounded-full flex items-center justify-center bg-[#009B30] text-center  text-sm  text-[white]'><MdAdd /></button>
                    </div>

                    <div>


                    </div>

                    <div className='flex flex-row items-center my-4 space-x-4'>
                        <button className='py-2 rounded-lg w-[50%] bg-[#009B30] text-[white]'>Add to Cart</button>

                        <div className='flex flex-row items-center space-x-1'>
                            <p className='bg-white h-5 w-5 rounded-full flex items-center justify-center shadow-lg'><MdOutlineFavoriteBorder /></p>
                            <p>Save for Later</p>

                        </div>
                    </div>
                </div>

            </div>
            <Suggestions />
        </div>
    )
}

export default ProductDetails
