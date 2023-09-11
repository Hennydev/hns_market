import React, { useState } from 'react'
import { MdCreditCard } from 'react-icons/md'

const AddCard = ({setChangePaymentMethod, setShowPaymentButton, setNewCardDetails, setToggleNewCard}) => {
    const [user, setUser] = useState<string>("")
    const [cardNumber, setCardNumber] = useState<string>("")
    const [expiryDate, setExpiryDate] = useState<string>("")
    const [cvv, setCvv] = useState<string>("")
 const handleAddButton=()=>{
    setChangePaymentMethod(false)
    setShowPaymentButton(true)
    setNewCardDetails(true)
    setToggleNewCard(false)
   
    
    console.log(user, cardNumber,expiryDate,cvv, "formDetails")
 }

    return (
        <div className='px-3 py-2'>
            <div className='w-full mb-4 '> <label className="text-xs text-[#7c7c7c] mt-4 mb-2">Name On Card</label>
                <input className="placeholder:text-xs font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c]
                 border-b w-[100%] border-r-0 border-l-0" value={user} onChange={(e)=>setUser(e.target.value)}  placeholder="John Doe"></input></div>
            <div className="relative my-2">
                <div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none">
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="card">
                            <path id="Vector" d="M20.6251 0H10.8036H0.982161C0.439742 0 0 0.43988 0 0.98247V15.0175C0 15.5601 0.439742 16 0.982161 16H10.8036H20.6251C21.1676 16 21.6073 15.5601 21.6073 15.0175V0.98247C21.6073 0.43988 21.1676 0 20.6251 0Z" fill="#5286F9" />
                            <path id="Vector_2" d="M11.5549 5.20371C11.7707 5.45109 11.9587 5.72338 12.1134 6.01602C12.4269 6.60876 12.6053 7.28356 12.6053 7.99953C12.6053 8.7155 12.4269 9.39022 12.1134 9.98305C11.9587 10.2757 11.7707 10.5479 11.5549 10.7953C11.3327 11.0499 11.0809 11.2777 10.8047 11.4736C11.4991 11.966 12.346 12.2568 13.2601 12.2568C15.6068 12.2568 17.5161 10.347 17.5161 7.99953C17.5161 5.65208 15.6068 3.74219 13.2601 3.74219C12.346 3.74219 11.4991 4.03288 10.8047 4.5254C11.0809 4.72137 11.3326 4.9492 11.5549 5.20371Z" fill="#FFB655" />
                            <path id="Vector_3" d="M12.1139 6.01593C11.9591 5.72321 11.7711 5.45101 11.5553 5.20363C11.333 4.94903 11.0813 4.72132 10.8051 4.5254C10.1108 4.03288 9.26376 3.74219 8.34971 3.74219C6.00296 3.74219 4.09375 5.65204 4.09375 7.99949C4.09375 10.3469 6.003 12.2568 8.34971 12.2568C9.26376 12.2568 10.1108 11.9661 10.8051 11.4736C11.0813 11.2777 11.333 11.0498 11.5553 10.7953C11.7711 10.5479 11.9591 10.2756 12.1139 9.98309C12.4273 9.39026 12.6057 8.71545 12.6057 7.99957C12.6057 7.28344 12.4273 6.60867 12.1139 6.01593Z" fill="#D8143A" />
                            <path id="Vector_4" d="M8.34827 12.2574C6.00151 12.2574 4.0923 10.3476 4.0923 8.00013C4.0923 5.65268 6.00155 3.74283 8.34827 3.74283C9.26231 3.74283 10.1093 4.03352 10.8036 4.52604V0H0.982161C0.439742 0 0 0.43988 0 0.98247V15.0175C0 15.5601 0.439742 16 0.982161 16H10.8036V11.4741C10.1093 11.9666 9.26231 12.2574 8.34827 12.2574Z" fill="#3D6DEB" />
                        </g>
                    </svg>

                </div>
                <input value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)}  type="text" id="input-group-1" className=" border-b border-b-[#7c7c7c] w-full focus:ring-0 outline-none   text-gray-900 text-xs   focus:border-0 block   p-[6px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 pl-7" placeholder="Card Number" />
            </div>
            <div className='w-full flex flex-row justify-between space-x-3 items-center mb-4'>
                <div className='w-[50%]'> <label className="text-xs text-[#7c7c7c] mt-4 mb-2">Expiry Date</label>
                    <input value={expiryDate} onChange={(e)=>setExpiryDate(e.target.value)}  className="placeholder:text-xs font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c]
                 border-b w-[100%] border-r-0 border-l-0" placeholder="12/34/25"></input></div>
                <div className='w-[50%] '> <label className="text-xs text-[#7c7c7c] mt-4 mb-2">CVV</label>
                    <input value={cvv} onChange={(e)=>setCvv(e.target.value)} className="placeholder:text-xs font-semibold border-t-0 focus:ring-0 outline-none border-[#7c7c7c]
                 border-b w-[100%] border-r-0 border-l-0" placeholder="000"></input></div>
            </div>
            <div>
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <div onClick={handleAddButton} className='flex flex-row items-center'>
                    <input
                        className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1rem] w-[1rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-black checked:bg-black checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="checkboxChecked"
                        defaultChecked
                    />
                    <label
                        className="inline-block text-sm pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="checkboxChecked">
                        Save
                    </label>
                    </div>
                    
                </div>

            </div>
            <button onClick={handleAddButton} className='py-1.5 text-sm my-3 flex items-center w-[50%] justify-center rounded-md bg-[#009B30] text-[#fff] hover:bg-[#dfdede] hover:text-[#3c3c43] font-semibold'>Add Card</button>

        </div>
    )
}

export default AddCard
