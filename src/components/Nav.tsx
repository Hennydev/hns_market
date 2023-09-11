import React, { useState } from 'react'
import logo from "../assets/logo.png"
import user from "../assets/user.png"
import uk from "../assets/uk.png"
import { MdClose, MdHelpOutline, MdMenu, MdOutlineFavoriteBorder, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { LiaShoppingCartSolid } from "react-icons/lia"
import { Link } from 'react-router-dom'
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [closeMenu, setCloseMenu] = useState(false)
  const handleMenu = () => {
    setIsMenuOpen(true)

  }
  return (
    <div>
      <div className='w-[90%] md:py-7 py-4 mx-auto flex flex-row items-center justify-between'>
        <div className=' '>
          <img src={logo} alt='logo' />

        </div>
        <div className=' md:block hidden'>


          <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full py-1 px-24 pl-10 text-sm text-gray-900  rounded-xl bg-[#C4C4C433] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Store or Product..." required />

          </div>

        </div>
        {isMenuOpen ? <div onClick={()=>setIsMenuOpen(false)} className='md:hidden flex '><MdClose />

        </div> : <div onClick={handleMenu} className='md:hidden flex text-[16px]'><p className='text-[16px]'><MdMenu /></p></div>
        }
         <div className='hidden md:flex md:flex-row flex-col items-center md:space-x-4 md:space-y-0  space-y-3 justify-center md:justify-evenly'>
          <Link to={"/help"}>
            <div className='flex flex-row items-center space-x-1'>
              <p><MdHelpOutline /></p>
              <p>Help</p>
              <p><MdOutlineKeyboardArrowDown /></p>
            </div>
          </Link>

          <Link to={"/Cart"}>
            <div className='flex flex-row items-center space-x-1'>
              <p><LiaShoppingCartSolid /></p>
              <p>Cart</p>

            </div>
          </Link>


          <Link to="/Favourites">
            <div className='flex flex-row items-center space-x-1'>
              <p><MdOutlineFavoriteBorder /></p>
              <p>Favourite</p>

            </div>
          </Link>

          <Link to={"/Account"}>
            <div className='flex flex-row items-center space-x-1'>
              <img src={user} alt='logo' />
              <p>Account</p>
              <p><MdOutlineKeyboardArrowDown /></p>
            </div>
          </Link>


          <Link to="/Language">
            <div className='flex flex-row items-center space-x-1'>
              <img src={uk} alt='logo' />
              <p>English</p>
              <p><MdOutlineKeyboardArrowDown /></p>
            </div>

          </Link>
        </div>

      </div>

      {
        isMenuOpen &&  <div className='  '>
        <div className='md:hidden flex md:flex-row flex-col items-center md:space-x-4 md:space-y-0  space-y-3 justify-center md:justify-evenly'>
          <Link to={"/help"}>
            <div className='flex flex-row items-center space-x-1'>
              <p><MdHelpOutline /></p>
              <p>Help</p>
              <p><MdOutlineKeyboardArrowDown /></p>
            </div>
          </Link>

          <Link to={"/Cart"}>
            <div className='flex flex-row items-center space-x-1'>
              <p><LiaShoppingCartSolid /></p>
              <p>Cart</p>

            </div>
          </Link>


          <Link to="/Favourites">
            <div className='flex flex-row items-center space-x-1'>
              <p><MdOutlineFavoriteBorder /></p>
              <p>Favourite</p>

            </div>
          </Link>

          <Link to={"/Account"}>
            <div className='flex flex-row items-center space-x-1'>
              <img src={user} alt='logo' />
              <p>Account</p>
              <p><MdOutlineKeyboardArrowDown /></p>
            </div>
          </Link>


          <Link to="/Language">
            <div className='flex flex-row items-center space-x-1'>
              <img src={uk} alt='logo' />
              <p>English</p>
              <p><MdOutlineKeyboardArrowDown /></p>
            </div>

          </Link>
        </div>
      </div>
      }
     
    </div>
  )
}

export default Nav
