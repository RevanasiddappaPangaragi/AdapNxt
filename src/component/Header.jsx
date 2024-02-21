import React from 'react'
import './Header.css'
import { IoMdNotificationsOutline, } from "react-icons/io";
import { IoMoonOutline , IoSettingsOutline } from "react-icons/io5";
import { RiAdvertisementLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className='header'>
        <img src='jj.png' />
        {/* <div className='header1'>
        <img src='jj.png' /> */}
        <div className='icons' textLength={20} onClick={()=>{alert('This feature is not yet available')}}>
        <IoMdNotificationsOutline className='icons' />
        <IoMoonOutline/>
        <RiAdvertisementLine />
        <IoSettingsOutline />
        </div>
        {/* </div> */}
        
        </div>
       
  )
}

export default Header