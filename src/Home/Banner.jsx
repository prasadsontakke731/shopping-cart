/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { productData } from '../data'
import SelectedCategary from '../components/SelectedCategary'
import { Link } from 'react-router-dom'
import "./Banner.css"
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/language'
import BannerSkeleton from '../skeleton/BannerSkeleton'
// import { changeLanguage } from '../utils/congerSlice'

const title = (

    <h2>Search your one from <span>thousand</span> of Products</h2>
)

const desc = "We have the largest collection of products"

const Banner = () => {
    const [searchInput, setSearchInput] = useState("")
    const [filterProducts, setFilterProducts] = useState(productData)
    const [loadingState, setLoadingState] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoadingState(true)
        }, 1000);
    }, [])



    //search functionality
    const handleSearch = (e) => {
        const searchTerm = e.target.value
        setSearchInput(searchTerm)

        //filtering products based on the search
        const filtered = productData.filter((product) => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

        setFilterProducts(filtered)



    }
    return (
        <>
            {
                loadingState ? <div className='banner-section style-4'>
                    <div className="container">
                        <div className="banner-content">
                            {
                                title
                            }
                            <form >
                                <input type="text" name='search' id='search' placeholder="" value={searchInput} onChange={handleSearch} />
                                <button type='submit'><i className='icofont-search'></i></button>
                            </form>
                            <p>{desc}</p>
                            <ul className='lab-ul '>
                                {
                                    searchInput && filterProducts.map((product, i) => <li key={i}>
                                        <Link to={`/${product.id}`} className='textt'>{product.name}</Link>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>

                </div> : <BannerSkeleton />
            }
        </>
    )
}

export default Banner