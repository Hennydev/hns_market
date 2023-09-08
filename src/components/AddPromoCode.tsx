import React, { useState } from 'react'

const AddPromoCode = ({setChangePaymentMethod, promoCode, setPromoCode, setPromoCodeInfo}) => {
  
  const handleApply= ()=>{
    setPromoCodeInfo(promoCode)
    setChangePaymentMethod(false)
    setPromoCode("")
  }
  return (
    <div className='px-3 py-2'>
    <div className='w-full mb-4'> <label className="text-xs text-[#7c7c7c] mt-4 mb-2">Enter Promo Code</label>
        <input type='text' value={promoCode} onChange={(e)=>setPromoCode(e.target.value)} className="placeholder:text-xs font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c]
         border-b w-[100%] border-r-0 border-l-0" placeholder="COFEEEE222"></input></div>
       <button onClick={handleApply}  className='py-1.5 text-sm my-3 flex items-center w-[50%] justify-center rounded-md hover:bg-[#009B30] hover:text-[#fff] bg-[#dfdede] text-[#3c3c43] font-semibold'>Apply</button>
    </div>
  )
}

export default AddPromoCode
