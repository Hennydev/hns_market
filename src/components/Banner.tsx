import React from 'react'
import { IoMdMenu } from "react-icons/io"
const Banner = () => {
    return (
        <div className='w-full bg-[#CDEBD6] py-4 '>
            <div className='w-[90%] mx-auto flex items-center justify-between'>
                <div className='flex flex-row items-center space-x-1'>

                    <p>All Category</p>
                    <p><IoMdMenu /></p>
                </div>
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
    )
}

export default Banner
