/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, decreaseItemQuantity, increaseItemQuantity } from '../utils/cartSlice'

const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in natus ex nam repellat dolores provident illo ."
const ProductDisplay = ({ item }) => {
    const dispatch = useDispatch()
    const items = useSelector(store => store.cart)
    console.log(items);

    const { name, id, price, seller, ratingsCount, quantity, img } = item


    console.log(item);



    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <span>{ratingsCount} review</span>
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>
            </div>
            {/* cart component */}
            <div>
                <form onSubmit={handleSubmit} >

                    <button type='submit' className='lab-btn' onClick={() => dispatch(addToCart(item))}><span>Add To Cart</span></button>
                    <Link to="cart-page" className='lab-btn bg-primary'><span>Check Out</span></Link>

                </form>
            </div>
        </div>
    )
}

export default ProductDisplay