/* eslint-disable no-unused-vars */
import React from 'react'
import "./LoginSkeleton.css"
const LoginSkeleton = () => {
    return (
        <div className='loginSkeleton'>
            <div className="loginSkeletonWrapper">
                <div className='loginSkText'></div>
                <div className='loginSkInputOne'></div>
                <div className='loginSkInputTwo'></div>
                <div className='loginSkButton'></div>
                <div className='loginSkTextBottom'></div>
            </div>
        </div>
    )
}

export default LoginSkeleton