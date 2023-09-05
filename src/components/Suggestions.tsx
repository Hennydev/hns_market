import React from 'react'
import three from "../assets/three.png"
import chicken from "../assets/chicken.png"
import tomatoe from "../assets/tomatoe.png"
import { MdAdd, MdOutlineEuro, MdOutlineFavoriteBorder } from 'react-icons/md'
const Suggestions = () => {
    return (
        <div className=' mx-auto mb-5'>
            <div>
                <p className='py-4 text-[20px] font-semibold'>
                    Similar Suggestions
                </p>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-col w-[24%]'>
                        <div className='bg-[#eaf7ee]  px-6 rounded-t-xl pb-8 relative border border-[#dddde2] border-b-0'>
                            <div className='flex items-center justify-center'>
                            <img src={three} alt={"Product"} />
                            </div>
                           
                            <div className='absolute right-2 top-4 space-y-3'>
                                <p className='  bg-white text-[#7c7c7c] h-5 w-5 rounded-full flex items-center justify-center shadow-lg'><MdOutlineFavoriteBorder /></p>
                                <button className='h-5 w-5 rounded-full flex items-center justify-center bg-[#009B30] text-center  text-sm  text-[white]'><MdAdd /></button>
                            </div>
                        </div>
                        <div className='bg-white pt-2  border border-[#dddde2] border-t-0  px-2 rounded-b-xl pb-6'>
                            <div className='flex flex-row items-center justify-between'>
                                <p className='text-[18px] font-semibold'>
                                    Apple 
                                </p>
                                <div className='flex flex-row items-center text-[18px] font-semibold'>
                                    <MdOutlineEuro /> <p>4.99</p>
                                </div>
                            </div>


                            <p className='font-family-lato text-[16px] text-[#6f6f72]'>
                                7pcs
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col w-[24%]'>
                        <div className='bg-[#eaf7ee]  px-6 pb-8 rounded-t-xl relative border border-[#dddde2] border-b-0'>
                        <div className='flex items-center justify-center'>
                            <img src={chicken} alt={"Product"} />
                            </div>
                            <div className='absolute right-2 top-4 space-y-3'>
                                <p className='  bg-white text-[#7c7c7c] h-5 w-5 rounded-full flex items-center justify-center shadow-lg'><MdOutlineFavoriteBorder /></p>
                                <button className='h-5 w-5 rounded-full flex items-center justify-center bg-[#009B30] text-center  text-sm  text-[white]'><MdAdd /></button>
                            </div>
                        </div>
                        <div className='bg-white pt-2  border border-[#dddde2] border-t-0  px-2 rounded-b-xl pb-6'>
                            <div className='flex flex-row items-center justify-between'>
                                <p className='text-[18px] font-semibold'>
                                    Chicken
                                </p>
                                <div className='flex flex-row items-center text-[18px] font-semibold'>
                                    <MdOutlineEuro /> <p>4.99</p>
                                </div>
                            </div>


                            <p className='font-family-lato text-[16px] text-[#6f6f72]'>
                                7pcs
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col w-[24%]'>
                        <div className='bg-[#eaf7ee]  px-6 pb-8 rounded-t-xl relative border border-[#dddde2] border-b-0'>
                        <div className='flex items-center justify-center'>
                            <img src={tomatoe} alt={"Product"} />
                            </div>
                            <div className='absolute right-2 top-4 space-y-3'>
                                <p className='  bg-white text-[#7c7c7c] h-5 w-5 rounded-full flex items-center justify-center shadow-lg'><MdOutlineFavoriteBorder /></p>
                                <button className='h-5 w-5 rounded-full flex items-center justify-center bg-[#009B30] text-center  text-sm  text-[white]'><MdAdd /></button>
                            </div>
                        </div>
                        <div className='bg-white pt-2  border border-[#dddde2] border-t-0  px-2 rounded-b-xl pb-6'>
                            <div className='flex flex-row items-center justify-between'>
                                <p className='text-[18px] font-semibold'>
                                    Tomatoes
                                </p>
                                <div className='flex flex-row items-center text-[18px] font-semibold'>
                                    <MdOutlineEuro /> <p>4.99</p>
                                </div>
                            </div>


                            <p className='font-family-lato text-[16px] text-[#6f6f72]'>
                                7pcs
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col w-[24%]'>
                        <div className='bg-[#eaf7ee] pb-8 px-6 rounded-t-xl relative border border-[#dddde2] border-b-0'>
                        <div className='flex items-center justify-center'>
                            <img src={tomatoe} alt={"Product"} />
                            </div>
                            <div className='absolute right-2 top-4 space-y-3'>
                                <p className='  bg-white text-[#7c7c7c] h-5 w-5 rounded-full flex items-center justify-center shadow-lg'><MdOutlineFavoriteBorder /></p>
                                <button className='h-5 w-5 rounded-full flex items-center justify-center bg-[#009B30] text-center  text-sm  text-[white]'><MdAdd /></button>
                            </div>
                        </div>
                        <div className='bg-white pt-2  border border-[#dddde2] border-t-0  px-2 rounded-b-xl pb-6'>
                            <div className='flex flex-row items-center justify-between'>
                                <p className='text-[18px] font-semibold'>
                                    Tomatoes
                                </p>
                                <div className='flex flex-row items-center text-[18px] font-semibold'>
                                    <MdOutlineEuro /> <p>4.99</p>
                                </div>
                            </div>


                            <p className='font-family-lato text-[16px] text-[#6f6f72]'>
                                7pcs
                            </p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Suggestions
