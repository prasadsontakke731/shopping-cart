/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import Home from '../Home/Home'
import Shop from '../shop/Shop'
import CartPage from '../shop/CartPage'
import SingleProduct from '../shop/SingleProduct'
import ProtectedRoutes from './ProtectedRoutes'

const Body = () => {
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const appRouter = createBrowserRouter([
        {
            path: "/login",
            element: <ProtectedRoutes Component={Login} />
        },
        {
            path: "/",
            element: <ProtectedRoutes Component={Browse} />,
            children: [
                {
                    path: "/",
                    element: <ProtectedRoutes Component={Home} />
                },
                {
                    path: "shop",
                    element: <ProtectedRoutes Component={Shop} />,

                },
                {
                    path: "/:id",
                    element: <SingleProduct />
                },
                {
                    path: "cart-page",
                    element: <CartPage />
                },
            ]
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { displayName, email, uid } = user
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                // navigate("/browse")

            } else {
                dispatch(removeUser())
                // navigate("/")
            }
        })
    }, [])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body