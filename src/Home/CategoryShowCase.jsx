/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import icon1 from "../../public/images/shape-img/icon/01.png"

import img1 from "../../public/images/categoryTab/01.jpg"
import img2 from "../../public/images/categoryTab/02.jpg"
import img3 from "../../public/images/categoryTab/03.jpg"
import img4 from "../../public/images/categoryTab/04.jpg"
import img5 from "../../public/images/categoryTab/05.jpg"
import img6 from "../../public/images/categoryTab/06.jpg"
import img7 from "../../public/images/categoryTab/07.jpg"
import img8 from "../../public/images/categoryTab/08.jpg"

import auther1 from "../../public/images/course/author/01.jpg"
import auther2 from "../../public/images/course/author/01.jpg"
import auther3 from "../../public/images/course/author/01.jpg"
import auther4 from "../../public/images/course/author/01.jpg"
import auther5 from "../../public/images/course/author/01.jpg"
import auther6 from "../../public/images/course/author/01.jpg"
import auther7 from "../../public/images/course/author/01.jpg"
import auther8 from "../../public/images/course/author/01.jpg"


import { Link } from 'react-router-dom';
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import CategoryShowCaseSkeleton from '../skeleton/CategoryShowCaseSkeleton'

const title = "Our Products";


const ProductData = [
    {
        imgUrl: img1,
        cate: 'Shoes',
        title: 'Nike Premier X',
        author: auther1,
        brand: 'Nike',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: img2,
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: auther2,
        brand: 'D&J Bags',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: img3,
        cate: 'Phones',
        title: 'iPhone 12',
        author: auther3,
        brand: 'Apple',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: img4,
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: auther4,
        brand: 'Gucci',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: img5,
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: auther5,
        brand: 'Nike',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: img6,
        cate: 'Beauty',
        title: 'COSRX Snail Mucin',
        author: auther6,
        brand: 'Zaara',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: img7,
        cate: 'Bags',
        title: 'Look Less Chanel Bag ',
        author: auther7,
        brand: 'Gucci',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: img8,
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: auther8,
        brand: 'Bata',
        price: '$199.00',
        id: 8,
    },
]
const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData)
    const [loadingState, setLoadingState] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoadingState(true)
        }, 1000);
    }, [])
    const filterItem = (catItem) => {
        const updateItems = ProductData.filter((curElem) => {
            return curElem.cate === catItem
        })

        setItems(updateItems)

    }

    if (filterItem.length === 0) {
        return <Loader />
    }

    return (
        <>
            {
                loadingState ? <div className='course-section style-3 padding-tb'>
                    {/* shapes */}
                    <div className='course-shape one'>
                        <img src={icon1} alt="" />
                    </div>
                    <div className='course-shape two'>
                        <img src={icon1} alt="" />
                    </div>
                    {/* main section */}
                    <div className="container">
                        {/* section header */}
                        <div className="section-header">
                            <h2 className='title'>{title}</h2>
                            <div className='course-filter-group'>
                                <ul className='lab-ul'>
                                    <li onClick={() => setItems(ProductData)}>All</li>
                                    <li onClick={() => filterItem("Shoes")}>Shoes</li>
                                    <li onClick={() => filterItem("Bags")}>Bags</li>
                                    <li onClick={() => filterItem("Phones")}>Phones</li>
                                    <li onClick={() => filterItem("Beauty")}>Beauty</li>
                                </ul>
                            </div>
                        </div>
                        {/* section body */}
                        <div className="section-wrapper">
                            <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3  row-cols-md-2 row-cols-1 course-filter'>
                                {
                                    items.map((product) => <div key={product.id} className='col'>
                                        <div className="course-item style-4">
                                            <div className="course-inner">
                                                <div className="course-thumb">
                                                    <img src={product.imgUrl} alt="" />
                                                    <div className="course-category">
                                                        <div className="course-cate">
                                                            <a href="">{product.cate}</a>
                                                        </div>
                                                        <div className="course-reiew">
                                                            <Rating />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* content */}
                                                <div className="course-content">
                                                    <Link to={`shop`}><h5>{product.title}</h5></Link>
                                                    <div className="course-footer">
                                                        <div className="course-author">

                                                            <Link to="/browse" className='ca-name'>{product.brand}</Link>
                                                        </div>
                                                        <div className="course-price">
                                                            {product.price}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div> : <CategoryShowCaseSkeleton />
            }
        </>
    )
}

export default CategoryShowCase