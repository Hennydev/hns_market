import React from 'react'
import CountrySelector from './CountrySelector'

const Form = () => {
  return (
    <div className="flex md:flex-row flex-col w-[100%] md:space-x-3 ">
    <div className="flex flex-col my-1 w-[50%] ">
      <label className="text-sm text-[#7c7c7c] mt-4 mb-2">First Name</label>
      <input className="placeholder:text-sm font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="John"></input>

      <label className="text-sm text-[#7c7c7c] mt-4 mb-2">Phone Number</label>

      <input className="placeholder:text-sm  mb-1 placeholder:font-semibold placeholder:text-[black] font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="(4930)49 30 18 500-9525"></input>

      <label className="text-sm text-[#7c7c7c] mt-4 mb-2">Email </label>
      <input className="placeholder:text-sm placeholder:font-semibold placeholder:text-[black]  font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c] border-b w-[100%] border-r-0 border-l-0" placeholder="Johndoe@gmail.com"></input>

      <label className="text-sm text-[#7c7c7c] mt-4">Select City</label>
      <div className=" border-t-0 border-r-0 border-l-0 border-b  w-[100%] px-0  border-[#7c7c7c] ">
        <CountrySelector />
      </div>

    </div>
    <div className="flex flex-col my-1 w-[50%] ">
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
  )
}

export default Form
