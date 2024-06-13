/* eslint-disable no-unused-vars */
import React from 'react'
import { BallTriangle } from "react-loader-spinner"
const Loader = () => {
    return (
        <div className='loader'>
            <div className='loader-in'>
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}

                />
            </div>
        </div>
    )
}

export default Loader