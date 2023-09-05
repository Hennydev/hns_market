import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'

const PageLink = () => {
  return (
    <div className='w-[90%] mx-auto my-4'>
        <div className=' flex flex-row items-center space-x-1'>
          <Link to={"/"}> <p>Home</p></Link> 
            <p><MdArrowForwardIos/></p>
           <Link to={"/Grocery"}><p>Gorcery</p></Link> 
            <p><MdArrowForwardIos/></p>
           <Link to={"/ProductDetails"}> <p className='text-[#3C3C43]'>Product Details</p></Link>
            <p className='text-[#3C3C43]'><MdArrowForwardIos/></p>
            <Link to={"/Cart"}> <p className='text-[#3C3C43]'>Cart</p></Link>
            <p className='text-[#3C3C43]'><MdArrowForwardIos/></p>
            
        </div>
      
    </div>
  )
}

export default PageLink
