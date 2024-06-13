/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import emailjs from "@emailjs/browser"

// eslint-disable-next-line no-unused-vars
const subTitle = "Save the Day"
const title = (
    <h2 className='title'>Join on a day long free workshop for <b>Advance <span>mastering</span></b> on sale. </h2>
)
const desc = "Limited Time Offer Hurry Up"
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    // 
    const serviceId = "service_6qntzjm"
    const templateId = "template_qmx5qm9"
    const publicKey = "xarT8mfGdwHtwJL5a"

    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: "Prasad Sontakke",
        message: message
    }

    //send email using emailjs
    useEffect(() => {
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email Sent Successfully", response);
                setName("")
                setEmail("")
                setMessage("")
            })
            .catch((e) => {
                console.log("Error while sendig mail", e);
            })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className='register-section padding-tb pb-0'>
            <div className="container">
                <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
                    <div className="col">
                        <div className="section-header">
                            <span className='subtitle '>{subTitle}</span>
                            {title}
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="section-wrapper">
                            <h4>Register Now</h4>
                            <form className='register-form' onSubmit={handleSubmit}>
                                <input type="text" name='name' placeholder='username' className='reg-input' value={name} onChange={(e) => setName(e.target.value)} />
                                <input type="email" name='email' placeholder='Email' className='reg-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <textarea cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                <button type='submit' className='lab-btn'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Register