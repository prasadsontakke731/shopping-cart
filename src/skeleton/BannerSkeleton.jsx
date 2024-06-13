/* eslint-disable no-unused-vars */
import React from 'react'
import "./BannerSkeleton.css"
const BannerSkeleton = () => {
    return (
        <div className='bannerSk'>
            <div className='bannerSkText'>
                <div className='bannerSkOne'></div>
                <div className='bannerSkTwo'></div>
                <div className='bannerSkSearchbar'></div>
                <div className='bannerSkSearchText'></div>
            </div>
        </div>
    )
}

export default BannerSkeleton