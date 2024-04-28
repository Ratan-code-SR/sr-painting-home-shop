
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {
    const [items, setItems] = useState([])
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    useEffect(() => {
        fetch(`https://sr-painting-server.vercel.app/items`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >


                {
                    items.slice(0, 5).map(item =>
                        <SwiperSlide key={item._id}>
                            <div key={item._id} className="hero h-[400px] z-0" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="hero-overlay "></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                        <Link to={`/viewDetails/${item._id}`}> <button className="btn btn-primary">View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }



            </Swiper>
        </>
    );
}
export default Banner;