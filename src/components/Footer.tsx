import React from 'react'
import logo from "../assets/logo.png"
import { BiLogoFacebook } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'
import { VscTwitter } from 'react-icons/vsc'
const Footer = () => {
    return (
        <div className='w-[90%] mx-auto md:mt-24'>
            <div className=' mb-5 md:py-12 flex md:flex-row flex-col md:justify-between  md:items-start items-center'>
                <div className='flex flex-col space-y-2'>
                    <img className='w-16 h-7' src={logo} alt={"Product"} />
                    <div className='flex flex-row space-x-2'>
                        <p className='text-[#009B30]'><BiLogoFacebook /></p>
                        <p className='text-[#009B30]'><AiFillInstagram /></p>
                        <p className='text-[#009B30]'><VscTwitter /></p>
                    </div>
                </div>
                <div className='flex flex-col md:my-0 my-2 md:items-start items-center md:justify-start justify-center space-y-2'>
                    <p>Learn More</p>
                    <div className="opacity-80  text-green-950 text-sm leading-loose flex flex-col md:items-start items-center space-y-2">
                        <p>About Us</p><p>Jobs</p><p>Privacy Policy</p><p>Contact Us</p></div>
                </div>
                <div className='flex flex-col space-y-2 md:items-start items-center'>
                    <p>Shop</p>
                    <div className="opacity-80 text-green-950 text-sm leading-loose flex md:items-start items-center flex-col space-y-2">
                        <p>Delivery</p><p>Track My Order</p></div>
                </div>
                <div className='flex flex-col space-y-2 md:items-start items-center'>
                    <p>Help</p>
                    <div className="opacity-80 text-green-950 text-sm leading-loose flex flex-col md:items-start items-center space-y-2">
                        <p>Reach Us</p><p>Privacy Policy</p></div>
                </div>
            </div>
            <div className=" mx-auto h-0.5 mt-10 bg-[#979797] border border-neutral-400" />
            <div className="opacity-60 text-center mt-2 mb-10 text-slate-900 text-xs md:text-sm">© 2023 HNS Markt  | All Rights Reserved</div>
        </div>

    )
}

export default Footer
