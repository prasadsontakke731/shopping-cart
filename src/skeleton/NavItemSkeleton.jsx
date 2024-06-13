/* eslint-disable no-unused-vars */
import React from 'react'
import "./NavItemSkeleton.css"
const NavItemSkeleton = () => {
    return (
        <div className='navSk'>
            <div className='navSkFirst'></div>
            <div className='navSkSecond'>
                <div className='navSkHome'></div>
                <div className='navSkShop'></div>
                <div className='navSkCart'></div>
                <div className='navSkLogout'></div>
            </div>
        </div>
    )
}

export default NavItemSkeleton