/* eslint-disable no-unused-vars */
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import one from "../../public/images/sponsor/01.png"
import two from "../../public/images/sponsor/02.png"
import three from "../../public/images/sponsor/03.png"
import four from "../../public/images/sponsor/04.png"
import five from "../../public/images/sponsor/05.png"
import six from "../../public/images/sponsor/06.png"

import { Autoplay } from 'swiper/modules';
const sponsorList = [
    {
        // imgUrl: '/src/Assets/images/sponsor/01.png',
        imgUrl: one

    },
    {
        imgUrl: two,

    },
    {
        imgUrl: three,

    },
    {
        imgUrl: four,

    },
    {
        imgUrl: five,

    },
    {
        imgUrl: six,

    },
]

const Sponsor = () => {
    return (
        <div className='sponsor-section section-bg'>
            <div className="container">
                <div className="section-wrapper">
                    <div className="sponsor-slider">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            loop={'true'}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            breakpoints={{
                                0: {
                                    width: 0,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 3,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 5.5,
                                },
                            }}
                        >
                            {sponsorList.map((val, i) => (
                                <SwiperSlide key={i}>
                                    <div className="sponsor-iten">
                                        <div className="sponsor-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sponsor