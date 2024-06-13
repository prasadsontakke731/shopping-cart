/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import One from "../../public/images/category/01.jpg"
import Two from "../../public/images/category/02.jpg"
import Three from "../../public/images/category/03.jpg"
import Four from "../../public/images/category/04.jpg"
import Five from "../../public/images/category/05.jpg"
import Six from "../../public/images/category/06.jpg"
import { Link } from 'react-router-dom'
import HomeCategorySkeleton from '../skeleton/HomeCategorySkeleton'
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl: One,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: Two,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: Three,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: Four,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: Five,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: Six,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    },
]
const HomeCategory = () => {

    const [loadingState, setLoadingState] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoadingState(true)
        }, 1000);
    }, [])
    return (
        <>
            {
                loadingState ? <div className="category-section style-4 padding-tb">
                    <div className="container">
                        <div className="section-header text-center">
                            <span className="subtitle">{subTitle}</span>
                            <h2 className="title">{title}</h2>
                        </div>
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                                {categoryList.map((val, i) => (
                                    <div className="col" key={i}>
                                        <Link to="/shop" className="category-item">
                                            <div className="category-inner">
                                                <div className="category-thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="category-content">
                                                    <div className="cate-icon">
                                                        <i className={`${val.iconName}`}></i>
                                                    </div>
                                                    <Link to="/shop"><h6>{val.title}</h6></Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-5">
                                <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
                            </div>
                        </div>
                    </div>
                </div> : <HomeCategorySkeleton />
            }
        </>
    )
}

export default HomeCategory