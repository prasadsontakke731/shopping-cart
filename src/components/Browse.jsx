// import React from 'react'

import { Outlet } from "react-router-dom"
import NavItem from "./NavItem"
import Footer from "./Footer"

const Browse = () => {
    return (
        <div>
            <NavItem />
            <Outlet />
            <Footer />



        </div>
    )
}

export default Browse