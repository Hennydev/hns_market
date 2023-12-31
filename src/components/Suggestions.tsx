import React from 'react'
import three from "../assets/three.png"
import chicken from "../assets/chicken.png"
import tomatoe from "../assets/tomatoe.png"
import { MdAdd, MdOutlineEuro, MdOutlineFavoriteBorder } from 'react-icons/md'
const Suggestions = () => {
    return (
        <div className=' mx-auto mb-5'>
            <div>
                <p className='md:py-4 py-3 md:text-[20px] text-[16px] font-semibold'>
                    Similar Suggestions
                </p>
                <div className='grid grid-cols-1  md:grid-cols-4   md:space-y-0 space-y-4  '>
                    <div className='flex flex-col md:min-w-[200px]  md:max-w-[250px] md:h-[400px]'>
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
                                <p className='md:text-[14px] text-[14px] font-semibold'>
                                    Apple 
                                </p>
                                <div className='flex flex-row items-center md:text-[14px] text-[14px] font-semibold'>
                                    <MdOutlineEuro /> <p>4.99</p>
                                </div>
                            </div>


                            <p className='font-family-lato md:text-[13px] text-[13px] text-[#6f6f72]'>
                                7pcs
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col md:min-w-[200px] md:max-w-[250px] md:h-[400px]'>
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
                                <p className='text-[14px] font-semibold'>
                                    Chicken
                                </p>
                                <div className='flex flex-row items-center text-[14px] font-semibold'>
                                    <MdOutlineEuro /> <p>4.99</p>
                                </div>
                            </div>


                            <p className='font-family-lato text-[13px] text-[#6f6f72]'>
                                7pcs
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col md:min-w-[200px] md:max-w-[250px] md:h-[400px]'>
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
                                <p className='text-[14px] font-semibold'>
                                    Tomatoes
                                </p>
                                <div className='flex flex-row items-center text-[14px] font-semibold'>
                                    <MdOutlineEuro /> <p>4.99</p>
                                </div>
                            </div>


                            <p className='font-family-lato text-[13px] text-[#6f6f72]'>
                                7pcs
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col md:min-w-[200px] md:max-w-[250px] md:h-[400px]'>
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
                                <p className='text-[14px] font-semibold'>
                                    Tomatoes
                                </p>
                                <div className='flex flex-row items-center text-[14px] font-semibold'>
                                    <MdOutlineEuro /> <p>4.99</p>
                                </div>
                            </div>


                            <p className='font-family-lato text-[13px] text-[#6f6f72]'>
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
