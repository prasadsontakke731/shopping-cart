/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = (props) => {
    const { Component } = props
    const navigate = useNavigate()


    useEffect(() => {
        let login = localStorage.getItem("login")
        if (!login) {
            navigate("/login")
        }
    }, [])
    return (
        <div>
            <Component />
        </div>
    )
}

export default ProtectedRoutes




















// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = ({ isAuthenticated }) => {
//     if (!isAuthenticated) {
//         return <Navigate to="/" replace />;
//     }

//     return <Outlet />;
// };

// export default ProtectedRoute;