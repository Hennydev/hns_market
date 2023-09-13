import React from 'react'
import heroApple from "../assets/heroApple.png"
import { MdAdd, MdOutlineEuro, MdOutlineFavoriteBorder } from 'react-icons/md'
import Suggestions from "./Suggestions"
import { FiMinus } from 'react-icons/fi'
import { useTabs } from 'react-headless-tabs'
import single from "../assets/single.png"
const ProductDetails = () => {
    // const {
    //     activeTab,
    //     setActiveTab,
    //     TabPanel,
    //   } = useTabs(tabs, defaultTab?)

    //   tabs: string[]

    return (
        <div className='w-[90%] mx-auto'>
            <p className='md:py-4 py-2 md:text-[20px] text-[16px] font-semibold'>Apple</p>
            <div className=' flex md:flex-row flex-col md:items-start items-center  w-full py-4 px-2 md:rounded-3xl md:shadow-xl mb-6'>
                <div className='flex flex-col w-[50%] '>
                    <img src={heroApple} alt={"Product"} />
                    <div className='flex flex-row md:space-x-2 md:px-0  space-x-1  justify-center items-center my-2'>
                        <img className='hover:border border-[#009B30] ' src={single} alt={"Product"} />
                        <img className='hover:border border-[#009B30] ' src={single} alt={"Product"} />
                        <img className='hover:border border-[#009B30] ' src={single} alt={"Product"} />
                        <img className='hover:border border-[#009B30] ' src={single} alt={"Product"} />
                    </div>
                </div>

                <div className='md:w-[50%] w-[100%] md:space-y-4 space-y-2'>
                    <p className='md:text-[24px] text-[16px] font-semibold'>
                        Apple (700g)
                    </p>
                    <p className='fontfamily-lato text-[14px] md:text-[20px] text-[#6f6f72]'>
                        7pcs
                    </p>
                    <div className='flex flex-row items-center md:text-[24px] font-semibold'>
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

                    <div className='flex flex-row items-center my-4 md:space-x-4 space-x-2'>
                        <button className='py-2 rounded-lg w-[50%] md:w-[25%] bg-[#009B30] text-[white]'>Add to Cart</button>

                        <div className='py-2 rounded-lg w-[50%] md:w-[25%] hover:bg-[#009B30] hover:text-[white] flex flex-row items-center justify-center text-[#3c3c43] space-x-1'>
                            <p className='hover:text-white  flex items-center justify-center '><MdOutlineFavoriteBorder /></p>
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
