/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Logo from "../../public/images/logo/logo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';
import NavItemSkeleton from '../skeleton/NavItemSkeleton';

const NavItem = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [socialToggle, setSocialToggle] = useState(false)
    const [headerFixed, setHeaderFixed] = useState(false)
    const [loadingState, setLoadingState] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoadingState(true)
        }, 2000);
    }, [])
    const dispatch = useDispatch()
    const items = useSelector(store => store.cart)
    console.log(items);
    const cartItems = items.cart
    console.log(cartItems);

    // const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    window.addEventListener(scroll, () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true)
        } else {
            setHeaderFixed(false)
        }


    })
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/login")
        }).catch((error) => {
            console.log(error);
        })
    }
    const handleChangeLang = (e) => {
        dispatch(changeLanguage())
    }
    return (
        <>
            {
                loadingState ? <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp " : ""}`}>
                    <ToastContainer />
                    {/* headre top start */}
                    <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>

                        <div className="container">
                            <div className="header-top-area">
                                <Link to="/signup" className='lab-btn me-3'>Create Account</Link>
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                    {/* header bottom.header-bottom */}
                    <div className="header-bottom">
                        <div className="container">
                            <div className="header-wrapper">
                                {/* logo */}
                                <div className='logo-search-acte'>
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={Logo} alt="logo " />
                                        </Link>
                                    </div>
                                </div>
                                <div className="menu-area">
                                    <div className="menu">
                                        <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                            <li><Link to="">Home</Link></li>
                                            <li><Link to="shop">Shop</Link></li>
                                            <li><Link to="/cart-page"><i className='icofont-cart fs-3 text-success'></i>{cartItems.length}</Link></li>
                                            {/* <li className='mt-2'>
                                        <select onChange={handleChangeLang} >
                                            {SUPPORTED_LANGUAGES.map((lang) => <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)}
                                        </select>
                                    </li> */}
                                        </ul>

                                    </div>


                                    <>
                                        <Link to="/"><button onClick={handleSignOut} className='fw-bold text-danger bg-white'>Sign-out</button></Link>
                                    </>




                                    {/* menu toggler */}
                                    <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    {/* social toggle */}
                                    <div className='ellepsis-bar d-md-none' onClick={() => setSocialToggle(!socialToggle)}>
                                        <i className='icofont-info-square'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header> : <NavItemSkeleton />
            }
        </>
    )
}

export default NavItem