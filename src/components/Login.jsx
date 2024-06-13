/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { checkValidData } from '../utils/validate';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import LoginSkeleton from '../skeleton/LoginSkeleton';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [loadingState, setLoadingState] = useState(false)


    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handleButtonClick = () => {
        //validate the form data
        // console.log(email.current.value, password.current.value);
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)

        if (message) return;
        // sign in sign up logic

        if (!isSignInForm) {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/")
                    localStorage.setItem("login")
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName
                            })
                        )

                    }).catch((error) => {
                        setErrorMessage(error.message)
                    })

                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    setErrorMessage(errorCode + "-" + errorMessage)
                })
        } else {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                    navigate("/")
                    localStorage.setItem("login", JSON.parse(JSON.stringify(user)))

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage)
                });
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setLoadingState(true)
        }, 1000);
    }, [])
    return (
        <>
            {
                loadingState ? <div>

                    <div className="login-section padding-tb section-bg">
                        <div className="container">
                            <div className="account-wrapper">
                                <h3 className="title">{isSignInForm ? "Sign In" : "Sign Up"}</h3>

                                <form className="account-form" onSubmit={(e) => e.preventDefault()} >
                                    {
                                        !isSignInForm && <div className="form-group">
                                            <input
                                                type="name"
                                                name="name"
                                                placeholder="Email Your Name *"
                                                required
                                            />
                                        </div>
                                    }
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address *"
                                            required
                                            ref={email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password *"
                                            ref={password}
                                        />
                                    </div>
                                    {/* showing error message */}
                                    <div>
                                        {errorMessage && (
                                            <div className="error-message text-danger">
                                                {errorMessage}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group text-center">
                                        <button className="d-block lab-btn">
                                            <span onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</span>
                                        </button>
                                    </div>
                                </form>
                                <div className="account-bottom">
                                    <span className="d-block cate pt-10 pointer-event" onClick={toggleSignInForm}>
                                        {

                                            isSignInForm ? "Don’t Have any Account? sign In Now" : "Already Registered? sign-in now "
                                        }
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <LoginSkeleton />
            }
        </>
    )
}

export default Login