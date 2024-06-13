/* eslint-disable no-unused-vars */
import React from 'react'
import "./CategoryShowCaseSkeleton.css"
const CategoryShowCaseSkeleton = () => {
    return (
        <>
            <div className='cataHead'>
                <div className='productSk'></div>
                <div className='filterSk'>
                    <div className='filterS'></div>
                    <div className='filterS'></div>
                    <div className='filterS'></div>
                    <div className='filterS'></div>
                    <div className='filterS'></div>
                </div>
            </div>
            <div className='cataSkeleton'>
                <div className="cata"></div>
                <div className="cata"></div>
                <div className="cata"></div>
                <div className="cata"></div>
                <div className="cata"></div>
                <div className="cata"></div>
                <div className="cata"></div>
                <div className="cata"></div>
            </div>
        </>
    )
}

export default CategoryShowCaseSkeleton