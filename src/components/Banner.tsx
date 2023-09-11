import React from 'react'
import { IoMdMenu } from "react-icons/io"
const Banner = () => {
    return (
        <div className='w-full bg-[#CDEBD6] md:py-4 py-3 '>
            <div className='md:text-[14px] text-[13px] w-[90%] mx-auto flex items-center '>
                <div className='flex flex-row w-[15%] justify-start items-center space-x-0.5'>

                    <p>All Category</p>
                    <p><IoMdMenu /></p>
                </div>
                <div className='md:flex hidden justify-between w-[85%] flex-row '>
                <p className=''>
                Packaged Edible Goods
                </p>
                <p className=''>
                Slaughterhouse
                </p>
                <p className=''>
                Groceries
                </p>
                <p className=''>
                Clothing
                </p>
                <p className=''>
                Frozen Products
                </p>
                <p className=''>
                Others
                </p>
                </div>
               
            </div>

        </div>
    )
}

export default Banner
