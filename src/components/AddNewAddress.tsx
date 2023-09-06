import React from 'react'
import CountrySelector from './CountrySelector'
import { MdCheck } from 'react-icons/md'

const AddNewAddress = () => {
  return (
    <div>
    {/* <div className=" flex flex-row  space-x-1 items-center my-3 ">
        <p className="active:bg-[#009B30] bg-[#7c7c7c] flex  items-center h-4 w-4 text-xs text-center justify-center rounded-full text-[#fff]"><MdCheck /></p>
        <p className="text-sm">Choose delivery option</p>

    </div> */}
    <div className="flex md:flex-row flex-col items-center px-3 w-[100%] md:space-x-4 ">
        <div className="flex flex-col  w-[50%] ">
            <p className='text-sm font-semibold'>Add New Address</p>

            <label className="text-sm text-[#7c7c7c] mt-4  mb-2">First Name</label>
            <input className="placeholder:text-sm font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="John"></input>

            <label className="text-sm text-[#7c7c7c] mt-4 mb-2">Phone Number</label>

            <input className="placeholder:text-sm  mb-1 placeholder:font-semibold placeholder:text-[black] font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="(4930)49 30 18 500-9525"></input>

            <label className="text-sm text-[#7c7c7c] mt-4 mb-2">Email </label>
            <input className="placeholder:text-sm placeholder:font-semibold placeholder:text-[black]  font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="Johndoe@gmail.com"></input>

            <label className="text-sm text-[#7c7c7c]  mt-4">Select City</label>
            <div className=" border-t-0 border-r-0 border-l-0 border-b  w-[100%] px-0  border-[#7c7c7c] ">
                <CountrySelector />
            </div>

        </div>
        <div className="flex flex-col  w-[50%] mt-4">
            <label className="text-sm text-[#7c7c7c] mt-4 mb-2">Last Name</label>
            <input className="placeholder:text-sm font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="Doe"></input>

            <label className="text-sm text-[#7c7c7c] mt-4 mb-2">Additional Phone Number</label>

            <input className="placeholder:text-sm  mb-1 placeholder:font-semibold placeholder:text-[black] font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="(4930)49 30 18 500-9525"></input>

            <label className="text-sm text-[#7c7c7c] mt-4 mb-2">Delivery Address </label>
            <input className="placeholder:text-sm placeholder:font-semibold placeholder:text-[black]  font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="Mohrenstrasse 37 10117"></input>

            <label className="text-sm text-[#7c7c7c] mt-4">Select State</label>
            <div className=" border-t-0 border-r-0 border-l-0 border-b  w-[100%] px-0  border-[#7c7c7c] ">
                <CountrySelector />
            </div>
        </div>

    </div>


    <div className="flex flex-row items-center px-3 mt-4 mb-3">
        <button className="hover:bg-[#009B30] hover:text-white text-[#009B30] rounded-lg px-5 py-1.5 text-sm">Save</button>
        <button className="hover:bg-[#009B30] hover:text-white text-[#009B30] rounded-lg px-4 py-1.5 text-sm">Cancel</button>
    </div>
</div>
  )
}

export default AddNewAddress
